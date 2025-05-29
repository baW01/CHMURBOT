// content.js

function normalizeText(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Remove punctuation
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

function levenshteinDistance(s1, s2) {
  const track = Array(s2.length + 1).fill(null).map(() =>
    Array(s1.length + 1).fill(null));
  for (let i = 0; i <= s1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= s2.length; j += 1) {
    track[j][0] = j;
  }
  for (let j = 1; j <= s2.length; j += 1) {
    for (let i = 1; i <= s1.length; i += 1) {
      const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator, // substitution
      );
    }
  }
  return track[s2.length][s1.length];
}

function calculateSimilarity(s1, s2) {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  if (longer.length === 0) {
    return 1.0;
  }
  return (longer.length - levenshteinDistance(longer, shorter)) / parseFloat(longer.length);
}

function markCorrectAnswers() {
  console.log("Form Helper: Starting to process questions...");
  const questionItems = document.querySelectorAll('div[data-automation-id="questionItem"]');
  if (questionItems.length === 0) {
    console.log("Form Helper: No question items found with 'data-automation-id=\"questionItem\"'.");
    return;
  }

  questionItems.forEach((questionElement, index) => {
    // Extract question text from the form
    // This selector targets the span containing the question text, like "Spadek to:"
    // It tries to find a text-format-content span within the heading that is not the ordinal number.
    const questionTitleElement = questionElement.querySelector('span[data-automation-id="questionTitle"] span[role="heading"]');
    let pageQuestionText = '';
    if (questionTitleElement) {
        // Attempt to find the specific span for question text.
        // This looks for a direct child `span.text-format-content` that does NOT have `data-automation-id="questionOrdinal"`
        const potentialQuestionSpans = questionTitleElement.querySelectorAll(':scope > span.text-format-content');
        potentialQuestionSpans.forEach(span => {
            if (span.getAttribute('data-automation-id') !== 'questionOrdinal') {
                 // And also not part of the points, though points are usually in a div
                if (!span.closest('div[class*="-a-"]')) { // Basic check to avoid point span if it's also a span.text-format-content
                    pageQuestionText += span.textContent + ' ';
                }
            }
        });
        pageQuestionText = pageQuestionText.trim();

        // Fallback if specific span not found, try getting all text content and cleaning.
        if (!pageQuestionText) {
             let rawText = questionTitleElement.textContent || "";
             // Try to remove ordinal and points if they are part of the raw text
             const ordinalElement = questionTitleElement.querySelector('span[data-automation-id="questionOrdinal"]');
             if (ordinalElement) rawText = rawText.replace(ordinalElement.textContent, '');
             const pointsElement = questionTitleElement.querySelector('span[data-automation-id="questionTitlePoint"]');
             if (pointsElement) rawText = rawText.replace(pointsElement.textContent, '');
             pageQuestionText = rawText;
        }

    } else {
      console.warn(`Form Helper: Could not find question title for item ${index + 1}`);
      return; // Skip this question item
    }

    const normalizedPageQuestion = normalizeText(pageQuestionText);
    if (!normalizedPageQuestion) {
        console.warn(`Form Helper: Normalized question text is empty for item ${index + 1}: "${pageQuestionText}"`);
        return;
    }

    // Find matching question in the database
    let bestMatch = null;
    let highestSimilarity = 0;

    questionDatabase.forEach(dbEntry => {
      const normalizedDbQuestion = normalizeText(dbEntry.questionText);
      const similarity = calculateSimilarity(normalizedPageQuestion, normalizedDbQuestion);
      if (similarity > highestSimilarity) {
        highestSimilarity = similarity;
        bestMatch = dbEntry;
      }
    });

    if (bestMatch && highestSimilarity >= 0.90) {
      console.log(`Form Helper: Found match for "${normalizedPageQuestion}" (Similarity: ${highestSimilarity.toFixed(2)}) with DB question ID ${bestMatch.id}`);
      const correctDbAnswersNormalized = bestMatch.correctAnswersText.map(ans => normalizeText(ans));

      // Find answer options on the page for this question
      const choiceItems = questionElement.querySelectorAll('div[data-automation-id="choiceItem"]');
      choiceItems.forEach(choiceElement => {
        // The text of the answer option is in a span with class 'text-format-content' and often an aria-label
        const optionLabelElement = choiceElement.querySelector('.text-format-content'); // More specific: 'span.text-format-content.css-79' based on your HTML but css-79 might change
        
        if (optionLabelElement) {
          const pageOptionText = optionLabelElement.textContent;
          const normalizedPageOption = normalizeText(pageOptionText);

          if (correctDbAnswersNormalized.includes(normalizedPageOption)) {
            if (!pageOptionText.trim().endsWith(' .')) {
              optionLabelElement.textContent += '.';
              console.log(`Form Helper: Marked correct answer: "${pageOptionText}"`);
            }
          }
        } else {
            console.warn("Form Helper: Could not find option label element within choice item.");
        }
      });
    } else {
      console.log(`Form Helper: No sufficiently strong match found for page question (best sim: ${highestSimilarity.toFixed(2)}): "${normalizedPageQuestion}"`);
    }
  });
}

// Run the function after a short delay to ensure the form is loaded.
// For dynamically loaded questions, a MutationObserver would be more robust.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(markCorrectAnswers, 2000); // Adjust delay as needed
    });
} else {
    setTimeout(markCorrectAnswers, 2000); // Adjust delay as needed
}

// More robust: Use MutationObserver to detect when questions appear
const observer = new MutationObserver((mutationsList, observerInstance) => {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const questionItemsAdded = Array.from(mutation.addedNodes).some(node =>
                node.nodeType === Node.ELEMENT_NODE && node.matches('div[data-automation-id="questionItem"]')
            );
            if (questionItemsAdded || document.querySelector('div[data-automation-id="questionItem"]')) {
                 console.log("Form Helper: Detected question items or changes, re-processing.");
                 setTimeout(markCorrectAnswers, 500); // Short delay after detection
                 // observerInstance.disconnect(); // Optional: disconnect after first run if form loads all at once
                 return; // Process once per batch of mutations
            }
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });