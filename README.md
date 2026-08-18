# Handball Regelfragen-Test

Eine kleine, eigenständige Web-App zum Testen des eigenen Wissens über die
offiziellen Handballregeln (Spielfeld, Zeitregeln, Spielerregeln, Torwart,
Fouls & Strafen, Wurfarten).

## Nutzung

Kein Build-Prozess nötig – einfach `index.html` im Browser öffnen, oder
lokal servieren, z. B.:

```bash
python3 -m http.server 8000
```

und danach `http://localhost:8000` aufrufen.

## Funktionen

- Auswahl der Fragenanzahl (10, 20 oder alle Fragen)
- Zufällige Reihenfolge von Fragen und Antwortoptionen bei jedem Durchlauf
- Direktes Feedback mit Erklärung nach jeder Antwort
- Fortschrittsanzeige und laufender Punktestand
- Abschlussauswertung mit Prozentwertung und Liste der falsch beantworteten
  Fragen zum Nacharbeiten

## Struktur

- `index.html` – Seitenstruktur
- `style.css` – Styling
- `questions.js` – Fragenkatalog (leicht erweiterbar)
- `script.js` – Quiz-Logik
