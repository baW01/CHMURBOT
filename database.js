// database.js

const questionDatabase = [
  // === AZ-204 Pytania Jednokrotnego Wyboru ===
  {
    id: "AZ204_P1",
    questionText: "Tworzysz aplikację Azure Web App, która przetwarza zamówienia klientów. Aplikacja wymaga zadania w tle App Service do obsługi operacji asynchronicznych, takich jak wysyłanie e-maili z potwierdzeniem zamówienia i aktualizowanie zapasów w odpowiedzi na nowe zamówienia klientów. Potrzebujesz rozwiązania, które może działać w sposób ciągły lub według harmonogramu w środowisku Azure App Service. Planujesz użyć WebJobs SDK do integracji z kolejką Azure Storage w celu efektywnego przetwarzania przychodzących żądań zamówień. Która z poniższych opcji spełni to wymaganie?",
    optionsForReference: [
        "Microsoft Power Automate",
        "WebJobs",
        "Azure Functions",
        "Azure Batch"
    ],
    correctAnswersText: ["WebJobs"]
  },
  {
    id: "AZ204_P2",
    questionText: "Które z poniższych jest najskuteczniejszym podejściem do aktualizacji API przy jednoczesnym zapewnieniu zgodności z następującymi warunkami: istniejący konsumenci nie mogą doświadczać zakłóceń, powinien być dostępny mechanizm wycofywania zmian, modyfikacje muszą być udokumentowane, a zmiany dokładnie przetestowane przed upublicznieniem?",
    optionsForReference: [
        "Wykorzystaj wersjonowanie oparte na nagłówkach, aby kierować żądania do różnych wersji API bez zmiany istniejących konfiguracji klienta.",
        "Utwórz nową rewizję w instancji Azure API Management (APIM).",
        "Skonfiguruj profil Azure Traffic Manager do kierowania żądań między wersjami API w celu kontrolowanego testowania i wycofywania.",
        "Użyj Azure Pipelines do zautomatyzowania wdrażania i testowania API przed wprowadzeniem zmian."
    ],
    correctAnswersText: ["Utwórz nową rewizję w instancji Azure API Management (APIM)."]
  },
  {
    id: "AZ204_P3",
    questionText: "Tworzysz API, które musi uwierzytelniać się podczas wywoływania wewnętrznego API. Żadne poświadczenia klienta, klucze API ani tokeny nie powinny być wysyłane ręcznie, a uwierzytelnianie powinno integrować się z Microsoft Entra ID. Które rozwiązanie najlepiej spełnia te wymagania bezpieczeństwa?",
    optionsForReference: [
        "Uwierzytelnianie za pomocą klucza API.",
        "Polityka OAuth 2.0 w Azure API Management.",
        "Tożsamość zarządzana (Managed Identity).",
        "Uwierzytelnianie podstawowe (Basic Authentication)."
    ],
    correctAnswersText: ["Tożsamość zarządzana (Managed Identity)."]
  },
  {
    id: "AZ204_P4",
    questionText: "API jest zarządzane przez Azure API Management (APIM), a wszystkie żądania muszą być uwierzytelniane za pomocą OpenID Connect. Anonimowe żądania powinny być blokowane, a brama API musi logować próby dostępu. Która polityka APIM powinna zostać użyta do walidacji tokenów JWT (JSON Web Tokens) zgodnie z OpenID Connect?",
    optionsForReference: [
        "authentication-managed-identity",
        "validate-jwt",
        "check-header",
        "authentication-basic"
    ],
    correctAnswersText: ["validate-jwt"]
  },
  {
    id: "AZ204_P5",
    questionText: "Podczas debugowania problemów z wydajnością w aplikacji produkcyjnej hostowanej w Azure App Service, które narzędzie pozwala na zbieranie szczegółowych danych profilowania bez wpływu na użytkowników i bez konieczności ponownego wdrażania kodu?",
    optionsForReference: [
        "Snapshot Debugger",
        "Panel Application Insights Failures",
        "Profiler",
        "Azure Monitor Logs z Kusto Query"
    ],
    correctAnswersText: ["Profiler"]
  },
  {
    id: "AZ204_P6",
    questionText: "Która polityka Azure API Management służy do ograniczania liczby żądań, jakie API może obsłużyć od jednego klucza w danym okresie czasu?",
    optionsForReference: [
        "set-backend-service",
        "rate-limit-by-key",
        "rate-limit",
        "set-query-parameter"
    ],
    correctAnswersText: ["rate-limit-by-key"]
  },
  {
    id: "AZ204_P7",
    questionText: "Czym jest Azure App Service?",
    optionsForReference: [
        "Skonteneryzowaną platformą do uruchamiania aplikacji.",
        "W pełni zarządzaną platformą do tworzenia, wdrażania i skalowania aplikacji internetowych.",
        "Usługą przechowywania w chmurze do analizy danych na dużą skalę.",
        "Wirtualną siecią zapewniającą prywatną i izolowaną komunikację między zasobami Azure."
    ],
    correctAnswersText: ["W pełni zarządzaną platformą do tworzenia, wdrażania i skalowania aplikacji internetowych."]
  },
  {
    id: "AZ204_P8",
    questionText: "Jaki jest cel Azure Functions?",
    optionsForReference: [
        "Zarządzanie i zabezpieczanie tożsamości użytkowników oraz dostępu do zasobów.",
        "Tworzenie i wdrażanie aplikacji opartych na chmurze za pomocą kontenerów Docker.",
        "Tworzenie i wykonywanie funkcji bezserwerowych w chmurze.",
        "Zapewnienie skalowalnego i niezawodnego przechowywania danych nieustrukturyzowanych."
    ],
    correctAnswersText: ["Tworzenie i wykonywanie funkcji bezserwerowych w chmurze."]
  },
  {
    id: "AZ204_P9",
    questionText: "Jaki jest cel Azure Logic Apps?",
    optionsForReference: [
        "Zarządzanie i orkiestracja przepływów pracy oraz procesów biznesowych.",
        "Przechowywanie i pobieranie dużych ilości danych ustrukturyzowanych i nieustrukturyzowanych.",
        "Tworzenie i wdrażanie aplikacji opartych na mikrousługach.",
        "Monitorowanie i analizowanie wydajności oraz użycia aplikacji."
    ],
    correctAnswersText: ["Zarządzanie i orkiestracja przepływów pracy oraz procesów biznesowych."]
  },
  {
    id: "AZ204_P10",
    questionText: "Czym jest Azure Cosmos DB?",
    optionsForReference: [
        "Relacyjną usługą bazodanową do zarządzania danymi ustrukturyzowanymi.",
        "Zarządzaną usługą do uruchamiania aplikacji skonteneryzowanych.",
        "Rozproszoną usługą bazodanową dla globalnie skalowalnych aplikacji.",
        "Usługą do analizy w czasie rzeczywistym i przetwarzania dużych zbiorów danych."
    ],
    correctAnswersText: ["Rozproszoną usługą bazodanową dla globalnie skalowalnych aplikacji."]
  },
  {
    id: "AZ204_P11",
    questionText: "Czym jest Azure DevOps?",
    optionsForReference: [
        "Usługą infrastruktury jako kodu do zarządzania i aprowizowania zasobów Azure.",
        "Platformą do tworzenia, testowania i wdrażania aplikacji za pomocą potoków CI/CD.",
        "Usługą uczenia maszynowego do tworzenia i wdrażania modeli predykcyjnych.",
        "Usługą do zarządzania i monitorowania wydajności maszyn wirtualnych Azure."
    ],
    correctAnswersText: ["Platformą do tworzenia, testowania i wdrażania aplikacji za pomocą potoków CI/CD."]
  },
  {
    id: "AZ204_P12",
    questionText: "Firma posiada usługę internetową, która przyjmuje zamówienia na jedzenie i dostawy. Usługa ta wykorzystuje Azure Cosmos DB jako magazyn danych. Wprowadzana jest nowa funkcja pozwalająca użytkownikom ustawić kwotę napiwku. Nowa funkcja wymaga, aby zamówienie miało właściwość o nazwie OrderTip w dokumencie Cosmos DB, a właściwość ta musi zawierać wartość numeryczną. Istniejące strony internetowe i usługi mogą nie być jeszcze zaktualizowane. Należy uzupełnić fragment kodu wyzwalacza (trigger), aby obsłużyć to wymaganie. Co powinno znaleźć się w miejscu Slot 1 w kodzie: fuderTip() { vnction Orar context = getContext(); var request = /* Slot 1 */; var tipsItem = request.getBody();... }?",
    optionsForReference: [
        "this.value();",
        "this.readDocument('item');",
        "context.getRequest();",
        "getContext().getResponse();"
    ],
    correctAnswersText: ["context.getRequest();"]
  },
  {
    id: "AZ204_P13",
    questionText: "Tworzysz funkcję Azure, która ma odczytywać wiadomości z kolejki Azure Storage Queue, przetwarzać je i dodawać encje do Azure Table Storage. Musisz zdefiniować poprawne powiązania (bindings) w pliku function.json. Które z poniższych wartości należy użyć dla właściwości direction powiązania wyjściowego (output binding) do Azure Table Storage?",
    optionsForReference: [
        "In",
        "Out",
        "Trigger",
        "$return"
    ],
    correctAnswersText: ["Out"]
  },
  {
    id: "AZ204_P14",
    questionText: "Które polecenie PowerShell służy do utworzenia nowej maszyny wirtualnej w Azure?",
    optionsForReference: [
        "Create-AzVm",
        "New-AzVm",
        "Set-AzVm",
        "Get-AzVm"
    ],
    correctAnswersText: ["New-AzVm"]
  },
  // Usunięto AZ204_P15 (było Tak/Nie)
  {
    id: "AZ204_P16",
    questionText: "Która klasa zapewnia punkt dostępu do usługi blob w Twoim kodzie.NET?",
    optionsForReference: [
        "CloudBlockBlob",
        "CloudBlobClient",
        "CloudStorageAccount",
        "CloudBlobContainer"
    ],
    correctAnswersText: ["CloudBlobClient"]
  },
  {
    id: "AZ204_P17",
    questionText: "Koszt wszystkich operacji bazodanowych jest abstrahowany i normalizowany przez Azure Cosmos DB i wyrażany za pomocą której z poniższych opcji?",
    optionsForReference: [
        "Operacje Wejścia/Wyjścia Na Sekundę (IOPS)",
        "Użycie CPU",
        "Jednostki Żądań (RU)",
        "Żądania Odczytu"
    ],
    correctAnswersText: ["Jednostki Żądań (RU)"]
  },
  {
  id: "AZ204_P18",
  questionText: "Twoja aplikacja webowa jest hostowana w Azure App Service i korzysta z Azure SQL Database. Musisz wdrożyć nową wersję aplikacji, zapewniając minimalny przestój oraz możliwość szybkiego rollbacku. Co powinieneś zrobić?",
  optionsForReference: [
    "Wdrożyć nową wersję bezpośrednio na produkcyjnym slotcie.",
    "Skorzystać z mechanizmu slotów wdrożeniowych (deployment slots), wdrożyć na slot staging, przetestować i zamienić sloty.",
    "Utworzyć kopię zapasową bazy danych, wdrożyć aplikację, a następnie odtworzyć bazę w razie awarii.",
    "Wdrożyć nową aplikację do osobnego App Service i zmienić rekord DNS."
  ],
  correctAnswersText: [
    "Skorzystać z mechanizmu slotów wdrożeniowych (deployment slots), wdrożyć na slot staging, przetestować i zamienić sloty."
  ]
},
{
  id: "AZ204_P19",
  questionText: "Masz Azure Function, która ma wykonywać długotrwałe operacje (>10 minut). Obecnie działa w planie Consumption i regularnie jest przerywana. Jak rozwiązać ten problem?",
  optionsForReference: [
    "Przenieść funkcję do planu Premium lub dedykowanego App Service Plan, który nie ma limitu czasu wykonywania.",
    "Podzielić funkcję na mniejsze fragmenty wykonywane poniżej limitu.",
    "Zwiększyć limit czasu wykonania w planie Consumption w portalu Azure.",
    "Przenieść długotrwałe zadania do Azure Logic Apps."
  ],
  correctAnswersText: [
    "Przenieść funkcję do planu Premium lub dedykowanego App Service Plan, który nie ma limitu czasu wykonywania."
  ]
},
{
  id: "AZ204_P20",
  questionText: "Twoja aplikacja wymaga skalowania automatycznego na podstawie metryk CPU i liczby zapytań HTTP. Jak skonfigurować skalowanie w Azure App Service?",
  optionsForReference: [
    "Skonfigurować reguły autoskalowania w Azure Monitor, definiując metryki i progi skalowania.",
    "Ręcznie zwiększać liczbę instancji App Service.",
    "Zmienić plan App Service na wyższy.",
    "Przenieść aplikację do Azure Kubernetes Service (AKS)."
  ],
  correctAnswersText: [
    "Skonfigurować reguły autoskalowania w Azure Monitor, definiując metryki i progi skalowania."
  ]
},
{
  id: "AZ204_P21",
  questionText: "Musisz wywołać Azure Function z poziomu aplikacji klienckiej, korzystając z OAuth 2.0 i Azure AD dla zabezpieczenia. Które kroki musisz wykonać?",
  optionsForReference: [
    "Zarejestrować aplikację kliencką i funkcję w Azure AD, przyznać odpowiednie uprawnienia i uzyskać token dostępu.",
    "Wygenerować klucz funkcji i przesłać go w nagłówkach HTTP.",
    "Skonfigurować funkcję jako publiczną.",
    "Skorzystać z klucza konta Storage do autoryzacji."
  ],
  correctAnswersText: [
    "Zarejestrować aplikację kliencką i funkcję w Azure AD, przyznać odpowiednie uprawnienia i uzyskać token dostępu."
  ]
},
{
  id: "AZ204_P22",
  questionText: "Chcesz, aby aplikacja korzystająca z Azure Cosmos DB miała gwarancję spójności danych, ale jednocześnie wysoką dostępność i niskie opóźnienia. Który model spójności wybierzesz?",
  optionsForReference: [
    "Eventual Consistency",
    "Session Consistency",
    "Strong Consistency",
    "Bounded Staleness"
  ],
  correctAnswersText: [
    "Session Consistency"
  ]
},
{
  id: "AZ204_P23",
  questionText: "Musisz zapewnić, aby Twoja Azure Function zapisywała logi i metryki do centralnego systemu monitorowania z alertami. Jakie rozwiązanie wdrożysz?",
  optionsForReference: [
    "Skonfigurujesz Application Insights i zaintegrujesz z funkcją.",
    "Wykorzystasz Azure Monitor Metrics bez Application Insights.",
    "Logi zapiszesz lokalnie w plikach.",
    "Wykorzystasz Azure Event Hubs do zbierania logów."
  ],
  correctAnswersText: [
    "Skonfigurujesz Application Insights i zaintegrujesz z funkcją."
  ]
},
{
  id: "AZ204_P24",
  questionText: "Masz aplikację korzystającą z Azure Blob Storage i chcesz udostępnić wybrane pliki z ograniczonym czasem ważności. Jaki mechanizm wykorzystasz?",
  optionsForReference: [
    "Ustawienie publicznego dostępu do kontenera.",
    "Generowanie SAS token (Shared Access Signature) z określonym czasem wygaśnięcia.",
    "Kopiowanie plików na serwer FTP.",
    "Udostępnienie całego kontenera jako publicznego."
  ],
  correctAnswersText: [
    "Generowanie SAS token (Shared Access Signature) z określonym czasem wygaśnięcia."
  ]
},
{
  id: "AZ204_P25",
  questionText: "Chcesz zabezpieczyć API hostowane w Azure API Management, by wymagało uwierzytelnienia klienta przez Azure Active Directory i weryfikowało role użytkowników. Co musisz skonfigurować?",
  optionsForReference: [
    "Konfigurację OAuth 2.0 z AAD oraz polityki walidacji tokenów JWT.",
    "Klucze API bez uwierzytelnienia.",
    "Autoryzację na poziomie IP.",
    "Brak zabezpieczeń."
  ],
  correctAnswersText: [
    "Konfigurację OAuth 2.0 z AAD oraz polityki walidacji tokenów JWT."
  ]
},
{
  id: "AZ204_P26",
  questionText: "Twoja aplikacja korzysta z Azure Service Bus. Masz problem z opóźnieniami i dużym natężeniem ruchu. Co możesz zrobić, by zwiększyć skalowalność?",
  optionsForReference: [
    "Użyć partycjonowanych kolejek i zwiększyć liczbę odbiorców (subscriptions).",
    "Zmniejszyć rozmiar wiadomości.",
    "Przenieść się na Azure Event Hubs.",
    "Używać jednego odbiorcy."
  ],
  correctAnswersText: [
    "Użyć partycjonowanych kolejek i zwiększyć liczbę odbiorców (subscriptions)."
  ]
},
{
  id: "AZ204_P27",
  questionText: "Potrzebujesz przechowywać i bezpiecznie udostępniać tajne dane (hasła, klucze) dla wielu aplikacji w Azure. Co jest najlepszym rozwiązaniem?",
  optionsForReference: [
    "Azure Key Vault z odpowiednimi politykami dostępu.",
    "Pliki konfiguracyjne w repozytorium kodu.",
    "Zmienne środowiskowe na maszynach.",
    "Baza danych Azure SQL bez szyfrowania."
  ],
  correctAnswersText: [
    "Azure Key Vault z odpowiednimi politykami dostępu."
  ]
},
{
  id: "AZ204_P28",
  questionText: "Chcesz przenieść maszynę wirtualną z jednej subskrypcji Azure do innej, zachowując wszystkie ustawienia i dane. Jaka jest najlepsza metoda?",
  optionsForReference: [
    "Użyć funkcji \"Move resources\" w Azure Portal, wybierając VM i powiązane zasoby.",
    "Eksportować obraz maszyny i tworzyć nową w drugiej subskrypcji.",
    "Tworzyć nową VM i ręcznie konfigurować.",
    "Skopiować dyski VHD lokalnie."
  ],
  correctAnswersText: [
    "Użyć funkcji \"Move resources\" w Azure Portal, wybierając VM i powiązane zasoby."
  ]
},
{
  id: "AZ204_P29",
  questionText: "Twoja aplikacja wymaga automatycznego skalowania bazujące na liczbie wiadomości w Azure Storage Queue. Jak to zrobić?",
  optionsForReference: [
    "Skorzystać z Azure Functions z wyzwalaczem kolejki i planem Consumption.",
    "Ręcznie monitorować i skalować.",
    "Zwiększyć liczbę instancji App Service.",
    "Użyć Azure Logic Apps."
  ],
  correctAnswersText: [
    "Skorzystać z Azure Functions z wyzwalaczem kolejki i planem Consumption."
  ]
},
{
  id: "AZ204_P30",
  questionText: "Chcesz wdrożyć nową wersję kontenerów w Azure Container Instances (ACI) z minimalnym czasem przestoju. Co powinieneś zrobić?",
  optionsForReference: [
    "Utworzyć nowy kontener z nową wersją i zmienić endpoint na nowy kontener po zakończeniu wdrożenia.",
    "Nadpisać istniejący kontener.",
    "Zrestartować kontener.",
    "Użyć Azure Kubernetes Service zamiast ACI."
  ],
  correctAnswersText: [
    "Utworzyć nowy kontener z nową wersją i zmienić endpoint na nowy kontener po zakończeniu wdrożenia."
  ]
},
{
  id: "AZ204_P31",
  questionText: "Masz aplikację webową, która korzysta z Azure AD B2C do uwierzytelniania użytkowników. Chcesz umożliwić logowanie przez media społecznościowe (Google, Facebook). Jak to zrobić?",
  optionsForReference: [
    "Skonfigurować Identity Providers w Azure AD B2C, dodając Google i Facebook.",
    "Dodawać manualnie logowanie OAuth w aplikacji.",
    "Korzystać z lokalnego uwierzytelniania.",
    "Nie można tego zrobić."
  ],
  correctAnswersText: [
    "Skonfigurować Identity Providers w Azure AD B2C, dodając Google i Facebook."
  ]
},
{
  id: "AZ204_P32",
  questionText: "Twoja aplikacja wysyła powiadomienia push do użytkowników urządzeń mobilnych. Chcesz korzystać z Azure Notification Hubs. Jakie kroki należy wykonać?",
  optionsForReference: [
    "Utworzyć Notification Hub, skonfigurować platformę docelową (np. Firebase, APNS) i zaimplementować SDK.",
    "Wysyłać powiadomienia bezpośrednio z backendu.",
    "Korzystać z Azure SignalR.",
    "Używać Azure Event Grid."
  ],
  correctAnswersText: [
    "Utworzyć Notification Hub, skonfigurować platformę docelową (np. Firebase, APNS) i zaimplementować SDK."
  ]
},
{
  id: "AZ204_P33",
  questionText: "Masz Azure Logic App, która łączy się z bazą danych SQL i wywołuje funkcję HTTP. Chcesz zapewnić, aby działała tylko w godzinach pracy. Jak to osiągnąć?",
  optionsForReference: [
    "Skonfigurować wyzwalacz Logic App z warunkiem czasowym.",
    "Uruchamiać ręcznie.",
    "Usunąć wyzwalacz.",
    "Skonfigurować Azure Function Timer."
  ],
  correctAnswersText: [
    "Skonfigurować wyzwalacz Logic App z warunkiem czasowym."
  ]
},
{
  id: "AZ204_P34",
  questionText: "Twoja aplikacja potrzebuje mechanizmu sesji użytkownika, który jest skalowalny i działa w wielu instancjach Azure App Service. Co zastosujesz?",
  optionsForReference: [
    "Azure Cache for Redis jako magazyn sesji.",
    "Pamięć lokalną serwera (In-Proc Session).",
    "Pliki sesji na dysku lokalnym.",
    "Baza danych SQL bez cache."
  ],
  correctAnswersText: [
    "Azure Cache for Redis jako magazyn sesji."
  ]
},

  // === AZ-204 Pytania Wielokrotnego Wyboru ===
  {
    id: "AZ204_WM1",
    questionText: "Zarządzasz usługą Azure App Service obsługującą użytkowników w wielu regionach. Aplikacja używa Azure Traffic Manager do inteligentnego kierowania ruchem i ma włączoną usługę Application Insights do monitorowania. Dodatkowo skonfigurowano Azure Front Door w celu usprawnienia globalnego równoważenia obciążenia i dostarczania zawartości. Twój zespół musi generować miesięczne raporty dotyczące trendów czasu działania i analizować historyczne dane dotyczące wydajności w celu zapewnienia wysokiej dostępności. Które rozwiązania osiągną ten cel?",
    optionsForReference: [
        "Sondy kondycji Azure Front Door.",
        "Dzienniki Azure Monitor.",
        "Testy dostępności Application Insights.",
        "Monitorowanie punktów końcowych Azure Traffic Manager.",
        "Metryki Azure Monitor."
    ],
    correctAnswersText: ["Dzienniki Azure Monitor.", "Metryki Azure Monitor."]
  },
  {
    id: "AZ204_WM2",
    questionText: "Tworzysz niestandardowe oprogramowanie pośredniczące (middleware) telemetrii dla aplikacji ASP.NET Core zintegrowanej z Application Insights. Musisz wzbogacić dane telemetryczne o niestandardowe właściwości, które pomogą w korelacji zdarzeń w rozproszonym systemie. Które z poniższych właściwości kontekstu telemetrii są powszechnie używane do śledzenia zależności i operacji?",
    optionsForReference: [
        "Telemetry.Context.Session.Id",
        "Telemetry.id",
        "Telemetry.Context.Dependency.Type",
        "Telemetry.Context.Operation.Id",
        "Telemetry.Context.Dependency.Target"
    ],
    correctAnswersText: ["Telemetry.Context.Operation.Id", "Telemetry.Context.Dependency.Target"]
  },
  {
    id: "AZ204_WM3",
    questionText: "Rozwijasz rozwiązanie, które wymaga integracji z Microsoft Graph API w celu uzyskania dostępu do danych organizacyjnych i zarządzania nimi. Aplikacja musi bezpiecznie uwierzytelniać się i uzyskiwać tokeny dostępu. Które z poniższych komponentów i bibliotek są kluczowe dla implementacji bezpiecznego uwierzytelniania i autoryzacji przy użyciu platformy tożsamości Microsoft?",
    optionsForReference: [
        "Microsoft Entra Privileged Identity Management (PIM)",
        "Microsoft Entra External ID",
        "Microsoft Graph API",
        "Microsoft Entra Connect",
        "Microsoft Authentication Library (MSAL)"
    ],
    correctAnswersText: ["Microsoft Graph API", "Microsoft Authentication Library (MSAL)"]
  },
  {
    id: "AZ204_WM4",
    questionText: "Twoja firma chce opracować aplikację Docker dla Azure App Service Web App. Jako programista możesz użyć poleceń PowerShell do utworzenia zasobów. Których trzech poleceń powinieneś użyć?",
    optionsForReference: [
        "New-AzureRmAppServicePlan",
        "New-AzureRmResourceGroup",
        "Create-AzureRmWebApp",
        "New-AzureRmWebApp"
    ],
    correctAnswersText: ["New-AzureRmAppServicePlan", "New-AzureRmResourceGroup", "New-AzureRmWebApp"]
  },
  {
    id: "AZ204_WM5",
    questionText: "Utworzyłeś funkcję w portalu Azure. Które z poniższych stwierdzeń dotyczących właściwości direction wyzwalaczy lub powiązań są prawidłowe?",
    optionsForReference: [
        "Dla wyzwalaczy kierunek (direction) jest zawsze „in”.",
        "Dla wyzwalaczy kierunek może być „in” lub „out”.",
        "Niektóre powiązania mogą używać „input”.",
        "Powiązania wejściowe i wyjściowe mogą używać „in” i „out”."
    ],
    correctAnswersText: ["Dla wyzwalaczy kierunek (direction) jest zawsze „in”.", "Niektóre powiązania mogą używać „input”.", "Powiązania wejściowe i wyjściowe mogą używać „in” i „out”."]
  },
  {
    id: "AZ204_WM6",
    questionText: "Sygnatura dostępu współdzielonego (SAS) to podpisany identyfikator URI wskazujący na jeden lub więcej zasobów magazynu i zawierający token ze specjalnym zestawem parametrów zapytania. W jaki sposób można podpisać SAS?",
    optionsForReference: [
        "Za pomocą certyfikatu z podpisem własnym.",
        "Za pomocą klucza konta magazynu.",
        "Za pomocą klucza delegowania użytkownika.",
        "Za pomocą identyfikatora URI HTTPS."
    ],
    correctAnswersText: ["Za pomocą klucza konta magazynu.", "Za pomocą klucza delegowania użytkownika."]
  },
  {
    id: "AZ204_WM7",
    questionText: "Które z poniższych są poleceniami Dockerfile?",
    optionsForReference: [
        "CMD",
        "WORKDIR",
        "FROM",
        "RUN"
    ],
    correctAnswersText: ["CMD", "WORKDIR", "FROM", "RUN"]
  },
  {
    id: "AZ204_WM8",
    questionText: "Dane w pamięci podręcznej Redis są przechowywane w węzłach i klastrach. Które z poniższych stwierdzeń są prawdziwe?",
    optionsForReference: [
        "Węzły to przestrzeń, w której przechowywane są dane.",
        "Klastry to zestawy dwóch lub więcej węzłów.",
        "Klastry to zestawy trzech lub więcej węzłów.",
        "Dane są replikowane automatycznie między wszystkimi węzłami w klastrze w konfiguracji domyślnej."
    ],
    correctAnswersText: ["Węzły to przestrzeń, w której przechowywane są dane.", "Klastry to zestawy trzech lub więcej węzłów."]
  },
  {
    id: "AZ204_WM9",
    questionText: "Tworzysz aplikację internetową, która wykonuje analizę obrazów na zdjęciach użytkowników i zwraca metadane zawierające zidentyfikowane obiekty. Analiza obrazów jest bardzo kosztowna pod względem czasu i zasobów obliczeniowych. Planujesz użyć Azure Cache for Redis, aby przetworzone obrazy nie musiały być ponownie przetwarzane. W przypadku awarii centrum danych Azure utrata metadanych musi być ograniczona do minimum. Musisz skonfigurować instancję Azure Cache for Redis. Które dwie akcje powinieneś wykonać?",
    optionsForReference: [
        "Skonfiguruj Azure Redis z trwałością (persistence).",
        "Skonfiguruj drugie konto magazynu dla trwałości.",
        "Ustaw częstotliwość tworzenia kopii zapasowych na minimalną wartość.",
        "Skonfiguruj Azure Redis z trwałością RDS."
    ],
    correctAnswersText: ["Skonfiguruj Azure Redis z trwałością (persistence).", "Ustaw częstotliwość tworzenia kopii zapasowych na minimalną wartość."]
  },
  {
    id: "AZ204_WM10",
    questionText: "Planujesz wdrożyć rozwiązanie oparte na Azure Cosmos DB. Które z poniższych ról RBAC są istotne dla zarządzania dostępem do danych i operacji na koncie Cosmos DB?",
    optionsForReference: [
        "Cosmos DB Operator",
        "CosmosRestoreOperator",
        "Redis Cache Contributor",
        "Cosmos DB Account Reader Role"
    ],
    correctAnswersText: ["Cosmos DB Operator", "Cosmos DB Account Reader Role"]
  },
  {
    id: "AZ204_WM11",
    questionText: "Chcesz zaimplementować buforowanie odpowiedzi w usłudze Azure API Management. Identyfikator użytkownika klienta musi zostać wykryty, a następnie odpowiedź musi być buforowana dla danego identyfikatora użytkownika. Jakie polityki i w jakich sekcjach (inbound/outbound) należy zaimplementować, aby osiągnąć ten cel, w tym przechowywanie wykrytej tożsamości użytkownika i aktualizację treści odpowiedzi?",
    optionsForReference: [
        "Polityka set-variable do przechowywania wykrytej tożsamości użytkownika (w sekcji inbound).",
        "Polityka cache-lookup-value (w sekcji inbound).",
        "Polityka cache-store-value (w sekcji outbound).",
        "Polityka find-and-replace do aktualizacji treści odpowiedzi informacjami o profilu użytkownika (w sekcji outbound).",
        "Polityka cache-lookup-value (w sekcji outbound).",
        "Polityka set-variable (w sekcji outbound)."
    ],
    correctAnswersText: [
        "Polityka set-variable do przechowywania wykrytej tożsamości użytkownika (w sekcji inbound).",
        "Polityka cache-lookup-value (w sekcji inbound).",
        "Polityka cache-store-value (w sekcji outbound).",
        "Polityka find-and-replace do aktualizacji treści odpowiedzi informacjami o profilu użytkownika (w sekcji outbound)."
    ]
  },
  {
    id: "AZ204_WM12",
    questionText: "Firma opracowuje system API, który będzie hostowany za usługą Azure API Management. Należy zaimplementować buforowanie odpowiedzi. Wymagane jest wykrycie identyfikatora użytkownika klienta, a następnie buforowanie odpowiedzi dla tego konkretnego identyfikatora. Które z poniższych polityk należy umieścić w sekcji inbound definicji polityki API Management?",
    optionsForReference: [
        "Polityka set-variable do przechowywania wykrytej tożsamości użytkownika.",
        "Polityka cache-lookup-value.",
        "Polityka cache-store-value.",
        "Polityka find-and-replace do aktualizacji treści odpowiedzi."
    ],
    correctAnswersText: ["Polityka set-variable do przechowywania wykrytej tożsamości użytkownika.", "Polityka cache-lookup-value."]
  },
  {
    id: "AZ204_WM13",
    questionText: "Firma opracowuje system API, który będzie hostowany za usługą Azure API Management. Należy zaimplementować buforowanie odpowiedzi. Wymagane jest wykrycie identyfikatora użytkownika klienta, a następnie buforowanie odpowiedzi dla tego konkretnego identyfikatora. Które z poniższych polityk należy umieścić w sekcji outbound definicji polityki API Management?",
    optionsForReference: [
        "Polityka set-variable do przechowywania wykrytej tożsamości użytkownika.",
        "Polityka cache-lookup-value.",
        "Polityka cache-store-value.",
        "Polityka find-and-replace do aktualizacji treści odpowiedzi informacjami o profilu użytkownika."
    ],
    correctAnswersText: ["Polityka cache-store-value.", "Polityka find-and-replace do aktualizacji treści odpowiedzi informacjami o profilu użytkownika."]
  },
  {
    id: "AZ204_WM14",
    questionText: "Tworzony jest magazyn kluczy platformy Azure przy użyciu programu PowerShell. Obiekty usunięte z magazynu kluczy muszą być przechowywane przez określony okres 90 dni. Które dwa z poniższych parametrów muszą być użyte w połączeniu, aby spełnić to wymaganie?",
    optionsForReference: [
        "EnabledForDeployment",
        "EnablePurgeProtection", // Usunięto "Most Voted"
        "EnabledForTemplateDeployment",
        "EnableSoftDelete" // Usunięto "Most Voted"
    ],
    correctAnswersText: ["EnablePurgeProtection", "EnableSoftDelete"]
  },
  {
    id: "AZ204_WM15",
    questionText: "Która z poniższych opcji redundancji zabezpieczy Twoje dane w razie awarii obejmującej cały region?",
    optionsForReference: [
        "Lokalne redundantne przechowywanie (Locally redundant storage, LRS)",
        "Geo-redundantne przechowywanie z dostępem do odczytu (Read-access geo-redundant storage, RA-GRS)",
        "Strefowe redundantne przechowywanie (Zone-redundant storage)",
        "Geo-redundantne przechowywanie (Geo-redundant storage, GRS)"
    ],
    correctAnswersText: ["Geo-redundantne przechowywanie z dostępem do odczytu (Read-access geo-redundant storage, RA-GRS)", "Geo-redundantne przechowywanie (Geo-redundant storage, GRS)"]
  },
  {
    id: "AZ204_WM16",
    questionText: "Które z poniższych wzorców aplikacji mogą skorzystać z Durable Functions?",
    optionsForReference: [
        "Łączenie funkcji (Function chaining)",
        "Rozgałęzienie/scalanie (fan-out/fan-in)",
        "„Chained lightning”",
        "Asynchroniczne interfejsy HTTP (Async HTTP APIs)"
    ],
    correctAnswersText: ["Łączenie funkcji (Function chaining)", "Rozgałęzienie/scalanie (fan-out/fan-in)", "Asynchroniczne interfejsy HTTP (Async HTTP APIs)"]
  },
  {
    id: "AZ204_WM17",
    questionText: "Które z poniższych planów dla Azure Functions automatycznie zwiększają zasoby obliczeniowe w razie potrzeby podczas działania Twojego kodu?",
    optionsForReference: [
        "Plan konsumpcyjny (Consumption Plan)",
        "Plan App Service (App Service Plan)",
        "Plan Premium (Premium Plan)",
        "Plan wirtualny (Virtual Plan)"
    ],
    correctAnswersText: ["Plan konsumpcyjny (Consumption Plan)", "Plan Premium (Premium Plan)"]
  },
  {
    id: "AZ204_WM18",
    questionText: "Które z poniższych ustawień nie są przenoszone („swapowane”) podczas zamiany slotów aplikacji?",
    optionsForReference: [
        "Mapowania handlerów (Handler Mappings)",
        "Punkty końcowe publikowania (Publishing Endpoints)",
        "Ustawienia ogólne (General Settings)",
        "Zawsze włączone (Always On)",
        "Własne nazwy domen (Custom Domain Names)"
    ],
    correctAnswersText: ["Punkty końcowe publikowania (Publishing Endpoints)", "Zawsze włączone (Always On)", "Własne nazwy domen (Custom Domain Names)"]
  },
  {
  id: "AZ204_WM19",
  questionText: "Chcesz zabezpieczyć Azure Function, tak aby tylko konkretne aplikacje mogły ją wywoływać. Jakie mechanizmy uwierzytelniania i autoryzacji Azure możesz zastosować?",
  optionsForReference: [
    "Klucze funkcji (Function Keys) i autoryzacja na poziomie HTTP Triggera.",
    "Identity Provider OAuth 2.0 z Azure AD.",
    "Publiczny dostęp bez uwierzytelniania.",
    "Uwierzytelnianie Basic Auth w HTTP headers."
  ],
  correctAnswersText: [
    "Klucze funkcji (Function Keys) i autoryzacja na poziomie HTTP Triggera.",
    "Identity Provider OAuth 2.0 z Azure AD."
  ]
},
{
  id: "AZ204_WM20",
  questionText: "Twoja aplikacja działa na Azure Kubernetes Service (AKS). Chcesz wdrożyć nową wersję kontenera bez przestojów i z możliwością łatwego rollbacku. Jaka strategia wdrażania będzie najlepsza?",
  optionsForReference: [
    "Rolling Update z konfiguracją readiness probes i liveness probes.",
    "Recreate Deployment (zatrzymanie i ponowne uruchomienie).",
    "Blue-Green Deployment (utworzenie równoległego środowiska).",
    "Wdrożenie na nowym klastrze AKS."
  ],
  correctAnswersText: [
    "Rolling Update z konfiguracją readiness probes i liveness probes.",
    "Blue-Green Deployment (utworzenie równoległego środowiska)."
  ]
},
{
  id: "AZ204_WM21",
  questionText: "Wdrażasz aplikację na Azure App Service z koniecznością separacji środowisk (dev, test, prod) oraz automatyzacji wdrożeń. Jakie praktyki zastosujesz?",
  optionsForReference: [
    "Utworzenie osobnych slotów wdrożeniowych dla dev i test, a prod jako produkcyjny slot.",
    "Wdrażanie bezpośrednio na produkcyjnym środowisku.",
    "Użycie Azure DevOps Pipelines do CI/CD z etapami dla środowisk.",
    "Wdrażanie ręcznie z lokalnego komputera."
  ],
  correctAnswersText: [
    "Utworzenie osobnych slotów wdrożeniowych dla dev i test, a prod jako produkcyjny slot.",
    "Użycie Azure DevOps Pipelines do CI/CD z etapami dla środowisk."
  ]
},

  // === AZ-900 Pytania Jednokrotnego Wyboru ===
  {
    id: "AZ900_P1",
    questionText: "Firma planuje wdrożyć swój pakiet aplikacji korporacyjnych na platformie Microsoft Azure, gdzie każda aplikacja ma kilka zależności i podkomponentów. Firma musi również kontrolować i zarządzać działaniami związanymi z instalowaniem poprawek w podstawowym systemie operacyjnym serwerów. Jaki typ rozwiązania wdrożenia w chmurze należy zarekomendować?",
    optionsForReference: [
        "Infrastruktura jako usługa (IaaS)",
        "Platforma jako usługa (PaaS)",
        "Oprogramowanie jako usługa (SaaS)",
        "Funkcje jako usługa (FaaS)"
    ],
    correctAnswersText: ["Infrastruktura jako usługa (IaaS)"]
  },
  // Usunięto AZ900_P2 (było Tak/Nie)
  {
    id: "AZ900_P3",
    questionText: "Które z poniższych działań jest uważane za skalowanie pionowe (vertical scaling) w środowisku chmurowym?",
    optionsForReference: [
        "Zwiększenie liczby maszyn wirtualnych.",
        "Aprowizowanie dodatkowych kontenerów.",
        "Zwiększenie mocy CPU i ilości RAM maszyny wirtualnej.",
        "Aprowizowanie dodatkowego dedykowanego hosta Azure."
    ],
    correctAnswersText: ["Zwiększenie mocy CPU i ilości RAM maszyny wirtualnej."]
  },
  {
    id: "AZ900_P4",
    questionText: "Firma chce przeprowadzić migrację do chmury. Wymagane jest połączenie VPN do połączenia sieci lokalnej z wirtualną siecią Azure za pośrednictwem tunelu VPN IPsec/IKE (IKEv1 lub IKEv2). Jaki jest najbardziej odpowiedni typ połączenia VPN, którego należy użyć?",
    optionsForReference: [
        "Połączenie VPN typu Point-to-Site.",
        "Połączenie VPN typu Site-to-Site.",
        "Połączenie VNet peering.",
        "Połączenie ExpressRoute."
    ],
    correctAnswersText: ["Połączenie VPN typu Site-to-Site."]
  },
  {
    id: "AZ900_P5",
    questionText: "Jaka usługa umożliwia korelowanie zdarzeń śledzenia z wielu maszyn wirtualnych Azure i innych zasobów w scentralizowanym repozytorium?",
    optionsForReference: [
        "Azure Event Hubs",
        "Azure Repos",
        "Azure Monitor",
        "Azure Resource Manager"
    ],
    correctAnswersText: ["Azure Monitor"]
  },
  {
    id: "AZ900_P6",
    questionText: "Która usługa analizuje konfigurację zasobów i telemetrię użycia, a następnie rekomenduje rozwiązania, które mogą pomóc poprawić efektywność kosztową, wydajność, niezawodność i bezpieczeństwo zasobów Azure?",
    optionsForReference: [
        "Compliance Manager",
        "Azure Information Protection",
        "Azure Resource Manager",
        "Azure Advisor"
    ],
    correctAnswersText: ["Azure Advisor"]
  },
  {
    id: "AZ900_P7",
    questionText: "Która usługa umożliwia architektom chmury i centralnym grupom IT definiowanie powtarzalnego zestawu zasobów Azure, który implementuje i przestrzega standardów, wzorców i wymagań organizacji?",
    optionsForReference: [
        "Azure Blueprints",
        "Compliance Manager",
        "Azure Monitor",
        "Azure Advisor"
    ],
    correctAnswersText: ["Azure Blueprints"]
  },
  {
    id: "AZ900_P8",
    questionText: "Twoja firma posiada centra danych w Los Angeles i Nowym Jorku oraz subskrypcję Microsoft Azure. Konfigurujesz te dwa centra danych jako klastry geograficzne w celu zapewnienia odporności na awarie. Musisz zarekomendować opcję redundancji przechowywania Azure. Wymagania dotyczące przechowywania danych są następujące: dane muszą być przechowywane na wielu węzłach, dane muszą być przechowywane na węzłach w oddzielnych lokalizacjach geograficznych, dane mogą być odczytywane z lokalizacji dodatkowej, jak również z lokalizacji podstawowej. Którą opcję redundancji przechowywania Azure należy zarekomendować?",
    optionsForReference: [
        "Magazyn geograficznie redundantny (Geo-redundant storage).",
        "Magazyn geograficznie redundantny tylko do odczytu (Read-only geo-redundant storage).",
        "Magazyn strefowo redundantny (Zone-redundant storage).",
        "Magazyn lokalnie redundantny (Locally redundant storage)."
    ],
    correctAnswersText: ["Magazyn geograficznie redundantny tylko do odczytu (Read-only geo-redundant storage)."]
  },
  // Usunięto AZ900_P9 i AZ900_P10 (były Tak/Nie)
  {
    id: "AZ900_P11",
    questionText: "Które zadanie można wykonać za pomocą Azure Advisor?",
    optionsForReference: [
        "Zintegrować Active Directory i Azure Active Directory (Azure AD).",
        "Oszacować koszty rozwiązania Azure.",
        "Potwierdzić, że zabezpieczenia subskrypcji Azure są zgodne z najlepszymi praktykami.",
        "Ocenić, które zasoby lokalne można zmigrować do Azure."
    ],
    correctAnswersText: ["Potwierdzić, że zabezpieczenia subskrypcji Azure są zgodne z najlepszymi praktykami."]
  },
  {
    id: "AZ900_P12",
    questionText: "Kto może korzystać z kalkulatora całkowitego kosztu posiadania (TCO) Azure?",
    optionsForReference: [
        "Tylko czytelnicy rozliczeń dla subskrypcji Azure.",
        "Tylko właściciele subskrypcji Azure.",
        "Każdy.",
        "Tylko wszyscy użytkownicy posiadający konto w Azure Active Directory (Azure AD) powiązane z subskrypcją Azure."
    ],
    correctAnswersText: ["Każdy."]
  },
  {
    id: "AZ900_P13",
    questionText: "Twoja firma posiada subskrypcję Azure, która zawiera następujące nieużywane zasoby: 20 kont użytkowników w Azure Active Directory (Azure AD), pięć grup w Azure AD, 10 publicznych adresów IP, 10 interfejsów sieciowych. Musisz zredukować koszty Azure dla firmy. Które nieużywane zasoby należy usunąć?",
    optionsForReference: [
        "Interfejsy sieciowe.",
        "Publiczne adresy IP.",
        "Grupy.",
        "Konta użytkowników."
    ],
    correctAnswersText: ["Publiczne adresy IP."]
  },
  {
    id: "AZ900_P14",
    questionText: "Która z poniższych nie jest korzyścią płynącą z przetwarzania w chmurze?",
    optionsForReference: [
        "Skalowalność",
        "Wysokie koszty początkowe",
        "Cennik oparty na rzeczywistym zużyciu (pay-as-you-go)",
        "Globalna dostępność"
    ],
    correctAnswersText: ["Wysokie koszty początkowe"]
  },
  {
    id: "AZ900_P15",
    questionText: "Która z poniższych usług Azure jest zasobem obliczeniowym do uruchamiania aplikacji w maszynach wirtualnych?",
    optionsForReference: [
        "Azure App Services",
        "Azure Virtual Machines",
        "Azure Blob Storage",
        "Azure SQL Database"
    ],
    correctAnswersText: ["Azure Virtual Machines"]
  },
  {
    id: "AZ900_P16",
    questionText: "Która z poniższych metod służy do szacowania kosztów korzystania z usług Azure?",
    optionsForReference: [
        "Azure Advisor",
        "Azure Pricing Calculator",
        "Azure Active Directory",
        "Azure Resource Manager"
    ],
    correctAnswersText: ["Azure Pricing Calculator"]
  },
  {
    id: "AZ900_P17",
    questionText: "Która usługa Azure pozwala zarządzać i egzekwować polityki w wielu subskrypcjach w celu zapewnienia zgodności?",
    optionsForReference: [
        "Azure Policy",
        "Azure Monitor",
        "Azure Active Directory",
        "Azure Backup"
    ],
    correctAnswersText: ["Azure Policy"]
  },
  {
  id: "AZ900_P18",
  questionText: "Co lub jakie usługi oferuje Microsoft Azure?",
  optionsForReference: [
    "Tylko usługi SaaS",
    "Tylko maszyny wirtualne",
    "Zintegrowaną platformę usług chmurowych",
    "Tylko usługi PaaS",
    "Hosting lokalny"
  ],
  correctAnswersText: [
    "Zintegrowaną platformę usług chmurowych"
  ]
},
{
  id: "AZ900_P19",
  questionText: "Co oznacza Azure Region?",
  optionsForReference: [
    "Pojedynczy serwer w centrum danych",
    "Obszar geograficzny zawierający jedno lub więcej centrów danych",
    "Narzędzie do monitorowania zasobów",
    "Subskrypcja klienta",
    "Konfiguracja sieci prywatnej"
  ],
  correctAnswersText: [
    "Obszar geograficzny zawierający jedno lub więcej centrów danych"
  ]
},
{
  id: "AZ900_P20",
  questionText: "Którego planu usługi Azure App Service powinni użyć administratorzy, którzy wymagają wsparcia dla HTTPS, co najmniej dwóch instancji, wysokiej dostępności i co najmniej 10 GB pamięci, przy minimalnych kosztach?",
  optionsForReference: [
    "Wolny (Free)",
    "Współdzielony (Shared)",
    "Standard",
    "Podstawowy (Basic)"
  ],
  correctAnswersText: [
    "Standard"
  ]
},
{
  id: "AZ900_P21",
  questionText: "Jaką korzyść z Azure powinni podkreślić przy budowie środowiska testowego, które musi szybko rosnąć i maleć oraz umożliwiać łatwe zarządzanie VM i automatyczne skalowanie?",
  optionsForReference: [
    "Stała alokacja zasobów",
    "Lokalizacja danych",
    "Skalowalność i elastyczność zasobów na żądanie",
    "Jednorazowa opłata za usługę"
  ],
  correctAnswersText: [
    "Skalowalność i elastyczność zasobów na żądanie"
  ]
},
{
  id: "AZ900_P22",
  questionText: "Której usługi Azure należy użyć do hostowania prywatnej sieci w chmurze, która pozwoli na bezpieczne połączenie lokalnych zasobów z usługami chmurowymi?",
  optionsForReference: [
    "Azure DNS",
    "Azure Virtual Network (VNet)",
    "Azure Content Delivery Network",
    "Azure Blob Storage"
  ],
  correctAnswersText: [
    "Azure Virtual Network (VNet)"
  ]
},
{
  id: "AZ900_P23",
  questionText: "Która usługa Azure jest najlepszym wyborem do łatwego zarządzania tożsamościami użytkowników i uwierzytelnianiem, z uwierzytelnieniem wieloskładnikowym?",
  optionsForReference: [
    "Azure Monitor",
    "Azure DevOps",
    "Azure Active Directory (Azure AD)",
    "Azure Firewall"
  ],
  correctAnswersText: [
    "Azure Active Directory (Azure AD)"
  ]
},
{
  id: "AZ900_P24",
  questionText: "Której usługi Azure powinni użyć deweloperzy, którzy chcą hostować aplikację z automatycznym skalowaniem i zarządzanym środowiskiem bez konfiguracji serwerów?",
  optionsForReference: [
    "Azure Virtual Machines",
    "Azure App Service",
    "Azure SQL Database",
    "Azure Kubernetes Service"
  ],
  correctAnswersText: [
    "Azure App Service"
  ]
},
{
  id: "AZ900_P25",
  questionText: "Jaką usługę Azure należy wybrać do skalowalnego przechowywania dużych plików multimedialnych i dokumentów dostępnych z wielu lokalizacji?",
  optionsForReference: [
    "Azure SQL Database",
    "Azure Blob Storage",
    "Azure Virtual Machines",
    "Azure Active Directory"
  ],
  correctAnswersText: [
    "Azure Blob Storage"
  ]
},
{
  id: "AZ900_P26",
  questionText: "Który dokument zapewni informacje o gwarantowanym czasie działania usługi w Azure?",
  optionsForReference: [
    "Umowa SLA (Service Level Agreement)",
    "Polityka prywatności",
    "Regulamin użytkowania",
    "Warunki licencyjne"
  ],
  correctAnswersText: [
    "Umowa SLA (Service Level Agreement)"
  ]
},
{
  id: "AZ900_P27",
  questionText: "Jakiego modelu rozliczeniowego powinna używać organizacja, która chce płacić tylko za rzeczywiste wykorzystanie zasobów w Azure?",
  optionsForReference: [
    "Plan miesięczny abonamentowy",
    "Licencja wieczysta",
    "Pay-As-You-Go",
    "Plan roczny"
  ],
  correctAnswersText: [
    "Pay-As-You-Go"
  ]
},
{
  id: "AZ900_P28",
  questionText: "Która usługa Azure umożliwia monitorowanie działania aplikacji i infrastruktury oraz szybkie reagowanie na problemy?",
  optionsForReference: [
    "Azure DevOps",
    "Azure Security Center",
    "Azure Monitor",
    "Azure Active Directory"
  ],
  correctAnswersText: [
    "Azure Monitor"
  ]
},
{
  id: "AZ900_P29",
  questionText: "Jaką architekturę chmury należy zastosować, aby połączyć zasoby lokalne w data center z chmurą Azure i zarządzać nimi jako jedną infrastrukturą?",
  optionsForReference: [
    "Chmura publiczna",
    "Chmura hybrydowa",
    "Chmura prywatna",
    "Chmura społecznościowa"
  ],
  correctAnswersText: [
    "Chmura hybrydowa"
  ]
},
{
  id: "AZ900_P30",
  questionText: "Jaką usługę Azure powinieneś użyć do globalnego rozproszenia użytkowników i równoważenia ruchu między wieloma regionami?",
  optionsForReference: [
    "Azure Blob Storage",
    "Azure Virtual Machines",
    "Azure Traffic Manager",
    "Azure DevOps"
  ],
  correctAnswersText: [
    "Azure Traffic Manager"
  ]
},
{
  id: "AZ900_P31",
  questionText: "Jaką usługę Azure powinni wybrać DevOps, aby automatycznie zarządzać wdrożeniem, skalowaniem i aktualizacjami aplikacji webowych bez zarządzania VM?",
  optionsForReference: [
    "Azure Virtual Machines",
    "Azure Kubernetes Service",
    "Azure App Service",
    "Azure Blob Storage"
  ],
  correctAnswersText: [
    "Azure App Service"
  ]
},
{
  id: "AZ900_P32",
  questionText: "Jaką cechę Azure należy uwzględnić, aby wszystkie dane były przechowywane wyłącznie na terenie UE?",
  optionsForReference: [
    "Model płatności",
    "Lokalizację regionów (region Azure)",
    "Usługę monitorowania",
    "Usługę DNS"
  ],
  correctAnswersText: [
    "Lokalizację regionów (region Azure)"
  ]
},
{
  id: "AZ900_P33",
  questionText: "Jaką usługę należy wdrożyć, aby ochraniać zasoby Azure przed zagrożeniami, monitorować luki i automatyzować działania naprawcze?",
  optionsForReference: [
    "Azure DevOps",
    "Azure Monitor",
    "Azure Security Center",
    "Azure Active Directory"
  ],
  correctAnswersText: [
    "Azure Security Center"
  ]
},
{
  id: "AZ900_P34",
  questionText: "Którego rozwiązania powinni użyć, aby zapewnić rozproszony system uwierzytelniania i zarządzania tożsamościami użytkowników w wielu aplikacjach?",
  optionsForReference: [
    "Azure Blob Storage",
    "Azure Virtual Machines",
    "Azure Active Directory (Azure AD)",
    "Azure Functions"
  ],
  correctAnswersText: [
    "Azure Active Directory (Azure AD)"
  ]
},
{
  id: "AZ900_P35",
  questionText: "Która usługa umożliwia analizę kosztów i zużycia zasobów w Azure oraz optymalizację wydatków?",
  optionsForReference: [
    "Azure DevOps",
    "Azure Security Center",
    "Azure Cost Management + Billing",
    "Azure Monitor"
  ],
  correctAnswersText: [
    "Azure Cost Management + Billing"
  ]
},
{
  id: "AZ900_P36",
  questionText: "Jaką cechę Azure wykorzystasz, aby środowisko testowe można było szybko tworzyć i usuwać bez ponoszenia niepotrzebnych kosztów?",
  optionsForReference: [
    "Skalowalność",
    "Trwałość danych",
    "Elastyczność i szybkość tworzenia zasobów",
    "Dostępność 24/7"
  ],
  correctAnswersText: [
    "Elastyczność i szybkość tworzenia zasobów"
  ]
},
{
  id: "AZ900_P37",
  questionText: "Firma chce używać narzędzia do zarządzania cyklem życia aplikacji, od kodu do wdrożenia w Azure. Co wybrać?",
  optionsForReference: [
    "Azure Monitor",
    "Azure Security Center",
    "Azure DevOps",
    "Azure Active Directory"
  ],
  correctAnswersText: [
    "Azure DevOps"
  ]
},
{
  id: "AZ900_P38",
  questionText: "Jakiego rozwiązania serverless użyjesz, które automatycznie skaluje się i rozlicza za czas wykonywania funkcji?",
  optionsForReference: [
    "Azure Virtual Machines",
    "Azure App Service",
    "Azure Functions",
    "Azure Kubernetes Service"
  ],
  correctAnswersText: [
    "Azure Functions"
  ]
},
{
  id: "AZ900_P39",
  questionText: "Twoja aplikacja wymaga globalnego, niskolatencyjnego dostępu do danych rozproszonych geograficznie. Której bazy danych użyjesz?",
  optionsForReference: [
    "Azure SQL Database",
    "Azure Blob Storage",
    "Azure Cosmos DB",
    "Azure Data Lake"
  ],
  correctAnswersText: [
    "Azure Cosmos DB"
  ]
},
{
  id: "AZ900_P40",
  questionText: "Które narzędzie umożliwi wymuszenie silnych haseł i okresowych zmian haseł w kontach użytkowników w Azure?",
  optionsForReference: [
    "Azure Security Center",
    "Azure DevOps",
    "Azure Active Directory Password Policies",
    "Azure Active Directory"
  ],
  correctAnswersText: [
    "Azure Active Directory Password Policies"
  ]
},
{
  id: "AZ900_P41",
  questionText: "Jaką korzyść zapewni szyfrowanie automatyczne zarządzane przez platformę dla danych przechowywanych w Azure Storage?",
  optionsForReference: [
    "Backup danych",
    "Encryption-at-rest",
    "Replikację danych",
    "Monitoring"
  ],
  correctAnswersText: [
    "Encryption-at-rest"
  ]
},
{
  id: "AZ900_P42",
  questionText: "Co wybierzesz, aby szybko tworzyć infrastrukturę Azure za pomocą deklaratywnego pliku JSON lub YAML?",
  optionsForReference: [
    "Azure Portal",
    "Azure Resource Manager (ARM) Templates",
    "Azure CLI",
    "Azure Monitor"
  ],
  correctAnswersText: [
    "Azure Resource Manager (ARM) Templates"
  ]
},
{
  id: "AZ900_P43",
  questionText: "Jaka usługa Azure jest najlepsza do przechowywania dużych ilości danych analitycznych podlegających przetwarzaniu Big Data?",
  optionsForReference: [
    "Azure SQL Database",
    "Azure Cosmos DB",
    "Azure Data Lake Storage",
    "Azure Blob Storage"
  ],
  correctAnswersText: [
    "Azure Data Lake Storage"
  ]
},
{
  id: "AZ900_P44",
  questionText: "Co zastosujesz, aby zmniejszyć ryzyko awarii pojedynczego centrum danych w Azure?",
  optionsForReference: [
    "Azure Virtual Machines",
    "Azure Availability Zones",
    "Azure DevOps",
    "Azure Active Directory"
  ],
  correctAnswersText: [
    "Azure Availability Zones"
  ]
},

  // === AZ-900 Pytania Wielokrotnego Wyboru ===
  // (Usunięto pytania AZ900_WM1-WM6 które były w formacie Tak/Nie lub nie były na nowej liście)
  {
    id: "AZ900_WM1", // Dawniej Pytanie 1 z nowej listy
    questionText: "Obliczenia w chmurze to model dostarczania jakich czterech typów usług?",
    optionsForReference: [
        "Pamięć (Storage)",
        "Analizy (Analytics)",
        "Dane (Data)",
        "Moc obliczeniowa (Compute Power)",
        "Usługi o stałej cenie (Fixed-price services)",
        "Sieć (Networking)",
        "Hybrydowe rozwiązania (Hybrid)"
    ],
    correctAnswersText: ["Pamięć (Storage)", "Analizy (Analytics)", "Moc obliczeniowa (Compute Power)", "Sieć (Networking)"]
  },
  {
    id: "AZ900_WM2", // Dawniej Pytanie 2 z nowej listy
    questionText: "Które cztery cechy najlepiej opisują model rozliczeń oparty na zużyciu („płać za to, co zużywasz”)?",
    optionsForReference: [
        "Brak marnowania zasobów (No wasted resources)",
        "Przedpłata (Upfront payment)",
        "Płać za to, co wykorzystasz (Pay for what you use)",
        "Licencjonowanie wolumenowe (Volume licensing)",
        "Przestajesz płacić, gdy nie potrzebujesz zasobów (Stop paying when you don’t need resources)",
        "Brak przedpłaty (No upfront payment)"
    ],
    correctAnswersText: ["Brak marnowania zasobów (No wasted resources)", "Płać za to, co wykorzystasz (Pay for what you use)", "Przestajesz płacić, gdy nie potrzebujesz zasobów (Stop paying when you don’t need resources)", "Brak przedpłaty (No upfront payment)"]
  },
  {
    id: "AZ900_WM3", // Dawniej Pytanie 3 z nowej listy
    questionText: "Które z poniższych zabezpieczają aplikację przed katastrofą obejmującą cały region? Wybierz dwie najbardziej odpowiednie opcje.",
    optionsForReference: [
        "Centra danych (Data Centers)",
        "Strefy dostępności (Availability Zones)",
        "Regiony (Regions)",
        "Pary regionów (Region Pairs)",
        "Jednostki geograficzne (Geographies)"
    ],
    correctAnswersText: ["Pary regionów (Region Pairs)", "Jednostki geograficzne (Geographies)"]
  },
  {
    id: "AZ900_WM4", // Dawniej Pytanie 4 z nowej listy
    questionText: "Wybierz cztery zdania, które najlepiej opisują parę regionów w Azure.",
    optionsForReference: [
        "Wszystkie regiony Azure mają swoją parę regionów.",
        "Każdy region zawsze ma przypisaną co najmniej jedną parę.",
        "Pary regionów są projektowane w celu łatwej migracji między regionami.",
        "Aktualizacje w parach regionów są synchronizowane, aby nie odbywały się w tym samym czasie.",
        "Użytkownicy mogą wybrać, z którym regionem ich region zostanie sparowany.",
        "Każdy region zawsze ma dokładnie jedną przypisaną parę.",
        "Wdrażanie w parach regionów pozwala zachować rezydencję danych."
    ],
    correctAnswersText: ["Wszystkie regiony Azure mają swoją parę regionów.", "Aktualizacje w parach regionów są synchronizowane, aby nie odbywały się w tym samym czasie.", "Każdy region zawsze ma dokładnie jedną przypisaną parę.", "Wdrażanie w parach regionów pozwala zachować rezydencję danych."]
  },
  {
    id: "AZ900_WM5", // Dawniej Pytanie 5 z nowej listy
    questionText: "Których usług można użyć do hostowania konteneryzowanej aplikacji internetowej?",
    optionsForReference: [
        "Azure App Service",
        "Maszyny wirtualne (Virtual Machine)",
        "Azure Functions",
        "Azure Kubernetes Service",
        "Virtual Machine Scale Sets",
        "Container Instances"
    ],
    correctAnswersText: ["Azure App Service", "Azure Kubernetes Service", "Container Instances"]
  },
  {
    id: "AZ900_WM6", // Dawniej Pytanie 6 z nowej listy (dawniej WM7)
    questionText: "Które z poniższych są ofertami baz danych typu Platforma jako Usługa (PaaS) w Azure?",
    optionsForReference: [
        "SQL Server na maszynie wirtualnej Azure",
        "Azure Database for MySQL",
        "Prywatna chmura SQL Server",
        "Azure SQL Database",
        "Cosmos DB"
    ],
    correctAnswersText: ["Azure SQL Database", "Cosmos DB"] // Zgodnie z "Poprawne odpowiedzi: D, E"
  },
  {
    id: "AZ900_WM7", // Dawniej Pytanie 7 z nowej listy (dawniej WM8)
    questionText: "Które z poniższych usług są uważane za usługi bezserwerowe (serverless) w Azure?",
    optionsForReference: [
        "Azure Functions",
        "Azure Logic Apps",
        "Event Grid",
        "Azure Front Door",
        "Azure Data Lake Analytics",
        "App Services"
    ],
    correctAnswersText: ["Azure Functions", "Azure Logic Apps", "Event Grid"]
  },
  {
    id: "AZ900_WM8", // Dawniej Pytanie 8 z nowej listy (dawniej WM9)
    questionText: "Maszyny wirtualne Azure można przenosić między którymi z poniższych zasobów Azure?",
    optionsForReference: [
        "Subskrypcje",
        "Regiony",
        "Strefy Dostępności",
        "Zestawy Dostępności",
        "Grupy Zasobów"
    ],
    correctAnswersText: ["Subskrypcje", "Regiony", "Strefy Dostępności", "Grupy Zasobów"]
  },
  {
    id: "AZ900_WM9", // Dawniej Pytanie 9 z nowej listy (dawniej WM10)
    questionText: "Które z poniższych są dostępne w Azure Marketplace?",
    optionsForReference: [
        "Szablony rozwiązań",
        "Aplikacje SaaS",
        "Przykładowy kod aplikacji",
        "Obrazy maszyn wirtualnych"
    ],
    correctAnswersText: ["Szablony rozwiązań", "Aplikacje SaaS", "Obrazy maszyn wirtualnych"]
  },
  {
    id: "AZ900_WM10", // Dawniej Pytanie 10 z nowej listy (dawniej WM11)
    questionText: "Jakie metody są dostępne do połączenia z chmurą publiczną Azure?",
    optionsForReference: [
        "VPN typu klient-lokacja lub lokacja-lokacja",
        "Przez internet",
        "Fizycznie w centrum danych Azure",
        "ExpressRoute"
    ],
    correctAnswersText: ["VPN typu klient-lokacja lub lokacja-lokacja", "Przez internet", "ExpressRoute"]
  },
  {
    id: "AZ900_WM11", // Dawniej Pytanie 11 z nowej listy (dawniej WM12)
    questionText: "Jakie są cechy Strefy Dostępności (Availability Zone)?",
    optionsForReference: [
        "Strefy Dostępności dotyczą tylko Kont Magazynu.",
        "Każda strefa ma własne, izolowane zasilanie, chłodzenie i sieć.",
        "Każda strefa uruchamia inne usługi Azure.",
        "Strefy Dostępności istnieją w obrębie regionów.",
        "Strefy Dostępności chronią Twoje instancje przed awarią pojedynczego centrum danych."
    ],
    correctAnswersText: [
        "Każda strefa ma własne, izolowane zasilanie, chłodzenie i sieć.",
        "Strefy Dostępności istnieją w obrębie regionów.",
        "Strefy Dostępności chronią Twoje instancje przed awarią pojedynczego centrum danych."
    ]
  },
  {
    id: "AZ900_WM12", // Dawniej Pytanie 12 z nowej listy (dawniej WM13)
    questionText: "Które z poniższych stwierdzeń dotyczących przechowywanych zasad dostępu (stored access policies) są poprawne?",
    optionsForReference: [
        "Mogą być stosowane do kontenerów blob, udziałów plików, kolejki i tabel.",
        "Ograniczone do użycia na obiektach blob w kontenerze, a nie na samym kontenerze.",
        "Mogą być tworzone tylko w portalu Azure.",
        "Można zastosować wiele zasad do tego samego kontenera blob.",
        "Zawierają właściwości do definiowania uprawnień, czasu rozpoczęcia i czasu wygaśnięcia."
    ],
    correctAnswersText: [
        "Mogą być stosowane do kontenerów blob, udziałów plików, kolejki i tabel.",
        "Można zastosować wiele zasad do tego samego kontenera blob.",
        "Zawierają właściwości do definiowania uprawnień, czasu rozpoczęcia i czasu wygaśnięcia."
    ]
  },
  {
    id: "AZ900_WM13", // Dawniej Pytanie 13 z nowej listy (dawniej WM14)
    questionText: "Które z poniższych licencji Azure AD są dostępne przez Azure?",
    optionsForReference: [
        "Free",
        "Office 365",
        "Premium P1",
        "Premium P2"
    ],
    correctAnswersText: ["Premium P1", "Premium P2"]
  },
  {
    id: "AZ900_WM14", // Dawniej Pytanie 14 z nowej listy (dawniej WM15)
    questionText: "Jakie dwie funkcje zapewnia Azure AD?",
    optionsForReference: [
        "Uwierzytelnianie",
        "Autoryzacja",
        "Zarządzanie aplikacjami",
        "Zarządzanie urządzeniami"
    ],
    correctAnswersText: ["Uwierzytelnianie", "Zarządzanie aplikacjami"]
  },
  {
    id: "AZ900_WM15", // Dawniej Pytanie 15 z nowej listy (dawniej WM16)
    questionText: "Które z poniższych zasobów Azure zapewniają wsparcie klienta poprzez dostęp do często zadawanych pytań i odpowiedzi dostarczanych przez deweloperów Azure, testerów i innych klientów?",
    optionsForReference: [
        "The Knowledge Center",
        "The Trust Center",
        "Microsoft Developer Network Forums",
        "Azure Advisor"
    ],
    correctAnswersText: ["The Knowledge Center", "Microsoft Developer Network Forums"]
  },
  {
    id: "AZ900_WM16", // Dawniej Pytanie 16 z nowej listy (dawniej WM17)
    questionText: "Które z poniższych są korzyściami płynącymi z korzystania z chmurowych usług przechowywania danych Azure?",
    optionsForReference: [
        "Skalowalne i elastyczne",
        "Nie wymagają połączenia z internetem",
        "Dostęp do danych z dowolnego miejsca",
        "Stały koszt za pojemność przechowywania"
    ],
    correctAnswersText: ["Skalowalne i elastyczne", "Dostęp do danych z dowolnego miejsca"]
  },
  {
    id: "AZ900_WM17", // Dawniej Pytanie 17 z nowej listy (dawniej WM18)
    questionText: "Chcesz, aby Twój model wykrywał wytrenowane obiekty na zdjęciach. Jakie informacje uzyskasz o każdym obiekcie, jeśli używasz modelu detekcji obiektów?",
    optionsForReference: [
        "Typ obrazu",
        "Ramka otaczająca (Bounding box)",
        "Kategoria obrazu",
        "Nazwa klasy",
        "Wynik prawdopodobieństwa (Probability score)",
        "Nazwa zawartości"
    ],
    correctAnswersText: ["Ramka otaczająca (Bounding box)", "Nazwa klasy", "Wynik prawdopodobieństwa (Probability score)"]
  },
  {
    id: "AZ900_WM18", // Nowe Pytanie 18 z listy
    questionText: "Które usługi umożliwiają równomierne rozłożenie ruchu sieciowego pomiędzy wieloma instancjami?",
    optionsForReference: [
        "Azure Virtual Machine",
        "Virtual Network Gateway",
        "Azure Load Balancer",
        "Azure Application Gateway",
        "Azure Content Delivery Network"
    ],
    correctAnswersText: ["Azure Load Balancer", "Azure Application Gateway"]
  },
  {
  id: "AZ900_WM19",
  questionText: "Które z poniższych są podstawowymi kategoriami usług chmurowych?",
  optionsForReference: [
    "IaaS (Infrastructure as a Service)",
    "PaaS (Platform as a Service)",
    "CaaS (Communication as a Service)",
    "SaaS (Software as a Service)",
    "RaaS (Resource as a Service)"
  ],
  correctAnswersText: [
    "IaaS (Infrastructure as a Service)",
    "PaaS (Platform as a Service)",
    "SaaS (Software as a Service)"
  ]
},
{
  id: "AZ900_WM20",
  questionText: "Które z poniższych są korzyściami korzystania z chmury obliczeniowej?",
  optionsForReference: [
    "Skalowalność",
    "Wysokie koszty początkowe",
    "Elastyczność",
    "Brak konieczności zarządzania infrastrukturą fizyczną",
    "Całkowity brak kosztów eksploatacyjnych"
  ],
  correctAnswersText: [
    "Skalowalność",
    "Elastyczność",
    "Brak konieczności zarządzania infrastrukturą fizyczną"
  ]
},
{
  id: "AZ900_WM21",
  questionText: "Które z usług należą do kategorii IaaS?",
  optionsForReference: [
    "Azure Virtual Machines",
    "Azure SQL Database",
    "Azure Kubernetes Service",
    "Azure Functions",
    "Azure Blob Storage"
  ],
  correctAnswersText: [
    "Azure Virtual Machines",
    "Azure Kubernetes Service",
    "Azure Blob Storage"
  ]
},
{
  id: "AZ900_WM22",
  questionText: "Które z poniższych elementów stanowią odpowiedzialność dostawcy w modelu SaaS?",
  optionsForReference: [
    "Aplikacja",
    "Dane użytkownika",
    "System operacyjny",
    "Środowisko uruchomieniowe",
    "Urządzenia końcowe klienta"
  ],
  correctAnswersText: [
    "Aplikacja",
    "System operacyjny",
    "Środowisko uruchomieniowe"
  ]
},
{
  id: "AZ900_WM23",
  questionText: "Jakie z wymienionych poniżej typowe modele wdrożeniowe chmury można wskazać?",
  optionsForReference: [
    "Chmura publiczna",
    "Chmura lokalna",
    "Chmura prywatna",
    "Chmura hybrydowa",
    "Chmura sieciowa"
  ],
  correctAnswersText: [
    "Chmura publiczna",
    "Chmura prywatna",
    "Chmura hybrydowa"
  ]
},
{
  id: "AZ900_WM24",
  questionText: "Co cechuje chmurę hybrydową?",
  optionsForReference: [
    "Łączy infrastrukturę lokalną z chmurą publiczną",
    "Jest mniej elastyczna niż chmura prywatna",
    "Wspiera migrację danych między lokalnym środowiskiem a chmurą",
    "Oferuje tylko rozwiązania PaaS",
    "Zapewnia redundancję geograficzną"
  ],
  correctAnswersText: [
    "Łączy infrastrukturę lokalną z chmurą publiczną",
    "Wspiera migrację danych między lokalnym środowiskiem a chmurą",
    "Zapewnia redundancję geograficzną"
  ]
},
{
  id: "AZ900_WM25",
  questionText: "Co umożliwia Azure Resource Manager (ARM)?",
  optionsForReference: [
    "Tworzenie i zarządzanie zasobami jako grupa",
    "Instalowanie aplikacji mobilnych",
    "Udostępnianie serwisów lokalnych",
    "Stosowanie szablonów infrastruktury jako kodu",
    "Zarządzanie licencjami Office 365"
  ],
  correctAnswersText: [
    "Tworzenie i zarządzanie zasobami jako grupa",
    "Stosowanie szablonów infrastruktury jako kodu"
  ]
},
{
  id: "AZ900_WM26",
  questionText: "Które funkcje oferuje Azure Advisor?",
  optionsForReference: [
    "Rekomendacje dotyczące optymalizacji kosztów",
    "Zwiększanie opóźnień sieciowych",
    "Usprawnianie bezpieczeństwa zasobów",
    "Tworzenie aplikacji mobilnych",
    "Poprawa wydajności zasobów"
  ],
  correctAnswersText: [
    "Rekomendacje dotyczące optymalizacji kosztów",
    "Usprawnianie bezpieczeństwa zasobów",
    "Poprawa wydajności zasobów"
  ]
}
];