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

# User Stories:

- Come utente, voglio poter visualizzare la mia reputazione sulla piattaforma, basata su feedback e valutazioni ricevute, per avere una chiara indicazione delle mie competenze e affidabilità.

- Come azienda, voglio poter registrare un nuovo account sulla piattaforma SecureTest fornendo le informazioni richieste, tra cui nome, email e password, per poter iniziare a utilizzare i servizi di sicurezza offerti da esperti qualificati.

- Come tester esperto, voglio poter effettuare il login al sistema utilizzando le mie credenziali, per poter accettare incarichi di test e contribuire alla sicurezza del software.

- Come azienda o privato, voglio poter caricare il mio software sulla piattaforma SecureTest, indicando se è pubblico o privato, per poter beneficiare di un test di sicurezza accurato e personalizzato.

- Come esperto di sicurezza, voglio ricevere notifiche in tempo reale sugli incarichi disponibili, per poter scegliere quelli che corrispondono alle mie competenze e interessi.

- Come amministratore del sistema, voglio poter verificare i documenti inviati dagli utenti per la loro identità, per garantire la qualifica degli esperti e la sicurezza della piattaforma.

- Come azienda, voglio poter assegnare un incarico di testing a uno specifico esperto, per garantire che il progetto venga gestito da un professionista qualificato.

- Come utente registrato, voglio poter visualizzare una dashboard personalizzata, dove posso monitorare gli incarichi attivi, la mia reputazione e i guadagni accumulati.

- Come esperto di sicurezza, voglio avere una chat diretta con l'azienda o il privato nel caso sia necessario chiarire qualcosa

- Come esperto di sicurezza, voglio poter ricevere ricompense finanziarie in base alla severità delle vulnerabilità individuate, per essere incentivato a fornire un servizio di alta qualità.

- Come esperto di sicurezza, voglio poter contattare una azienda e reportare una vulnerabilità anche se l'azienda non ha richiesto nessun test su quel prodotto software

# STARTUP PIVOT

## Introduzione

SecureTest è una piattaforma che mira a collegare aziende e privati con esperti di sicurezza informatica indipendenti per testare e risolvere vulnerabilità software. Tuttavia, dopo un'analisi approfondita del mercato e dei feedback degli utenti, è emersa la necessità di un pivot per garantire il successo a lungo termine della piattaforma.

## Problema attuale

Il problema principale di SecureTest è la scarsa acquisizione di aziende. La piattaforma vanta un pool di esperti qualificati e un sistema di verifica rigoroso, tuttavia, non è riuscita ad attirare un numero sufficiente di aziende per richiedere i suoi servizi.

## Motivi del problema

Le ragioni di questa scarsa acquisizione possono essere diverse:

- Mancanza di consapevolezza: Le aziende potrebbero non essere a conoscenza dell'esistenza di SecureTest o dei benefici offerti dalla sua piattaforma.
- Percezione del valore: Le aziende potrebbero non percepire il valore del testing di sicurezza software o non essere disposte a investire in questo servizio.
- Concorrenza: Esistono diverse piattaforme simili sul mercato che offrono servizi simili, creando un ambiente competitivo.
- Fiducia: Le aziende potrebbero essere riluttanti a condividere i loro software privati con una piattaforma online, temendo per la sicurezza dei loro dati.

## Soluzione proposta: Pivot verso un modello focalizzato sui privati

Per affrontare questi problemi, proponiamo un pivot che orienti SecureTest verso un modello focalizzato sui privati.

In questo nuovo modello, la piattaforma si concentrerà su:

- Fornire servizi di testing di sicurezza a privati e sviluppatori individuali.
- Creare una community di utenti appassionati di sicurezza informatica.
- Offrire risorse educative e formative sulla sicurezza informatica.

### Vantaggi del pivot:

- Maggiore bacino di utenza: I privati rappresentano un bacino di utenza potenzialmente molto più ampio rispetto alle aziende.
- Minore concorrenza: Nel mercato del testing di sicurezza per privati la concorrenza è meno intensa.
- Maggiore fiducia: I privati potrebbero essere più propensi a fidarsi di una piattaforma che si concentra sulla sicurezza dei loro dati personali.
- Creazione di una community: Una community di utenti appassionati può generare passaparola positivo e promuovere la crescita della piattaforma.
- Opportunità di monetizzazione: La piattaforma può generare entrate attraverso abbonamenti, pubblicità e servizi a valore aggiunto per i membri della community.

## Come implementare il pivot:

- Ricolineamento del marketing e del branding: Il sito web, i materiali di marketing e i messaggi chiave devono essere riorientati per attrarre privati e sviluppatori.

# MULTYTENTATNCY
SecureTest nasce direttamente con l'idea di multi-tenancy
## Riassumento Strategie Multi-Tenant

### 1. Progettazione del Database

- Creare un database o uno schema separato per ogni tenant per isolare i dati e impedire l'accesso inter-tenant.
- Implementare identificatori specifici per tenant nelle query e nelle tabelle del database.
- Valutare l'utilizzo di un database condiviso con meccanismi di controllo degli accessi rigorosi e partizionamento dei dati a livello di tenant.

### 2. Architettura dell'Applicazione

- Impiegare un'architettura multi-tenant che separa i dati e le configurazioni specifiche del tenant dai componenti dell'applicazione condivisa.
- Utilizzare identificatori tenant nella logica applicativa e nell'accesso ai dati.
- Implementare il routing e le strutture URL specifiche del tenant.

### 3. Gestione dei Tenant

- Sviluppare un robusto sistema di gestione dei tenant.
- Implementare processi di provisioning e onboarding dei tenant.
- Fornire agli amministratori dei tenant strumenti per gestire le impostazioni, gli utenti e l'accesso ai dati.

### 4. Autenticazione e Autorizzazione Utente

- Implementare meccanismi di autenticazione e autorizzazione consapevoli del tenant.
- Memorizzare le credenziali utente e gli elenchi di controllo degli accessi (ACL) specifici del tenant.
- Utilizzare identificatori tenant nei token di autenticazione e nei controlli di autorizzazione.

### 5. Sicurezza e Isolamento dei Dati

- Implementare rigorosi controlli dell'accesso ai dati e meccanismi di crittografia.
- Applicare la segregazione dei dati a tutti i livelli.
- Eseguire regolarmente audit e monitoraggio dell'accesso ai dati dei tenant.

### 6. Isolamento e Scalabilità delle Risorse

- Implementare meccanismi di isolamento delle risorse.
- Utilizzare quote di risorse e strumenti di monitoraggio.
- Impiegare un'infrastruttura scalabile.

### 7. Branding e Personalizzazione Specifici del Tenant

- Consentire ai tenant di personalizzare il branding della propria applicazione.
- Fornire agli amministratori dei tenant strumenti per configurare impostazioni e preferenze specifiche.
- Consentire ai tenant di aggiungere moduli o integrazioni personalizzati.

