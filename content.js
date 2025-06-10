// content.js

const processedQuestions = new WeakSet();

// --- Funkcje pomocnicze (bez zmian) ---
function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}
let lastApiCall = 0;
async function throttledCallChatGPT(questionText, optionsArray, questionType, apiKey) {
  const now = Date.now();
  const since = now - lastApiCall;
  const minInterval = 2000; // ms
  if (since < minInterval) {
    await sleep(minInterval - since);
  }
  lastApiCall = Date.now();
  return callChatGPT(questionText, optionsArray, questionType, apiKey);
}

function normalizeText(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, ' ')
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
        track[j][i - 1] + 1,
        track[j - 1][i] + 1,
        track[j - 1][i - 1] + indicator,
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

async function getApiKey() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['openaiApiKey'], (result) => {
      resolve(result.openaiApiKey);
    });
  });
}

// --- Funkcja callChatGPT (bez zmian) ---
async function callChatGPT(questionText, optionsArray, questionType, apiKey) {
  console.log("Form Helper: Calling ChatGPT API for question:", questionText.substring(0, 50) + "...");
  const modelToUse = "gpt-4.1"; // Możesz zmienić na nowszy model np. gpt-4o, gpt-4-turbo

  let optionsString = "";
  optionsArray.forEach(opt => {
    optionsString += `${opt.letter}: ${opt.text}\n`;
  });

  const system_prompt_content = `Jesteś wysoce precyzyjnym asystentem AI specjalizującym się w odpowiadaniu na pytania testowe z wielokrotnym lub jednokrotnym wyborem.
Twoim zadaniem jest zidentyfikowanie poprawnej litery (lub liter) odpowiedzi z podanej listy opcji.
Zawsze odpowiadaj TYLKO używając liter opcji (np. A, B, C, D).
Nie dodawaj żadnych innych słów, wyjaśnień, zdań wprowadzających, numeracji, punktorów ani znaków interpunkcyjnych poza wymaganymi literami i, w przypadku wielu odpowiedzi, przecinkami oddzielającymi litery.
Twoja odpowiedź MUSI być wyłącznie ciągiem liter reprezentujących wybrane opcje.

Przykłady oczekiwanego formatu odpowiedzi:
- Jeśli poprawna jest opcja A: A
- Jeśli poprawne są opcje B i D: B,D (bez spacji po przecinku)
- Jeśli poprawna jest opcja C: C`;

  let user_prompt_instruction = "";
  if (questionType === 'single') {
    user_prompt_instruction = `To jest pytanie JEDNOKROTNEGO WYBORU. Przeanalizuj poniższe pytanie i podane opcje.
Zidentyfikuj JEDNĄ poprawną opcję i zwróć TYLKO literę tej opcji. Na przykład, jeśli opcja B jest poprawna, Twoja odpowiedź musi brzmieć DOKŁADNIE: B`;
  } else if (questionType === 'multiple') {
    user_prompt_instruction = `To jest pytanie WIELOKROTNEGO WYBORU. Przeanalizuj poniższe pytanie i podane opcje.
Może być więcej niż jedna poprawna odpowiedź. Zidentyfikuj WSZYSTKIE poprawne opcje.
Zwróć TYLKO litery tych opcji, oddzielone przecinkami, BEZ SPACJI PO PRZECINKU. Na przykład, jeśli opcje A i C są poprawne, Twoja odpowiedź musi brzmieć DOKŁADNIE: A,C`;
  } else {
    user_prompt_instruction = `Przeanalizuj poniższe pytanie i podane opcje.
Zwróć TYLKO literę lub litery poprawnych odpowiedzi. Jeśli jest jedna poprawna odpowiedź, zwróć tylko jej literę (np. B). Jeśli jest więcej niż jedna, zwróć litery oddzielone przecinkami, bez spacji po przecinku (np. A,C).`;
  }

  const user_prompt_content = `${user_prompt_instruction}

---
PYTANIE:
${questionText}

OPCJE:
${optionsString}
---

Twoja odpowiedź (TYLKO litera/litery, np. B lub A,C):`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: modelToUse,
        messages: [
          { role: "system", content: system_prompt_content },
          { role: "user", content: user_prompt_content }
        ],
        temperature: 0.1,
        top_p: 0.1,
        max_tokens: 15
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Form Helper: ChatGPT API Error:", response.status, errorData);
      if (response.status === 401) console.log("Błąd API OpenAI: Nieautoryzowany. Sprawdź swój klucz API w opcjach rozszerzenia.");
      else if (response.status === 429) console.log("Błąd API OpenAI: Przekroczono limit zapytań (Rate Limit). Spróbuj później lub sprawdź swoje limity w panelu OpenAI.");
      else console.log(`Błąd API OpenAI: ${errorData.error?.message || response.statusText}`);
      return null;
    }

    const data = await response.json();
    if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
      const rawAnswer = data.choices[0].message.content.trim().toUpperCase();
      const answerLetters = rawAnswer.replace(/[^A-Z,]/g, '');
      
      console.log("Form Helper: ChatGPT raw response:", rawAnswer);
      console.log("Form Helper: ChatGPT cleaned response (letters):", answerLetters);
      
      if (/^[A-Z](,[A-Z])*$/.test(answerLetters) || /^[A-Z]$/.test(answerLetters)) {
         return answerLetters.split(',').map(l => l.trim()).filter(l => l.length === 1 && l >= 'A' && l <= 'Z');
      } else {
        console.warn("Form Helper: ChatGPT response format after cleaning is still unexpected:", answerLetters);
        const singleLetterMatch = rawAnswer.match(/[A-Z](?![A-Z])(?![a-z])/g);
        if(singleLetterMatch){
            console.log("Form Helper: Attempting to extract single letters from noisy response:", singleLetterMatch.join(','));
            return singleLetterMatch.filter(l => l.length === 1 && l >= 'A' && l <= 'Z');
        }
        return null;
      }
    } else {
        console.warn("Form Helper: ChatGPT response structure unexpected or empty.", data);
    }
  } catch (error) {
    console.error("Form Helper: Error calling ChatGPT API:", error);
    console.log("Wystąpił błąd podczas komunikacji z API OpenAI. Sprawdź konsolę, aby uzyskać więcej informacji.");
  }
  return null;
}

