HE Race - I Risultati / app web
================================

Contenuto della cartella (caricare tutto insieme, stessa cartella):
  index.html          la pagina (codice indentato e leggibile)
  support.js          runtime dei componenti
  logo.png            logo in alto a destra
  titolo-herace.png   lockup del titolo
  herace-data.json    (creato dal pannello GitHub: dati pubblicati)

Come pubblicare
---------------
Copiare i 4 file in una cartella del server web e aprire index.html
via http:// o https:// (es. https://tuodominio.it/herace/).
Non serve PHP, database o build: sono file statici.

Font (Barlow Condensed, Anton) e la libreria di export PNG (html2canvas)
vengono caricati da CDN: serve connessione internet.

Note
----
- Dati e foto inseriti restano salvati nel browser di chi usa la pagina
  (localStorage): ogni postazione ha la propria copia.
- L'esportazione PNG avviene interamente nel browser.

Salvataggio su GitHub Pages (tasto "GitHub" in basso a sinistra)
---------------------------------------------------------------
Il pannello contiene solo il campo del token e due tasti:

  Salva token       verifica il token e lo memorizza in questo browser
  Dimentica token   lo cancella

Repository, branch e cartella vengono ricavati da soli dall'indirizzo
della pagina (utente.github.io/nome-repo/...) e dal branch predefinito
del repo: per questo il token va inserito con la pagina aperta
dall'URL di GitHub Pages, non da file locale.

Token consigliato: fine-grained (Settings > Developer settings >
Personal access tokens > Fine-grained tokens), con accesso al SOLO
repo del sito e permesso Repository permissions > Contents:
Read and write. Un classic token con scope "repo" funziona ugualmente.

Con il token salvato non serve altro: ogni modifica (classifica, podio,
import, foto) viene pubblicata da sola qualche secondo dopo l'ultima
modifica, accorpando le modifiche ravvicinate in un solo commit.
Le foto diventano file immagine nel repo (herace-foto-1/2/3), i dati
finiscono in herace-data.json.

Il pallino sul tasto indica lo stato:
  grigio  nessun token, si salva solo nel browser
  verde   tutto pubblicato
  giallo  modifiche in attesa o pubblicazione in corso
  rosso   errore (il testo nel pannello dice quale)

All'apertura la pagina legge herace-data.json: se e' piu' recente della
copia locale, mostra la versione pubblicata. Quindi chiunque apra il
link vede gli ultimi risultati salvati, senza token.

Dopo il salvataggio GitHub Pages rigenera il sito in circa un minuto.
Il pannello non compare nel PNG esportato.

Attenzione: il token resta in localStorage del browser che lo inserisce.
Non usarlo su postazioni condivise e revocalo se non serve piu'.
