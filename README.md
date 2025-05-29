# CHMURBot

## Funkcje

* Automatyczne wyszukiwanie odpowiedzi w predefiniowanej lokalnej bazie danych.
* Możliwość integracji z API OpenAI (modelem GPT) w celu uzyskania odpowiedzi na pytania nieznajdujące się w lokalnej bazie.
* Oznaczanie sugerowanych poprawnych odpowiedzi bezpośrednio na stronie formularza.
* Obsługa pytań jednokrotnego i wielokrotnego wyboru (w przypadku korzystania z API OpenAI).

## Instalacja

1.  **Pobierz rozszerzenie**: Pobierz pliki rozszerzenia (lub sklonuj repozytorium, jeśli jest dostępne). Upewnij się, że masz wszystkie pliki (`manifest.json`, `content.js`, `database.js`, `options.html`, `options.js` itp.) w jednym folderze.
2.  **Otwórz Chrome i przejdź do Rozszerzeń**: Wpisz `chrome://extensions/` w pasku adresu przeglądarki Chrome i naciśnij Enter.
3.  **Włącz Tryb Programisty**: W prawym górnym rogu strony rozszerzeń znajdź przełącznik "Tryb programisty" i włącz go.
4.  **Załaduj rozszerzenie**: Kliknij przycisk "Załaduj rozpakowane" (pojawi się po włączeniu Trybu Programisty).
    * ![Przycisk Załaduj rozpakowane](https://i.ibb.co/4ZVQzYpp/Zrzut-ekranu-2025-05-29-220518.png)
5.  **Wybierz folder**: W oknie dialogowym wybierz folder, w którym zapisałeś pliki rozszerzenia.
6.  Rozszerzenie powinno teraz być zainstalowane i aktywne. Ikona rozszerzenia pojawi się na pasku narzędzi Chrome.

## Konfiguracja Klucza API OpenAI

### 1. Wprowadzenie Klucza API w Rozszerzeniu

* Kliknij prawym przyciskiem myszy na ikonę rozszerzenia "CHMURBOT" na pasku narzędzi Chrome.
* Z menu kontekstowego wybierz "Opcje".
    * Alternatywnie, możesz przejść do `chrome://extensions/`, znaleźć rozszerzenie "CHMURBOT" i kliknąć "Szczegóły", a następnie "Opcje rozszerzenia".
* Otworzy się strona ustawień rozszerzenia.
* W polu "Klucz API OpenAI" wklej swój skopiowany klucz API.
* Kliknij przycisk "Zapisz Klucz".
    * ![Strona opcji rozszerzenia z polem na klucz API](https://i.ibb.co/LXzkSKWm/Zrzut-ekranu-2025-05-29-220740.png)

## Ważne Uwagi

* **Klucz API OpenAI**:
    * Traktuj swój klucz API jak hasło. Nie udostępniaj go nikomu bo może zostać unieważniony.
* **Odpowiedzi od AI**: Odpowiedzi generowane przez model AI (ChatGPT) są sugestiami i mogą nie zawsze być w 100% poprawne.

---
