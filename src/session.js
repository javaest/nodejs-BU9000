const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');

// Middleware für JSON Parsing (falls du POST-Daten benötigst)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session Middleware
app.use(session({
  secret: 'mein-geheimer-schluessel',  // Geheimen Schlüssel für das Signieren der Session-ID
  resave: false,                      // Verhindert, dass die Session bei jeder Anfrage zurückgesetzt wird
  saveUninitialized: true,            // Speichert die Session auch ohne Veränderungen
  cookie: { secure: false }           // Secure setzen, wenn du HTTPS verwendest
}));

// Route für die Login-Seite
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));  // Senden der login.html-Seite
});
app.get('/get-username', (req, res) => {
    if (req.session.user) {
      res.json({ username: req.session.user });  // Sendet den Benutzernamen an den Client
    } else {
      res.status(401).json({ error: 'Nicht angemeldet' });
    }
  });
  
// Route zum Bearbeiten des Login-Formulars
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Einfache Benutzerüberprüfung (dies sollte durch sichere Authentifizierung ersetzt werden)
  if (username === 'admin' && password === 'password123') {
    req.session.user = username;  // Speichern des Benutzernamens in der Session
    return res.redirect('/content');  // Umleitung zur zweiten Seite nach dem Login
  } else {
    return res.status(401).send('Falsche Anmeldedaten');  // Fehlermeldung, wenn die Anmeldedaten falsch sind
  }
});

// Route für die "Context"-Seite nach dem Login
app.get('/content', (req, res) => {
  if (!req.session.user) {
    return res.status(403).send('Zugriff verweigert. Bitte anmelden.');  // Zugriff verweigern, wenn der Benutzer nicht eingeloggt ist
  }

  // Nach erfolgreichem Login: Anzeige der "Context"-Seite
  res.sendFile(path.join(__dirname, 'views', 'content.html'));
});

// Logout-Route zum Abmelden
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Fehler beim Abmelden');
    }
    res.status(200).send('Erfolgreich abgemeldet');
  });
});

// Server starten
app.listen(3000, () => {
  console.log('Server läuft auf http://localhost:3000');
});
