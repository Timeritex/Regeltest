# Handball Regelfragen-Test

Eine eigenständige Web-App mit dem vollständigen **offiziellen DHB-Regelfragenkatalog,
Stand 01.2026** – 432 Prüfungsfragen aus den Kapiteln 1–18 sowie dem
Auswechselraum-Reglement (ARR), inklusive der amtlichen Musterlösungen und
Regelbezüge.

## Nutzung

Kein Build-Prozess nötig – einfach `index.html` im Browser öffnen, oder
lokal servieren, z. B.:

```bash
python3 -m http.server 8000
```

und danach `http://localhost:8000` aufrufen.

Auf dem Startbildschirm wählst du zwischen drei Modi:

- **Zufällige Auswahl** – 10, 20, 30 oder 50 gemischte Fragen aus dem gesamten Katalog
- **Ein Kapitel üben** – gezielt eines der 19 Kapitel (Spielfläche, Zeitregeln,
  Persönliche Strafen, 7-Meter-Wurf, Auswechselraum-Reglement usw.) mit der
  jeweiligen Fragenanzahl im Dropdown
- **Alle 432 Fragen** – der komplette Katalog am Stück

## Als App installieren (PWA)

Die App ist eine installierbare Progressive Web App – kein separates `.apk`
nötig, funktioniert aber wie eine native App:

1. Die Seite auf dem Handy im Browser öffnen (z. B. über einen selbst
   gehosteten Link, siehe „Nutzung“ oben; ein lokales `file://`-Öffnen reicht
   für die Installation nicht, es braucht `http(s)://`).
2. In Chrome (Android) über das Menü **„Zum Startbildschirm hinzufügen“** bzw.
   **„App installieren“** wählen, in Safari (iOS) über **Teilen → Zum
   Home-Bildschirm**.
3. Die App landet als eigenes Icon auf dem Startbildschirm, startet im
   Vollbild ohne Browserleiste und funktioniert danach **komplett offline**
   (Service Worker cached alle 432 Fragen inkl. Antworten lokal auf dem
   Gerät).

Icons liegen unter `icons/`, Manifest ist `manifest.webmanifest`, Offline-
Caching übernimmt `sw.js`.

## Prüfungsmechanik

Viele Fragen im offiziellen Katalog haben **mehrere richtige Antworten**.
Deshalb wird jede Option per Checkbox angeboten – wie im echten
Schiedsrichter-Test weißt du vorher nicht, ob eine oder mehrere Antworten
zutreffen. Eine Frage zählt nur als richtig, wenn deine Auswahl **exakt**
der amtlichen Lösung entspricht (alle-oder-nichts-Bewertung).

Nach Klick auf „Antwort bestätigen“ werden die Optionen markiert:

- grün = ausgewählt und richtig
- rot = ausgewählt und falsch
- gelb gestrichelt = nicht ausgewählt, aber richtig gewesen

Direkt darunter erscheint eine Quellenangabe („Frage 8.33 · Richtig: a, b, d ·
Regelbezug: 8:5, 8:6, 8:9f“) – der Regelbezug ist ein reines Zitat aus der
Musterlösung, keine ausformulierte Erklärung, da der Regelfragenkatalog selbst
keine Begründungen liefert.

## Funktionen

- Vollständiger Fragenkatalog (432 Fragen, Mehrfachauswahl, amtliche Lösungen)
- Drei Startmodi: Zufallsauswahl (10/20/30/50), einzelnes Kapitel, kompletter Katalog
- Fortschrittsanzeige und laufender Punktestand
- Abschlussauswertung mit Prozentwertung und Liste aller falsch beantworteten
  Fragen (inkl. Fragen-Nr., korrekter Antworten und Regelbezug) zum Nacharbeiten
- Installierbar als PWA, läuft danach komplett offline
- Responsive, dependency-freies Vanilla-HTML/CSS/JS ohne Build-Schritt, keine
  externen Font-/CDN-Abhängigkeiten

## Struktur

- `index.html` – Seitenstruktur
- `style.css` – Styling (Light/Dark, responsive)
- `questions.js` – vollständiger Fragenkatalog inkl. Antworten und Regelbezügen
- `script.js` – Quiz-Logik (Mehrfachauswahl-Bewertung, Modi, Auswertung)
- `manifest.webmanifest` – PWA-Manifest (Name, Icons, Startmodus)
- `sw.js` – Service Worker für Offline-Caching
- `icons/` – App-Icons (192/512/512-maskable/Apple-Touch-Icon/Favicon)

## Quelle

DHB-Regelfragenkatalog (Fragen und Antworten), Stand 01.2026. Die App dient
der Lernunterstützung, ohne Gewähr.
