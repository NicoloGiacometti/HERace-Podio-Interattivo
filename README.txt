HE Race - I Risultati / app web
================================

Contenuto della cartella (caricare tutto insieme, stessa cartella):
  index.html          la pagina (codice indentato e leggibile)
  support.js          runtime dei componenti
  logo.png            logo in alto a destra
  titolo-herace.png   lockup del titolo

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
