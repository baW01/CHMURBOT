// options.js
document.addEventListener('DOMContentLoaded', () => {
  const apiKeyInput = document.getElementById('apiKey');
  const saveButton = document.getElementById('saveButton');
  const statusDiv = document.getElementById('status');

  // Load saved API key
  chrome.storage.local.get(['openaiApiKey'], (result) => {
    if (result.openaiApiKey) {
      apiKeyInput.value = result.openaiApiKey;
    }
  });

  saveButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
      chrome.storage.local.set({ openaiApiKey: apiKey }, () => {
        statusDiv.textContent = 'Klucz API zapisany!';
        statusDiv.style.color = 'green';
        setTimeout(() => { statusDiv.textContent = ''; }, 3000);
      });
    } else {
      statusDiv.textContent = 'Proszę wprowadzić klucz API.';
      statusDiv.style.color = 'red';
    }
  });
});