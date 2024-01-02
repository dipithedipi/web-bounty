# SecureTest Platform: Tranquillità nella Sicurezza del Software

## Problema:
La crescente complessità del panorama software porta con sé il rischio sempre presente di vulnerabilità e minacce alla sicurezza. In un mondo in cui la digitalizzazione è imperante, come possiamo essere certi che i nuovi software siano davvero sicuri?

## Soluzione:
SecureTest è la risposta. Una piattaforma dedicata alla sicurezza del software che connette aziende o privati con esperti di sicurezza indipendenti di alto livello. L'obiettivo è individuare e risolvere problemi di sicurezza in modo rapido ed efficace, garantendo la massima protezione per tutti.

### Come Funziona:
1. **Carica il tuo Software**: Aziende e privati possono caricare i loro software, che vengono categorizzati come pubblici o privati.
   
2. **Esperti di Sicurezza Qualificati**: Esperti di sicurezza indipendenti, accuratamente selezionati, accettano incarichi di test su questi software. Ogni esperto è verificato attraverso documenti forniti al momento della registrazione.

3. **Report e Verifica**: Gli esperti consegnano dettagliati report sulle vulnerabilità individuate. Ogni report viene attentamente verificato dalla piattaforma SecureTest per garantire la sua accuratezza e completezza.

4. **Ricompense in Base alla Severità**: Gli esperti vengono ricompensati in base alla severità delle vulnerabilità trovate. Un sistema di punteggio di reputazione assicura che gli esperti di sicurezza siano incentivati a fornire servizi di alta qualità.

5. **Massima Riservatezza**: I software privati sono trattati con la massima riservatezza. Gli esperti che desiderano accedere a incarichi privati devono superare rigorosi controlli e fornire documenti di identificazione.

## Vantaggi:
- **Sicurezza Garantita**: Grazie a esperti qualificati e processi di verifica accurati, SecureTest garantisce la massima sicurezza per i tuoi software.
  
- **Risparmio di Tempo e Risorse**: Identifica e risolvi rapidamente le vulnerabilità senza dover investire in costosi team di sicurezza interni.

- **Reputazione e Ricompense**: Gli esperti guadagnano non solo ricompense monetarie ma anche una reputazione nel settore della sicurezza informatica.

Con SecureTest, il futuro dei tuoi software è nelle mani di esperti fidati. Rendiamo il digitale più sicuro, un test alla volta.


## Specifica dei requisiti(SRS)
# Funzionalità:

## Requisiti di Autenticazione:
1.1. **Registrazione (funzionale)**
   - Gli utenti devono poter registrare un nuovo account fornendo le informazioni richieste, tra cui nome, email e password.
   - Il sistema deve verificare l'unicità dell'indirizzo email e garantire la complessità della password.

1.2. **Login (funzionale)**
   - Gli utenti registrati devono poter effettuare l'accesso al sistema utilizzando le loro credenziali.

1.3. **Tipi di account (funzionale)**
   - Il sistema deve supportare diversi tipi di account con funzionalità diverse, ad esempio: amministratori, tester, aziende, privati, ecc.
   - Ogni tipo di account avrà privilegi specifici e permessi associati.

