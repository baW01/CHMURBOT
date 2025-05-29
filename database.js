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
  }
];