// --- Główna funkcja (zmodyfikowana) ---
async function markCorrectAnswers(contextDocument) {
  // Sprawdzenie, czy w danym dokumencie (strona lub iframe) jest formularz Forms
  const isFormsPage = contextDocument.querySelector('div[data-automation-id="questionItem"]');
  if (!isFormsPage) {
    // Jeśli nie ma pytań, nie rób nic w tym kontekście.
    return;
  }
  
  if (window.self === window.top) {
      console.log("Form Helper: Running on the main page.");
  } else {
      console.log("Form Helper: Running inside an iframe.");
  }

  console.log("Form Helper: Starting to process questions...");
  const questionItems = contextDocument.querySelectorAll('div[data-automation-id="questionItem"]');
  if (questionItems.length === 0) {
    console.log("Form Helper: No question items found in this context.");
    return;
  }

  const apiKey = await getApiKey();

  for (const questionElement of questionItems) {
    if (processedQuestions.has(questionElement)) continue;
    
    const questionTitleElement = questionElement.querySelector('[data-automation-id="questionTitle"] [role="heading"], [data-automation-id="questionTitle"]');
    let pageQuestionText = '';
    if (questionTitleElement) {
        const potentialQuestionSpans = questionTitleElement.querySelectorAll(':scope > span.text-format-content');
        potentialQuestionSpans.forEach(span => {
            if (span.getAttribute('data-automation-id') !== 'questionOrdinal') {
                if (!span.closest('div[class*="-a-"]')) { 
                    pageQuestionText += span.textContent + ' ';
                }
            }
        });
        pageQuestionText = pageQuestionText.trim();
        if (!pageQuestionText) {
             let rawText = questionTitleElement.textContent || "";
             const ordinalElement = questionTitleElement.querySelector('span[data-automation-id="questionOrdinal"]');
             if (ordinalElement) rawText = rawText.replace(ordinalElement.textContent, '');
             const pointsElement = questionTitleElement.querySelector('span[data-automation-id="questionTitlePoint"]');
             if (pointsElement) rawText = rawText.replace(pointsElement.textContent, '');
             pageQuestionText = rawText;
        }
    } else { continue; }

    const normalizedPageQuestion = normalizeText(pageQuestionText);
    if (!normalizedPageQuestion) { continue; }

    let bestMatch = null;
    let highestSimilarity = 0;

    // Przeszukiwanie lokalnej bazy danych
    if (typeof questionDatabase !== 'undefined') {
        questionDatabase.forEach(dbEntry => {
          const normalizedDbQuestion = normalizeText(dbEntry.questionText);
          const similarity = calculateSimilarity(normalizedPageQuestion, normalizedDbQuestion);
          if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            bestMatch = dbEntry;
          }
        });
    }

    let correctAnswersToMark = [];

    if (bestMatch && highestSimilarity >= 0.90) {
      console.log(`Form Helper: Found LOCAL match for "${normalizedPageQuestion}" (Similarity: ${highestSimilarity.toFixed(2)})`);
      correctAnswersToMark = bestMatch.correctAnswersText.map(ans => normalizeText(ans));
    } else if (apiKey) {
      console.log(`Form Helper: No local match for "${normalizedPageQuestion}". Trying ChatGPT.`);
      
      const choiceItems = questionElement.querySelectorAll('div[data-automation-id="choiceItem"]');
      const optionsForApi = [];
      let questionType = 'unknown'; 

      choiceItems.forEach((choiceElement, choiceIndex) => {
        const optionLabelElement = choiceElement.querySelector('span.text-format-content');
        const inputElement = choiceElement.querySelector('input[type="radio"], input[type="checkbox"]');

        if (inputElement && optionLabelElement && optionLabelElement.textContent) {
          if (questionType === 'unknown' && inputElement.type) {
            questionType = inputElement.type === 'radio' ? 'single' : 'multiple';
          }
          optionsForApi.push({
            letter: String.fromCharCode(65 + choiceIndex),
            text: optionLabelElement.textContent.trim(),
            normalizedText: normalizeText(optionLabelElement.textContent.trim()),
            element: optionLabelElement 
          });
        }
      });

      if (optionsForApi.length > 0 && questionType !== 'unknown') {
        const gptAnswerLetters = await throttledCallChatGPT(pageQuestionText, optionsForApi, questionType, apiKey);
        if (gptAnswerLetters && gptAnswerLetters.length > 0) {
          console.log(`Form Helper: ChatGPT suggested letters: ${gptAnswerLetters.join(', ')}`);
          gptAnswerLetters.forEach(letter => {
            const foundOption = optionsForApi.find(opt => opt.letter === letter);
            if (foundOption) {
              correctAnswersToMark.push(foundOption.normalizedText);
            }
          });
        } else {
            console.log("Form Helper: ChatGPT did not provide a valid answer or no answer.");
        }
      } else {
          console.log("Form Helper: Could not determine options or question type for ChatGPT.");
      }
    } else {
      console.log(`Form Helper: No local match and no API key configured for "${normalizedPageQuestion}".`);
    }

    // --- Oznaczanie odpowiedzi ---
    if (correctAnswersToMark.length > 0) {
        const choiceItemsOnPage = questionElement.querySelectorAll('div[data-automation-id="choiceItem"]');
        choiceItemsOnPage.forEach(choiceElement => {
            const optionLabelElement = choiceElement.querySelector('span.text-format-content');
            if (optionLabelElement) {
                const pageOptionText = optionLabelElement.textContent;
                const normalizedPageOption = normalizeText(pageOptionText);

                if (correctAnswersToMark.includes(normalizedPageOption)) {
                    if (!pageOptionText.trim().endsWith(' .')) {
                        optionLabelElement.textContent += ' .';
                        console.log(`Form Helper: Marked answer: "${pageOptionText}"`);
                    }
                }
            }
        });
    }
    processedQuestions.add(questionElement);
    await sleep(2000);
  }
}


// --- Uruchomienie (zmodyfikowane) ---
function initialize() {
    // Uruchomienie skryptu w bieżącym kontekście (strona główna lub iframe)
    markCorrectAnswers(document);

    // Obserwator zmian, aby wykrywać dynamicznie ładowane pytania
    const observer = new MutationObserver((mutationsList, observerInstance) => {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                const questionItemsAdded = Array.from(mutation.addedNodes).some(node =>
                    node.nodeType === Node.ELEMENT_NODE && (node.matches('div[data-automation-id="questionItem"]') || node.querySelector('div[data-automation-id="questionItem"]'))
                );
                if (questionItemsAdded) {
                     console.log("Form Helper: Detected question items or changes, re-processing.");
                     // Dajemy krótki czas na pełne załadowanie elementów
                     setTimeout(() => markCorrectAnswers(document), 1000); 
                     return; 
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Czekamy na załadowanie dokumentu przed uruchomieniem
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}