## Requisiti di Verifica degli Utenti:
2.1. **Verifica dei documenti (funzionale)**
   - Gli utenti devono poter inviare documenti richiesti (come documenti d'identità, certificazioni, ecc.) per verificare la loro identità.
   - Il sistema deve avere un processo di verifica per approvare o rifiutare i documenti inviati dagli utenti.

# Requisiti del Sistema di Incarichi:
3.1. **Caricamento di software da testare (funzionale)**
   - Le società o privati devono poter caricare programmi, API, kernel o altro software da sottoporre a test.
   - Il sistema deve consentire il caricamento di dettagli sulla natura del software e sui requisiti del test.

3.2. **Assegnazione degli incarichi (funzionale)**
   - Il sistema deve assegnare gli incarichi di testing agli utenti sulla base dei loro livelli di reputazione e delle competenze.
   - Gli incarichi devono essere assegnati in modo equo, evitando conflitti di interesse.

3.3. **Ricompense monetarie (funzionale)**
   - Dopo il completamento dell'incarico, il sistema deve calcolare e fornire le ricompense monetarie agli utenti in base al successo del test.
   - Le transazioni finanziarie devono essere sicure e tracciate.

## Requisiti di Sicurezza:
4.1. **Confidenzialità dei programmi privati (dominio/funzionale)**
   - Il sistema deve garantire che i programmi privati sottoposti a test non vengano divulgati o accessibili a persone non autorizzate.
   - Deve essere implementato un rigoroso controllo degli accessi e delle autorizzazioni.

4.2. **Sicurezza dei dati utente (dominio)**
   - I dati personali degli utenti e i documenti inviati per la verifica devono essere protetti da accessi non autorizzati.
   - Devono essere adottate pratiche di sicurezza standard per la gestione dei dati.

# Requisiti di Conformità e Archiviazione:
5.1. **Conformità legale (dominio)**
   - Il sistema deve rispettare tutte le leggi e regolamenti locali, nazionali e internazionali relativi alla protezione dei dati, alla privacy e alla sicurezza.

5.2. **Archiviazione dei dati (dominio)**
   - Il sistema deve seguire le normative riguardanti la conservazione e l'archiviazione dei dati, inclusi i tempi di conservazione e i requisiti di accessibilità dei dati.

# Requisiti di Sicurezza Aggiuntivi:
5.3. **Rilevamento delle minacce (non funzionale)**
   - Il sistema deve essere in grado di rilevare e rispondere alle minacce di sicurezza, compresi attacchi informatici, intrusioni o tentativi di frode.

5.4. **Backup e ripristino dei dati (non funzionale)**
   - Il sistema deve implementare procedure di backup regolari e processi di ripristino dei dati per garantire la continuità operativa in caso di perdita di dati o guasti.

# Requisiti di Interfaccia Utente:
6.1. **Dashboard dell'utente (funzionale)**
   - Ogni utente registrato deve avere accesso a una dashboard personalizzata che mostri gli incarichi attivi, la loro reputazione, i guadagni e altre informazioni pertinenti.

6.2. **Elenco degli incarichi (funzionale)**
   - Gli utenti devono poter visualizzare un elenco di tutti gli incarichi disponibili, inclusi quelli pubblici e quelli privati.
   - Deve essere possibile filtrare e cercare gli incarichi in base a diversi criteri.

6.3. **Chat o sistema di messaggistica (funzionale)**
   - Gli utenti devono poter comunicare tra loro, compresi tester, aziende e privati, attraverso un sistema di messaggistica interno.
   - Questo sistema deve consentire la comunicazione in modo sicuro e tracciabile.

# Requisiti di Report e Valutazione:
7.1. **Generazione di report (funzionale)**
   - Gli esperti di sicurezza devono poter compilare e inviare report dettagliati sugli incarichi di testing.
   - I report devono includere informazioni sulle vulnerabilità trovate, i passaggi seguiti e le raccomandazioni per la correzione.

7.2. **Valutazione dei report (funzionale)**
   - Il sistema deve consentire agli utenti o alle aziende che hanno richiesto il testing di valutare i report ricevuti.
   - Deve esserci un meccanismo per la risoluzione delle dispute in caso di divergenze tra tester e richiedenti.

# Requisiti di Reputazione e Feedback:
8.1. **Sistema di feedback (funzionale)**
   - Gli utenti devono poter lasciare feedback e recensioni sugli esperti di sicurezza dopo aver completato un incarico.
   - La reputazione degli esperti deve essere basata su feedback e valutazioni da parte degli utenti.

8.2. **Livelli di reputazione (funzionale)**
   - Il sistema deve avere una struttura di livelli di reputazione che rifletta l'esperienza e le capacità degli esperti.
   - I premi e i vantaggi devono essere legati ai livelli di reputazione.

# Requisiti di Notifiche:
9.1. **Notifiche in tempo reale (funzionale)**
   - Il sistema deve inviare notifiche in tempo reale agli utenti per informarli sugli aggiornamenti degli incarichi, nuovi messaggi e altri eventi rilevanti.

9.2. **Notifiche di scadenze (funzionale)**
   - Gli utenti devono ricevere notifiche riguardo alle scadenze degli incarichi e agli obblighi contrattuali.

# Requisiti di Monitoraggio e Reporting:
10.1. **Monitoraggio delle attività (non funzionale)**
   - Il sistema deve registrare e monitorare tutte le attività degli utenti, inclusi gli accessi, le modifiche dei dati e le transazioni finanziarie.

10.2. **Reporting e audit (non funzionale)**
   - Deve essere possibile generare report periodici sulle attività e le transazioni del sistema per scopi di audit e conformità.

# Requisiti di Scalabilità:
11.1. **Gestione della crescita (non funzionale)**
   - Il sistema deve essere progettato per gestire un numero crescente di utenti, incarichi e dati senza compromettere le prestazioni.

11.2. **Risorse elastiche (non funzionale)**
   - Deve essere possibile scalare orizzontalmente le risorse del sistema per adattarsi alle esigenze in crescita.


# Casi d'uso:
<img src="documentazione_gep\uml\uml.jpg">


# Work breakdown structure:
<img src="documentazione_gep\Web_Bounty_wbs.png">
