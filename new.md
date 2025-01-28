# Einführung in Node.js und Express.js

## Was ist Node.js?
- **Node.js** ist eine serverseitige JavaScript-Laufzeitumgebung, die auf der **V8 JavaScript-Engine** (Chrome) basiert.
- Ermöglicht das Ausführen von JavaScript außerhalb des Browsers.
- Ideal für die Entwicklung von skalierbaren, ereignisgesteuerten Anwendungen.

### Vorteile von Node.js
- **Asynchron und Nicht-Blockierend**: Perfekt für Echtzeitanwendungen wie Chats oder Streaming.
- **Einheitliche Sprache**: Verwende JavaScript sowohl für das Frontend als auch das Backend.
- **Große Community**: Viele Open-Source-Pakete über **npm** (Node Package Manager).

---

## Was ist Express.js?
- **Express.js** ist ein minimaler und flexibler Web-Framework für Node.js.
- Bietet Tools, um Web-Apps und APIs effizient zu entwickeln.
- Ermöglicht das einfache Erstellen von Servern und Routen.

### Vorteile von Express.js
- Einfach zu verwenden, aber erweiterbar.
- Unterstützt Middleware für komplexe Funktionen wie Authentifizierung oder Datenverarbeitung.
- Große Community mit vielen Tutorials und Paketen.

---
## Aufgabe:

1. Öffnen Sie das folgende Repository in Codespaces:  
   [Klicken Sie hier, um das Repository zu öffnen](https://github.com/MicrosoftDocs/node-essentials?tab=readme-ov-file).

2. Wechseln Sie im integrierten Terminal in das Verzeichnis `nodejs-http\3-final-solution...`.

3. Initialisieren Sie ein neues Node.js-Projekt:
   - `npm init -y`

4. Installieren Sie Express.js:
   - `npm install express`

5. Führen Sie den Code aus:
   - `node app.js`

6. Öffnen Sie den Link zur gehosteten Seite im Browser.

7. Finden Sie im Code die Route für den Endpunkt und fügen Sie diese zur URL hinzu, um auf die Ressourcen über den Link der gehosteten Seite zuzugreifen.

8. Wechseln Sie im Terminal in das Verzeichnis `nodejs-http\5-final-solution....`

9. In dieser Version der Anwendung ist nun einer der Endpoints durch eine Authentifizierung geschützt.

10. Initialisieren und starten Sie die Anwendung wie in der vorherigen Aufgabe beschrieben.

11. Nutzen Sie die Datei `client.js`, um die Authentifizierung zu testen.

12. Überprüfen Sie, ob der geschützte Endpoint auch mit **Postman** getestet werden kann.

13. Bearbeiten Sie die Aufgaben der `readme.md'.
