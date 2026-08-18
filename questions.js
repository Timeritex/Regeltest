// DHB-Regelfragenkatalog, Stand 01.2026 — vollständiger Fragenkatalog (432 Fragen)
// Quelle: DHB-Regelfragenkatalog Fragen + Antworten, Stand 01.2026
const SECTION_TITLES = {
  "1": "Spielfläche und Ausrüstung",
  "2": "Spielzeit, Auszeiten und Unterbrechungen",
  "3": "Ball",
  "4": "Mannschaft, Wechsel und Auswechselraum",
  "5": "Torwart im eigenen Torraum",
  "6": "Ballberührung im Torraum",
  "7": "Spielen des Balles, Schrittfehler und passives Spiel",
  "8": "Persönliche Strafen",
  "9": "Sonstige Spielsituationen",
  "10": "Anwurf",
  "11": "Einwurf",
  "12": "Abwurf",
  "13": "Freiwurf",
  "14": "7-Meter-Wurf",
  "15": "Ausführung von Würfen nach Pfiff",
  "16": "Hinausstellung und Disqualifikation",
  "17": "Aufgaben der Schiedsrichter",
  "18": "Zeitnehmer und Sekretär",
  "ARR": "Auswechselraum-Reglement"
};

const QUESTIONS = [
 {
  "id": "1.1",
  "section": "1",
  "sectionTitle": "Spielfläche und Ausrüstung",
  "question": "Welche Abmessungen sehen die Spielregeln für die Spielfläche vor?",
  "options": [
   "40 x 20 Meter",
   "42 x 20 Meter",
   "38 x 18 Meter",
   "Länge zwischen 38 und 42 Metern, Breite zwischen 18 und 22 Metern"
  ],
  "correct": [
   "a"
  ],
  "rule": "1:1"
 },
 {
  "id": "1.2",
  "section": "1",
  "sectionTitle": "Spielfläche und Ausrüstung",
  "question": "Welche Höhe und welche Breite (im Lichten) müssen die Tore haben?",
  "options": [
   "1,92 x 2,92 Meter",
   "2,00 x 3,00 Meter",
   "2,05 x 3,05 Meter",
   "2,08 x 3,08 Meter"
  ],
  "correct": [
   "b"
  ],
  "rule": "1:2"
 },
 {
  "id": "1.3",
  "section": "1",
  "sectionTitle": "Spielfläche und Ausrüstung",
  "question": "Wie breit muss die Torlinie zwischen den Torpfosten sein?",
  "options": [
   "5 cm",
   "6 cm",
   "8 cm",
   "10 cm"
  ],
  "correct": [
   "c"
  ],
  "rule": "1:3"
 },
 {
  "id": "1.4",
  "section": "1",
  "sectionTitle": "Spielfläche und Ausrüstung",
  "question": "Welche Aussagen zur Anwurfzone sind richtig?",
  "options": [
   "Die Anwurfzone besteht aus einem Kreis mit einem Durchmesser von 3 Metern",
   "Die Anwurfzone besteht aus einem Kreis mit einem Durchmesser von 4 Metern.",
   "Die Anwurfzone kann eine andere Farbe haben als das Spielfeld.",
   "Die Anwurfzone kann eine Kreislinie sein.",
   "Die Anwurfzone ist für alle Handballwettbewerbe vorgeschrieben."
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "1:9"
 },
 {
  "id": "2.1",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Der vom Torwart abgewehrte Ball rollt über die Torauslinie. Direkt danach ertönt das automatische Schlusssignal. Die Schiedsrichter stellen fest, dass das Spiel fünf Minuten zu früh beendet wurde. Da sich die Spieler noch auf der Spielfläche befinden, wird das Spiel wieder aufgenommen mit:",
  "options": [
   "Abwurf",
   "Freiwurf",
   "Ohne Anpfiff",
   "Mit Anpfiff"
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "2:7, 12:1, 15:5b"
 },
 {
  "id": "2.2",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Nach dem automatischen Schlusssignal zur Halbzeitpause stellt der Schiedsrichter fest, dass die erste Halbzeit eine Minute zu früh beendet wurde. Wie ist zu entscheiden?",
  "options": [
   "Die zweite Halbzeit ist um eine Minute zu verlängern.",
   "Die eine Minute wird nicht nachgeholt.",
   "Nach der Halbzeitpause ist zuerst eine Minute in denselben Spielfeldhälften wie in der ersten Halbzeit spielen zu lassen. Nach Seitenwechsel ist daraufhin die zweite Halbzeit normal zu beginnen.",
   "Die Spieler sind auf dem Spielfeld zu halten, und die verbleibende Spielzeit von einer Minute ist noch spielen zu lassen."
  ],
  "correct": [
   "d"
  ],
  "rule": "2:7"
 },
 {
  "id": "2.3",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "WEISS 11 wirft, Torwart SCHWARZ 1 hält. In diesem Augenblick ertönt das automatische Schlusssignal. Die Schiedsrichter machen den Zeitnehmer darauf aufmerksam, dass noch 30 Sekunden der zweiten Halbzeit zu spielen sind. Alle Spieler sind auf der Spielfläche geblieben. Wie sollte das Spiel wieder aufgenommen werden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Abwurf",
   "Freiwurf für Team WEISS",
   "Mit Anpfiff",
   "Ohne Anpfiff"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "2:7, 12:1, 15:5b"
 },
 {
  "id": "2.4",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Nach dem Schlusssignal ist von Team WEISS noch ein Freiwurf auszuführen. Sie wechselt nacheinander die wurfstarken Spieler WEISS 5 und WEISS 6 ein, nachdem WEISS 3 und anschließend WEISS 4 die Spielfläche verlassen haben. Welche der folgenden Aussagen treffen zu?",
  "options": [
   "Der Zeitnehmer wird pfeifen und die Schiedsrichter auf einen Wechselfehler von Team WEISS hinweisen.",
   "Spieler WEISS 4 ist wegen Wechselfehlers hinauszustellen.",
   "Spieler WEISS 6 ist wegen Wechselfehlers hinauszustellen.",
   "Der Zeitnehmer wird nicht pfeifen, da kein Anlass besteht.",
   "Freiwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "a",
   "c",
   "e"
  ],
  "rule": "2:5, 4:5, 16:3a"
 },
 {
  "id": "2.5",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Es erfolgt ein direkt ausgeführter Freiwurf für Team SCHWARZ unmittelbar vor Spielende. Bevor der unhaltbare Ball die Torlinie überquert hat, ertönt das automatische Schlusssignal. Wie ist zu entscheiden?",
  "options": [
   "Spielende",
   "Wiederholung des Freiwurfs für Team SCHWARZ",
   "Wiederholung des Freiwurfs für Team SCHWARZ mit Anpfiff",
   "7-Meter-Wurf für Team SCHWARZ"
  ],
  "correct": [
   "c"
  ],
  "rule": "2:4, 15:5"
 },
 {
  "id": "2.6",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Kurz vor dem Schlusspfiff wird SCHWARZ 2 an der gegnerischen Torraumlinie angespielt, setzt zum Torwurf an und wird dabei regelwidrig behindert. Bevor der Ball die Hand von SCHWARZ 2 verlassen hat, ertönt das Schlusssignal. Wie ist zu entscheiden?",
  "options": [
   "Spielende",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Spielende und Vermerk im Spielprotokoll"
  ],
  "correct": [
   "c"
  ],
  "rule": "2:4, 14:1a"
 },
 {
  "id": "2.7",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Kurz vor Ende der ersten Halbzeit ist noch ein 7-Meter-Wurf auszuführen. Der von WEISS 9 geworfene Ball springt von der Latte gegen den Rücken des etwa drei Meter vor seinem Tor stehenden Torwarts und dann ins Tor. Der Pfiff des Zeitnehmers ertönte, als der Ball von der Latte in Richtung Torwartrücken flog. Wie ist zu entscheiden?",
  "options": [
   "Tor",
   "Wiederholung des 7-Meter-Wurfs",
   "Halbzeit beendet, keine weitere Entscheidung"
  ],
  "correct": [
   "b"
  ],
  "rule": "2:4"
 },
 {
  "id": "2.8",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Nach dem Schlusssignal ist noch ein 7-Meter-Wurf auszuführen. Das unmittelbare Ergebnis dieses Wurfs wird abgewartet. Welcher Schiedsrichter beendet daraufhin das Spiel?",
  "options": [
   "Der Erstgenannte",
   "Einer von beiden",
   "Der Feldschiedsrichter",
   "Der Torschiedsrichter"
  ],
  "correct": [
   "b"
  ],
  "rule": "2:4"
 },
 {
  "id": "2.9",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Wann beginnt das Spiel?",
  "options": [
   "Mit dem Pfiff des erstgenannten Schiedsrichters",
   "Wenn der Ball die Hand des Werfers verlassen hat",
   "Wenn der Zeitnehmer die Stoppuhr startet oder die öffentliche Zeitmessanlage zu laufen beginnt",
   "Mit dem Anpfiff des Anwurfs durch den Feldschiedsrichter"
  ],
  "correct": [
   "d"
  ],
  "rule": "2:3"
 },
 {
  "id": "2.10",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Wer bestimmt beim 7-Meter-Werfen, auf welches Tor geworfen wird?",
  "options": [
   "Diejenige Mannschaft, die das Losen gewinnt",
   "Diejenige Mannschaft, die das Losen verliert",
   "Die Schiedsrichter",
   "Der erstgenannte Schiedsrichter"
  ],
  "correct": [
   "c"
  ],
  "rule": "2:2 Kommentar"
 },
 {
  "id": "2.11",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Nach dem Schlusssignal ist von Team SCHWARZ noch ein Freiwurf auszuführen. Vor der Ausführung wechselt Team WEISS kurz nacheinander die hochgewachsenen WEISS 10 und WEISS 11 ein, nachdem WEISS 8 und WEISS 9 gleichzeitig die Spielfläche verlassen haben. Welche der folgenden Aussagen treffen zu?",
  "options": [
   "Der Zeitnehmer wird pfeifen und die Schiedsrichter auf einen Wechselfehler von Team WEISS hinweisen.",
   "WEISS 10 wird infolge eines Wechselfehlers hinausgestellt.",
   "WEISS 11 wird infolge eines Wechselfehlers hinausgestellt.",
   "Der Zeitnehmer wird nicht pfeifen, da keine Regelwidrigkeit vorliegt.",
   "WEISS 11 muss die Spielfläche verlassen. WEISS 8 oder WEISS 9 darf zurückkehren."
  ],
  "correct": [
   "a",
   "b",
   "e"
  ],
  "rule": "2:5, 4:5, 16:3a"
 },
 {
  "id": "2.12",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Unmittelbar vor Ende der ersten Halbzeit begeht WEISS 7 eine Tätlichkeit gegen SCHWARZ 5 und nimmt ihm dadurch eine klare Torchance. Bevor der Schiedsrichter pfeifen kann, ertönt das automatische Schlusssignal. Wie ist zu entscheiden?",
  "options": [
   "Ende der ersten Halbzeit, keine Bestrafung von WEISS 7",
   "Ende der ersten Halbzeit, kein Freiwurf oder 7-Meter-Wurf mehr möglich",
   "Disqualifikation von WEISS 7 mit schriftlichem Bericht",
   "7-Meter-Wurf für Team SCHWARZ",
   "Disqualifikation von WEISS 7 (rote Karte)"
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "2:4, 8:10a,14:1a, 16:6b"
 },
 {
  "id": "2.13",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Bis wann darf der Schiedsrichter ein bereits anerkanntes Tor annullieren?",
  "options": [
   "Bis zum Anpfiff des Anwurfs",
   "Bis zum Schlusssignal",
   "Wenn das Tor nach einer Unterbrechung durch den Zeitnehmer erzielt wurde, muss er es annullieren, selbst wenn der Anwurf bereits erfolgte.",
   "Überhaupt nicht mehr"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "2:9 Kommentar, 9:2"
 },
 {
  "id": "2.14",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Die Schiedsrichter haben auf Einwurf für Team WEISS entschieden. In diesem Moment beantragt der Mannschaftsverantwortliche von Team WEISS ein Team-Time-out. Welche der folgenden Aussagen treffen zu?",
  "options": [
   "Team-Time-out nicht möglich, da der Ball nicht im Spiel ist",
   "Der Zeitnehmer pfeift, hält die Uhr an und zeigt Handzeichen 15.",
   "Die Schiedsrichter bestätigen das Team-Time-out für Team WEISS.",
   "Der Sekretär trägt das Team-Time-out in das Spielprotokoll ein."
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "2:9, Erläuterung 3"
 },
 {
  "id": "2.15",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Wann ist die Spielzeit verbindlich zu unterbrechen?",
  "options": [
   "7-Meter-Entscheidung",
   "Hinausstellung",
   "Bei Einwirkungen auf das Spiel von außen",
   "Disqualifikation"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "2:8, Erläuterung 2"
 },
 {
  "id": "2.16",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "WEISS 9 wirft auf das Tor, Torwart SCHWARZ 12 hält. In diesem Augenblick pfeift der Zeitnehmer das Spiel ab. Die Schiedsrichter machen den Zeitnehmer darauf aufmerksam, dass noch 30 Sekunden der zweiten Halbzeit zu spielen sind. Alle Spieler sind auf der Spielfläche geblieben. Wie wird das Spiel wieder aufgenommen?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "Anpfiff"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "2:7, 15:5b"
 },
 {
  "id": "2.17",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Nach Ablauf der regulären Spielzeit beim Stand von 20:20 soll bis zur Entscheidung weitergespielt werden. Was ist richtig?",
  "options": [
   "Vor der Verlängerung eine Minute Pause",
   "Vor der Verlängerung fünf Minuten Pause",
   "In der Halbzeit der Verlängerung eine Minute Pause",
   "In der Halbzeit der Verlängerung fünf Minuten Pause"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "2:2"
 },
 {
  "id": "2.18",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "In welchen dieser Situationen ist verbindlich Time-out zu geben?",
  "options": [
   "Hinausstellung",
   "Freiwurf",
   "Passives Spiel",
   "Wechselfehler",
   "Verwarnung",
   "Einwurf"
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "2:8, 4:5"
 },
 {
  "id": "2.19",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Wer darf an einem 7-Meter-Werfen nicht teilnehmen?",
  "options": [
   "Ein Spieler, der die Schiedsrichter nach Ablauf der 2. Verlängerung beleidigt hat",
   "Die Torwarte",
   "Ein Spieler mit Reststrafzeit aus der Verlängerung",
   "Ein disqualifizierter Spieler",
   "Ein Spieler, der auf der Spielfläche behandelt wurde und diese noch nicht während drei Angriffen seiner Mannschaft verlassen hatte"
  ],
  "correct": [
   "a",
   "c",
   "d"
  ],
  "rule": "2:2 Kommentar, 4:11, 16:5, 16:6b, 16:10"
 },
 {
  "id": "2.20",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Fünf Sekunden vor Spielende wehrt der Torwart von Team WEISS einen Wurf ab. Der Ball berührt anschließend die Decke über dem Torraum. Kurz vor Ausführung des Einwurfs für Team SCHWARZ ertönt das automatische Schlusssignal. Wie ist zu entscheiden?",
  "options": [
   "Einwurf für Team SCHWARZ nach Anpfiff",
   "Time-out",
   "Spielende",
   "Wirkung des Einwurfs abwarten, danach Spielende"
  ],
  "correct": [
   "c"
  ],
  "rule": "2:3, 2:4, 11:1"
 },
 {
  "id": "2.21",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "SCHWARZ 8 wurde bereits verwarnt. Während eines Team-Time-outs äußert er sich von der Auswechselbank aus unsportlich gegenüber den Schiedsrichtern. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von SCHWARZ 8",
   "Hinausstellung von SCHWARZ 8",
   "Verwarnung von SCHWARZ 8",
   "Keine Entscheidung möglich",
   "Team SCHWARZ wird auf der Spielfläche ab Wiederanpfiff nach dem Team-Time-out zwei Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "2:8, 8:7a, 16:3d"
 },
 {
  "id": "2.22",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Wer ist berechtigt, an einer Entscheidung durch 7-Meter-Werfen teilzunehmen?",
  "options": [
   "Alle im Spielprotokoll eingetragenen Spieler",
   "Spieler, die nicht disqualifiziert sind",
   "Spieler, die am Ende der Spielzeit nicht hinausgestellt sind",
   "Spieler, die die Erlaubnis der Schiedsrichter erhalten haben"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "2:2 Kommentar, 16:5"
 },
 {
  "id": "2.23",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Nach dem automatischen Schlusssignal muss noch ein Freiwurf ausgeführt werden. SCHWARZ 9 wirft auf das Tor. Als der Ball seine Hand gerade verlassen hat, pfeift der Zeitnehmer. Der Ball landet im Tor – der Torwart hätte keine Abwehrchance gehabt. Der Zeitnehmer teilt den Schiedsrichtern mit, dass der im Block stehende Spieler WEISS 7 vor der Wurfausführung eingewechselt wurde. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von WEISS 7",
   "Disqualifikation von WEISS 7 (rote Karte)",
   "Tor für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Wiederholung des Freiwurfs für Team SCHWARZ mit Anpfiff"
  ],
  "correct": [
   "a",
   "e"
  ],
  "rule": "2:4, 2:5, 2:9 Kommentar, 4:5, 9:1, Abs. 3"
 },
 {
  "id": "2.24",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Bei unentschiedenem Spielstand nach beiden Verlängerungen ist nach dem Reglement ein 7-Meter-Werfen durchzuführen. WEISS 7 erhielt in der 9. Minute der zweiten Verlängerung eine Hinausstellung. Zum 7-Meter-Werfen wird er vom Mannschaftsverantwortlichen von WEISS als fünfter Werfer gemeldet. Wie ist zu entscheiden?",
  "options": [
   "WEISS 7 darf teilnehmen.",
   "WEISS 7 darf nicht teilnehmen."
  ],
  "correct": [
   "b"
  ],
  "rule": "2:2 Kommentar, 16:3d"
 },
 {
  "id": "2.25",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Wann muss eine Spielzeitunterbrechung erfolgen?",
  "options": [
   "Bei einer Hinausstellung eines Offiziellen",
   "Bei der dritten Hinausstellung eines Spielers",
   "Bei wiederholt unsportlichem Verhalten",
   "Bei erforderlicher Rücksprache mit dem Partner",
   "Bei grob unsportlichem Verhalten",
   "Bei einer gelben Karte für einen Offiziellen"
  ],
  "correct": [
   "a",
   "b",
   "c",
   "d",
   "e"
  ],
  "rule": "2:8"
 },
 {
  "id": "2.26",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Unmittelbar vor Ende der ersten Halbzeit begeht WEISS 7 eine Tätlichkeit gegen SCHWARZ 5, dem dadurch eine klare Torchance genommen wird. Bevor der Schiedsrichter pfeifen kann, ertönt das automatische Schlusssignal. Wie ist zu entscheiden?",
  "options": [
   "Erste Halbzeit ist zu Ende, keine weiteren Maßnahmen",
   "Disqualifikation von WEISS 7 ohne schriftlichen Bericht (rote Karte)",
   "7-Meter-Wurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Disqualifikation von WEISS 7, schriftlicher Bericht (rote und blaue Karte)",
   "2-Minuten-Reduzierung von Team WEISS ab Beginn der zweiten Halbzeit"
  ],
  "correct": [
   "c",
   "e",
   "f"
  ],
  "rule": "2:4, 8:6, 14:1a, 16:6a"
 },
 {
  "id": "2.27",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Nach dem Halbzeitsignal ist noch ein Freiwurf auszuführen. Welche Spieler dürfen noch ausgewechselt werden?",
  "options": [
   "Alle Spieler beider Mannschaften",
   "Nur Abwehrspieler",
   "Nur Angriffsspieler",
   "Ein Spieler der werfenden Mannschaft",
   "Für einen Feldspieler der verteidigenden Mannschaft darf ein Torwart eingewechselt werden, wenn die Mannschaft beim Schlusspfiff ohne Torwart gespielt hat."
  ],
  "correct": [
   "d",
   "e"
  ],
  "rule": "2:5"
 },
 {
  "id": "2.28",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Was gilt für die Positionen der Spieler bei der Ausführung eines Freiwurfs nach dem Schlusssignal?",
  "options": [
   "Alle Mitspieler des Werfers müssen sich außerhalb der Freiwurflinie des Gegners befinden.",
   "Alle Mitspieler des Werfers müssen sich in der eigenen Spielfeldhälfte aufhalten.",
   "Die Gegner müssen mindestens 3 Meter vom Werfer entfernt bzw. an der eigenen Torraumlinie stehen.",
   "Alle Mitspieler müssen mindestens 3 Meter vom Werfer entfernt stehen.",
   "Alle Mitspieler dürfen beim Werfer an der Freiwurflinie des Gegners stehen."
  ],
  "correct": [
   "a",
   "c",
   "d"
  ],
  "rule": "2:5, 13:8"
 },
 {
  "id": "2.29",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "WEISS 7 passt den Ball zu WEISS 8. In diesem Moment gibt der Zeitnehmer das Signal zum Team-Time-out für Team WEISS. Die Schiedsrichter und die Spieler hören dieses Signal nicht, und WEISS 8 spielt den Ball zu Außenspieler WEISS 10. Dieser hat eine klare Torchance, wird aber von SCHWARZ 5 regelwidrig behindert. Die Schiedsrichter entscheiden auf 7-Meter-Wurf und Hinausstellung gegen SCHWARZ 5. Jetzt erst nehmen die Schiedsrichter wahr, dass der Zeitnehmer das Signal zum Team-Time-out gegeben hatte. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team WEISS",
   "Hinausstellung von SCHWARZ 5",
   "Team-Time-out für Team WEISS",
   "Abwurf für Team SCHWARZ",
   "Anpfiff",
   "Spielfortsetzung mit Freiwurf für Team WEISS an der Position, an der sich WEISS 7 zum Zeitpunkt der Unterbrechung befand"
  ],
  "correct": [
   "b",
   "c",
   "e",
   "f"
  ],
  "rule": "2:9, 2:9 Kommentar, 13:4a, 15:5b, Erläuterung 3"
 },
 {
  "id": "2.30",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Die erste Halbzeit wurde eine Minute zu früh abgepfiffen. Es liegt zum Zeitpunkt des Pfiffs weder eine Regelwidrigkeit vor, noch ist eine Mannschaft in Ballbesitz. Der Ball liegt im Spielfeld auf dem Boden. Beide Mannschaften sind noch auf der Spielfläche. Wie ist zu entscheiden?",
  "options": [
   "Die Minute wird nicht nachgespielt.",
   "Die Minute muss vor der Halbzeitpause nachgespielt werden.",
   "Die Minute muss zu Beginn der zweiten Halbzeit nachgespielt werden.",
   "Die Minute wird der zweiten Halbzeit hinzugefügt.",
   "Durch Losentscheid wird entschieden, welche Mannschaft zu Beginn der einen Minute Ballbesitz erhält.",
   "Die Mannschaft, die zuletzt in Ballbesitz war, erhält den Ball."
  ],
  "correct": [
   "b",
   "f"
  ],
  "rule": "2:7, 13:4b"
 },
 {
  "id": "2.31",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Die erste Halbzeit wurde eine Minute zu früh abgepfiffen. Es liegt zum Zeitpunkt des Pfiffs keine Regelwidrigkeit vor, der Ball ist in der Luft über dem Torraum und der Torwart fängt ihn nach dem Pfiff. Beide Mannschaften sind noch auf der Spielfläche. Wie ist zu entscheiden?",
  "options": [
   "Die Minute wird nicht nachgespielt.",
   "Die Minute wird noch gespielt, dann beginnt die Halbzeitpause.",
   "Die Minute muss nach der Pause vor Beginn der zweiten Halbzeit gespielt werden.",
   "Die Minute wird der zweiten Halbzeit hinzugefügt.",
   "Die Mannschaft, die zuletzt in Ballbesitz war, erhält den Ball.",
   "Spielfortsetzung mit Abwurf"
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "2:7, 13:4a"
 },
 {
  "id": "2.32",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Die erste Halbzeit ist eine Minute zu früh abgepfiffen worden. Es liegt zum Zeitpunkt des Pfiffs keine Regelwidrigkeit vor, der Ball befindet sich in der Luft über dem Torraum und fliegt nach dem Pfiff am Tor vorbei ins Toraus. Beide Mannschaften sind noch auf der Spielfläche. Wie ist zu entscheiden?",
  "options": [
   "Die Minute wird nicht nachgespielt.",
   "Eine Minute wird noch gespielt, dann beginnt die Halbzeitpause.",
   "Die Minute muss nach der Pause zu Beginn der zweiten Halbzeit gespielt werden.",
   "Die Minute wird der zweiten Halbzeit hinzugefügt.",
   "Die Mannschaft, die zuletzt in Ballbesitz war, erhält den Ball.",
   "Spielfortsetzung mit Abwurf"
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "2:7, 13:4b"
 },
 {
  "id": "2.33",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Team WEISS hat ein Tor erzielt. Team SCHWARZ will einen schnellen Anwurf ausführen. Deswegen prellt SCHWARZ 5 den Ball rasch in Richtung Mittellinie. Dabei läuft er am zurücklaufenden WEISS 3 vorbei, der ihm den Ball mit der offenen Hand wegspitzelt, sodass der Ball SCHWARZ 5 auf den Fuß und von dort über die Mittellinie weit in die Hälfte von Team WEISS prallt. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Anwurf für Team SCHWARZ",
   "Progressive Bestrafung von WEISS 3",
   "Freiwurf für Team WEISS",
   "Hinausstellung von WEISS 3"
  ],
  "correct": [
   "a",
   "b",
   "e"
  ],
  "rule": "2:8, 8:8g, 15:9, 16:1b, Erläuterung 2c"
 },
 {
  "id": "2.34",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "In welchen Situationen ist NICHT verbindlich Time-out zu geben?",
  "options": [
   "Der Ball fliegt sehr weit weg.",
   "Der Zeitnehmer pfeift.",
   "Ein Spieler scheint verletzt zu sein.",
   "Die Schiedsrichter zeigen bei einer Entscheidung bezüglich der Spielfortsetzung in verschiedene Richtungen.",
   "Ein Torwart wird zur Ausführung eines Abwurfs für einen Feldspieler eingewechselt."
  ],
  "correct": [
   "a",
   "c",
   "e"
  ],
  "rule": "2:8, Erläuterung 2"
 },
 {
  "id": "2.35",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Wer meldet das Team-Time-out an?",
  "options": [
   "Ein Offizieller",
   "Ein Spieler",
   "Nur der Mannschaftsverantwortliche",
   "Der Mannschaftkapitän"
  ],
  "correct": [
   "a"
  ],
  "rule": "Erläuterung 3"
 },
 {
  "id": "2.36",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Welche der folgenden Aussagen zum Team-Time-out treffen zu?",
  "options": [
   "Das Team-Time-out kann nur vom Offiziellen A angemeldet werden.",
   "Wird bei Ballbesitz des Gegners ein Team-Time-out angemeldet, gibt der Zeitnehmer die grüne Karte gleich zurück.",
   "Die Zeit für das Team-Time-out beginnt mit dem Signal des Zeitnehmers.",
   "Regelwidrigkeiten während eines Team-Time-outs haben die gleichen Folgen wie während der Spielzeit.",
   "Nach einem Team-Time-out wird das Spiel immer mit einem Wurf für die beantragende Mannschaft aufgenommen."
  ],
  "correct": [
   "b",
   "d",
   "e"
  ],
  "rule": "2:10, Erläuterung 3"
 },
 {
  "id": "2.37",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Team WEISS ist in Ballbesitz. Ein Offizieller von Team SCHWARZ meldet beim Zeitnehmer Team-Time-out an, indem er die grüne Karte auf den Zeitnehmertisch legt. Wie ist zu entscheiden?",
  "options": [
   "Die grüne Karte wird am Zeitnehmertisch aufgestellt.",
   "Der Zeitnehmer pfeift, sobald Team SCHWARZ in Ballbesitz gelangt.",
   "Der Zeitnehmer gibt die grüne Karte zurück.",
   "Nur der Mannschaftsverantwortliche darf Team-Time-out anmelden."
  ],
  "correct": [
   "c"
  ],
  "rule": "2:10, Erläuterung 3"
 },
 {
  "id": "2.38",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "SCHWARZ 3 führt einen Torwurf so unglücklich aus, dass der Ball, ohne einen weiteren Spieler zu berühren, im Torraum liegen bleibt und die Schiedsrichter auf Abwurf entschieden haben. In diesem Moment beantragt der Mannschaftsverantwortliche von SCHWARZ ein Team-Time-out. Wie ist zu entscheiden?",
  "options": [
   "Der Zeitnehmer pfeift, stoppt gleichzeitig die Spielzeituhr und zeigt den Schiedsrichtern das Team-Time-out für Team SCHWARZ an.",
   "Der Zeitnehmer gibt dem Mannschaftsverantwortlichen von SCHWARZ die grüne Karte zurück.",
   "Spielfortsetzung mit Freiwurf für Team SCHWARZ",
   "Abwurf für Team WEISS"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "6:5, Erläuterung 3"
 },
 {
  "id": "2.39",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Torwart WEISS 1 wirft zu WEISS 8, der sich allein mit Torwart SCHWARZ 12 an dessen Torraum befindet. Kurz bevor WEISS 8 den Ball erreicht, pfeift der Zeitnehmer, weil der Offizielle A von Team WEISS in diesem Moment ein Team-Time-out anmeldet. Wie ist das Spiel fortzusetzen?",
  "options": [
   "Freiwurf für Team WEISS außerhalb des eigenen Torraums",
   "Freiwurf für Team WEISS an der eigenen Auswechsellinie",
   "7-Meter-Wurf für Team WEISS",
   "Freiwurf für Team WEISS an der gegnerischen Freiwurflinie"
  ],
  "correct": [
   "d"
  ],
  "rule": "Erläuterung 3"
 },
 {
  "id": "2.40",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "WEISS 4 blockt einen Wurf von SCHWARZ 11. Der Ball berührt die Decke über dem Torraum. Einen Augenblick später legt der Offizielle A von Team SCHWARZ die grüne Karte auf den Tisch vor den Zeitnehmer. Wie ist zu entscheiden?",
  "options": [
   "Team SCHWARZ erhält sofort ein Team-Time-out.",
   "Team SCHWARZ erhält kein Team-Time-out, da der Ball die Decke über dem Torraum berührte.",
   "Team SCHWARZ erhält kein Team-Time-out, da Team WEISS den Ball wieder ins Spiel bringen darf.",
   "Team SCHWARZ erhält ein Team-Time-out, sobald der Ball wieder ins Spiel gebracht wurde."
  ],
  "correct": [
   "a"
  ],
  "rule": "2:8, 2:10, Erläuterung 3"
 },
 {
  "id": "2.41",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Team WEISS ist in Ballbesitz und beantragt Team-Time-out. Aufgrund großen Lärms hören die Schiedsrichter den Pfiff des Zeitnehmers nicht. Erst nach 10 Sekunden – Team SCHWARZ ist bereits in Ballbesitz – hören sie den Pfiff. Wie ist zu entscheiden?",
  "options": [
   "Das Team-Time-out wird gegeben.",
   "Spielfortsetzung mit Freiwurf für Team SCHWARZ",
   "Das Team-Time-out wird nicht gewährt.",
   "Spielfortsetzung mit Freiwurf für Team WEISS"
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "2:8, 2:9 Kommentar, Erläuterung 3"
 },
 {
  "id": "2.42",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Bei 78:00 erhält WEISS 7 eine Hinausstellung. Das Spiel endet unentschieden, und laut Wettbewerbsbestimmungen ist eine Entscheidung durch 7-Meter-Werfen erforderlich. Der Mannschaftsverantwortliche von Team WEISS nominiert WEISS 7 für das 7-Meter-Werfen. WEISS 7 führt den 7-Meter-Wurf aus und erzielt ein Tor. Wie ist zu entscheiden?",
  "options": [
   "Tor zählt, WEISS 7 zur Teilnahme am 7-Meter-Werfen berechtigt",
   "Tor zählt nicht, WEISS 7 nicht zur Teilnahme am 7-Meter-Werfen berechtigt",
   "7-Meter-Wurf ist als Fehlwurf einzustufen",
   "Disqualifikation von WEISS 7"
  ],
  "correct": [
   "a"
  ],
  "rule": "2:2 Kommentar"
 },
 {
  "id": "2.43",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Bei 55:00 beantragt der Mannschaftsverantwortliche von Team WEISS das zweite Team-Time-out. Bei 59:00 beantragt derselbe Mannschaftsverantwortliche das dritte Team-Time-out. Wie ist zu entscheiden?",
  "options": [
   "Team-Time-out möglich",
   "Team-Time-out nicht möglich"
  ],
  "correct": [
   "b"
  ],
  "rule": "2:10, Erläuterung 3"
 },
 {
  "id": "2.44",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Mannschaft WEISS ist im Angriff. Der Mannschaftsverantwortliche von Team WEISS möchte ein Team-Time-out beantragen und geht zum Tisch, um die grüne Karte vor dem Zeitnehmer hinzulegen. Als die grüne Karte auf dem Tisch vor dem Zeitnehmer liegt, wirft WEISS 4 zur gleichen Zeit auf das Tor und erzielt einen Treffer. Der Zeitnehmer pfeift zum Team-Time-out, nachdem der Ball die Torlinie im Tor von Team SCHWARZ überschritten hatte. Wie ist zu entscheiden?",
  "options": [
   "Tor für Mannschaft WEISS",
   "Das Tor ist ungültig, weil Mannschaft WEISS ein Team-Time-out beantragt hatte.",
   "Team-Time-out für Mannschaft WEISS",
   "Kein Team-Time-out für Mannschaft WEISS, weil sie nicht mehr in Ballbesitz ist",
   "Die grüne Karte wird der Mannschaft zurückgegeben.",
   "Anwurf für Mannschaft SCHWARZ"
  ],
  "correct": [
   "a",
   "d",
   "e",
   "f"
  ],
  "rule": "2:10, Erläuterung 3"
 },
 {
  "id": "2.45",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Mannschaft WEISS hatte ihr zweites Team-Time-out bei Spielzeit 55:10. Der Mannschaftsverantwortliche von WEISS möchte bei Spielzeit 59:25 für seine Mannschaft ein drittes Team-Time-out beantragen und legt die grüne Karte auf den Tisch vor den Zeitnehmer. Team WEISS ist in Ballbesitz. Der Zeitnehmer pfeift und stoppt die Spielzeituhr. Er zeigt Team-Time-out für Mannschaft WEISS an. Wie ist zu entscheiden?",
  "options": [
   "Team-Time-out für Mannschaft WEISS",
   "Es wird kein Team-Time-out gewährt.",
   "Progressive Bestrafung für den Mannschaftsverantwortlichen von Team WEISS",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS wieder aufgenommen.",
   "Das Spiel wird mit Freiwurf für Mannschaft SCHWARZ wieder aufgenommen."
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "Erläuterung 3, 2:10"
 },
 {
  "id": "2.46",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Mannschaft WEISS möchte ein Team-Time-out beantragen. Der Mannschaftsverantwortliche von Team WEISS legt die grüne Karte auf den Tisch vor den Zeitnehmer. Zur gleichen Zeit wirft WEISS 9 auf das Tor von Team SCHWARZ. Der Zeitnehmer pfeift als der Ball in der Luft ist. Kurz nach dem Pfiff fängt der Torwart SCHWARZ 12 den Ball. Wie ist zu entscheiden?",
  "options": [
   "Kein Team-Time-out möglich, weil Mannschaft WEISS nicht mehr in Ballbesitz ist",
   "Team-Time-out für Mannschaft WEISS",
   "Die grüne Karte wird Mannschaft WEISS zurückgegeben.",
   "Das Spiel wird mit Abwurf für Mannschaft SCHWARZ wieder aufgenommen.",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS wieder aufgenommen."
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "2:10, 13:4, Erläuterung 3"
 },
 {
  "id": "2.47",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Mannschaft WEISS möchte ein Team-Time-out beantragen. Der Mannschaftsverantwortliche von Team WEISS legt die grüne Karte auf den Tisch vor den Zeitnehmer. Bevor der Zeitnehmer pfeifen kann, wirft WEISS 9 auf das Tor. Der Wurf wird von Torwart SCHWARZ 12 geblockt. Der Zeitnehmer pfeift, als der Ball im Torraum rollt. Wie ist zu entscheiden?",
  "options": [
   "Kein Team-Time-out möglich, weil Mannschaft WEISS nicht in Ballbesitz ist",
   "Team-Time-out für Mannschaft WEISS",
   "Die grüne Karte wird Mannschaft WEISS zurückgegeben.",
   "Das Spiel wird mit Abwurf für Mannschaft SCHWARZ wieder aufgenommen.",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS wieder aufgenommen.",
   "Das Spiel wird mit Freiwurf für Mannschaft SCHWARZ wieder aufgenommen."
  ],
  "correct": [
   "a",
   "c",
   "f"
  ],
  "rule": "2:10, 6:5, Erläuterung 3"
 },
 {
  "id": "2.48",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Mannschaft WEISS möchte ein Team-Time-out beantragen. Der Mannschaftsverantwortliche von Team WEISS legt die grüne Karte auf den Tisch vor den Zeitnehmer. Bevor der Zeitnehmer pfeifen kann, wirft WEISS 9 auf das Tor. Der Wurf wird von Torwart SCHWARZ 12 geblockt. Der Zeitnehmer pfeift, als sich der Ball nach der Abwehr in der Luft über dem Torraum befindet. Wie ist zu entscheiden?",
  "options": [
   "Kein Team-Time-out möglich, weil Mannschaft WEISS nicht in Ballbesitz ist",
   "Team-Time-out für Mannschaft WEISS",
   "Die grüne Karte wird Mannschaft WEISS zurückgegeben.",
   "Das Spiel wird mit Abwurf für Mannschaft SCHWARZ wieder aufgenommen.",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS wieder aufgenommen.",
   "Das Spiel wird mit Freiwurf für Mannschaft SCHWARZ wieder aufgenommen."
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "2:10, 13:4, Erläuterung 3"
 },
 {
  "id": "2.49",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Mannschaft WEISS möchte ein Team-Time-out beantragen. Der Mannschaftsverantwortliche von Team WEISS legt die grüne Karte auf den Tisch vor den Zeitnehmer. Bevor der Zeitnehmer pfeifen kann, begeht WEISS 11 ein Angreifervergehen. Der Zeitnehmer pfeift zum Team-Time-out unmittelbar bevor der Schiedsrichter das Angreifervergehen pfeift. Wie ist zu entscheiden?",
  "options": [
   "Die Schiedsrichter gewähren das Team-Time-out nicht, weil das Angreifervergehen vor dem Pfiff des Zeitnehmers begangen wurde.",
   "Team-Time-out für Mannschaft WEISS",
   "Die grüne Karte wird Mannschaft WEISS zurückgegeben.",
   "Das Spiel wird mit Freiwurf für Mannschaft SCHWARZ wieder aufgenommen.",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS wieder aufgenommen."
  ],
  "correct": [
   "a",
   "c",
   "d"
  ],
  "rule": "2:10, Erläuterung 3, in Verbindung mit 2:4"
 },
 {
  "id": "2.50",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Im Spiel wird das elektronische Team-Time-out (der Buzzer) genutzt. Team WEISS hatte sein zweites Team-Time-out bei 55:10. Bei 59:35 Uhr möchte der Offizielle A vom Team WEISS ein drittes Team-Time-out für sein Team beantragen und betätigt den Buzzer für das Team-Time-out. Der Ball ist im Spiel und die Mannschaft WEISS ist in Ballbesitz. Das Signal der öffentlichen Zeitmessanlage ertönt und die Uhr wird angehalten. Was ist die richtige Entscheidung?",
  "options": [
   "Team-Time-out für Mannschaft WEISS.",
   "Team-Time-out wird nicht gewährt.",
   "Progressive Bestrafung für den Offiziellen A der Mannschaft WEISS.",
   "Das Spiel wird mit einem Freiwurf für Mannschaft WEISS fortgesetzt.",
   "Das Spiel wird mit einem Freiwurf für Mannschaft SCHWARZ fortgesetzt.",
   "Mannschaft SCHWARZ kann zwischen Freiwurf und 7-Meter-Wurf wählen."
  ],
  "correct": [
   "b",
   "c",
   "e"
  ],
  "rule": "2:10, Erläuterung 3, Reglement für elektronische Team-Time-Outs"
 },
 {
  "id": "2.51",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Im Spiel wird das elektronische Team-Time-out (der Buzzer) genutzt. Mannschaft WEISS ist in Ballbesitz. Bei 58:40 begeht WEISS 7 ein Stürmerfoul. Bevor die Schiedsrichter das Stürmerfoul pfeifen können, ertönt das Signal der öffentlichen Zeitmessanlage, weil Offizieller A von Mannschaft WEISS den Team-Time-out-Buzzer betätigt hat, um ein Team-Time-out anzufordern. Unmittelbar danach pfeifen die Schiedsrichter das Stürmerfoul gegen WEISS 7. Was ist die richtige Entscheidung?",
  "options": [
   "Ein Team-Time-out ist nicht möglich, da Mannschaft WEISS nicht mehr in Ballbesitz ist.",
   "Team-Time-out für Mannschaft WEISS.",
   "Mannschaft WEISS verliert ein Team-Time-out.",
   "Das Spiel wird mit einem Freiwurf für Mannschaft SCHWARZ fortgesetzt.",
   "Das Spiel wird mit einem Freiwurf für Mannschaft WEISS fortgesetzt.",
   "Das Spiel wird mit einem 7-Meter-Wurf für Mannschaft SCHWARZ fortgesetzt.",
   "Mannschaft SCHWARZ kann zwischen Freiwurf und 7-Meter-Wurf wählen.",
   "Progressive Bestrafung gegen den Offiziellen A Mannschaft WEISS."
  ],
  "correct": [
   "a",
   "c",
   "d"
  ],
  "rule": "2:10, Erläuterung 3, Reglement für elektronische Team-Time-Outs"
 },
 {
  "id": "2.52",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Im Spiel wird das elektronische Team-Time-out (der Buzzer) genutzt. Bei 29:50 Uhr der ersten Halbzeit wirft WEISS 9 aufs Tor. Der Ball wird von Torwart SCHWARZ 12 geblockt, und befindet sich in der Luft über dem Torraum. In diesem Moment ertönt das Signal der öffentlichen Zeitmessanlage, weil Offizieller A von Mannschaft SCHWARZ den Buzzer betätigt hat, um ein Team-Time-out zu beantragen. Was ist die richtige Entscheidung?",
  "options": [
   "Kein Team-Time-out möglich, da Mannschaft SCHWARZ nicht in Ballbesitz ist.",
   "Team-Time-out für Mannschaft SCHWARZ.",
   "Mannschaft SCHWARZ verliert ein Team-Time-out.",
   "Das Spiel wird mit Abwurf für Mannschaft SCHWARZ fortgesetzt.",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS fortgesetzt.",
   "Das Spiel wird mit Freiwurf für Mannschaft SCHWARZ fortgesetzt.",
   "Mannschaft WEISS kann zwischen einem 7-Meter-Wurf und einem Freiwurf wählen.",
   "Das Spiel wird mit einem 7-Meter-Wurf für Mannschaft WEISS fortgesetzt.",
   "Progressive Bestrafung gegen den Offiziellen A Mannschaft SCHWARZ."
  ],
  "correct": [
   "a",
   "c",
   "h",
   "i"
  ],
  "rule": "2:10, Erläuterung 3, Reglement für elektronische Team-Time-Outs"
 },
 {
  "id": "2.53",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Mannschaft SCHWARZ ist im Angriff. Die Schiedsrichter zeigen das Vorwarnzeichen. Nach zwei Pässen ertönt ein Pfiff des Delegierten, weil Offizieller A von SCHWARZ ein Team-Time-out beantragt hat. Weder die Schiedsrichter noch die Spieler hören den Pfiff, und das Spiel wird fortgesetzt. Der vierte Pass der Mannschaft SCHWARZ geht an den Außenspieler, der eine klare Torchance hat. Der Außenspieler springt, und will auf das Tor werfen. Dabei wird er von WEISS 4 gestoßen und verliert teilweise die Körperkontrolle. Der Torwart hält den Wurf. Erst zu diesem Zeitpunkt wird den Schiedsrichtern und den Spielern bewusst, dass der Delegierte das Spiel wegen des beantragten Team-Time-outs unterbrochen hat. Was ist die richtige Entscheidung?",
  "options": [
   "Team-Time-out für Mannschaft SCHWARZ.",
   "Das Spiel wird mit einem Freiwurf für Mannschaft SCHWARZ wieder aufgenommen.",
   "Das Spiel wird mit einem 7-Meter-Wurf für Mannschaft SCHWARZ fortgesetzt.",
   "2-Minuten-Strafe für WEISS 4.",
   "Keine Bestrafung.",
   "Das Vorwarnzeichen ist weiterhin gültig - Mannschaft SCHWARZ hat zwei Pässe gespielt.",
   "Das Vorwarnzeichen ist weiterhin gültig - Mannschaft SCHWARZ hat vier Pässe gespielt.",
   "Das Vorwarnzeichen ist nicht mehr gültig, weil WEISS 4 mit einer 2-Minuten-Strafe belegt wurde."
  ],
  "correct": [
   "a",
   "b",
   "d",
   "f"
  ],
  "rule": "2:9 Kommentar, 2:10, Erläuterung 3 and 4"
 },
 {
  "id": "2.54",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Mannschaft WEISS wirft auf das Tor. Torwart SCHWARZ 1 pariert den Wurf. Der Ball springt im Torraum auf, als der Mannschaftsoffizielle A von Mannschaft WEISS ein Team-Time-out beantragt, indem er die grüne Karte vor den Zeitnehmer ablegt. Der Zeitnehmer pfeift, als der Ball immer noch innerhalb des Torraums aufspringt, aber der Ball sehr nahe an WEISS 13 ist, der sich völlig allein außerhalb des Torraums befindet. Was ist die richtige Entscheidung?",
  "options": [
   "Team-Time-out für Mannschaft WEISS.",
   "Es ist kein Team-Time-out möglich, die grüne Karte wird dem Mannschaftsoffiziellen A von Weiß zurückgegeben.",
   "Freiwurf für Mannschaft WEISS.",
   "Abwurf für Mannschaft SCHWARZ.",
   "Freiwurf für Mannschaft SCHWARZ.",
   "7-Meter-Wurf für Mannschaft WEISS."
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "2:10, Erläuterung 3"
 },
 {
  "id": "2.55",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "Elektronisches Team-Time-out wird im Spiel verwendet. Die Mannschaft WEISS ist im Angriff, und der Spielstand lautet 31:31. 20 Sekunden vor Ende des Spiels erzielt WEISS 7 ein Tor. Offizieller A von SCHWARZ läuft zum Zeitnehmertisch, um den Buzzer zu drücken und ein Team-Time-out zu beantragen. Bevor der Offizielle A den Buzzer drücken kann, steht SCHWARZ 10 von der Bank auf und drückt den Buzzer, kurz bevor SCHWARZ den Anwurf ausführt. Was ist die richtige Entscheidung?",
  "options": [
   "Team-Time-out für SCHWARZ",
   "Kein Team-Time-out für SCHWARZ",
   "Das Spiel wird mit einem Anwurf für SCHWARZ fortgesetzt.",
   "Das Spiel wird mit einem Freiwurf für WEISS fortgesetzt.",
   "Das Spiel wird mit einem 7-Meter-Wurf für WEISS fortgesetzt.",
   "Offizieller A Mannschaft WEISS kann zwischen 7-Meter-Wurf und Freiwurf wählen.",
   "Progressive Bestrafung für Offiziellen A Mannschaft SCHWARZ",
   "Hinausstellung SCHWARZ 10",
   "Disqualifikation ohne schriftlichen Bericht SCHWARZ 10",
   "SCHWARZ verliert ein Team-Time-out."
  ],
  "correct": [
   "b",
   "c",
   "h",
   "j"
  ],
  "rule": "2:10, Erläuterung 3, Reglement für elektronische Team-Time-Outs"
 },
 {
  "id": "2.56",
  "section": "2",
  "sectionTitle": "Spielzeit, Auszeiten und Unterbrechungen",
  "question": "In diesem Spiel kann der Videobeweis (VR) genutzt werden und ein elektronisches Team-Time-out-System ist im Einsatz. 20 Sekunden vor Ende des Spiels läuft WEISS 7 mit dem Ball in den Händen. Der Schiedsrichter pfeift gegen WEISS 7. WEISS 7 hält den Ball für 2 Sekunden fest, bevor er ihn auf den Boden legt. Gerade als SCHWARZ 4 den Ball aufnimmt, drückt der Offizielle B Mannschaft SCHWARZ den Buzzer, um ein TTO zu beantragen. Die Schiedsrichter beschließen, den VR einzusetzen, um einen möglichen Verstoß gegen Regel 8:11a zu überprüfen. Bei der VR-Überprüfung sehen sie, dass WEISS 7 nur drei Schritte gemacht hat. Was ist die richtige Entscheidung?",
  "options": [
   "Es ist in Ordnung, die Videowiederholung zu verwenden.",
   "Das Team-Time-out für SCHWARZ beginnt sofort.",
   "Die Entscheidung über das Team-Time-out wird bis nach der VR vertagt.",
   "Time-out",
   "Nach VR, Team-Time-Out für SCHWARZ",
   "Nach VR, kein Team-Time-Out SCHWARZ",
   "Disqualifikation ohne schriftlichen Bericht für WEISS 7",
   "Hinausstellung für WEISS 7",
   "Das Spiel wird mit einem Freiwurf für SCHWARZ fortgesetzt.",
   "Das Spiel wird mit einem 7-Meter-Wurf für SCHWARZ fortgesetzt.",
   "Das Spiel wird mit einem Freiwurf für WEISS wieder aufgenommen.",
   "SCHWARZ verliert ein Team-Time-out.",
   "Progressive Bestrafung für den Offiziellen B Mannschaft SCHWARZ"
  ],
  "correct": [
   "a",
   "c",
   "d",
   "f",
   "k"
  ],
  "rule": "2:8, 2:9, Erläuterung 3, 17:13, Reglement für elektronische Team-Time-Outs, Reglement für den Videobeweis"
 },
 {
  "id": "3.1",
  "section": "3",
  "sectionTitle": "Ball",
  "question": "Wie viele Farben darf der Spielball haben?",
  "options": [
   "1",
   "2",
   "3",
   "beliebig viele"
  ],
  "correct": [
   "d"
  ],
  "rule": "3:1"
 },
 {
  "id": "3.2",
  "section": "3",
  "sectionTitle": "Ball",
  "question": "Welchen der folgenden vier Bälle müssen die Schiedsrichter für ein Männerspiel wählen, für das ein Ball gemäß Regel 3:2a verwendet werden darf??",
  "options": [
   "Umfang 57 cm, Gewicht 450 g",
   "Umfang 58 cm, Gewicht 400 g",
   "Umfang 59 cm, Gewicht 425 g",
   "Umfang 60 cm, Gewicht 500 g"
  ],
  "correct": [
   "c"
  ],
  "rule": "3:2"
 },
 {
  "id": "3.3",
  "section": "3",
  "sectionTitle": "Ball",
  "question": "Welchen der folgenden vier Bälle müssen die Schiedsrichter für ein Frauenspiel wählen, für das ein Ball gemäß Regel 3:2a verwendet werden darf?",
  "options": [
   "Umfang 53 cm, Gewicht 350 g",
   "Umfang 54 cm, Gewicht 300 g",
   "Umfang 55 cm, Gewicht 425 g",
   "Umfang 56 cm, Gewicht 375 g"
  ],
  "correct": [
   "d"
  ],
  "rule": "3:2"
 },
 {
  "id": "3.4",
  "section": "3",
  "sectionTitle": "Ball",
  "question": "Die Schiedsrichter lassen den Reserveball ins Spiel bringen. Wann sollte der ursprüngliche Spielball wieder verwendet werden?",
  "options": [
   "Bei der nächsten Unterbrechung",
   "Er darf nicht wieder benutzt werden, es sei denn, es ist unmöglich, mit dem Reserveball weiterzuspielen.",
   "Wenn die Schiedsrichter es für erforderlich halten, ihn wieder zu benutzen",
   "Wenn eine der Mannschaften es wünscht"
  ],
  "correct": [
   "c"
  ],
  "rule": "3:4"
 },
 {
  "id": "4.1",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Kurz vor Spielbeginn verletzt sich WEISS 11 so schwer, dass er nicht spielen kann. Wie ist zu entscheiden?",
  "options": [
   "WEISS 11 darf nicht ersetzt werden.",
   "WEISS 11 darf ersetzt werden, sofern die gegnerische Mannschaft einverstanden ist.",
   "WEISS 11 darf grundsätzlich ersetzt werden, sein Ersatz darf die Nummer 11 tragen, muss aber im Spielprotokoll eingetragen sein. Zudem müssen die Schiedsrichter die für den jeweiligen Wettbewerb geltenden abweichenden Sonderregelungen beachten.",
   "WEISS 11 darf ersetzt werden, aber sein Ersatz darf nicht mit der Nummer 11 spielen."
  ],
  "correct": [
   "c"
  ],
  "rule": "4:1, 4:3"
 },
 {
  "id": "4.2",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Team SCHWARZ erscheint mit fünf Feldspielern, aber ohne etatmäßigen Torwart. Team SCHWARZ bestimmt Feldspieler SCHWARZ 5 als Torwart. Was sind die Konsequenzen für SCHWARZ 5?",
  "options": [
   "SCHWARZ 5 ist nach einer ordnungsgemäßen Auswechslung jederzeit als Feldspieler einsetzbar.",
   "SCHWARZ 5 darf nicht mehr als Feldspieler eingesetzt werden.",
   "SCHWARZ 5 darf als Feldspieler eingesetzt werden, wenn die Offiziellen von Team WEISS einverstanden ist.",
   "SCHWARZ 5 darf als Feldspieler eingesetzt werden, sobald der vorgesehene Torwart anwesend ist."
  ],
  "correct": [
   "a"
  ],
  "rule": "4:1"
 },
 {
  "id": "4.3",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Der Vereinspräsident von Heim-Team WEISS setzt sich nach Spielbeginn neben die beiden Betreuer, den Masseur, den Co-Trainer und den Trainer auf die Auswechselbank. Welche Konsequenzen müssen dies haben?",
  "options": [
   "Der Auswechseltorwart muss hinter der Bank stehen.",
   "Der Vereinspräsident muss die Auswechselbank verlassen.",
   "Ein Offizieller muss die Auswechselbank verlassen.",
   "Personen, die nicht im Spielprotokoll vermerkt sind, müssen die Auswechselbank verlassen.",
   "Der Mannschaftsverantwortliche erhält eine progressive Strafe."
  ],
  "correct": [
   "d",
   "e"
  ],
  "rule": "4:2"
 },
 {
  "id": "4.4",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Wie viele Spieler pro Mannschaft müssen bei Spielbeginn auf der Spielfläche mindestens antreten und im Spielprotokoll eingetragen sein?",
  "options": [
   "5 Spieler",
   "4 Feldspieler und 1 Torwart",
   "5 Feldspieler und 1 Torwart",
   "6 Feldspieler"
  ],
  "correct": [
   "a"
  ],
  "rule": "4:1"
 },
 {
  "id": "4.5",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Welche der folgenden Spieler sind teilnahmeberechtigt?",
  "options": [
   "Ein Spieler, der bei Spielbeginn anwesend und im Spielprotokoll eingetragen ist",
   "Ein Spieler, der bei Spielbeginn nicht anwesend, aber im Spielprotokoll eingetragen ist",
   "Ein Spieler, der bei Spielbeginn anwesend, aber nicht im Spielprotokoll eingetragen ist",
   "Ein Spieler, der zwar nicht im Spielprotokoll eingetragen ist, aber vom Zeitnehmer die Spielerlaubnis erhält"
  ],
  "correct": [
   "a"
  ],
  "rule": "4:3"
 },
 {
  "id": "4.6",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Bei Spielbeginn sind nur sechs Spieler von Team WEISS anwesend. Unmittelbar nach dem Anpfiff treffen die fehlenden Spieler ein. Nach dem Umkleiden läuft WEISS 7 über die Auswechsellinie einfach auf die Spielfläche. Im Spielprotokoll ist er nicht eingetragen. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von WEISS 7 (rote Karte)",
   "Hinausstellung von WEISS 7 und Eintragung ins Spielprotokoll",
   "WEISS 7 wird im Spielprotokoll nachgetragen, sofern dies den Regelungen des zuständigen Verbandes entspricht.",
   "Progressive Bestrafung des Mannschaftsverantwortlichen von Team WEISS"
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "4:3, 16:1b"
 },
 {
  "id": "4.7",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Die Schiedsrichter haben auf Freiwurf für Team WEISS an der Freiwurflinie von Team SCHWARZ entschieden. Jetzt pfeift der Zeitnehmer und hält die Uhr an. Die Schiedsrichter erkundigen sich nach dem Grund des Pfiffs. Der Zeitnehmer teilt mit, dass WEISS 9 einen Wechselfehler begangen hat. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS an der Freiwurflinie von Team SCHWARZ",
   "Freiwurf für Team SCHWARZ an der eigenen Freiwurflinie",
   "Freiwurf für Team SCHWARZ am Auswechselraum von Team WEISS",
   "Hinausstellung von WEISS 9"
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "4:5, 13:3, 16:3a, Erläuterung 7"
 },
 {
  "id": "4.8",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "SCHWARZ 14 wechselt bei einer Spielunterbrechung korrekt ein. Trotzdem kommt vom Zeitnehmertisch ein Pfiff, denn SCHWARZ 14 ist nicht mit dieser Nummer im Spielprotokoll eingetragen. Die Kontrolle des Spielprotokolls zeigt, dass der Spieler dort die Nummer 18 hat. Wie ist zu entscheiden?",
  "options": [
   "Progressive Bestrafung des Mannschafsverantwortlichen von SCHWARZ",
   "Freiwurf für Team WEISS auf Höhe des Zeitnehmertisches",
   "Korrektur der Nummer im Spielprotokoll",
   "Das Spiel wird mit dem der Spielsituation entsprechenden Wurf fortgesetzt. Ein schriftlicher Bericht ist erforderlich."
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "4:3, 13:3, 13:4"
 },
 {
  "id": "4.9",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Wann ist es bis zu zwei Personen (Offiziellen und/oder Spielern) einer Mannschaft gestattet, die Spielfläche zusätzlich zu betreten?",
  "options": [
   "Während einer Spielzeitunterbrechung",
   "Während einer Spielzeitunterbrechung und mit Erlaubnis eines Schiedsrichters",
   "Bei Verletzung eines Spielers",
   "Mit Erlaubnis des Zeitnehmers"
  ],
  "correct": [
   "b"
  ],
  "rule": "4:11"
 },
 {
  "id": "4.10",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Der Schiedsrichter pfeift und zeigt ein Time-out an, veranlasst durch die dritte Hinausstellung von WEISS 2. Als der Schiedsrichter dem Sekretär und dem Zeitnehmer die Disqualifikation anzeigt, läuft der Mannschaftsverantwortliche von Team WEISS auf die Spielfläche, um gegen die Hinausstellung zu protestieren. Ein anderer Offizieller von Team WEISS war zuvor schon verwarnt worden. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation des Mannschaftsverantwortlichen von Team WEISS (rote Karte) und 2-Minuten-Reduzierung von Team WEISS um einen zusätzlichen Spieler",
   "Persönliche Verwarnung für den Mannschaftsverantwortlichen von Team WEISS",
   "Disqualifikation des Mannschaftsverantwortlichen von Team WEISS mit schriftlichem Bericht (rote und blaue Karte)",
   "Hinausstellung des Mannschaftsverantwortlichen von Team WEISS",
   "2-Minuten-Reduzierung von Team WEISS auf der Spielfläche um einen zusätzlichen Spieler"
  ],
  "correct": [
   "d",
   "e"
  ],
  "rule": "4:2, 16:3e"
 },
 {
  "id": "4.11",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Während eines Time-outs aufgrund der Verletzung eines Spielers läuft WEISS 2 als ein zusätzlicher Spieler von Team WEISS ohne Erlaubnis der Schiedsrichter auf das Spielfeld. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung von WEISS 2",
   "Progressive Bestrafung des Mannschaftsverantwortlichen von Team WEISS",
   "Disqualifikation von WEISS 2 (rote Karte)",
   "Hinausstellung von WEISS 2 und 2-Minuten-Reduzierung seiner Mannschaft auf der Spielfläche"
  ],
  "correct": [
   "d"
  ],
  "rule": "4:4, 4:6, 16:3a"
 },
 {
  "id": "4.12",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "WEISS 5 liegt verletzt auf der Spielfläche. Der Feldschiedsrichter zeigt ein Time-out an und gestattet zwei Personen von Team WEISS, zur Behandlung von WEISS 5 die Spielfläche zu betreten. Der Offizielle B von Team SCHWARZ betritt das Spielfeld ebenfalls, um seinem Torwart Ratschläge zu geben. Wie ist zu entscheiden?",
  "options": [
   "Keine Entscheidung, da das Signal allen Spielern und Offiziellen beider Mannschaften das Betreten der Spielfläche gestattet",
   "Alle vier Offiziellen von Team SCHWARZ sind zu verwarnen und im Wiederholungsfall zu disqualifizieren.",
   "Der Mannschaftsverantwortliche von Team SCHWARZ wird verwarnt.",
   "Progressive Bestrafung des Offiziellen B von Team SCHWARZ",
   "Nach Behandlung auf der Spielfläche muss WEISS 5 die Spielfläche umgehend verlassen. WEISS 5 darf die Spielfläche erst nach dem dritten Angriff seiner Mannschaft wieder betreten."
  ],
  "correct": [
   "d",
   "e"
  ],
  "rule": "4:2, 4:11"
 },
 {
  "id": "4.13",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Torwart WEISS 16 muss wegen Verletzung durch WEISS 5 ersetzt werden. WEISS 5 wechselt seine Spielkleidung. Nach 20 Minuten ist WEISS 16 wieder einsatzfähig und der Offizielle A von Team WEISS wechselt: WEISS 5 wird erneut als Feldspieler eingesetzt (ohne Mitteilung an Sekretär/Zeitnehmer). Wie ist zu entscheiden?",
  "options": [
   "Keine Bestrafung, weil dies gestattet ist",
   "Freiwurf für Team SCHWARZ",
   "Hinausstellung von WEISS 5",
   "Disqualifikation von WEISS 5 (rote Karte)"
  ],
  "correct": [
   "a"
  ],
  "rule": "4:1"
 },
 {
  "id": "4.14",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "WEISS 4 verlässt die Spielfläche außerhalb seiner Auswechsellinie. Als er die Seitenlinie überschritten hat, aber noch nicht in seinem Auswechselraum angekommen ist, betritt WEISS 11 für ihn die Spielfläche über die Auswechsellinie. Entscheidung nach Pfiff des Zeitnehmers?",
  "options": [
   "Freiwurf für Team SCHWARZ an der Stelle, an der WEISS 4 die Spielfläche verlassen hat",
   "Freiwurf für Team SCHWARZ am Auswechselraum von Team WEISS",
   "Hinausstellung von WEISS 4",
   "Hinausstellung von WEISS 11",
   "Hinausstellung von WEISS 4 und WEISS 11"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "4:4, 4:5, 13:6, 16:3a"
 },
 {
  "id": "4.15",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "SCHWARZ 3 begeht während einer Spielunterbrechung den ersten Wechselfehler seiner Mannschaft. Vorangegangen war eine Freiwurfentscheidung für Team SCHWARZ. Spieler SCHWARZ 3 war bis dahin weder verwarnt noch hinausgestellt worden. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung von SCHWARZ 3",
   "Hinausstellung von SCHWARZ 3",
   "Freiwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "4:5, 13:3, 16:3a"
 },
 {
  "id": "4.16",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Nachdem die Schiedsrichter auf 7-Meter-Wurf für Team WEISS entschieden haben, begeht WEISS 27, der als Werfer vorgesehen war, einen Wechselfehler. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team WEISS",
   "Abwurf für Team SCHWARZ",
   "Hinausstellung von WEISS 27"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "4:5, 13:3, 16:3a"
 },
 {
  "id": "4.17",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Team WEISS hat ein Tor erzielt. Vor Anpfiff des Anwurfs betritt SCHWARZ 10 die Spielfläche, bevor SCHWARZ 6 sie verlassen hat. Wie ist zu entscheiden?",
  "options": [
   "Anwurf",
   "Freiwurf für Team WEISS",
   "Hinausstellung von SCHWARZ 10",
   "Hinausstellung von SCHWARZ 6"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "4:5, 13:3, 16:3a"
 },
 {
  "id": "4.18",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Bei Spielbeginn sind von Team WEISS nur 12 Spieler anwesend, weil die beiden Torwarte noch fehlen. Team WEISS beginnt daher mit einem der 12 Feldspieler als Torwart. Welche der folgenden Aussagen treffen zu?",
  "options": [
   "Der als Torwart beginnende Feldspieler muss im Spielprotokoll unter Ziffer 1, 12 oder 16 eingetragen werden.",
   "Der als Torwart beginnende Feldspieler darf später auch als Feldspieler eingesetzt werden.",
   "Die verspätet eintreffenden Torwarte von Team WEISS müssen im Spielprotokoll unter den Ziffern 1, 12 oder 16 nachgetragen werden.",
   "Einer der beiden verspätet eintreffenden Torwarte darf nur als Feldspieler eingesetzt werden."
  ],
  "correct": [
   "b"
  ],
  "rule": "4:1, 4:8"
 },
 {
  "id": "4.19",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Während einer Spielzeitunterbrechung begeht Spieler WEISS 5 den ersten Wechselfehler seiner Mannschaft. Diese war zum Zeitpunkt der Spielzeitunterbrechung in Ballbesitz. Wie ist zu entscheiden?",
  "options": [
   "Keine Bestrafung",
   "Verwarnung von WEISS 5",
   "Hinausstellung von WEISS 5",
   "Freiwurf für Team SCHWARZ",
   "Team WEISS bleibt in Ballbesitz"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "4:5, 13:3, 16:3a"
 },
 {
  "id": "4.20",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Torwart WEISS 3 will einen 7-Meter-Wurf ausführen. Um das leere Tor zu hüten, betritt WEISS 15 im Torwarttrikot die Spielfläche, nachdem er gegen einen Feldspieler ausgewechselt wurde. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von WEISS 3",
   "Hinausstellung von WEISS 15",
   "Keine Bestrafung",
   "7-Meter-Wurf für Team WEISS",
   "Freiwurf für Team SCHWARZ am Auswechselraum von Team WEISS"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "4:1, 4:5, 13:3, 16:3a"
 },
 {
  "id": "4.21",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Bei einem Gegenstoß von Team WEISS, der sich dabei eine klare Torchance bietet, begeht SCHWARZ 3 einen Wechselfehler. Sekretär und Zeitnehmer reagieren nicht, aber der Feldschiedsrichter hat das Vergehen bemerkt. Wie ist zu entscheiden?",
  "options": [
   "Sofortige Hinausstellung von SCHWARZ 3 und Freiwurf für Team WEISS",
   "Sofortige Hinausstellung von SCHWARZ 3 und 7-Meter-Wurf für Team WEISS",
   "Torchance abwarten, dann Hinausstellung von SCHWARZ 3 und Freiwurf für Team WEISS",
   "Torchance abwarten, dann Hinausstellung von SCHWARZ 3 und Wurf gemäß Spielsituation"
  ],
  "correct": [
   "d"
  ],
  "rule": "4:5, 13:2, Erläuterung zu 13:2, 14:2, 16:3a"
 },
 {
  "id": "4.22",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Nach einer Abwehr durch Torwart WEISS 1 rollt der Ball entlang der Seitenlinie an der Auswechselbank von Team WEISS vorbei. Der auf der Bank sitzende Spieler WEISS 5 hält den Fuß ins Spielfeld und stoppt den Ball, damit WEISS 4 ihn noch vor der Seitenlinie aufnehmen kann. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Einwurf für Team SCHWARZ",
   "Hinausstellung von WEISS 5",
   "Disqualifikation von WEISS 5 (rote Karte)",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "a",
   "c",
   "e"
  ],
  "rule": "4:6, 13:1a, 16:3a"
 },
 {
  "id": "4.23",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "30 Sekunden vor Ablauf seiner Hinausstellungszeit betritt WEISS 3 die Spielfläche, ohne in das Spiel einzugreifen. Team WEISS ist in Ballbesitz. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "Hinausstellung von WEISS 3 und 30-Sekunden-Reduzierung von Team WEISS auf der Spielfläche um einen zusätzlichen Spieler",
   "30 Sekunden für WEISS 3 und 2-Minuten-Reduzierung von Team WEISS auf der Spielfläche um einen zusätzlichen Spieler",
   "Disqualifikation von WEISS 3 und 30-Sekunden-Reduzierung von Team WEISS auf der Spielfläche um einen zusätzlichen Spieler"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "4:6, 13:1a, 16:3a"
 },
 {
  "id": "4.24",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "WEISS 5 wurde hinausgestellt. Als 1 Minute und 45 Sekunden seiner Hinausstellungszeit verstrichen sind, wird er von seinem Trainer auf die Spielfläche geschickt. Wie ist zu entscheiden?",
  "options": [
   "WEISS 5 wird erneut hinausgestellt, und Team WEISS wird auf der Spielfläche 2 Minuten und 15 Sekunden lang um einen Spieler reduziert.",
   "WEISS 5 wird disqualifiziert (rote Karte), und Team WEISS wird auf der Spielfläche 15 Sekunden lang um zwei Spieler und im Anschluss 1 Minute 45 Sekunden lang um einen Spieler reduziert.",
   "WEISS 5 wird erneut hinausgestellt, und Team WEISS wird 15 Sekunden lang um zwei Spieler und im Anschluss 1 Minute 45 Sekunden lang um einen Spieler reduziert."
  ],
  "correct": [
   "c"
  ],
  "rule": "4:6, 16:3a"
 },
 {
  "id": "4.25",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Nach Ablauf seiner Hinausstellungszeit will Torwart SCHWARZ 1 seine Mannschaft, die sich gerade in der Abwehr befindet, ergänzen. Er betritt dazu die Spielfläche und übernimmt als sechster Feldspieler von Team SCHWARZ im Torwarttrikot die Außenposition. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "7-Meter-Wurf für Team WEISS",
   "Freiwurf für Team WEISS",
   "Hinausstellung von Torwart SCHWARZ 1"
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "4:1, 4:5, 13:1, 16:3a"
 },
 {
  "id": "4.26",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Wie ist zu entscheiden, wenn ein Spieler auf der Spielfläche blutet?",
  "options": [
   "Der Spieler muss die Spielfläche sofort und unaufgefordert verlassen.",
   "Der Spieler darf bis zur nächsten Unterbrechung auf der Spielfläche bleiben.",
   "Der Mitspieler, der den blutenden Spieler ersetzt, darf außerhalb der Wechsellinien eintreten.",
   "Der Spieler darf vor der nächsten Unterbrechung nicht zurückkommen.",
   "Wenn der Spieler die Spielfläche entgegen ausdrücklicher Anweisung der Schiedsrichter nicht verlässt, ist er wegen unsportlichen Verhaltens zu bestrafen."
  ],
  "correct": [
   "a",
   "e"
  ],
  "rule": "4:10, 8:7, 16:1b"
 },
 {
  "id": "4.27",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "WEISS 5 ist allein vor Torwart SCHWARZ 1 und hat klare Torgelegenheit. SCHWARZ 11 begeht einen Wechselfehler, indem er das Spielfeld betritt, bevor SCHWARZ 9 das Spielfeld verlassen hat. Der Zeitnehmer pfeift wegen dieses Verstoßes, genau dann, wenn WEISS 5 werfen will. Richtige Entscheidung?",
  "options": [
   "Hinausstellung des eintretenden Spielers",
   "Disqualifikation des eintretenden Spielers",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Der Zeitnehmer kann warten, bis die klare Torgelegenheit vorbei ist, bevor er den Wechselfehler pfeift."
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "4:5, 14:1a, 16:3a, Erläuterung 7"
 },
 {
  "id": "4.28",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Torwart SCHWARZ 1 hält einen Ball, spielt ihn zu einem Mitspieler, geht in der Nähe des Auswechselraums an die Seitenlinie und verlässt das Spielfeld. Er holt sich sein Handtuch und eine Flasche, aus der er einen Schluck nimmt. Ein anderer Torwart von Team SCHWARZ geht nicht auf das Spielfeld. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen, da dies gestattet ist",
   "Hinausstellung von SCHWARZ 1 infolge eines Wechselfehlers",
   "Freiwurf für Team WEISS auf Höhe des Auswechselraums von Team SCHWARZ"
  ],
  "correct": [
   "a"
  ],
  "rule": "4:4 Kommentar"
 },
 {
  "id": "4.29",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Der Offizielle A von Team SCHWARZ ist bereits verwarnt worden. Bei einer Entscheidung der Schiedsrichter rennt Offizieller D von Team SCHWARZ protestierend mehrere Meter auf das Spielfeld. Wie ist zu entscheiden?",
  "options": [
   "Keine Bestrafung",
   "Verwarnung des Offiziellen D von Team SCHWARZ",
   "Hinausstellung des Offiziellen D von Team SCHWARZ",
   "Disqualifikation des Offiziellen D von Team SCHWARZ (rote Karte)"
  ],
  "correct": [
   "c"
  ],
  "rule": "4:2, 8:7, 16:3e"
 },
 {
  "id": "4.30",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Aufgrund einer Verletzung von WEISS 6 erfolgt eine Spielzeitunterbrechung. Die Ursache der Verletzung führte nicht zu einer progressiven Strafe für einen Spieler von Team SCHWARZ. Die Schiedsrichter haben zwei Personen das Betreten der Spielfläche gestattet, um WEISS 6 zu versorgen. Offizieller C von Team WEISS versorgt den verletzten Spieler WEISS 6. Offizieller A von Team WEISS ist der Meinung, SCHWARZ 5 habe die Verletzung verursacht. Er folgt SCHWARZ 5 in dessen Auswechselraum und schlägt ihm ins Gesicht. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation des Offiziellen A von Team WEISS, schriftlicher Bericht (rote und blaue Karte), 2-Minuten-Reduzierung von Team WEISS auf der Spielfläche um einen Spieler",
   "Das Spiel wird mit dem Wurf fortgesetzt, der dem Grund für die Unterbrechung entspricht.",
   "Hinausstellung des Offiziellen A von Team WEISS, 2-Minuten-Reduzierung von Team WEISS auf der Spielfläche um einen Spieler",
   "Freiwurf für Team SCHWARZ",
   "Disqualifikation des Offiziellen A von Team WEISS ohne schriftlichen Bericht (rote Karte), 2-Minuten-Reduzierung von Team WEISS auf der Spielfläche um einen Spieler",
   "Nach Behandlung auf der Spielfläche muss WEISS 6 die Spielfläche verlassen. WEISS 6 darf die Spielfläche erst nach dem dritten Angriff seiner Mannschaft wieder betreten."
  ],
  "correct": [
   "a",
   "b",
   "f"
  ],
  "rule": "4:11, 8:6b, 13:3, 16:6a, 16:8"
 },
 {
  "id": "4.31",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Unmittelbar nach dem Anwurf durch Team SCHWARZ stellen die Schiedsrichter fest, dass sich im Auswechselraum von Team SCHWARZ eine nicht im Spielprotokoll eingetragene Person befindet. Die Überprüfung ergibt, dass es sich um den Vereinsvorsitzenden handelt. Team SCHWARZ hatte jedoch bereits fünf Offizielle im Spielbericht eingetragen. Wie ist zu entscheiden?",
  "options": [
   "Der Vereinsvorsitzende muss den Auswechselraum verlassen.",
   "Der Mannschaftsverantwortliche von Team SCHWARZ wird persönlich bestraft.",
   "Ein weiterer Offizieller muss den Auswechselraum verlassen.",
   "Spielfortsetzung mit Freiwurf für Team WEISS",
   "Spielfortsetzung mit Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "a",
   "b",
   "d"
  ],
  "rule": "4:2, 13:1"
 },
 {
  "id": "4.32",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Was ist bezüglich der Spielkleidung richtig?",
  "options": [
   "Alle als Torwart eingesetzten Spieler einer Mannschaft müssen dieselbe Trikotfarbe verwenden.",
   "Die Spieler müssen auf dem Rücken und auf der Brust Nummern tragen, die mindestens 20 cm hoch sind.",
   "Die Torwarte dürfen einen Kopfschutz aus weichem Material tragen.",
   "Alle Feldspieler und Torwarte dürfen Nummern von 1 bis 100 benutzen."
  ],
  "correct": [
   "a"
  ],
  "rule": "4:7, 4:8, 4:9"
 },
 {
  "id": "4.33",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "WEISS 10 sitzt seine erste Zeitstrafe ab (Spielzeit bei Beginn der Strafzeit: 21:00). Nach Wiederanpfiff reklamiert er so heftig, dass die Schiedsrichter das Spiel bei 21:30 mit Time-out unterbrechen und WEISS 10 mit einer weiteren Hinausstellung bestrafen. Welche Konsequenzen hat dies für Team WEISS?",
  "options": [
   "Hinausstellung von WEISS 10",
   "Disqualifikation von WEISS 10",
   "Team WEISS wird bis 25:00 auf der Spielfläche um einen Spieler reduziert.",
   "Team WEISS wird bis 23:00 auf der Spielfläche um zwei Spieler und dann bis 23:30 um einen Spieler reduziert."
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "4:6, 16:3d"
 },
 {
  "id": "4.34",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "In welchen der folgenden Fälle ist der Mannschaftsverantwortliche persönlich zu bestrafen?",
  "options": [
   "Wenn ein Spieler seiner Mannschaft den Auswechselraum ohne Abmeldung bei Sekretär/Zeitnehmer verlässt",
   "Wenn sich ab Spielbeginn im Auswechselraum Personen aufhalten, die nicht im Spielprotokoll eingetragen sind",
   "Wenn ein zusätzlicher Spieler die Spielfläche betritt",
   "Wenn ein nicht teilnahmeberechtigter Spieler seiner Mannschaft die Spielfläche betritt",
   "Wenn festgestellt wird, dass Spieler auf dem Spielfeld nach Spielbeginn eine regelwidrige Ausrüstung tragen.",
   "Bei Regelverstößen im Auswechselraum, die nicht eindeutig einer bestimmten Person zugeordnet werden können."
  ],
  "correct": [
   "b",
   "d",
   "e",
   "f"
  ],
  "rule": "4:2, 4:3"
 },
 {
  "id": "4.35",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Die Schiedsrichter geben das Zeichen zum Betreten der Spielfläche, da sich ein Spieler von Team WEISS verletzt hat. Wer darf die Spielfläche betreten?",
  "options": [
   "Ausschließlich zwei Offizielle von Team WEISS",
   "Je zwei Offizielle beider Mannschaften",
   "Zwei Personen (Offizielle oder Spieler) von Team WEISS",
   "Zwei Personen (Offizielle oder Spieler) von beiden Mannschaften",
   "Der Arzt von Team WEISS, wenn er nicht einer der vier Offiziellen ist"
  ],
  "correct": [
   "c"
  ],
  "rule": "4:11"
 },
 {
  "id": "4.36",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Der Offizielle C von Team WEISS hat bereits eine Verwarnung wegen Reklamierens erhalten. Später betritt der Offizielle B von Team WEISS die Spielfläche ohne Erlaubnis. Sein Verhalten ist allerdings nicht unsportlich. Welche Bestrafung ist richtig?",
  "options": [
   "Verwarnung des Offiziellen B von Team WEISS",
   "Hinausstellung des Offiziellen B, der die Bank zwei Minuten lang verlassen muss",
   "Disqualifikation des Offiziellen B von Team WEISS (rote Karte; Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert)",
   "Hinausstellung des Offiziellen B von Team WEISS; Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert; der Offizielle B darf im Auswechselraum bleiben."
  ],
  "correct": [
   "d"
  ],
  "rule": "4:2, 16:3e"
 },
 {
  "id": "4.37",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Welche der folgenden Handlungen sind bei Time-out aufgrund einer Verletzung (die Schiedsrichter gaben Team WEISS die Erlaubnis zum Betreten der Spielfläche) NICHT erlaubt?",
  "options": [
   "Die Spieler von Team SCHWARZ halten sich nahe der Seitenlinie auf, um Anweisungen ihres Trainers zu erhalten.",
   "Die Spieler von Team WEISS nehmen Auswechslungen außerhalb der Auswechsellinie vor.",
   "Ein Offizieller von Team WEISS befindet sich auf der Spielfläche und entfernt sich weit vom verletzten Spieler, um anderen Spielern Anweisungen zu geben."
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "4:4, 4:11"
 },
 {
  "id": "4.38",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Vor Beginn des Spiels stellt der Delegierte fest, dass WEISS 7 Sprunggelenkprotektoren aus hartem Material trägt, die nicht abgedeckt sind. Was ist/sind die richtige(n) Entscheidung(en)?",
  "options": [
   "WEISS 7 kann mit den Sprunggelenkprotektoren spielen, aber der Delegierte muss einen Bericht an die Spielleitende Stelle schicken.",
   "WEISS 7 darf nicht mit Sprunggelenkprotektoren spielen, deren harte Teile nicht abgedeckt sind. Der Delegierte muss den zuständigen Mannschaftsoffiziellen darauf hinweisen, dass der Spieler die Protektoren entfernen oder die harten Teile weich polstern.",
   "WEISS 7 erhält eine Verwarnung.",
   "Der verantwortliche Mannschaftsoffizielle erhält eine Verwarnung.",
   "Keine der vorherigen Antworten ist gültig."
  ],
  "correct": [
   "b"
  ],
  "rule": "4:9"
 },
 {
  "id": "4.39",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Bei 29:00 der ersten Halbzeit erhält WEISS 5 eine Hinausstellung. Nach der Halbzeitpause, drei Sekunden nach Wiederanpfiff durch den Feldschiedsrichter, pfeift der Zeitnehmer. Team WEISS hat sieben Spieler auf der Spielfläche. Wie ist zu entscheiden?",
  "options": [
   "Ein Spieler von Team WEISS muss die Spielfläche verlassen. Ansonsten ist keine weitere Strafe erforderlich.",
   "Hinausstellung des überzähligen Spielers von Team WEISS",
   "Team WEISS wird auf der Spielfläche 57 Sekunden lang um zwei Spieler und im Anschluss 1 Minute und 3 Sekunden lang um einen Spieler reduziert."
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "4:6"
 },
 {
  "id": "4.40",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Spielzeit: 43:27 – Spielunterbrechung durch den Zeitnehmer nach Torerfolg durch WEISS 15 und Anwurf. Der Zeitnehmer teilt den Schiedsrichtern mit, dass WEISS 15 nicht im Spielprotokoll aufgeführt ist. Im Spielprotokoll sind bereits 16 Spieler für Team WEISS eingetragen. Die Schiedsrichter stellen fest, dass WEISS 11 überhaupt nicht anwesend ist. Wie ist zu entscheiden?",
  "options": [
   "Tor wird annulliert",
   "Tor zählt",
   "WEISS 11 wird gestrichen, WEISS 15 wird nachgetragen",
   "WEISS 15 darf nicht mitspielen und muss das Spielfeld verlassen",
   "Progressive Bestrafung gegen den Mannschaftsverantwortlichen von Team WEISS",
   "Vermerk im Spielbericht / Schriftlicher Bericht"
  ],
  "correct": [
   "b",
   "c",
   "e",
   "f"
  ],
  "rule": "4:3, 9:1, 9:2"
 },
 {
  "id": "4.41",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Nach der Abwehr eines Wurfs von Team SCHWARZ bleibt Torwart WEISS 12 mit einer Knieverletzung auf dem Boden liegen. Wie ist zu entscheiden?",
  "options": [
   "Torwart WEISS 12 darf nach Behandlung auf der Spielfläche weiterspielen.",
   "Zwei teilnahmeberechtigte Personen von Team WEISS dürfen die Spielfläche betreten, um WEISS 12 auf dem Spielfeld zu behandeln, nachdem einer der Schiedsrichter die Handzeichen 15 und 16 gezeigt hat.",
   "Nur eine teilnahmeberechtigte Person von Team WEISS darf die Spielfläche betreten, um WEISS 12 auf dem Spielfeld zu behandeln, nachdem einer der Schiedsrichter die Handzeichen 15 und 16 gezeigt hat.",
   "Nach Behandlung auf der Spielfläche darf WEISS 12 diese erst nach dem dritten Angriff seiner Mannschaft wieder betreten.",
   "Unabhängig von der Anzahl der Angriffe darf WEISS 12 die Spielfläche bei Wiederaufnahme des Spiels nach einer Spielhälfte wieder betreten.",
   "Lehnen die Offiziellen die Behandlung von WEISS 12 ab, muss der Mannschaftsverantwortliche progressive bestraft werden."
  ],
  "correct": [
   "b",
   "d",
   "e",
   "f"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.42",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Bei der Abwehr eines Wurfs von Team SCHWARZ prallt Torwart WEISS 1 mit dem Kopf an den Torpfosten. Er muss auf der Spielfläche behandelt werden. Wie ist zu entscheiden?",
  "options": [
   "WEISS 1 darf nach Behandlung auf der Spielfläche weiterspielen, da er aufgrund einer Kopfverletzung behandelt werden musste.",
   "Nach Behandlung auf der Spielfläche darf WEISS 1 diese erst nach dem dritten Angriff seiner Mannschaft wieder betreten."
  ],
  "correct": [
   "b"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.43",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Spiel ohne Delegierten: Nach Behandlung auf der Spielfläche sitzt WEISS 7 auf der Bank im Auswechselraum. Während des ersten Angriffs von Team WEISS fängt SCHWARZ 2 den Ball ab und sprintet allein auf Torwart WEISS 12 zu. Bevor SCHWARZ 2 zum Torwurf kommt, betritt WEISS 7 im Zuge eines Wechsels mit WEISS 9 die Spielfläche. Wie ist zu entscheiden?",
  "options": [
   "Der Zeitnehmer wartet den Torwurf von SCHWARZ 2 ab, bevor er das Spiel aufgrund eines Wechselfehlers von Team WEISS unterbricht.",
   "Aufgrund des Wechselfehlers von Team WEISS unterbricht der Zeitnehmer das Spiel umgehend.",
   "Time-out",
   "Hinausstellung für WEISS 7",
   "Disqualifikation von WEISS 7 ohne schriftlichen Bericht (rote Karte)",
   "7-Meter-Wurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Unabhängig von der Anzahl der Angriffe seiner Mannschaft darf WEISS 7 die Spielfläche nach Ablauf seiner Hinausstellung wieder betreten."
  ],
  "correct": [
   "b",
   "c",
   "d",
   "f",
   "h"
  ],
  "rule": "2:8, 4:5, 4:11, 13:2, 14:1, Erläuterung 8"
 },
 {
  "id": "4.44",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Nach Behandlung auf der Spielfläche sitzt SCHWARZ 11 auf der Auswechselbank und beschwert sich über eine Entscheidung der Schiedsrichter. Dafür erhält er seine erste Hinausstellung des Spiels. Im Anschluss an den zweiten Angriff von Team SCHWARZ betritt SCHWARZ 11 nach dem Ablauf seiner Hinausstellung wieder die Spielfläche. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Hinausstellung für SCHWARZ 11",
   "Weiterspielen",
   "Freiwurf für Team WEISS"
  ],
  "correct": [
   "c"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.45",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "SCHWARZ 10 wird an der Freiwurflinie angespielt. Kurz nachdem er den Ball fängt, wird er von WEISS 3 zu Boden gezogen. Er fällt unglücklich, verletzt sich am Ellbogen und muss auf der Spielfläche behandelt werden. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung für WEISS 3",
   "Hinausstellung für WEISS 3",
   "Zwei teilnahmeberechtigte Personen von Team SCHWARZ dürfen die Spielfläche betreten, um SCHWARZ 10 auf der Spielfläche zu behandeln, nachdem einer der Schiedsrichter die Handzeichen 15 und 16 gezeigt hat.",
   "SCHWARZ 10 darf nach Behandlung auf der Spielfläche weiterspielen.",
   "Nach Behandlung auf der Spielfläche darf SCHWARZ 10 diese erst nach dem dritten Angriff seiner Mannschaft wieder betreten.",
   "Time-out"
  ],
  "correct": [
   "b",
   "c",
   "f"
  ],
  "rule": "2:8, 4:11, 8:4, 16:3c, Erläuterung 8"
 },
 {
  "id": "4.46",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Während eines Gegenstoßes wird SCHWARZ 10 von SCHWARZ 9 angespielt. Kurz nachdem SCHWARZ 9 den Pass spielt, wird er von WEISS 11 zu Boden gezogen. SCHWARZ 10 fängt den Ball. Kurz darauf fällt er und bleibt verletzt am Boden liegen. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung für WEISS 11",
   "Hinausstellung für WEISS 11",
   "Zwei teilnahmeberechtigte Personen von Team SCHWARZ dürfen die Spielfläche betreten, um SCHWARZ 10 auf der Spielfläche zu behandeln, nachdem einer der Schiedsrichter die Handzeichen 15 und 16 gezeigt hat.",
   "SCHWARZ 10 darf nach Behandlung auf der Spielfläche weiterspielen.",
   "Nach Behandlung auf der Spielfläche darf SCHWARZ 10 diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten.",
   "Time-out"
  ],
  "correct": [
   "b",
   "c",
   "e",
   "f"
  ],
  "rule": "2:8, 4:11, 8:4, 16:3c, Erläuterung 8"
 },
 {
  "id": "4.47",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Drei Minuten vor Spielende lautet der Spielstand 21:21. SCHWARZ 2, der erfolgreichste Torschütze seiner Mannschaft, verstaucht sich den Knöchel und bleibt verletzt am Boden liegen. Einer der Schiedsrichter erkundigt sich bei SCHWARZ 2, ob er auf der Spielfläche behandelt werden muss. SCHWARZ 2 antwortet nicht, bleibt aber weiter liegen. Daher unterbrechen die Schiedsrichter das Spiel und zeigen die Handzeichen 15 und 16, um zwei Personen von Team SCHWARZ zur Behandlung von SCHWARZ 2 das Betreten der Spielfläche zu gestatten. Team SCHWARZ lehnt ab, und noch bevor die Schiedsrichter weitere Maßnahmen ergreifen können, ist SCHWARZ 2 wieder in der Lage, weiterzuspielen. Wie ist zu entscheiden?",
  "options": [
   "SCHWARZ 2 darf weiterspielen.",
   "SCHWARZ 2 muss die Spielfläche verlassen und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten.",
   "Der Mannschaftsverantwortliche von Team SCHWARZ ist progressive zu bestrafen."
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "4:11, 8:7, 16:1b, Erläuterung 8"
 },
 {
  "id": "4.48",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "30 Sekunden vor dem Ende der ersten Halbzeit wird WEISS 5 auf der Spielfläche behandelt. Nach der Behandlung verlässt er die Spielfläche und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten. Eine Minute nach Beginn der zweiten Halbzeit, während des zweiten Angriffs von Team WEISS, betritt WEISS 5 im Zuge eines korrekten Wechsels mit WEISS 4 die Spielfläche. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen",
   "Hinausstellung für WEISS 5 aufgrund eines Wechselfehlers (verfrühtes Betreten der Spielfläche nach Behandlung auf der Spielfläche)",
   "Time-out"
  ],
  "correct": [
   "a"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.49",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Nach einem Zusammenstoß bleiben WEISS 4 und SCHWARZ 5 scheinbar verletzt am Boden liegen. Die Schiedsrichter unterbrechen das Spiel umgehend und zeigen die Handzeichen 15 und 16, um je zwei Personen beider Mannschaften zur Behandlung der Spieler das Betreten der Spielfläche zu gestatten. Noch bevor eine der Personen das Spielfeld betritt, ist SCHWARZ 5 wieder in der Lage, weiterzuspielen. WEISS 4 wird dagegen auf der Spielfläche behandelt. Nach 20 Sekunden wird das Spiel fortgesetzt. Wie ist zu entscheiden?",
  "options": [
   "Nach Behandlung auf der Spielfläche darf WEISS 4 diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten.",
   "Da SCHWARZ 5 nicht auf der Spielfläche behandelt wurde, darf er weiterspielen.",
   "SCHWARZ 5 muss die Spielfläche verlassen und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten."
  ],
  "correct": [
   "a",
   "b"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.50",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "WEISS 2 ist verletzt und muss auf der Spielfläche behandelt werden. Die 1. Halbzeit endet nach dem ersten Angriff von Team WEISS. Als der Schiedsrichter die 2. Halbzeit anpfeift, befindet sich WEISS 2 während des Angriffs seiner Mannschaft auf der Spielfläche. Wie ist zu entscheiden?",
  "options": [
   "Der Zeitnehmer unterbricht das Spiel umgehend und informiert die Schiedsrichter.",
   "Hinausstellung für WEISS 2",
   "Weiterspielen",
   "Freiwurf für Team SCHWARZ am Auswechselraum",
   "Keine Hinausstellung für WEISS 2, der die Spielfläche verlassen muss; Team WEISS bleibt in Ballbesitz, da Fehler des Zeitnehmers/Delegierten"
  ],
  "correct": [
   "c"
  ],
  "rule": "4:11 Abs. 3"
 },
 {
  "id": "4.51",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "WEISS 4 wird auf der Spielfläche behandelt. Nach der Behandlung verlässt er die Spielfläche und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten. Nach dem zweiten Angriff von Team WEISS schickt Offizieller A den Spieler WEISS 4 auf das Spielfeld, um eine Aufgabe in der Verteidigung zu übernehmen. WEISS 4 betritt das Spielfeld im Zuge eines Wechsels mit WEISS 6, um ausschließlich in der Verteidigung zu agieren. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen, WEISS 4 darf in der Verteidigung spielen",
   "Verwarnung für WEISS 4, da er das Spielfeld zu früh betreten hat",
   "Hinausstellung für WEISS 4 aufgrund eines Wechselfehlers"
  ],
  "correct": [
   "c"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.52",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "WEISS 11 rutscht auf dem Boden und bleibt knapp außerhalb der Spielfläche auf der gegenüberliegenden Seite des Auswechselraums liegen. Er prallt dabei mit dem Kopf gegen die Bande. Die Schiedsrichter unterbrechen das Spiel umgehend, um WEISS 11 behandeln zu lassen. Nach 20 Sekunden ist WEISS 11 wieder in der Lage, weiterzuspielen. Wie ist zu entscheiden?",
  "options": [
   "WEISS 11 darf weiterspielen, da er sich während der Behandlung außerhalb der Spielfläche befand.",
   "WEISS 11 muss die Spielfläche verlassen und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten."
  ],
  "correct": [
   "b"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.53",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Eine Minute nach Spielbeginn kommt es zu einem Zweikampf zwischen Kreisspieler SCHWARZ 3 und WEISS 6. SCHWARZ 3 bleibt danach scheinbar verletzt am Boden liegen. Die Schiedsrichter ermahnen WEISS 6. SCHWARZ 3 bittet um Behandlung auf der Spielfläche. Nach der Behandlung auf der Spielfläche ist SCHWARZ 3 wieder in der Lage, weiterzuspielen. Wie ist zu entscheiden?",
  "options": [
   "SCHWARZ 3 darf weiterspielen",
   "SCHWARZ 3 muss die Spielfläche verlassen und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten."
  ],
  "correct": [
   "b"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.54",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Team SCHWARZ spielt einen Gegenstoß. SCHWARZ 2 prellt den Ball und wird von WEISS 10 gestoßen. SCHWARZ 2 kommt ins Straucheln, kann den Ball aber dennoch zu SCHWARZ 4 spielen, der daraufhin ein Tor erzielt. Beim Rückzug in die Verteidigung verstaucht sich SCHWARZ 4 den Knöchel. Die Schiedsrichter unterbrechen das Spiel, entscheiden auf Hinausstellung für WEISS 10 und erteilen zwei Personen die Erlaubnis, zur Behandlung von SCHWARZ 4 die Spielfläche zu betreten. Nach 30 Sekunden ist SCHWARZ 4 wieder in der Lage, weiterzuspielen. Wie ist zu entscheiden?",
  "options": [
   "SCHWARZ 4 darf weiterspielen.",
   "SCHWARZ 4 muss die Spielfläche verlassen und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten."
  ],
  "correct": [
   "b"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.55",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Bei einem Torwurf trifft WEISS 11 den Verteidiger SCHWARZ 2 unglücklich im Gesicht. SCHWARZ 2 muss auf der Spielfläche behandelt werden. Nach 20 Sekunden ist SCHWARZ 2 wieder in der Lage, weiterzuspielen. Wie ist zu entscheiden?",
  "options": [
   "SCHWARZ 2 darf weiterspielen, da die Verletzung durch einen Ball ins Gesicht zustande kam.",
   "SCHWARZ 2 muss die Spielfläche verlassen und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten."
  ],
  "correct": [
   "b"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.56",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Nach einem Torwurf bleibt Kreisspieler SCHWARZ 2 im Torraum von Team WEISS liegen und bittet um Behandlung – scheinbar aufgrund einer Beinverletzung. Team WEISS hat soeben einen Gegenstoß eingeleitet. Wie ist zu entscheiden?",
  "options": [
   "Die Schiedsrichter müssen das Spiel umgehend unterbrechen und die Handzeichen 15 und 16 zeigen, um zur Behandlung von SCHWARZ 2 auf der Spielfläche aufzufordern.",
   "Das Spiel wird fortgesetzt, bis der Gegenstoß von Team WEISS abgeschlossen ist. Danach muss das Spiel unterbrochen werden, um zur Behandlung von SCHWARZ 2 auf der Spielfläche aufzufordern."
  ],
  "correct": [
   "b"
  ],
  "rule": "4:11, Erläuterung 8"
 },
 {
  "id": "4.57",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "WEISS 2 wärmt sich ohne Ellbogenschutz auf. Fünf Minuten nach Spielbeginn befindet sich Team WEISS in Ballbesitz. WEISS 2 wird regelkonform eingewechselt. Die Schiedsrichter stellen fest, dass WEISS 2 nun Ellbogenschutz trägt, bei dem nicht alle harten Teile abgedeckt sind. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen, denn es ist erlaubt, mit Ellbogenschutz zu spielen, bei dem nicht alle harten Teile abgedeckt sind.",
   "Die Schiedsrichter müssen das Spiel unterbrechen, WEISS 2 muss die Spielfläche verlassen und darf diese erst wieder betreten, nachdem er die harten Teile vollständig abdeckt hat.",
   "Die Schiedsrichter müssen das Spiel unterbrechen, WEISS 2 muss die Spielfläche verlassen und darf diese erst wieder betreten, nachdem er den Ellbogenschutz abgelegt hat.",
   "Progressive Bestrafung für WEISS 2",
   "Progressive Bestrafung des Mannschaftsverantwortlichen von Team WEISS",
   "Freiwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "c",
   "e",
   "g"
  ],
  "rule": "4:9, Guidelines und Interpretationen (4:9), Ausrüstungsreglement"
 },
 {
  "id": "4.58",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Team WEISS befindet sich im Angriff nahe der Freiwurflinie. WEISS 7 betritt nach einem regulären Wechsel die Spielfläche. Er trägt einen gelben Pullover über seinem regulären weißen Trikot. Wie ist zu entscheiden?",
  "options": [
   "Die Schiedsrichter unterbrechen das Spiel, WEISS 7 muss den gelben Pullover ausziehen, bevor er weiterspielen darf.",
   "Freiwurf für Team SCHWARZ",
   "Hinausstellung für WEISS 7",
   "Freiwurf für Team WEISS"
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "4:7, Guidelines und Interpretationen (4:7, 4:8)"
 },
 {
  "id": "4.59",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Mannschaft WEISS ist in Ballbesitz, als der Zeitnehmer das Spiel unterbricht. Der Zeitnehmer teilt den Schiedsrichtern mit, dass WEISS 11 die Spielfläche betreten hat, aber kein Spieler WEISS 11 im Spielprotokoll eingetragen ist. Es stellt sich heraus, dass der Spieler vom Mannschaftsverantwortlichen irrtümlich als Nummer 13 eingetragen wurde. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Mannschaft WEISS",
   "Freiwurf für Mannschaft SCHWARZ",
   "WEISS 11 darf nicht am Spiel teilnehmen.",
   "Der Fehler wird korrigiert und WEISS 11 ist berechtigt am Spiel teilzunehmen.",
   "Vermerk im Spielbericht/ Schriftlicher Bericht",
   "Progressive Bestrafung des Mannschaftsverantwortlichen von WEISS"
  ],
  "correct": [
   "a",
   "d",
   "e"
  ],
  "rule": "4:3, 4:7, 4:8, Guidelines und Interpretationen (4:7. 4:8)"
 },
 {
  "id": "4.60",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Beim Spielstand von 29:29 sind noch 10 Sekunden zu spielen. Der Torwart WEISS 12 führt einen Abwurf aus und spielt den Ball zu WEISS 11. WEISS 11 sieht, das WEISS 9 sich in einer freien Position an der Torraumlinie von Mannschaft SCHWARZ befindet. Bevor er den Pass zu WEISS 9 spielen kann, unterbricht der Zeitnehmer das Spiel wegen eines Wechselfehlers. SCHWARZ 2 hatte die Spielfläche betreten, bevor SCHWARZ 4 diese verlassen hatte. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Freiwurf für Mannschaft WEISS",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Hinausstellung für SCHWARZ 2",
   "Disqualifikation ohne Bericht für SCHWARZ 2"
  ],
  "correct": [
   "a",
   "b",
   "d"
  ],
  "rule": "2:8, 4:5, 13:1a"
 },
 {
  "id": "4.61",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Es steht 29:29, und es sind noch 10 Sekunden zu spielen. Torwart WEISS 12 führt einen Abwurf aus und spielt den Ball an WEISS 11 weiter. Spieler WEISS 11 sieht, dass WEISS 9 an der Torraumlinie der Mannschaft SCHWARZ in einer freien Position ist. Er passt den Ball an WEISS 9 weiter. Bevor WEISS 9 auf das Tor werfen kann, unterbricht der Delegierte das Spiel wegen einer fehlerhaften Auswechslung. SCHWARZ 2 hat das Spielfeld betreten, bevor SCHWARZ 4 es verlassen hat. Was ist die richtige Entscheidung?",
  "options": [
   "Time-out",
   "Freiwurf für Mannschaft WEISS",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Hinausstellung für SCHWARZ 2",
   "Disqualifikation ohne Bericht für SCHWARZ 2",
   "Der Delegierte hätte mit der Unterbrechung des Spiels warten müssen, bis die klare Torgelegenheit vorbei war."
  ],
  "correct": [
   "a",
   "c",
   "d",
   "f"
  ],
  "rule": "2:8, 4:5, 14:1, Guidelines und Interpretationen (13:2)"
 },
 {
  "id": "4.62",
  "section": "4",
  "sectionTitle": "Mannschaft, Wechsel und Auswechselraum",
  "question": "Es ist möglich, den Videobeweis (VR) in diesem Spiel zu verwenden. Mannschaft WEISS befindet sich in einem Gegenstoß, WEISS 7 hat den Ball an der Mittellinie. In diesem Moment betritt SCHWARZ 9 als zusätzlicher Spieler das Spielfeld. Spieler WEISS 7 spielt den Ball zu WEISS 11, der eine klare Torgelegenheit hat. In diesem Moment pfeift der Delegierte wegen des zusätzlichen Spielers auf dem Spielfeld. Was ist die richtige Entscheidung?",
  "options": [
   "Nutzung des Videobeweises, um zu sehen, wer das Spielfeld als zusätzlicher Spieler betreten hat, und um zu sehen, wann der Spieler das Spielfeld betreten hat.",
   "Hinausstellung SCHWARZ 9",
   "Time-out",
   "Disqualifikation ohne schriftlichen Bericht für SCHWARZ 9",
   "Disqualifikation mit schriftlichem Bericht für SCHWARZ 9",
   "Freiwurf WEISS",
   "7-Meter-Wurf WEISS",
   "Der Delegierte hätte mit der Unterbrechung des Spiels warten müssen, bis die klare Torgelegenheit vorbei war."
  ],
  "correct": [
   "a",
   "b",
   "c",
   "g",
   "h"
  ],
  "rule": "2:8, 4:4-6, 14:1, 16:3a, 17:13, Guidelines und Interpretationen (13:2), Reglement für den Videobeweis"
 },
 {
  "id": "5.1",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Torwart SCHWARZ 1 kann einen Torwurf abfangen und den Gegenstoß einleiten. Dabei überschreitet er mit dem linken Fuß die Torraumlinie. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Freiwurf für Team WEISS",
   "Wiederholung des Abwurfs mit Anpfiff"
  ],
  "correct": [
   "c"
  ],
  "rule": "1:3, 5:6, 12:1, 12:2, 15:5b"
 },
 {
  "id": "5.2",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Torwart WEISS 12 steht außerhalb seines Torraums im Spielfeld. Bei einem Zuspiel durch einen Mitspieler setzt er beim Zurückgehen einen Fuß in den eigenen Torraum, während der andere Fuß noch auf dem Spielfeld steht. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team SCHWARZ",
   "Weiterspielen lassen",
   "Freiwurf für Team SCHWARZ",
   "Hinausstellung des Torwarts"
  ],
  "correct": [
   "c"
  ],
  "rule": "1:3, 5:3, 5:9, 6:2b, 13:1a"
 },
 {
  "id": "5.3",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Torwart WEISS 12 wehrt ab und wirft sich nach dem Ball, der sich in Richtung Spielfeld bewegt. Er erreicht ihn, rutscht aber aufgrund der fehlenden Körperkontrolle über die Torraumlinie hinaus und spielt erst im Spielfeld einem Mitspieler den Ball zu. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Weiterspielen lassen",
   "Abwurf für Team WEISS mit Anpfiff"
  ],
  "correct": [
   "b"
  ],
  "rule": "5:4"
 },
 {
  "id": "5.4",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Torwart SCHWARZ 1 wehrt einen Wurf ab. Er bemüht sich, den in Richtung Spielfeld rollenden Ball kurz vor dem an der Torraumlinie stehenden Spieler WEISS 15 zu erreichen, und schiebt ihn mit dem Fuß über die Torauslinie. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team WEISS",
   "Freiwurf für Team WEISS",
   "Weiterspielen lassen",
   "Progressive Bestrafung von Torwart SCHWARZ 1, da er einen Gegenspieler gefährdet hat"
  ],
  "correct": [
   "b"
  ],
  "rule": "5:10, 13:1a"
 },
 {
  "id": "5.5",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Torwart WEISS 12 bekommt den Ball nicht unter Kontrolle. Der Ball bewegt sich im Torraum in Richtung Seitenlinie. Der Torwart befördert ihn mit dem Fuß über die Torauslinie. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "Einwurf für Team SCHWARZ",
   "Progressive Bestrafung des Torwarts"
  ],
  "correct": [
   "b"
  ],
  "rule": "5:10, 13:1a"
 },
 {
  "id": "5.6",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Torwart WEISS 1 wehrt einen Wurf ab, der Ball rollt aber in Richtung Spielfeld, wo SCHWARZ 6 ihn unbehindert erwartet. Genau auf der Torraumlinie stoppt Torwart WEISS 1 ihn mit dem Fuß. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS mit Anpfiff",
   "Progressive Strafe gegen Torwart WEISS 1",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ"
  ],
  "correct": [
   "c"
  ],
  "rule": "5:10, 13:1a"
 },
 {
  "id": "5.7",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "SCHWARZ 18 wirft auf das Tor. Der Wurf wird so geblockt, dass der Ball seine Flugbahn deutlich in Richtung Torauslinie (innerhalb des Torraums) ändert. Torwart WEISS 1 läuft dem Ball nach und kann ihn gerade noch mit dem Fuß über die Torauslinie befördern. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS",
   "Einwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Verwarnung des Torwarts WEISS 1"
  ],
  "correct": [
   "a"
  ],
  "rule": "5:10, 12:1"
 },
 {
  "id": "5.8",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Torwart SCHWARZ 12 springt in seinem Torraum ab, um einen weiten Bogenpass von WEISS 7 abzufangen. Er fängt den Ball in der Luft und landet mit Ball mit einem Fuß im Torraum, mit dem anderen im Spielfeld. Aus dieser Position spielt er den Ball weiter zu SCHWARZ 3. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team WEISS",
   "Weiterspielen lassen",
   "Freiwurf für Team WEISS",
   "Korrektur und Abwurf für Team SCHWARZ nach Anpfiff"
  ],
  "correct": [
   "b"
  ],
  "rule": "5:3, 5:4"
 },
 {
  "id": "5.9",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "WEISS 9 spielt zu seinem auf dem Spielfeld stehenden Torwart WEISS 1. In Bedrängnis setzt er den Pass zu hoch an, sodass der Torwart zurückgehen und mit einem Fuß den Torraum betreten muss. Den Ball hat er noch kurz vorher annehmen können. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Time-out",
   "7-Meter-Wurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "d"
  ],
  "rule": "5:9, 6:1, 13:1a"
 },
 {
  "id": "5.10",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Der Schiedsrichter erkennt auf Freiwurf gegen Kreisspieler SCHWARZ 2. Der ausführende Torwart WEISS 1 steht mit einem Fuß im Torraum, mit dem anderen außerhalb. Er passt zu WEISS 8, der ein Tor erzielt. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team WEISS",
   "Wiederholung des Freiwurfs außerhalb des Torraums von Team WEISS",
   "Freiwurf für Team SCHWARZ an der Freiwurflinie von Team WEISS",
   "Abwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team WEISS"
  ],
  "correct": [
   "a"
  ],
  "rule": "5:3"
 },
 {
  "id": "5.11",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Die Schiedsrichter entscheiden auf Schrittfehler von SCHWARZ 21. Dieser legt den Ball an der Torraumlinie von Team WEISS nieder. Torwart WEISS 12, nach der vorangehenden Abwehraktion noch im Torraum am Boden, will den Freiwurf schnell ausführen. Er stützt sich außerhalb des Torraums mit einem Arm ab, ein Fuß befindet sich im Torraum am Boden. In dieser Haltung passt er zu WEISS 3, der einen Gegenstoß einleitet, der zu einem Tor führt. Wie ist zu entscheiden?",
  "options": [
   "Wiederholung des Freiwurfs mit Anpfiff",
   "Tor für Team WEISS",
   "Freiwurf für Team SCHWARZ wegen falscher Ausführung des Freiwurfs",
   "Time-out"
  ],
  "correct": [
   "a"
  ],
  "rule": "5:3, 15:1 Hinweis"
 },
 {
  "id": "5.12",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Torwart SCHWARZ 1 hat seinen Torraum verlassen. Er springt im Spielfeld ab und fängt den von einem Mitspieler gespielten Ball in der Luft. Direkt danach landet er beidbeinig im eigenen Torraum. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Abwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Time-out"
  ],
  "correct": [
   "c"
  ],
  "rule": "5:9, 13:1a"
 },
 {
  "id": "5.13",
  "section": "5",
  "sectionTitle": "Torwart im eigenen Torraum",
  "question": "Der Ball liegt direkt außerhalb des Torraums von Team WEISS. Torwart WEISS 1 steht innerhalb des Torraums und nimmt den Ball auf, um zu verhindern, dass ein gegnerischer Spieler ihn erhält. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Progressive Bestrafung von WEISS 1",
   "Nicht eingreifen, keine Regelwidrigkeit"
  ],
  "correct": [
   "a"
  ],
  "rule": "5:7, 5:8"
 },
 {
  "id": "6.1",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Der Ball liegt auf der Torraumlinie. Angriffsspieler WEISS 7 nimmt ihn auf. Es bietet sich ihm eine klare Torchance, und er will auf das Tor werfen, als er regelwidrig angegriffen wird. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "7-Meter Wurf für Team WEISS",
   "Abwurf für Team SCHWARZ"
  ],
  "correct": [
   "d"
  ],
  "rule": "1:3, 6:5, 12:1"
 },
 {
  "id": "6.2",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Der Ball rollt im Torraum von Team WEISS. SCHWARZ 8 nimmt ihn auf und erzielt ein Tor. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Abwurf für Team WEISS",
   "Tor",
   "Anwurf"
  ],
  "correct": [
   "b"
  ],
  "rule": "6:5, 12:1"
 },
 {
  "id": "6.3",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "WEISS 3 steht mit beiden Füßen im Spielfeld und fängt einen von seinem Torwart abgeprallten Ball. Da er von SCHWARZ 10 regelkonform bedrängt wird, prellt er den Ball mehrmals im eigenen Torraum. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "7-Meter-Wurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS"
  ],
  "correct": [
   "a"
  ],
  "rule": "6:5"
 },
 {
  "id": "6.4",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "WEISS 7 befindet sich zwar außerhalb des Torraums von Team SCHWARZ, fängt den Ball jedoch deutlich über dem Torraum und wirft ihn ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ mit Anpfiff"
  ],
  "correct": [
   "a"
  ],
  "rule": "6:5"
 },
 {
  "id": "6.5",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "WEISS 8, der von einigen Gegenspielern regelkonform bedrängt wird, rollt den Ball absichtlich in den eigenen Torraum, wo er liegen bleibt. Torwart WEISS 1 nimmt ihn nicht auf. Wie ist zu entscheiden?",
  "options": [
   "Abwurf",
   "Abwurf mit Anpfiff",
   "7-Meter-Wurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "d"
  ],
  "rule": "6:7b, 13:1a"
 },
 {
  "id": "6.6",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "WEISS 5 spielt den Ball absichtlich in den eigenen Torraum. Der Ball trifft den Torpfosten und rollt in Richtung Spielfeld. Torwart WEISS 12 nimmt ihn auf und wirft ihn zu WEISS 7, der ein Tor erzielt. Richtige Entscheidung?",
  "options": [
   "7-Meter-Wurf für Team SCHWARZ",
   "Tor",
   "Freiwurf für Team SCHWARZ",
   "Abwurf für Team WEISS"
  ],
  "correct": [
   "c"
  ],
  "rule": "6:7b, 13:1a"
 },
 {
  "id": "6.7",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "WEISS 10 führt nach einem Torerfolg von Team SCHWARZ den Anwurf aus. Da er keinen anspielbaren Feldspieler sieht, überrascht er seinen Torwart WEISS 12, der im Torraum steht, mit einem Rückpass. WEISS 12 nimmt den Ball auf und spielt zu WEISS 9. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "7-Meter-Wurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Wiederholung des Anwurfs nach Korrektur"
  ],
  "correct": [
   "c"
  ],
  "rule": "6:7b, 13:1a"
 },
 {
  "id": "6.8",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Abwehrspieler SCHWARZ 7 sieht, dass Kreisspieler WEISS 9 völlig frei steht. Um einen Pass zu WEISS 9 zu verhindern, läuft er – zum wiederholten Mal – durch den Torraum. Er befindet sich bereits wieder außerhalb des Torraums, als WEISS 9 tatsächlich angespielt wird. WEISS 9 dreht sich und läuft frontal gegen SCHWARZ 7. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team WEISS",
   "Freiwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "Progressive Strafe gegen SCHWARZ 7"
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "6:2c, 8:7f, 14:1a, 16:1b"
 },
 {
  "id": "6.9",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Der von Torwart SCHWARZ 1 abgeprallte Ball wird von Angriffsspieler WEISS 4 an der Torraumlinie erwartet. Um es nicht zu einer klaren Torchance kommen zu lassen, betritt Abwehrspieler SCHWARZ 2 seinen Torraum und verhindert so die Ballannahme durch WEISS 4. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Progressive Strafe gegen SCHWARZ 2",
   "Disqualifikation von SCHWARZ 2 (rote Karte)"
  ],
  "correct": [
   "b"
  ],
  "rule": "6:2c, 14:1a, Erläuterung 6a"
 },
 {
  "id": "6.10",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "WEISS 10 spielt den Ball in Richtung des eigenen Torraums. Torwart WEISS 1 springt in seinem Torraum ab, fängt den Ball in der Luft, hält ihn sicher fest und landet dann außerhalb des Torraums. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Abwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ"
  ],
  "correct": [
   "c"
  ],
  "rule": "5:3, 5:6, 6:7b"
 },
 {
  "id": "6.11",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "WEISS 11 spielt den Ball in Richtung des eigenen Torraums. Torwart WEISS 1 springt in seinem Torraum ab und fängt den Ball in der Luft. Er hält den Ball sicher fest und landet mit einem Fuß innerhalb, mit dem anderen Fuß außerhalb des Torraums. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Abwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf Team SCHWARZ"
  ],
  "correct": [
   "c"
  ],
  "rule": "5:3, 5:6, 6:7b"
 },
 {
  "id": "6.12",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Angreifer WEISS 7 betritt mit Ball den gegnerischen Torraum. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ mit Anpfiff",
   "Freiwurf für Team SCHWARZ mit Anpfiff"
  ],
  "correct": [
   "b"
  ],
  "rule": "6:2a, 12:1"
 },
 {
  "id": "6.13",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Der Ball liegt im Torraum von Team WEISS. In diesem Moment pfeift der Zeitnehmer und erklärt, dass WEISS 5 einen Wechselfehler begangen hat. Wie ist zu entscheiden?",
  "options": [
   "Abwurf",
   "Hinausstellung von WEISS 5",
   "Freiwurf für Team SCHWARZ an der Freiwurflinie",
   "Freiwurf für Team SCHWARZ am Auswechselraum von Team WEISS"
  ],
  "correct": [
   "a",
   "b"
  ],
  "rule": "4:5, 6:5 Abs. 2, 13:3, 16:3a"
 },
 {
  "id": "6.14",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "In welchen der folgenden Fälle ist auf Abwurf zu entscheiden?",
  "options": [
   "Wenn ein Spieler der angreifenden Mannschaft mit Ball den gegnerischen Torraum berührt",
   "Wenn ein Spieler der angreifenden Mannschaft ohne Ball den gegnerischen Torraum betritt und dadurch einen Vorteil erlangt",
   "Wenn ein Spieler den Ball über die gegnerische Torauslinie ablenkt",
   "Wenn ein Spieler mit Ball den eigenen Torraum betritt"
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "rule": "6:2a, 12:1"
 },
 {
  "id": "6.15",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Team WEISS befindet sich im Angriff. SCHWARZ 4 steht an seiner Torraumlinie. Der Ball ist frei in der Luft. SCHWARZ 4 erreicht ihn und lenkt ihn in seinen Torraum. Der Ball wird vom Torwart berührt und überquert die Torauslinie. Wie ist zu entscheiden?",
  "options": [
   "Einwurf für Team WEISS",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Abwurf für Team SCHWARZ",
   "Progressive Bestrafung von SCHWARZ 4"
  ],
  "correct": [
   "b"
  ],
  "rule": "6:7b"
 },
 {
  "id": "6.16",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Torwart WEISS 12 hat einen Ball gehalten und diesen im Torraum in den Händen, als der Zeitnehmer wegen eines Wechselfehlers von Team WEISS pfeift. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ am Auswechselraum von Team WEISS",
   "Time-out",
   "Abwurf für Team WEISS",
   "Hinausstellung von Team WEISS",
   "Freiwurf für Team SCHWARZ an der Freiwurflinie von Team WEISS"
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "2:8a, 4:5, 6:4, 12:1, 13:3"
 },
 {
  "id": "6.17",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Torwart WEISS 12 springt außerhalb seines Torraums im Spielfeld ab, nimmt einen von einem Mitspieler gespielten Ball in der Luft an und wirft ihn über die eigene Torauslinie. Dann landet er in seinem Torraum. Wie ist zu entscheiden?",
  "options": [
   "Abwurf",
   "Einwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Verwarnung von WEISS 12"
  ],
  "correct": [
   "b"
  ],
  "rule": "5:3, 6:7c"
 },
 {
  "id": "6.18",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "WEISS 9 wirft auf das Tor. Torwart SCHWARZ 1 wehrt ab, und der Ball rollt in Richtung Spielfeld, wo ein Spieler von Team WEISS zur Annahme bereit steht. Da sich der Torwart bei der Abwehraktion verletzt hat, unterbricht der Schiedsrichter das Spiel, als der Ball noch im Torraum in Richtung Spielfeld rollt. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Abwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "c"
  ],
  "rule": "6:5, 13:4"
 },
 {
  "id": "6.19",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Der Ball rollt im Torraum von Team WEISS. In diesem Moment pfeift der Zeitnehmer und erklärt, dass WEISS 5 einen Wechselfehler begangen hat. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS",
   "Hinausstellung von WEISS 5",
   "Freiwurf für Team SCHWARZ an der Freiwurflinie von Team WEISS",
   "Freiwurf für Team SCHWARZ am Auswechselraum von Team WEISS"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "4:5, 6:5 Abs. 1, 16:3a"
 },
 {
  "id": "6.20",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Torwart SCHWARZ 12 wehrt einen Torwurf von WEISS 5 ab. Dabei fliegt der Ball über den Torraum in Richtung des Kreisspielers WEISS 11, der ungedeckt und anspielbereit an der Torraumlinie steht. Verteidiger SCHWARZ 2 springt in Richtung des Balls und spielt ihn im Sprung über dem Torraum in Richtung Seitenlinie. Aufgrund von Harz am Ball bleibt dieser im Torraum liegen, ohne dass der Torwart ihn berührt. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Progressive Bestrafung von SCHWARZ 2"
  ],
  "correct": [
   "b"
  ],
  "rule": "6:7b, 13:1b"
 },
 {
  "id": "6.21",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Torwart SCHWARZ 1 wehrt einen Torwurf ab und möchte den Ball zu SCHWARZ 6 spielen, der bereit zum Gegenstoß ist. Bei der Ausführung des Abwurfs berührt Torwart SCHWARZ 1 die Torraumlinie. SCHWARZ 6 bekommt den Ball und erzielt ein Tor. Wie ist zu entscheiden?",
  "options": [
   "Tor zählt",
   "Freiwurf für Team WEISS",
   "Korrektur und Wiederholung des Abwurfs mit Anpfiff",
   "Tor zählt nicht"
  ],
  "correct": [
   "a"
  ],
  "rule": "6:1, 1:3"
 },
 {
  "id": "6.22",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "WEISS 6 befindet sich im Gegenstoß. Er springt, wirft auf das Tor und landet im Torraum von Team SCHWARZ. Torwart SCHWARZ 12 wehrt den Ball ab. Der Ball fliegt zu WEISS 11, der ein Tor erzielt, während WEISS 6 zwischen ihm und Torwart SCHWARZ 12 am Boden liegt. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team WEISS",
   "Abwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "b"
  ],
  "rule": "6:2a"
 },
 {
  "id": "6.23",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Mannschaft WEISS ist im Angriff und spielt ohne Torwart. WEISS 11 wirft auf das Tor. Der Torwart SCHWARZ 1 hält den Ball. Er führt den Abwurf als Wurf auf das leere Tor aus. WEISS 10 versucht den Wurf abzuwehren. Er springt außerhalb seines Torraums ab, und während er sich in der Luft über dem Torraum befindet, berührt er den Ball, der dann die Torauslinie überquert. Nach der Ballberührung landet WEISS 10 im Torraum. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Mannschaft WEISS",
   "Freiwurf für Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Einwurf für Mannschaft SCHWARZ",
   "Progressive Bestrafung für WEISS 10"
  ],
  "correct": [
   "d"
  ],
  "rule": "6:3, 11:1"
 },
 {
  "id": "6.24",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "Mannschaft WEISS ist im Angriff und spielt ohne Torwart. WEISS 11 wirft auf das Tor. Torwart SCHWARZ 1 hält den Ball. Er führt den Abwurf als Wurf auf das leere Tor aus. WEISS 10 versucht den Wurf abzuwehren. Er springt außerhalb seines Torraums ab, und während er sich in der Luft über dem Torraum befindet, fängt er den Ball und landet mit dem Ball in der Hand im Torraum. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Hinausstellung für WEISS 10",
   "Keine Bestrafung"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "6:2, 8:8i, 14:1a, Guidelines und Interpretationen (8:8i)"
 },
 {
  "id": "6.25",
  "section": "6",
  "sectionTitle": "Ballberührung im Torraum",
  "question": "SCHWARZ 5 wirft auf das Tor. Torhüter WEISS 12 hält den Ball. Bei der Abwehr schlägt WEISS12 mit dem Kopf gegen den Torpfosten und fällt verletzt zu Boden. SCHWARZ 3 fängt den Abpraller des Torhüters ab und hat eine klare Torchance an der Torraumlinie von WEISS. Was ist die richtige Entscheidung?",
  "options": [
   "Vorteil für SCHWARZ 3",
   "Das Spiel wird sofort unterbrochen.",
   "Das Spiel wird mit einem 7-Meter-Wurf SCHWARZ fortgesetzt.",
   "Das Spiel wird mit einem Freiwurf SCHWARZ fortgesetzt.",
   "Time-out",
   "Die Schiedsrichter können zwei Personen der Mannschaft WEISS die Erlaubnis erteilen, das Spielfeld zu betreten, um eine medizinische Behandlung für WEISS 12 durchzuführen.",
   "Nach der medizinischen Behandlung muss WEISS 12 das Spielfeld verlassen und kann erst nach dem dritten Angriff seiner Mannschaft wieder betreten.",
   "Nach der medizinischen Behandlung kann WEISS 12 weiterspielen, ohne das Spielfeld zu verlassen."
  ],
  "correct": [
   "b",
   "d",
   "e",
   "f",
   "g"
  ],
  "rule": "4:11, Erläuterung 8, Guidelines und Interpretationen (6:8)"
 },
 {
  "id": "7.1",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Spieler WEISS 3 gelingt es, den in Richtung Seitenlinie fliegenden Ball noch vor der Seitenlinie mit einer Hand WEISS 7 zuzuspielen. Er überquert dabei mit einem Fuß die Seitenlinie. WEISS 7 fängt den Ball und erzielt ein Tor. Wie ist zu entscheiden?",
  "options": [
   "Einwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Tor",
   "Hinausstellung von WEISS 3"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:10, 11:1"
 },
 {
  "id": "7.2",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Bei einem riskanten Anspiel von Außenspieler SCHWARZ 3 zu Kreisspieler SCHWARZ 11 bemerkt dieser im Sprung, dass er den Ball nicht fangen können wird. Deshalb schlägt er ihn mit der Faust zu SCHWARZ 9, der mitten im Spielfeld steht. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Freiwurf für Team WEISS auf Höhe der Position von SCHWARZ 9",
   "Freiwurf für Team WEISS auf Höhe der Position von SCHWARZ 11",
   "Hinausstellung von SCHWARZ 11"
  ],
  "correct": [
   "a"
  ],
  "rule": "7:1"
 },
 {
  "id": "7.3",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Ein Spieler steht, fängt den Ball, springt und landet auf dem rechten Fuß, springt auf den linken Fuß und wirft. Wie viele Schritte hat er ausgeführt?",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:3a"
 },
 {
  "id": "7.4",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Ein Spieler springt und fängt den Ball. Beim Landen berührt er den Boden mit beiden Füßen gleichzeitig. Danach hebt er den rechten Fuß, macht einen seitlichen Schritt und zieht den linken Fuß nach. Wie viele Schritte hat er ausgeführt?",
  "options": [
   "1",
   "3",
   "0",
   "2"
  ],
  "correct": [
   "a"
  ],
  "rule": "7:3d"
 },
 {
  "id": "7.5",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Ein Spieler fängt den Ball in der Luft, landet auf dem rechten Fuß und springt mit diesem ab. Er setzt den linken und dann den rechten Fuß auf und wirft. Wie viele Schritte hat er ausgeführt?",
  "options": [
   "3",
   "2",
   "1",
   "0"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:3"
 },
 {
  "id": "7.6",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 5 muss beim Versuch, den Ball zu fangen, mehrfach nachfassen, ehe er ihn unter Kontrolle bekommt. Anschließend macht er drei Schritte, tippt einmal und wirft den Ball nach weiteren drei Schritten ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Tor",
   "Abwurf für Team SCHWARZ",
   "Einwurf für Team SCHWARZ"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:3, 7:4, 7:7"
 },
 {
  "id": "7.7",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 5 will einen Angriff einleiten. Dazu prellt er wiederholt. Nach fünf Schritten nimmt er den Ball auf und spielt ihn ab. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "Weiterspielen lassen",
   "7-Meter-Wurf für Team SCHWARZ"
  ],
  "correct": [
   "c"
  ],
  "rule": "7:4b"
 },
 {
  "id": "7.8",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "SCHWARZ 6 fängt den Ball, rutscht aus und kommt zu Fall. Auf dem Rücken liegend spielt er zu SCHWARZ 9 weiter. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Weiterspielen lassen",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:6"
 },
 {
  "id": "7.9",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 3 läuft zwischen zwei Gegenspieler und stößt den Ball vorwärts in die eigene Laufrichtung. Bevor der Ball den Boden berührt, fängt er ihn und hat jetzt freie Bahn. Nach einmaligem Tippen wirft er den Ball ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Tor",
   "Freiwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:7, 13:1a"
 },
 {
  "id": "7.10",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 7 will nach einmaligem Tippen WEISS 5 anspielen, der aber gedeckt wird. WEISS 7 ist so irritiert, dass ihm der Ball entgleitet. Er fängt ihn jedoch wieder auf, bevor er den Boden berührt. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Freiwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:7, 13:1a"
 },
 {
  "id": "7.11",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Wie ist wiederholtes passives Spiel zu ahnden?",
  "options": [
   "Freiwurf und Verwarnung",
   "Freiwurf und Hinausstellung",
   "Freiwurf",
   "Freiwurf und Disqualifikation (rote Karte)"
  ],
  "correct": [
   "c"
  ],
  "rule": "7:7, 13:1a"
 },
 {
  "id": "7.12",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Nach einem Wurf von WEISS 4 prallt der Ball vom Pfosten ab, trifft den neben dem Tor im Torraum stehenden Schiedsrichter und überquert deshalb nicht die Torauslinie, sondern die Seitenlinie. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Einwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:9, 11:1"
 },
 {
  "id": "7.13",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 5 führt einen Einwurf aus, der Ball trifft den Schiedsrichter im Spielfeld und gelangt ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Wiederholung des Einwurfs mit Anpfiff",
   "Freiwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "Tor"
  ],
  "correct": [
   "d"
  ],
  "rule": "7:9, 15:2"
 },
 {
  "id": "7.14",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 9 blockt den von SCHWARZ 3 mittels Sprungwurf geworfenen Ball ab. Der Ball fällt auf den Boden. WEISS 9 nimmt ihn mit beiden Händen auf, beginnt prellend einen Gegenstoß und wirft ins Tor von Team SCHWARZ. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "Hinausstellung von WEISS 9",
   "Time-out"
  ],
  "correct": [
   "a"
  ],
  "rule": "7:4, 8:1a"
 },
 {
  "id": "7.15",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 5 prellt den Ball an der Seitenlinie entlang. SCHWARZ 2 versperrt ihm regelkonform den Weg. Um an SCHWARZ 2 vorbeizukommen, überschreitet WEISS 5 während des Prellens die Seitenlinie mit einem Teil des linken Fußes. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Einwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Weiterspielen lassen"
  ],
  "correct": [
   "c"
  ],
  "rule": "7:10, 8:1c, 13:1a"
 },
 {
  "id": "7.16",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Der Ball rollt nach einem ungenauen Pass von WEISS 3 zu WEISS 9 in der Nähe der Auswechselbank von Team WEISS in Richtung Seitenlinie. SCHWARZ 10 steht einen Meter vom Ball entfernt kurz vor der Ballaufnahme. Nun hechtet sich WEISS 9 nach dem Ball und faustet ihn in Richtung Spielfeldmitte zurück zu WEISS 3. Danach rutscht WEISS 9 durch seinen Schwung über die Seitenlinie hinaus. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Freiwurf für Team SCHWARZ",
   "Progressive Bestrafung von WEISS 9",
   "Einwurf für Team SCHWARZ"
  ],
  "correct": [
   "a"
  ],
  "rule": "7:1"
 },
 {
  "id": "7.17",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "SCHWARZ 7, dessen Mitspieler in Ballbesitz ist, nimmt ohne Ball eine Position außerhalb der Spielfläche ein. Die Schiedsrichter weisen ihn vergeblich darauf hin, dass er auf die Spielfläche zurück muss. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Freiwurf für Team WEISS",
   "Progressive Bestrafung von SCHWARZ 7",
   "Einwurf für Team WEISS"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:10"
 },
 {
  "id": "7.18",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Ein Spieler springt in den gegnerischen Torraum. Er hat Ball- und Körperkontrolle und befindet sich in einer guten Wurfposition. Anstatt zu werfen, dreht er über dem Torraum ab und spielt den Ball zurück zu einem Mitspieler, der den Ball weiterspielt. Wie ist zu entscheiden?",
  "options": [
   "Vorwarnzeichen für passives Spiel",
   "Sofortiger Freiwurf wegen passiven Spiels",
   "Sofortiger Freiwurf wegen unsportlichen Verhaltens",
   "Progressive Bestrafung"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:12"
 },
 {
  "id": "7.19",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 3 wirft auf das Tor und trifft den Pfosten. Der Ball rollt aus dem Torraum. Etwa an der Freiwurflinie hechten WEISS 3 und SCHWARZ 4 – ohne einander zu gefährden – nach dem Ball. SCHWARZ 4 kann den Ball zu SCHWARZ 6 lenken, der zum Gegenstoß startet und ein Tor erzielt. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung von SCHWARZ 4",
   "Tor für Team SCHWARZ",
   "Je nach Situation Freiwurf für Team WEISS oder SCHWARZ",
   "Abwurf"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:1. 7:6"
 },
 {
  "id": "7.20",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 10 versucht ein Kreisanspiel zu WEISS 8. Der vor diesem stehende Abwehrspieler SCHWARZ 10 wird von dem Ball am Fuß getroffen. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Weiterspielen lassen",
   "Entscheidend ist hier, wer in Ballbesitz gelangt."
  ],
  "correct": [
   "b"
  ],
  "rule": "7:8"
 },
 {
  "id": "7.21",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "WEISS 15 blockt einen Pass von SCHWARZ 9. Danach rollt der Ball am Boden. WEISS 15 und SCHWARZ 9 hechten beide nach dem Ball. WEISS 15 bekommt den Ball und rutscht den Boden entlang. Er steht auf, macht drei Schritte, spielt den Ball zu einem Mitspieler. Der Mitspieler erzielt ein Tor. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team WEISS",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "a"
  ],
  "rule": "7:1, 7:3 Kommentar"
 },
 {
  "id": "7.22",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "In Unterzahl liegt Team WEISS in der 57. Minute mit 24:23 in Führung. Der Feldschiedsrichter hat auf Freiwurf für Team WEISS entschieden. WEISS 6 will diesen provokativ mehrere Meter vom eigentlichen Ausführungsort entfernt ausführen, obwohl der Schiedsrichter die Ausführungsstelle klar angezeigt hat und die Mannschaft schon vorher darauf hingewiesen wurde, derartige Verzögerungen zu unterlassen. Wie ist zu entscheiden?",
  "options": [
   "Korrektur des Ausführungsortes, Anpfiff, keine weitere Maßnahme",
   "Korrektur des Ausführungsortes, Anpfiff, Anzeige des Handzeichens für passives Spiel, sobald der Ball wieder ins Spiel gebracht wurde",
   "Korrektur des Ausführungsortes, progressive Strafe gegen WEISS 6, Anpfiff des Freiwurfs, Anzeige des Handzeichens für passives Spiel"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:11, Erläuterung 4"
 },
 {
  "id": "7.23",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Die Spieler von Team SCHWARZ haben in Unterzahl in der normalen Aufbauphase ihre Angriffspositionen eingenommen und die Mannschaft startet mit einer vorbereitenden Passfolge die Aufbauphase. Jetzt lassen sich SCHWARZ 6 und SCHWARZ 8 auswechseln und die Mannschaft wartet auf die Auswechselspieler. Wie ist zu entscheiden?",
  "options": [
   "Vorwarnzeichen für passives Spiel",
   "Vorwarnzeichen für passives Spiel, wenn binnen fünf Sekunden kein Tempowechsel erfolgt",
   "Sofortiger Freiwurf für Team WEISS wegen passiven Spiels",
   "Im Wiederholungsfall Verwarnung gegen SCHWARZ 6 oder SCHWARZ 8",
   "Im Wiederholungsfall Hinausstellung von SCHWARZ 6 oder SCHWARZ 8"
  ],
  "correct": [
   "a"
  ],
  "rule": "7:11, 7:12, Erläuterung 4.B.3"
 },
 {
  "id": "7.24",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Durch welche Aktionen wird das Vorwarnzeichen für passives Spiel aufgehoben?",
  "options": [
   "Bei erneutem Ballbesitz nach Abwehr eines 7-Meter-Wurfs durch gegnerischen Torwart",
   "Bei erneutem Ballbesitz nach einem Wurf gegen Pfosten/Latte",
   "Team-Time-out",
   "Bei einer druckvollen Aktion vor der nächsten passiven Phase",
   "Durch keine der genannten Aktionen"
  ],
  "correct": [
   "a",
   "b"
  ],
  "rule": "Erläuterung 4.C"
 },
 {
  "id": "7.25",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Welche der folgenden Aussagen zum Vorwarnzeichen für passives Spiel (Handzeichen 17) treffen zu?",
  "options": [
   "Wird eine Tendenz zu passivem Spiel erkannt, zeigt dies zuerst der Feldschiedsrichter mithilfe von Handzeichen 17 an. Der Torschiedsrichter übernimmt daraufhin dieses Zeichen und hebt anschließend ebenfalls entsprechend den Arm.",
   "Sollte die angreifende Mannschaft nach dem Anzeigen des Vorwarnzeichens ein Team-Time-out beantragen, so muss das Vorwarnzeichen nach Wiederaufnahme des Spiels erneut angezeigt werden.",
   "Das Vorwarnzeichen sollte generell nicht unmittelbar nach der Ausführung eines Freiwurfs angezeigt werden.",
   "Nach Anzeige des Vorwarnzeichens müssen die Schiedsrichter spätestens dann auf passives Spiel entscheiden, wenn nach vier Pässen kein Torwurf ausgeführt, also, wenn der 5. Pass von einem Mitspieler angenommen wurde."
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "Erläuterung 4"
 },
 {
  "id": "7.26",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Team WEISS lässt sich sehr viel Zeit bei der Ausführung eines Anwurfs. Die Mannschaft war wegen derselben taktischen Verzögerung bereits ermahnt worden. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Time-out, Anwurf mit Anpfiff",
   "Time-out, Anwurf mit Anpfiff, sofortige Anzeige von Handzeichen 17",
   "Anpfiff des Anwurfs, sofortige Anzeige von Handzeichen 17, sobald der Ball wieder ins Spiel gebracht wurde.",
   "Progressive Bestrafung des Mannschaftsverantwortlichen von Team WEISS"
  ],
  "correct": [
   "d"
  ],
  "rule": "7:11, 7:12, Erläuterung 4.B.2"
 },
 {
  "id": "7.27",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Welche der folgenden Aussagen bezüglich der richtigen Handhabung des Vorwarnzeichens für passives Spiel treffen zu?",
  "options": [
   "Das Vorwarnzeichen gilt immer als aufgehoben, wenn ein Offizieller der verteidigenden Mannschaft progressiv bestraft wird.",
   "Wenn das Vorwarnzeichen während eines Angriffs zum ersten Mal gezeigt wird, sind die Arme nach ungefähr zehn Sekunden herunterzunehmen.",
   "Das Vorwarnzeichen sollte nach der ersten Unterbrechung zur Information wiederholt werden, wenn es bereits vor der Unterbrechung gezeigt wurde.",
   "Das Vorwarnzeichen gilt immer als aufgehoben, wenn ein Spieler der verteidigenden Mannschaft progressiv bestraft wird.",
   "Die Schiedsrichter müssen das Vorwarnzeichen zeigen, wenn ein Spieler den Ball eindeutig unter Kontrolle hat."
  ],
  "correct": [
   "a",
   "d",
   "e"
  ],
  "rule": "Erläuterung 4"
 },
 {
  "id": "7.28",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Welche der folgenden Aussagen bezüglich des passiven Spiels treffen zu?",
  "options": [
   "Einer Mannschaft sollten von der Aufbauphase bis zur Abschlussphase nicht mehr als fünf Sekunden zugestanden werden.",
   "Passives Spiel kann bereits in dem Moment beginnen, in dem eine Mannschaft in ihrer eigenen Spielfeldhälfte in Ballbesitz gelangt.",
   "Das Vorwarnzeichen kann nicht angezeigt werden, solange der Ball nicht im Spiel ist.",
   "Um eine Tendenz zum passiven Spiel erkennen und bewerten zu können, müssen verschiedene Beobachtungskriterien auf alle Elemente des Angriffs einer Mannschaft von der Balleroberung bis zum Ballverlust herangezogen werden.",
   "Einer Mannschaft, die aus der eigenen Spielfeldhälfte einen Gegenstoß versucht hat, muss ein zügiger Spielerwechsel erlaubt sein, wenn sie vom Gegenstoß zu einer normalen Aufbauphase übergeht."
  ],
  "correct": [
   "b",
   "c",
   "d",
   "e"
  ],
  "rule": "7:11, Erläuterung 4"
 },
 {
  "id": "7.29",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Team WEISS befindet sich im Ballbesitz. Die Schiedsrichter zeigen das Vorwarnzeichen für passives Spiel. Nach einem Pass wirft WEISS 5 auf das Tor. SCHWARZ 2 blockt den Torwurf, und der Ball landet wieder bei WEISS 5, der ihn zu WEISS 9 spielt. Wie viele Pässe wurden gespielt?",
  "options": [
   "3",
   "4",
   "5"
  ],
  "correct": [
   "a"
  ],
  "rule": "7:11. 7:12, Erläuterung 4, Anhang 1 (Schulungshilfe \"Passives Spiel\")"
 },
 {
  "id": "7.30",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Team WEISS befindet sich im Ballbesitz. Die Schiedsrichter zeigen das Vorwarnzeichen für passives Spiel an. WEISS 9 versucht WEISS 2 anzuspielen, doch der Pass wird von SCHWARZ 8 geblockt, wodurch der Ball wieder bei WEISS 9 landet. WEISS 9 setzt zum Durchbruch an, erhält aber einen Freiwurf. WEISS 8 führt den Freiwurf aus, indem er WEISS 2 anspielt. Wie viele Pässe wurden gespielt?",
  "options": [
   "1",
   "2",
   "3"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:11, 7:12, Erläuterung 4, Anhang 1 (Schulungshilfe \"Passives Spiel\")"
 },
 {
  "id": "7.31",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Team WEISS befindet sich im Ballbesitz. Die Schiedsrichter erkennen bei Team WEISS eine Tendenz zum passiven Spiel und zeigen das Vorwarnzeichen an. Team SCHWARZ sieht das Vorwarnzeichen und beginnt, aggressiver zu verteidigen, um einen Freiwurf zu verursachen. Nach drei Pässen von Team WEISS verursacht Team SCHWARZ einen Freiwurf. Wie ist zu entscheiden?",
  "options": [
   "Team WEISS stehen noch vier Pässe zur Verfügung, um auf das Tor zu werfen.",
   "Team WEISS stehen noch zwei Pässe zur Verfügung, um auf das Tor zu werfen.",
   "Team WEISS steht noch ein Pass zur Verfügung, um auf das Tor zu werfen.",
   "Team WEISS muss den Freiwurf direkt auf das Tor werfen."
  ],
  "correct": [
   "c"
  ],
  "rule": "7:11, 7:12, Erläuterung 4"
 },
 {
  "id": "7.32",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Team WEISS befindet sich im Angriff. Die Schiedsrichter erkennen bei Team WEISS eine Tendenz zum passiven Spiel und zeigen das Vorwarnzeichen an. Team WEISS spielt vier Pässe, bevor WEISS 9 auf das Tor wirft. SCHWARZ 3 blockt den Wurf, und der Ball fliegt über die Seitenlinie, wodurch es zum Einwurf für Team WEISS kommt. Wie ist zu entscheiden?",
  "options": [
   "Das Vorwarnzeichen ist nicht mehr gültig.",
   "Team WEISS stehen noch vier Pässe zur Verfügung, um auf das Tor zu werfen.",
   "Team WEISS stehen noch zwei Pässe zur Verfügung, um auf das Tor zu werfen.",
   "Team WEISS steht noch ein Pass zur Verfügung, um auf das Tor zu werfen."
  ],
  "correct": [
   "d"
  ],
  "rule": "7:11, 7:12, Erläuterung 4, Anhang 1 (Schulungshilfe \"Passives Spiel\")"
 },
 {
  "id": "7.33",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Team WEISS befindet sich im Ballbesitz. Aufgrund einer Tendenz zum passiven Spiel bei Team WEISS zeigen die Schiedsrichter das Vorwarnzeichen an. Nach vier Pässen wirft WEISS 5 auf das Tor. SCHWARZ 3 blockt den Wurf, und der Ball landet wieder bei WEISS 5. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Team WEISS steht noch ein Pass zur Verfügung, um auf das Tor zu werfen.",
   "Das Vorwarnzeichen ist weiterhin gültig.",
   "Das Vorwarnzeichen ist nicht mehr gültig.",
   "Team WEISS stehen keine Pässe mehr zur Verfügung, um auf das Tor zu werfen."
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "7:11, 7:12, Erläuterung 4, Anhang 1 (Schulungshilfe \"Passives Spiel\")"
 },
 {
  "id": "7.34",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Mannschaft SCHWARZ ist im Angriff. Die Schiedsrichter zeigen das Vorwarnsignal. SCHWARZ 7 passt den Ball zu SCHWARZ 11. SCHWARZ 11 versucht einen Durchbruch, wird aber von WEISS 3 gestoppt. Die Schiedsrichter geben einen Freiwurf für Mannschaft SCHWARZ. SCHWARZ 11 führt den Freiwurf aus und passt den Ball zu SCHWARZ 2. Dieser versucht einen Torwurf, der jedoch von WEISS 4 geblockt wird. Der Ball gelangt zu SCHWARZ 11 zurück. SCHWARZ 11 wirft auf das Tor, wird dabei aber leicht von WEISS 5 gestoßen. Torwart WEISS 1 kann den Wurf halten. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Mannschaft SCHWARZ; normale Aufbauphase, weil Mannschaft SCHWARZ nach dem Torwurf in Ballbesitz gekommen ist.",
   "Freiwurf für Mannschaft SCHWARZ; Vorwarnsignal, Mannschaft SCHWARZ hat 2 Pässe gespielt",
   "Freiwurf für Mannschaft SCHWARZ; Vorwarnsignal, Mannschaft SCHWARZ hat 3 Pässe gespielt",
   "Freiwurf für Mannschaft SCHWARZ; Vorwarnsignal, Mannschaft SCHWARZ hat 4 Pässe gespielt"
  ],
  "correct": [
   "c"
  ],
  "rule": "7:11, 7:12, Erläuterung 4"
 },
 {
  "id": "7.35",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Es steht 27:27 und es sind noch 20 Sekunden zu spielen. Die Mannschaft WEISS spielt ohne Torwart. Das Vorwarnsignal wird von den Schiedsrichtern gezeigt. Nach drei Pässen spielt WEISS 8 den Ball zu WEISS 7, der aufs Tor wirft. Der Ball wird vom Abwehrspieler SCHWARZ 2 geblockt, und der Ball geht über die die Seitenlinie. Kurz nach der Ausführung des Einwurfs ertönt der Pfiff vom Zeitnehmer, weil Mannschaft WEISS ein Team-Time-out beantragt hat. Wie soll das Spiel wieder aufgenommen werden?",
  "options": [
   "Freiwurf für die Mannschaft WEISS.",
   "Einwurf für die Mannschaft WEISS.",
   "Der Wurf muss als direkter Wurf auf das Tor ausgeführt werden.",
   "Neben der Möglichkeit, den Wurf als direkten Torwurf auszuführen, darf der Werfer den Ball einem Mitspieler zuspielen."
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "7:11, 7:12, Erläuterung 4, Anhang 1 (Schulungshilfe \"Passives Spiel\")"
 },
 {
  "id": "7.36",
  "section": "7",
  "sectionTitle": "Spielen des Balles, Schrittfehler und passives Spiel",
  "question": "Die Mannschaft WEISS spielt im Angriff. Zwei Pässe nach dem Vorwarnsignal des Schiedsrichters wirft WEISS 7 auf das Tor. Der Ball wird von SCHWARZ 8 geblockt. WEISS 8 erhält den Abpraller und versucht, auf das Tor zu werfen. Wieder wird der Ball von SCHWARZ 8 geblockt. WEISS 8 erhält den Ball nach dem Block und spielt den Ball zu WEISS 6, der eine klare Torchance hat. WEISS 6 wird von hinten von SCHWARZ 7 so zu Boden gezogen, dass er völlig die Körperkontrolle verliert. Was ist die richtige Entscheidung?",
  "options": [
   "7-Meter-Wurf für WEISS",
   "Freiwurf für Mannschaft SCHWARZ",
   "Direkte 2-Minuten für SCHWARZ 7",
   "Disqualifikation ohne Bericht für SCHWARZ 7",
   "Freiwurf für Mannschaft WEISS",
   "Time-out"
  ],
  "correct": [
   "b",
   "d",
   "f"
  ],
  "rule": "2:8, 7:11, 7:12, Erläuterung 4, Anhang 1 (Schulungshilfe \"Passives Spiel\")"
 },
 {
  "id": "8.1",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Während eines Gegenstoßes von Team WEISS läuft SCHWARZ 7 als zusätzlicher Spieler auf das Spielfeld und umklammert WEISS 5 so, dass ihm eine klare Torchance genommen wird. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von SCHWARZ 7",
   "Disqualifikation von SCHWARZ 7 ohne schriftlichen Bericht",
   "Disqualifikation von SCHWARZ 7 mit schriftlichem Bericht",
   "Freiwurf",
   "7-Meter-Wurf"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "4:6, 8:10b, 14:1a, 16:6b"
 },
 {
  "id": "8.2",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der verspätet eingetroffene SCHWARZ 8 ist nicht im Spielprotokoll eingetragen. Er rennt aus der Kabine direkt auf das Spielfeld und vereitelt eine klare Torchance, indem er den im Sprung befindlichen Ballbesitzer so stößt, dass dieser die Körperkontrolle verliert. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team WEISS",
   "Freiwurf für Team WEISS",
   "Disqualifikation von SCHWARZ 8 ohne schriftlichen Bericht (rote Karte)",
   "Disqualifikation von SCHWARZ 8 mit schriftlichem Bericht (rote und blaue Karte)",
   "Progressive Bestrafung des Mannschaftsverantwortlichen von Team SCHWARZ"
  ],
  "correct": [
   "a",
   "d",
   "e"
  ],
  "rule": "4:3, 8:10b, 14:1a, 16:1b, 16:6a, 16:6b"
 },
 {
  "id": "8.3",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Offizieller B von Team WEISS protestiert auf dem Weg in die Kabine (während der Halbzeitpause) bei den Schiedsrichtern. In der ersten Halbzeit wurde bereits Offizieller A von Team WEISS verwarnt. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung des Offiziellen von Team WEISS",
   "Disqualifikation des Offiziellen von Team WEISS (rote Karte)",
   "Team WEISS beginnt die zweite Halbzeit mit einem Spieler weniger.",
   "Keine Bestrafung, aber schriftlicher Bericht"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "8:7a, 16:3e, 16:10"
 },
 {
  "id": "8.4",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 6 wurde schon zweimal für zwei Minuten hinausgestellt. Jetzt begeht er den zweiten Wechselfehler seiner Mannschaft. Wie ist zu entscheiden, wenn er sich besonders grob unsportlich verhält, nachdem die Schiedsrichter ihn über den Wechselfehler informiert haben?",
  "options": [
   "Hinausstellung von WEISS 6",
   "Disqualifikation von WEISS 6 ohne schriftlichen Bericht (rote Karte)",
   "Disqualifikation von WEISS 6 mit schriftlichem Bericht (rote und blaue Karte)",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "a",
   "c",
   "f"
  ],
  "rule": "4:5, 8:10a, 16:3a, 16:6d, 16:8, 16:9c"
 },
 {
  "id": "8.5",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 2 wurde hinausgestellt, aber schon nach einer Minute wird er vom Offiziellen A wieder auf die Spielfläche geschickt. Noch bevor der Zeitnehmer pfeift, vereitelt WEISS 2 eine klare Torchance von Team SCHWARZ. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ und erneute Hinausstellung von WEISS 2",
   "7-Meter-Wurf für Team SCHWARZ, erneute Hinausstellung von WEISS 2 und weitere Reduzierung von Team WEISS für die Reststrafzeit",
   "7-Meter-Wurf für Team SCHWARZ, Disqualifikation von WEISS 2 ohne schriftlichen Bericht und weitere Reduzierung seiner Mannschaft für die Reststrafzeit (rote Karte)",
   "7-Meter-Wurf für Team SCHWARZ, Disqualifikation von WEISS 2 und weitere Reduzierung seiner Mannschaft für die Reststrafzeit; schriftlicher Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "d"
  ],
  "rule": "4:6, 8:10b, 14:1a, 16:6b, 16:8"
 },
 {
  "id": "8.6",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Bei einem Angriff von Team WEISS sperrt Kreisspieler WEISS 7 ohne Ball Gegenspieler SCHWARZ 4 mit seinem Rumpf. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Progressive Bestrafung von WEISS 7",
   "Weiterspielen lassen"
  ],
  "correct": [
   "c"
  ],
  "rule": "8:1c"
 },
 {
  "id": "8.7",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Außenspieler WEISS 4 kommt zu einer klaren Torchance. Im letzten Moment versucht SCHWARZ 7, ihm den Ball aus der Hand zu spielen, wobei er allerdings nur den Unterarm von WEISS 4 trifft. Der Ball geht am Tor vorbei. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Hinausstellung von SCHWARZ 7",
   "Verwarnung von SCHWARZ 7",
   "Keine Bestrafung von SCHWARZ 7"
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "8:2a, 14:1a"
 },
 {
  "id": "8.8",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 6 läuft einen Gegenstoß. Torwart SCHWARZ 12 verlässt seinen Torraum, gelangt in Ballbesitz, verursacht aber einen Zusammenprall mit WEISS 6. Möglicherweise hätte aber ein Abwehrspieler den Spieler WEISS 6 noch regelkonform stoppen können. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von SCHWARZ 12",
   "Disqualifikation von SCHWARZ 12 (rote Karte)",
   "7-Meter-Wurf für Team WEISS",
   "Freiwurf für Team WEISS",
   "Disqualifikation von SCHWARZ 12 mit schriftlichem Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "8:5 Kommentar, 14:1a, 16:6a, Erläuterung 6b"
 },
 {
  "id": "8.9",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 2 möchte einen Mitspieler in der anderen Spielfeldhälfte anspielen. Dieser wird aber von SCHWARZ 5 fest umklammert. SCHWARZ 5 hatte vorher schon eine Verwarnung wegen Anrennens eines Gegenspielers ohne Ball erhalten. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Hinausstellung von SCHWARZ 5",
   "Disqualifikation von SCHWARZ 5 (rote Karte)",
   "Schriftlicher Bericht (blaue Karte)"
  ],
  "correct": [
   "a",
   "b"
  ],
  "rule": "8:3, 13:1b, 16:3b"
 },
 {
  "id": "8.10",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der am Kreis freistehende Spieler WEISS 9 wird angespielt, aber von SCHWARZ 2 am Wurfarm zurückgezogen. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Hinausstellung von SCHWARZ 2",
   "Disqualifikation von SCHWARZ 2 (rote Karte)",
   "Schriftlicher Bericht (blaue Karte)"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "8:5, 14:1a, 16:6a"
 },
 {
  "id": "8.11",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Kurz nachdem SCHWARZ 9 in der ersten Spielminute wegen Stoßens verwarnt wurde, umklammert SCHWARZ 7 den Kreisspieler von Team WEISS (keine klare Torchance). Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Verwarnung von SCHWARZ 7",
   "Hinausstellung von SCHWARZ 7"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "8:3, 13:1b, 16:1a"
 },
 {
  "id": "8.12",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Bevor WEISS 4, der frei am Torraum angespielt wird, auf das Tor werfen kann, wird er von SCHWARZ 3 zu Boden gezogen und verliert den Ball. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung von SCHWARZ 3",
   "Hinausstellung von SCHWARZ 3",
   "Disqualifikation von SCHWARZ 3 (rote Karte)",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS"
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "8:4b, 14:1a, 16:3c"
 },
 {
  "id": "8.13",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Wann ist ein Spieler zu disqualifizieren (rote Karte oder rote und blaue Karte)?",
  "options": [
   "Bei einer Regelwidrigkeit, die die Gesundheit eines Gegenspielers gefährdet",
   "Bei einem besonders grob unsportlichen Verhalten auf oder außerhalb der Spielfläche",
   "Bei wiederholtem unsportlichen Verhalten auf der Spielfläche",
   "Bei einem Wechselfehler während einer Hinausstellungszeit (ohne klare Torchance)"
  ],
  "correct": [
   "a",
   "b"
  ],
  "rule": "8:5, 8:6, 16:6a"
 },
 {
  "id": "8.14",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Bei einem Gegenstoß von WEISS 5 läuft Offizieller C von Team SCHWARZ von der Bank auf das Spielfeld in Richtung des eigenen Torraums. WEISS 5 ist so überrascht, dass er seinen Lauf abbricht. Nach Auffassung des Schiedsrichters bot sich ihm eine klare Torchance. Offizieller C hatte weder Spieler noch Ball berührt, und die kürzeste Distanz zu WEISS 5 betrug ungefähr zehn Meter. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Disqualifikation des Offiziellen C ohne schriftlichen Bericht (rote Karte)",
   "Disqualifikation des Offiziellen C, schriftlicher Bericht (rote und blaue Karte)",
   "Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Der Delegierte oder die Schiedsrichter haben die Möglichkeit, den Vorteil laufen zu lassen und pfeifen erst, wenn die klare Torgelegenheit vorbei ist."
  ],
  "correct": [
   "a",
   "c",
   "e",
   "f"
  ],
  "rule": "2:8a, 8:10b, 14:1a, 16:6b"
 },
 {
  "id": "8.15",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team WEISS hat einen Gegenstoß eingeleitet. WEISS 5 will WEISS 7 anspielen, weil dieser sich ganz allein an der gegnerischen Torraumlinie befindet. Offizieller D von Team SCHWARZ läuft auf das Spielfeld und fängt den Pass ab. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Hinausstellung des Offiziellen D von Team SCHWARZ",
   "Disqualifikation des Offiziellen D von Team SCHWARZ ohne schriftlichen Bericht (rote Karte)",
   "Disqualifikation des Offiziellen D von Team SCHWARZ, schriftlicher Bericht (rote und blaue Karte)",
   "Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "b",
   "e",
   "f"
  ],
  "rule": "8:10b, 14:1a, 16:6b"
 },
 {
  "id": "8.16",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Welche der folgenden Handlungen sind als besonders grob unsportliches Verhalten einzustufen und daher mit Disqualifikation und schriftlichem Bericht (rote und blaue Karte) zu bestrafen?",
  "options": [
   "Wiederholte Abwehr mit Fuß oder Unterschenkel durch einen Feldspieler",
   "Vereitelung einer klaren Torchance durch einen Offiziellen",
   "Anspucken einer anderen Person",
   "Wiederholte Spielverzögerung, um Zeit zu schinden"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "8:10a, 8:10b, 16:6b"
 },
 {
  "id": "8.17",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Beim Betreten der Halle begegnen die Schiedsrichter dem bereits umgezogenen, aber noch nicht im Spielprotokoll eingetragenen SCHWARZ 4. Er ruft sofort: „Aber nicht schon wieder diese Idioten!“ Er lässt sich erst in der 12. Minute als 16. Spieler nachtragen. Jetzt bemerkt ihn der Schiedsrichter. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von SCHWARZ 4 ohne schriftlichen Bericht (rote Karte)",
   "Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Keine Reduzierung von Team SCHWARZ auf der Spielfläche",
   "Disqualifikation von SCHWARZ 4, schriftlicher Bericht (rote und blaue Karte)",
   "Team SCHWARZ darf sich mit einem anderen Spieler auf 16 Spieler ergänzen."
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "8:10a, 16:6b, 16:8, 16:11b"
 },
 {
  "id": "8.18",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Bei einer Freiwurfentscheidung für Team WEISS betritt der Offizielle C von Team SCHWARZ das Spielfeld und ruft: „Aber das ist doch Freiwurf für uns!“ Die Offiziellen von Team SCHWARZ hatten zuvor noch keine Strafe erhalten. Wie ist zu entscheiden?",
  "options": [
   "Der Mannschaftsverantwortliche von Team SCHWARZ muss den Offiziellen C aus der Halle führen.",
   "Hinausstellung für den Offiziellen C von Team SCHWARZ; Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Verwarnung des Offiziellen C von Team SCHWARZ",
   "Freiwurf für Team WEISS"
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "8:7a, 16:1b"
 },
 {
  "id": "8.19",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 3 wurde auf der Spielfläche wegen eines progressiv zu bestrafenden Vergehens verwarnt. Nach einem Wechsel beleidigt er von der Auswechselbank aus den Schiedsrichter. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von WEISS 3 ohne schriftlichen Bericht (rote Karte); Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Disqualifikation von WEISS 3, schriftlicher Bericht (rote und blaue Karte); Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Hinausstellung von WEISS 3; Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Time-out"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "8:10a, 16:6b"
 },
 {
  "id": "8.20",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Bei einem Gegenstoß wird SCHWARZ 9 von WEISS 4, der schon verwarnt wurde, am Trikot festgehalten. Trotzdem kann SCHWARZ 9 den Ball noch zu SCHWARZ 8 spielen, der ein Tor erzielt. Der Schiedsrichter will nun WEISS 4 nachträglich bestrafen. WEISS 4 sitzt allerdings bereits auf der Auswechselbank. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von WEISS 4; Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "WEISS 4 darf in den nächsten zwei Minuten nicht mitspielen, aber seine Mannschaft bleibt auf der Spielfläche vollständig.",
   "Keine Bestrafung mehr möglich",
   "Disqualifikation von WEISS 4 (rote Karte); Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "a"
  ],
  "rule": "8:3, 16:3b"
 },
 {
  "id": "8.21",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Wann ist ein Spieler zu disqualifizieren (rote oder rote und blaue Karte)?",
  "options": [
   "Bei grob unsportlichem Verhalten",
   "Bei Verhinderung einer klaren Torchance durch absichtliche Fußabwehr eines Wurfes oder Passes",
   "Bei fehlerhaftem Wechseln während einer Hinausstellungszeit (keine klare Torchance)",
   "Wenn er den Ball bei einer Freiwurfentscheidung gegen seine Mannschaft nicht sofort niederlegt (nicht in den letzten 30 Sekunden)"
  ],
  "correct": [
   "a"
  ],
  "rule": "4:6, 8:8b, 8:8f, 8:9, 16:6b"
 },
 {
  "id": "8.22",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team SCHWARZ befindet sich im Angriff. WEISS 11 trennt SCHWARZ 6 durch eine Regelwidrigkeit, die die Gesundheit des Gegenspielers gefährdet, vom Ball. Zwischen SCHWARZ 6 und dem Tor standen noch zwei weitere Spieler von Team WEISS. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von WEISS 11",
   "Disqualifikation von WEISS 11 (rote Karte)",
   "7-Meter-Wurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "8:5, 13:1b, 16:6a, Erläuterung 6"
 },
 {
  "id": "8.23",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Welche der folgenden Vergehen sind laut Regelwerk mit einer Disqualifikation und schriftlichem Bericht (rote und blaue Karte) zu ahnden?",
  "options": [
   "Unerlaubtes Betreten der Spielfläche durch einen Offiziellen ab dem zweiten Mal",
   "Aufforderung zum Spielabbruch durch einen Offiziellen",
   "Wenn ein 7-Meter-Werfer den Kopf des Torwarts trifft, wobei der Torwart seinen Kopf nicht in Richtung des Balls bewegt",
   "Wenn ein Spieler den Ball nach einer Schiedsrichterentscheidung demonstrativ auf die Tribüne wirft",
   "Wenn ein Spieler außerhalb der Spielfläche einen Zuschauer anspuckt"
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "8:10, 16:6b"
 },
 {
  "id": "8.24",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 3 ist wegen regelwidrigen Verhaltens hinausgestellt worden und befindet sich auf der Auswechselbank. Als in der Nähe ein Einwurf ansteht, ruft er dem Schiedsrichter beleidigende Worte zu. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von WEISS 3",
   "Disqualifikation von WEISS 3 ohne schriftlichen Bericht (rote Karte); Team WEISS wird auf der Spielfläche direkt im Anschluss um einen Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert.",
   "Disqualifikation von WEISS 3, schriftlicher Bericht (rote und blaue Karte); Team WEISS wird auf der Spielfläche direkt im Anschluss um einen Spieler reduziert."
  ],
  "correct": [
   "d"
  ],
  "rule": "8:10a, 16:8"
 },
 {
  "id": "8.25",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Aus Enttäuschung über einen misslungenen Spielzug ohrfeigt WEISS 3 einen Mitspieler. Wie ist zu entscheiden?",
  "options": [
   "Keine Bestrafung, weil es sich um einen Mitspieler handelt",
   "Hinausstellung von WEISS 3",
   "Disqualifikation von WEISS 3 ohne schriftlichen Bericht (rote Karte)",
   "Disqualifikation von WEISS 3, schriftlicher Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "d"
  ],
  "rule": "8:6b, 16:6a"
 },
 {
  "id": "8.26",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Beim Betreten der Halle begegnen die Schiedsrichter dem bereits umgezogenen SCHWARZ 4, der sofort ruft: „Aber nicht schon wieder diese Idioten!“ Die Schiedsrichter stellen vor Spielbeginn fest, dass SCHWARZ 4 im Spielprotokoll eingetragen ist. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von SCHWARZ 4 zu Beginn des Spiels",
   "Disqualifikation von SCHWARZ 4 ohne schriftlichen Bericht (rote Karte); Team SCHWARZ wird auf der Spielfläche zu Beginn des Spiels zwei Minuten lang um einen Spieler reduziert.",
   "Disqualifikation von SCHWARZ 4, schriftlicher Bericht (rote und blaue Karte); Team SCHWARZ darf im Spiel 16 Spieler einsetzen.",
   "Disqualifikation von SCHWARZ 4, schriftlicher Bericht (rote und blaue Karte); Team SCHWARZ darf im Spiel 16 Spieler einsetzen, wird aber auf der Spielfläche zu Beginn des Spiels zwei Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "c"
  ],
  "rule": "8:10a, 16:6b, 16:11b, 17:10"
 },
 {
  "id": "8.27",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Beim Aufwärmen vor dem Spiel prallen WEISS 3 und Torwart SCHWARZ 1 unbeabsichtigt zusammen. Die beiden Spieler beschimpfen sich. Torwart SCHWARZ 1 ohrfeigt WEISS 3, der sofort zurückschlägt. Beide Spieler sind im Spielprotokoll eingetragen. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von SCHWARZ 1 mit schriftlichem Bericht (rote Karte) und Hinausstellung von WEISS 3; beide Mannschaften dürfen jeweils 16 Spieler einsetzen.",
   "Disqualifikation von SCHWARZ 1 und WEISS 3 mit schriftlichem Bericht (rote und blaue Karte); beide Mannschaften dürfen jeweils 16 Spieler einsetzen, werden aber auf der Spielfläche die ersten zwei Minuten um jeweils einen Spieler reduziert.",
   "Hinausstellung von SCHWARZ 1 und WEISS 3, die zu Beginn des Spiels abgesessen werden muss. Ein schriftlicher Bericht ist erforderlich.",
   "Disqualifikation von SCHWARZ 1 und WEISS 3 mit schriftlichem Bericht (rote und blaue Karte); beide Mannschaften dürfen jeweils 16 Spieler einsetzen."
  ],
  "correct": [
   "d"
  ],
  "rule": "8:10a, 16:6a, 16:11b, 17:10"
 },
 {
  "id": "8.28",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 9 setzt zum Sprungwurf an. SCHWARZ 5 greift ihm von hinten in den Wurfarm und zieht WEISS 9 nach hinten weg. Zwischen WEISS 9 und dem Tor stehen noch zwei weitere Abwehrspieler. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Disqualifikation von SCHWARZ 5 ohne schriftlichen Bericht (rote Karte)",
   "Hinausstellung von SCHWARZ 5",
   "Disqualifikation von SCHWARZ 5, schriftlicher Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "8:5, 13:1b, 16:6a"
 },
 {
  "id": "8.29",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Welche der folgenden Vergehen sind mit einer Disqualifikation (rote Karte) zu ahnden?",
  "options": [
   "Unerlaubtes Betreten der Spielfläche durch einen Offiziellen ab dem zweiten Mal",
   "Ein Spieler in Ballbesitz läuft einen Gegenstoß und wird dabei umgerissen. Die Situation ist nicht besonders gefährlich.",
   "7-Meter-Wurf in das Gesicht des sich nicht in Richtung Ball bewegenden Torwarts",
   "Ein Spieler wirft den Ball aus Protest gegen eine Schiedsrichter-Entscheidung auf die Tribüne.",
   "Der Torwart verlässt den Torraum und kommt in Ballbesitz, verursacht aber einen Zusammenprall mit dem Gegenspieler, der einen Gegenstoß läuft."
  ],
  "correct": [
   "b",
   "d",
   "e"
  ],
  "rule": "8:5, 8:9a, 8:9d, 16:6a, 16:6b"
 },
 {
  "id": "8.30",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Nach seiner dritten Hinausstellung wird WEISS 9 disqualifiziert. Noch in Sportkleidung setzt er sich in die erste Zuschauerreihe hinter der Seitenlinie gegenüber den Auswechselbereichen. Direkt vor ihm begeht SCHWARZ 3 ein besonders grobes Foul an WEISS 10, der verletzt liegen bleibt. Bevor die Schiedsrichter eine Strafe aussprechen können, läuft WEISS 9 auf die Spielfläche und schlägt SCHWARZ 3 nieder. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Disqualifikation von SCHWARZ 3, schriftlicher Bericht (rote und blaue Karte)",
   "WEISS 9 ist nicht mehr am Spiel beteiligt, weshalb keine Meldung erforderlich ist.",
   "Schriftlicher Bericht über das Verhalten von WEISS 9",
   "Disqualifikation von SCHWARZ 3 ohne schriftlichen Bericht (rote Karte)",
   "Nach Behandlung auf der Spielfläche muss WEISS 10 die Spielfläche verlassen und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten."
  ],
  "correct": [
   "a",
   "b",
   "d"
  ],
  "rule": "2:8a, 4:11, 8:6a, 16:6a, 17:2, 17:10"
 },
 {
  "id": "8.31",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Wann ist eine Verwarnung erforderlich?",
  "options": [
   "Bei einer Regelwidrigkeit, die sich hauptsächlich oder ausschließlich gegen den Körper des Gegenspielers richtet",
   "Bei einer Regelwidrigkeit während der Ausführung eines formellen Wurfs durch die gegnerische Mannschaft",
   "Wenn der Ball bei einer Entscheidung gegen die eigene Mannschaft nicht auf den Boden gelegt wird",
   "Beim Versuch eines Torwarts, einen Wechsel vorzunehmen, wenn der Werfer zum 7-Meter-Wurf bereit ist"
  ],
  "correct": [
   "a",
   "b",
   "d"
  ],
  "rule": "8:3, 8:7c, 8:8b, 14:10, 16:1b, 16:3c"
 },
 {
  "id": "8.32",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Was ist als unsportliches Verhalten zu bewerten?",
  "options": [
   "Treffen des Kopfes eines sich nicht in Richtung Ball bewegenden Abwehrspielers",
   "Passives Verhalten des Torwarts bei der Ausführung eines 7-Meter-Wurfs, wenn davon auszugehen ist, dass er den Wurf nicht abwehren will",
   "Der Versuch, die Schiedsrichter durch Schauspielerei zu irritieren",
   "Aktives Blocken von Würfen durch das Benutzen von Füßen und Unterschenkeln",
   "Wiederholtes Betreten des Torraumes aus taktischen Gründen",
   "Revanchefoul nach einem Vergehen"
  ],
  "correct": [
   "c",
   "d",
   "e"
  ],
  "rule": "8:7"
 },
 {
  "id": "8.33",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "In welchen Situationen ist eine Disqualifikation mit einem schriftlichen Bericht (rote und blaue Karte) verbunden?",
  "options": [
   "Tätlichkeit auf der Spielfläche während der Halbzeitpause",
   "Bei besonders rücksichtslosen oder gefährlichen Vergehen",
   "Revanchefoul nach einem Vergehen",
   "Eine arglistige Aktion, die ohne Bezug zu einer Spielhandlung erfolgt"
  ],
  "correct": [
   "a",
   "b",
   "d"
  ],
  "rule": "8:5, 8:6, 8:9f"
 },
 {
  "id": "8.34",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Es erfolgt ein Anwurf für Team WEISS. Der Anpfiff ist erfolgt, der Ball hat die Hand des anwerfenden Spielers WEISS 9 aber noch nicht verlassen. WEISS 3 läuft nach dem Pfiff schnell über die Mittellinie, wird aber von seinem Gegenspieler SCHWARZ 5 von hinten so zu Boden gezogen, dass er die Körperkontrolle völlig verliert. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von SCHWARZ 5",
   "Disqualifikation von SCHWARZ 5 ohne schriftlichen Bericht (rote Karte)",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Anwurf für Team WEISS",
   "Disqualifikation von SCHWARZ 5, schriftlicher Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "8:5, 13:1b, 16:6a"
 },
 {
  "id": "8.35",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "SCHWARZ 8 wurde infolge eines Wechselfehlers hinausgestellt. Zwei Sekunden nach Wiederanpfiff äußert er sich auf der Bank in unsportlicher Weise gegenüber den Schiedsrichtern. Wie ist zu entscheiden?",
  "options": [
   "Erneute Hinausstellung von SCHWARZ 8",
   "Disqualifikation von SCHWARZ 8 ohne schriftlichen Bericht (rote Karte)",
   "Team SCHWARZ wird auf der Spielfläche eine Minute und 58 Sekunden lang um zwei Spieler und im Anschluss zwei Sekunden lang um einen Spieler reduziert.",
   "Team SCHWARZ wird auf der Spielfläche die nächsten zwei Minuten lang um zwei Spieler reduziert.",
   "Freiwurf für Team WEISS",
   "Time-out"
  ],
  "correct": [
   "a",
   "c",
   "e",
   "f"
  ],
  "rule": "2:8a, 8:7a, 16:3d"
 },
 {
  "id": "8.36",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Torwart WEISS 1 wirft einen langen Pass auf WEISS 15, der alleine auf das gegnerische Tor zuläuft. Torwart SCHWARZ 12 verlässt seinen Torraum, springt ab, fängt den Ball und prallt in der Luft mit WEISS 15 zusammen. Beide Spieler fallen zu Boden und bleiben verletzt liegen. Wie ist zu entscheiden?",
  "options": [
   "Time-out, Hinausstellung von WEISS 15",
   "Time-out, Hinausstellung von SCHWARZ 12",
   "Time-out, Disqualifikation von SCHWARZ 12",
   "Freiwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team WEISS"
  ],
  "correct": [
   "c",
   "f"
  ],
  "rule": "8:5 Kommentar, 14:1a, 16:6"
 },
 {
  "id": "8.37",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team SCHWARZ ist in Ballbesitz. Der Delegierte unterbricht das Spiel, weil Offizieller A von Team SCHWARZ wegen eines nicht geahndeten Fouls einen Stuhl auf die Spielfläche geworfen hat. Gegen die Offiziellen von Team SCHWARZ wurden bisher keine Strafen ausgesprochen. Im Moment des Abpfiffs bot sich SCHWARZ 7 eine klare Torchance. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung des Trainers von Team SCHWARZ",
   "Hinausstellung des Trainers von Team SCHWARZ",
   "Disqualifikation des Trainers von Team SCHWARZ ohne schriftlichen Bericht (rote Karte)",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team SCHWARZ",
   "Disqualifikation des Trainers von Team SCHWARZ, schriftlicher Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "d",
   "f"
  ],
  "rule": "8:10, 16:6b"
 },
 {
  "id": "8.38",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Offizieller A von Team WEISS reagiert auf eine Entscheidung der Schiedsrichter gegen seine Mannschaft mit lautstarken Protesten und ruft: „Ihr seid doch Idioten“. Gegen einen anderen Offiziellen von Team WEISS wurde zehn Minuten zuvor bereits eine Verwarnung ausgesprochen. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung des Offiziellen A von Team WEISS wegen unsportlichen Verhaltens",
   "Hinausstellung des Offiziellen A von Team WEISS und 2-Minuten-Reduzierung von Team WEISS auf der Spielfläche um einen Spieler",
   "Disqualifikation des Offiziellen A von Team WEISS, schriftlicher Bericht (rote und blaue Karte) und 2-Minuten-Reduzierung von Team WEISS auf der Spielfläche um einen Spieler",
   "Time-out"
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "2:8, 8:7a, 8:10a, 16:6b, 16:8, Auswechselraum-Reglement Nr. 5"
 },
 {
  "id": "8.39",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Torwart WEISS 1 will einen Abwurf ausführen. Gegenspieler SCHWARZ 3 betritt zum wiederholten Mal den Torraum und versucht ohne Körperkontakt, den Abwurf zu verhindern. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS mit Anpfiff",
   "Abwurf für Team WEISS mit Anpfiff",
   "Verwarnung von SCHWARZ 3",
   "Hinausstellung von SCHWARZ 3",
   "Time-out"
  ],
  "correct": [
   "a",
   "d",
   "e"
  ],
  "rule": "8:7c, 12:2, 15:4, 15:9, 16:1b, 16:3d"
 },
 {
  "id": "8.40",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 4 berührt den im gegnerischen Torraum rollenden Ball. In diesem Moment wird er von SCHWARZ 6 zu Boden gestoßen. Wie ist zu entscheiden?",
  "options": [
   "Progressive Bestrafung von SCHWARZ 6",
   "Freiwurf für Team WEISS",
   "Abwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "6:5, 8:2, 8:3, 12:1"
 },
 {
  "id": "8.41",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 7 verbüßt wegen unsportlichen Verhaltens seine erste Zeitstrafe. Zehn Sekunden nach Wiederanpfiff gestikuliert er auf der Bank heftig, um zu zeigen, dass er mit den Schiedsrichtern nicht einverstanden ist. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von WEISS 7 ohne schriftlichen Bericht (rote Karte)",
   "Hinausstellung für WEISS 7 (muss insgesamt vier Minuten lang auf der Bank bleiben)",
   "Weitere Hinausstellung für WEISS 7; Team WEISS wird auf der Spielfläche zunächst eine Minute und 50 Sekunden lang um zwei Spieler und im Anschluss zehn Sekunden lang um einen Spieler reduziert.",
   "Verwarnung, da die progressive Bestrafung auf der Bank anders zu behandeln ist als eine Bestrafung auf der Spielfläche"
  ],
  "correct": [
   "c"
  ],
  "rule": "8:8a, 16:3f"
 },
 {
  "id": "8.42",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 6 wird von SCHWARZ 3 regelwidrig gestoßen und spuckt demonstrativ vor SCHWARZ 3 auf den Boden. Wie ist WEISS 6 zu bestrafen?",
  "options": [
   "Progressiv",
   "Hinausstellung",
   "Disqualifikation ohne schriftlichen Bericht (rote Karte)",
   "Disqualifikation mit schriftlichem Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "c"
  ],
  "rule": "8:9, 16:6b"
 },
 {
  "id": "8.43",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Torwart WEISS 12 läuft aus seinem Torraum dem im Gegenstoß laufenden Spieler SCHWARZ 10 entgegen. WEISS 12 erreicht SCHWARZ 10 seitlich und hält ihn fest, wobei SCHWARZ 10 den Ball fangen kann und ihn ins leere Tor wirft. Wie ist zu entscheiden?",
  "options": [
   "Anwurf",
   "Time-out",
   "Disqualifikation von WEISS 12",
   "Hinausstellung von WEISS 12",
   "7-Meter-Wurf für Team SCHWARZ"
  ],
  "correct": [
   "a",
   "b",
   "d"
  ],
  "rule": "2:8, 8:4b, 9:1, 10:2, 16:3c"
 },
 {
  "id": "8.44",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Torwart WEISS 12 spielt einen langen Pass zu dem im Gegenstoß laufenden WEISS 4. Dieser springt, erreicht den Ball und stößt mit Torwart SCHWARZ 1 zusammen, der seinen Torraum verlassen hat, um den Gegenstoß zu verhindern. Im Augenblick des Zusammenpralls steht SCHWARZ 4 an der 9-Meter-Linie. Nach dem Zusammenprall verliert WEISS 4 die Körperkontrolle und fällt zu Boden. Wie ist zu entscheiden?",
  "options": [
   "Stürmerfoul: Freiwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Progressive Bestrafung gegen SCHWARZ 1",
   "Disqualifikation von SCHWARZ 1 ohne schriftlichen Bericht (rote Karte)"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "8:5 Kommentar, 14:1a, 16:6a, Erläuterung 6c"
 },
 {
  "id": "8.45",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Welche der folgenden Vergehen sind laut Regelwerk mit Disqualifikation und schriftlichem Bericht (rote und blaue Karte) zu bestrafen?",
  "options": [
   "Ein Spieler spuckt einen Gegenspieler an.",
   "Ein Offizieller versucht, seine Mannschaft dazu zu bewegen, das Spiel abzubrechen.",
   "Wenn ein 7-Meter-Werfer den Kopf des Torwarts trifft, ohne dass der Torwart seinen Kopf in Richtung Ball bewegt",
   "Nach einer Schiedsrichterentscheidung wirft ein Spieler den Ball demonstrativ auf die Tribüne.",
   "Ein Spieler spuckt außerhalb der Spielfläche einen Zuschauer an.",
   "Ein Spieler schlägt einen Gegenspieler absichtlich in den Magen."
  ],
  "correct": [
   "a",
   "b",
   "e",
   "f"
  ],
  "rule": "8:9a, 8:10a"
 },
 {
  "id": "8.46",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Spielzeit: 59:26. Spieler SCHWARZ 10 befindet sich allein im Gegenstoß. Bei der Annahme des Passes von seinem Mitspieler stößt SCHWARZ 10 mit Torwart WEISS 1 zusammen, der seinen Torraum verlassen hat. Bevor SCHWARZ 10 zu Boden geht, gelingt ihm ein Pass zu SCHWARZ 7, der auf das leere Tor wirft, aber nicht trifft. Die Schiedsrichter unterbrechen das Spiel mit Time-out. Spielzeit: 59:31. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf",
   "7-Meter-Wurf",
   "Rote Karte für WEISS 1",
   "Blaue Karte für WEISS 1",
   "Abwurf"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "8:5 Kommentar, 14:2,"
 },
 {
  "id": "8.47",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team WEISS spielt mit sieben Feldspielern und befindet sich im Angriff. SCHWARZ 5 fängt einen Pass ab und gelangt in Ballbesitz. Er setzt sofort zum Torwurf an. WEISS 2 will SCHWARZ 5 am Torwurf hindern, indem er versucht, ihm den Ball aus der Hand zu spielen. Dabei schlägt er gegen den Unterarm von SCHWARZ 5, sodass sein Wurf das Tor verfehlt. Team WEISS erhielt zuvor bereits drei Verwarnungen. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Hinausstellung von WEISS 2",
   "Time-out"
  ],
  "correct": [
   "c"
  ],
  "rule": "4:1, 8:1, 8:2, 14:1a, Erläuterung 6c"
 },
 {
  "id": "8.48",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team WEISS spielt mit sieben Feldspielern und befindet sich im Angriff. SCHWARZ 5 fängt einen Pass ab und gelangt in Ballbesitz. Er setzt sofort zum Torwurf an. WEISS 2 will SCHWARZ 5 am Torwurf hindern, indem er ihn zu Boden zieht. Der Wurf verfehlt das Tor. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Hinausstellung von WEISS 2",
   "Time-out"
  ],
  "correct": [
   "c",
   "d",
   "e"
  ],
  "rule": "2:8, 4:1, 8:4b, 14:1a, 16:3c, Erläuterung 6c"
 },
 {
  "id": "8.49",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team WEISS spielt mit sieben Feldspielern und befindet sich im Angriff. WEISS 4 wirft auf das Tor, aber Torwart SCHWARZ 1 wehrt den Ball ab. SCHWARZ 1 passt den Ball zu SCHWARZ 9. Als Torwart WEISS 12 seinen Torraum betritt, setzt SCHWARZ 9 zum Torwurf an, wird aber durch ein Foul von WEISS 2 gestört. Der Ball geht über die Torauslinie. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ"
  ],
  "correct": [
   "b"
  ],
  "rule": "4:1, 8:2, 13:1b"
 },
 {
  "id": "8.50",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team WEISS spielt mit sieben Feldspielern und befindet sich im Angriff. WEISS 4 wirft auf das Tor, aber Torwart SCHWARZ 1 wehrt den Ball ab. SCHWARZ 1 steht nun mit dem Ball in der Hand in seinem Torraum und ist bereit zum Abwurf. In diesem Moment unterbricht der Delegierte das Spiel aufgrund eines Wechselfehlers: Torwart WEISS 1 hat das Spielfeld betreten, bevor WEISS 7 das Spielfeld verlassen hatte. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team SCHWARZ nach Anpfiff",
   "Time-out",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Hinausstellung von WEISS 1",
   "Hinausstellung von WEISS 7"
  ],
  "correct": [
   "a",
   "b",
   "e"
  ],
  "rule": "2:8, 4:1, 4:4-6, 12:1 (II)"
 },
 {
  "id": "8.51",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team WEISS spielt mit sieben Feldspielern und befindet sich im Angriff. WEISS 4 wirft auf das Tor, aber Torwart SCHWARZ 12 wehrt den Ball ab. SCHWARZ 12 passt den Ball zu SCHWARZ 9, der auf das Tor wirft. Feldspieler WEISS 10 betritt den eignen Torraum und kann den Ball abwehren. Der Ball geht über die Torauslinie. Wie ist zu entscheiden?",
  "options": [
   "Einwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Progressive Bestrafung von WEISS 10",
   "Hinausstellung von WEISS 10"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "4:1, 8:8i, 14:1a, 16:3f"
 },
 {
  "id": "8.52",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team WEISS spielt mit sieben Feldspielern und befindet sich im Angriff. WEISS 6 wirft auf das Tor, aber Torwart SCHWARZ 1 wehrt den Ball ab. SCHWARZ 1 wirft sofort auf das leere Tor, doch der Ball geht am Tor vorbei über die Torauslinie. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS",
   "Um den Spielfluss nicht zu unterbrechen, kann der Abwurf von einem beliebigen auf dem Spielfeld befindlichen Spieler von Team WEISS ausgeführt werden.",
   "Team WEISS muss wechseln, damit sich ein Torwart auf dem Spielfeld befindet, der den Abwurf ausführen kann.",
   "Time-out ist obligatorisch"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "2:8, 4:1, 12:1, 12:2"
 },
 {
  "id": "8.53",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team SCHWARZ spielt mit sieben Feldspielern. SCHWARZ 5 wirft auf das Tor, aber Torwart WEISS 1 wehrt den Ball ab. WEISS 1 wirft auf das leere Tor von Team SCHWARZ. Gleichzeitig begeht Torwart SCHWARZ 12 einen Wechselfehler, indem er das Spielfeld betritt, bevor SCHWARZ 7 dieses verlassen hat. Mit einem Pfiff unterbricht der Delegierte sofort das Spiel. Unmittelbar nach dem Pfiff überquert der Ball die Torauslinie von Team SCHWARZ. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von SCHWARZ 12",
   "Hinausstellung von SCHWARZ 7",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Abwurf für Team SCHWARZ",
   "Der Delegierte hätte warten sollen, bis die klare Torgelegenheit vorbei ist, bevor er das Spiel unterbricht."
  ],
  "correct": [
   "a",
   "c",
   "f"
  ],
  "rule": "4:1, 4:4-5, 13:1b, Erläuterung 13:2"
 },
 {
  "id": "8.54",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team SCHWARZ spielt mit sieben Feldspielern. SCHWARZ 6 wirft auf das Tor, aber Torwart WEISS 1 wehrt den Ball ab. WEISS 1 wirft auf das leere Tor von Team SCHWARZ. Gleichzeitig begeht Torwart SCHWARZ 12 einen Wechselfehler, indem er das Spielfeld betritt, bevor SCHWARZ 7 dieses verlassen hat. Mit einem Pfiff unterbricht der Delegierte sofort das Spiel. Unmittelbar nach dem Pfiff überquert der Ball die Torlinie und landet im Tor von Team SCHWARZ. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von SCHWARZ 12",
   "Hinausstellung von SCHWARZ 7",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Tor für Team WEISS",
   "Der Delegierte hätte warten sollen, bis die klare Torgelegenheit vorbei ist, bevor er das Spiel unterbricht."
  ],
  "correct": [
   "a",
   "d",
   "f"
  ],
  "rule": "4:1, 4:4-5, 14:1, Erläuterung 13:2"
 },
 {
  "id": "8.55",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team SCHWARZ spielt mit sieben Feldspielern. WEISS 9 fängt den Ball ab und trifft ins leere Tor von Team SCHWARZ. Der Ball bleibt im Torraum liegen. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team WEISS und Anwurf für Team SCHWARZ",
   "Time-out",
   "Im Zuge eines regulären Wechsels muss ein Torwart das Spielfeld betreten, um den Ball im Torraum aufzunehmen.",
   "Der Ball kann von einem beliebigen Feldspieler von Team SCHWARZ aufgenommen werden."
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "4:1"
 },
 {
  "id": "8.56",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Sechs Sekunden vor Spielende lautet der Spielstand 27:27. Team WEISS befindet sich im Angriff. WEISS 7 will Kreisspieler WEISS 3 anspielen. SCHWARZ 7 fängt den Ball ab. In diesem Moment wird er von WEISS 3 zu Boden gezogen. Eine Sekunde später endet das Spiel mit dem Schlusssignal der öffentlichen Zeitmessanlage. Wie ist zu entscheiden?",
  "options": [
   "Das Spiel ist zu Ende.",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Hinausstellung von WEISS 3",
   "Disqualifikation von WEISS 3 (rote Karte)",
   "Disqualifikation von WEISS 3 mit schriftlichem Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "8:4b, 13:1b, 16:3c"
 },
 {
  "id": "8.57",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Zehn Sekunden vor Spielende lautet der Spielstand 27:27. Team WEISS befindet sich im Angriff. SCHWARZ 5 fängt den Ball ab und leitet einen Gegenstoß ein. Kurz darauf wird er von WEISS 11 von hinten angegriffen, der ihn gefährlich stößt. SCHWARZ 5 verliert die Körperkontrolle. Bevor die Schiedsrichter diese Regelwidrigkeit pfeifen, ertönt das Schlusssignal der öffentlichen Zeitmessanlage. Wie ist zu entscheiden?",
  "options": [
   "Das Spiel ist zu Ende.",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Hinausstellung von WEISS 11",
   "Disqualifikation von WEISS 11 (rote Karte)",
   "Disqualifikation von WEISS 11 mit schriftlichem Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "2:4, 8:5a, 8:11b, 16:6a"
 },
 {
  "id": "8.58",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Spielzeit: 59:27. SCHWARZ 10 befindet sich in Ballbesitz und führt einen Sprungwurf aus. WEISS 2 stößt ihn dabei so stark in die Brust, dass er vollständig die Körperkontrolle verliert und mit dem Ball auf den Boden stürzt. Der Schiedsrichter pfeift, und die Uhr wird bei 59:31 angehalten. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Hinausstellung von WEISS 2",
   "Disqualifikation von WEISS 2 (rote Karte)",
   "Time-out"
  ],
  "correct": [
   "a",
   "d",
   "e"
  ],
  "rule": "2:8, 8:5a, 13:1b, 16:6a"
 },
 {
  "id": "8.59",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "15 Sekunden vor Spielende befindet sich Team SCHWARZ in Ballbesitz. Die Schiedsrichter entscheiden auf Freiwurf für Team SCHWARZ an der Mittellinie. Bevor SCHWARZ 7 den Freiwurf ausführen kann, wird er von WEISS 2 geblockt. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Korrektur und Wiederholung des Freiwurfs für Team SCHWARZ nach Wiederanpfiff",
   "7-Meter-Wurf für Team SCHWARZ",
   "Hinausstellung von WEISS 2",
   "Disqualifikation von WEISS 2 (rote Karte)",
   "Disqualifikation von WEISS 2 mit schriftlichem Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "a",
   "c",
   "e"
  ],
  "rule": "2:8, 8:11a"
 },
 {
  "id": "8.60",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team SCHWARZ befindet sich im Angriff. Drei Sekunden vor Spielende entscheiden die Schiedsrichter auf Freiwurf für Team SCHWARZ an der Freiwurflinie. SCHWARZ 10 befindet sich in korrekter Position und kann den Freiwurf direkt auf das Tor ausführen. Doch einen Meter von SCHWARZ 10 entfernt steht WEISS 5 und blockt den Torwurf. Im Anschluss ertönt das Schlusssignal. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team SCHWARZ",
   "Hinausstellung von WEISS 5",
   "Disqualifikation von WEISS 5 (rote Karte)",
   "Freiwurf für Team SCHWARZ nach Wiederanpfiff"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "2:8, 8:7c, 8:11a, 15:7, 15:9, 16:3d"
 },
 {
  "id": "8.61",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Team SCHWARZ befindet sich im Angriff. Drei Sekunden vor Spielende entscheiden die Schiedsrichter auf Freiwurf für Team SCHWARZ an der Freiwurflinie. SCHWARZ 10 befindet sich in korrekter Position, um den Freiwurf direkt auf das Tor auszuführen. Bevor SCHWARZ 10 werfen kann, wird er von WEISS 5 daran gehindert. Dieser bewegt sich bis auf einen Meter auf ihn zu. Dabei springt er vor ihm auf und bewegt seine erhobenen Arme. Das Schlusssignal ertönt. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von WEISS 5",
   "Disqualifikation von WEISS 5 (rote Karte)",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "2:8, 8:11a"
 },
 {
  "id": "8.62",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "19 Sekunden vor Spielende versucht WEISS 2, die gegnerische Abwehr zu durchbrechen. Doch aufgrund eines Schrittfehlers erfolgt ein Pfiff der Schiedsrichter. WEISS 2 wirft nach dem Pfiff der Schiedsrichter auf das Tor. Torwart SCHWARZ 12 fängt den Ball und kann nun einen Gegenstoß einleiten. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen",
   "Time-out",
   "Hinausstellung von WEISS 2",
   "Disqualifikation von WEISS 2 (rote Karte)",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ"
  ],
  "correct": [
   "b",
   "d",
   "f"
  ],
  "rule": "2:8, 8:11a"
 },
 {
  "id": "8.63",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 28:26 für Mannschaft WEISS. Es sind noch 25 Sekunden zu spielen. Mannschaft SCHWARZ erzielt ein Tor. Der Torwart WEISS 12 schießt danach den Ball absichtlich mit dem Fuß in den Zuschauerbereich. Es ist klar, dass er damit das Spiel verzögern möchte, damit der Anwurf nicht unverzüglich ausgeführt werden kann. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Anwurf für Mannschaft WEISS",
   "Freiwurf für Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Hinausstellung für WEISS 12",
   "Disqualifikation ohne Bericht für WEISS 12",
   "Disqualifikation mit Bericht für WEISS 12"
  ],
  "correct": [
   "a",
   "b",
   "f"
  ],
  "rule": "2:8, 8:9, 10:2"
 },
 {
  "id": "8.64",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 25:25 und es sind noch 3 Sekunden zu spielen. Mannschaft WEISS ist im Angriff. SCHWARZ 5 verursacht einen Freiwurf für WEISS 2 an der Freiwurflinie. Kurz darauf ertönt das Schlusssignal. Die Schiedsrichter pfeifen den nach dem Schlusssignal noch auszuführenden Freiwurf an. Bevor der Ball die Hand des Werfers verlassen hat, geht SCHWARZ 6 vorwärts und blockt, zu nahe stehend, den Ball. Wie ist zu entscheiden?",
  "options": [
   "Das Spiel ist aus.",
   "Der Freiwurf muss wiederholt werden.",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Hinausstellung für SCHWARZ 6",
   "Disqualifikation ohne Bericht für SCHWARZ 6"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "2:4, 2:5, 2:6, 15:2, 15:4, 15:9, 16:3"
 },
 {
  "id": "8.65",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Mannschaft WEISS spielt ohne Torwart, mit 7 Feldspielern. SCHWARZ 5 fängt einen Pass ab und läuft mit dem Ball in Richtung des leeren Tores von Mannschaft WEISS. Der Torwart WEISS 12 betritt die Spielfläche nach einem korrekten Wechselvorgang und läuft in die gleiche Richtung wie SCHWARZ 5. Im Moment als SCHWARZ 5 auf das Tor wirft, stößt WEISS 12 den Gegner SCHWARZ 5 von der Seite, sodass dieser die Körperkontrolle teilweise verliert und der Wurf das Tor verfehlt. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Time-out",
   "Hinausstellung für WEISS 12",
   "Disqualifikation ohne Bericht für WEISS 12"
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "2:8, 8:5 Kommentar, Guidelines und Interpretationen (8:5 Kommentar), 14:1a"
 },
 {
  "id": "8.66",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 26:26 und es sind noch 4 Sekunden zu spielen. Mannschaft WEISS ist im Angriff. WEISS 4 erhält einen Freiwurf. WEISS 4 führt den Freiwurf umgehend aus. Der Ball wird aber von SCHWARZ 5, der zu nahe steht, aktiv geblockt. Zur selben Zeit ertönt das Schlusssignal. Wie ist zu entscheiden?",
  "options": [
   "Der Freiwurf muss wiederholt werden.",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Hinausstellung für SCHWARZ 5",
   "Disqualifikation ohne Bericht für SCHWARZ 5"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "8:11a, Guidelines und Interpretationen (8:11a)"
 },
 {
  "id": "8.67",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 26:26 und es sind noch 4 Sekunden zu spielen. Mannschaft WEISS ist im Angriff. SCHWARZ 5 verursacht einen Freiwurf für WEISS 6. SCHWARZ 5 begibt sich umgehend in einen korrekten Abstand. WEISS 6 führt den Freiwurf aus und trifft SCHWARZ 5, der keine aktive Aktion gemacht hat. Der Ball prallt zu WEISS 6 zurück. Zur selben Zeit ertönt das Schlusssignal. Wie ist zu entscheiden?",
  "options": [
   "Keine weitere Aktion, Spiel ist zu Ende",
   "Der Freiwurf muss wiederholt werden.",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Hinausstellung für SCHWARZ 5",
   "Disqualifikation ohne Bericht für SCHWARZ 5"
  ],
  "correct": [
   "a"
  ],
  "rule": "2:3, 2:4, Guidelines und Interpretationen (8:11a)"
 },
 {
  "id": "8.68",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 29:29 und es sind noch 20 Sekunden zu spielen. Der Torwart WEISS 12 wehrt einen Wurf auf sein Tor ab und der Ball geht über die Torauslinie. Die Schiedsrichter entscheiden auf Abwurf für Mannschaft WEISS. WEISS 12 will den Abwurf schnell ausführen. SCHWARZ 2 läuft in den Torraum und verhindert die Ausführung des Abwurfes. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Abwurf für Mannschaft WEISS mit Anpfiff",
   "Freiwurf für Mannschaft WEISS mit Anpfiff",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Hinausstellung für SCHWARZ 2",
   "Disqualifikation ohne Bericht für SCHWARZ 2",
   "Disqualifikation mit Bericht für SCHWARZ 2"
  ],
  "correct": [
   "a",
   "d",
   "f"
  ],
  "rule": "2:8, 8:11a, Guidelines und Interpretationen (8:11a)"
 },
 {
  "id": "8.69",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 29:29, und es sind noch 20 Sekunden zu spielen. Der Torwart WEISS 12 wehrt einen Wurf auf sein Tor ab, und der Ball geht über die Torauslinie. Die Schiedsrichter entscheiden auf Abwurf für Mannschaft WEISS. WEISS 12 ist zur Ausführung des Abwurfs bereit. Bevor der Ball die Hand verlassen hat, pfeift der Zeitnehmer einen Wechselfehler von Mannschaft SCHWARZ. SCHWARZ 3 hatte die Spielfläche betreten, bevor SCHWARZ 11 sie verlassen hatte. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Abwurf für Mannschaft WEISS nach Anpfiff",
   "Freiwurf für Mannschaft WEISS am Auswechselraum von Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Hinausstellung für SCHWARZ 3",
   "Disqualifikation ohne Bericht für SCHWARZ 3"
  ],
  "correct": [
   "a",
   "d",
   "f"
  ],
  "rule": "2:8, 8:11a, Guidelines und Interpretationen (8:11a)"
 },
 {
  "id": "8.70",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 29:29, und es sind noch 20 Sekunden zu spielen. Torwart WEISS 12 wehrt einen Wurf auf sein Tor ab, und der Ball geht über die Torauslinie. Die Schiedsrichter entscheiden auf Abwurf für Mannschaft WEISS. WEISS 12 führt den Wurf aus und passt zu WEISS 9, der unmittelbar außerhalb des Torraums steht. Bevor der Ball die Torraumlinie überquert hat, ertönt ein Pfiff des Zeitnehmers wegen eines Wechselfehlers von Mannschaft SCHWARZ. SCHWARZ 3 hatte die Spielfläche betreten, bevor SCHWARZ 11 sie verlassen hatte. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Freiwurf für Mannschaft WEISS am Auswechselraum von Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Hinausstellung für SCHWARZ 3",
   "Disqualifikation ohne Bericht für SCHWARZ 3"
  ],
  "correct": [
   "a",
   "c",
   "e"
  ],
  "rule": "2:8, 8:11a, Guidelines und Interpretationen (8:11a)"
 },
 {
  "id": "8.71",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 29:29, und es sind noch 10 Sekunden zu spielen. Mannschaft WEISS ist in einem Tempogegenstoß. SCHWARZ 10 attackiert WEISS 9 in gesundheitsgefährdender Weise. Bevor WEISS 9 fällt, spielt er den Ball zu WEISS 11. WEISS 11 wirft auf das Tor, aber Torwart SCHWARZ 12 kann den Wurf abwehren. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung für SCHWARZ 10",
   "Disqualifikation ohne Bericht für SCHWARZ 10",
   "Abwurf für Mannschaft SCHWARZ",
   "Freiwurf für Mannschaft WEISS",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Time-out"
  ],
  "correct": [
   "b",
   "e",
   "f"
  ],
  "rule": "2:8, 8:5, 8:11b, 14:2, Guidelines und Interpretationen (8:11b)"
 },
 {
  "id": "8.72",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 29:29, und es sind noch 10 Sekunden zu spielen. Mannschaft WEISS ist in einem Tempogegenstoß. SCHWARZ 10 attackiert WEISS 9 in gesundheitsgefährdender Weise. Bevor WEISS 9 fällt, spielt er den Ball zu WEISS 11. WEISS 11 erzielt ein Tor. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung für SCHWARZ 10",
   "Disqualifikation ohne Bericht für SCHWARZ 10",
   "Tor für Mannschaft WEISS",
   "Freiwurf für Mannschaft WEISS",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Time-out"
  ],
  "correct": [
   "b",
   "c",
   "f"
  ],
  "rule": "2:8, 8:5, 8:11b, 14:2, Guidelines und Interpretationen (8:11b)"
 },
 {
  "id": "8.73",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Spielstand ist 29:29, und es sind noch 10 Sekunden zu spielen. Mannschaft WEISS ist in einem Tempogegenstoß. SCHWARZ 10 attackiert WEISS 9 in gesundheitsgefährdender Weise. Bevor WEISS 9 fällt, spielt er den Ball zu WEISS 11. WEISS 11 spielt den Ball zu WEISS 4. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung für SCHWARZ 10",
   "Disqualifikation ohne Bericht für SCHWARZ 10",
   "Der Schiedsrichter pfeift nach dem Pass von WEISS 11 zu WEISS 4.",
   "Freiwurf für Mannschaft WEISS",
   "7-Meter-Wurf für Mannschaft WEISS",
   "Time-out"
  ],
  "correct": [
   "b",
   "c",
   "e",
   "f"
  ],
  "rule": "2:8, 8:11b, Erläuterungen, 14:2"
 },
 {
  "id": "8.74",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS 7 befindet sich in einem Gegenstoß. Er hat eine klare Torchance und wirft ungehindert aufs Tor. Der Ball trifft Torwart SCHWARZ 12 am Kopf, der dann zu Boden fällt. Der abprallende Ball wird von WEISS 9 aufgenommen, der eine klare Torchance an der Torraumlinie von Mannschaft SCHWARZ hat. In diesem Moment unterbrechen die Schiedsrichter das Spiel, um eine medizinische Behandlung für Torwart SCHWARZ 12 zu fordern. Was ist die richtige Entscheidung?",
  "options": [
   "Hinausstellung für WEISS 7.",
   "Abwurf Mannschaft SCHWARZ.",
   "Freiwurf für Mannschaft WEISS.",
   "7-Meter-Wurf für Mannschaft WEISS.",
   "Freiwurf für Mannschaft SCHWARZ.",
   "Keine Strafe für WEISS 7.",
   "Torwart SCHWARZ 12 muss das Spielfeld verlassen und darf erst wieder eingewechselt werden, wenn seine Mannschaft 3 Angriffe abgeschlossen hat.",
   "Time-out."
  ],
  "correct": [
   "a",
   "e",
   "h"
  ],
  "rule": "2:8, 4:11, 13:1a, Erläuterung 8"
 },
 {
  "id": "8.75",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Mannschaft WEISS führt 7 Sekunden vor Spielende mit einem Tor Vorsprung. Die Mannschaft WEISS ist bereit, einen Anwurf aus der Anwurfzone auszuführen, und die Schiedsrichter pfeifen den Anwurf an. Anstatt den Ball einem Mitspieler zuzuspielen, legt WEISS 7 den Ball innerhalb der Anwurfzone auf den Boden und geht weg. Kein Mitspieler ist daran interessiert, die Anwurfzone zu betreten, um den Ball aufzuheben. Was ist die richtige Entscheidung?",
  "options": [
   "Korrektur des Anwurfs.",
   "Time-out.",
   "Die Schiedsrichter müssen 3 Sekunden nach dem Anpfiff zur Ausführung des Anwurfs warten, bevor sie einen Freiwurf für Mannschaft SCHWARZ geben.",
   "Hinausstellung für WEISS 7.",
   "Freiwurf für Mannschaft SCHWARZ"
  ],
  "correct": [
   "b",
   "d",
   "e"
  ],
  "rule": "2:8, 8:8, 13:1a"
 },
 {
  "id": "8.76",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "SCHWARZ 8 gelingt ein Durchbruch gegen die Abwehr von WEISS und hat keine Spieler zwischen sich und dem Torwart WEISS 1. Als er auf das Tor werfen will, wird er von WEISS 7 von der Seite gestoßen. Auch wenn SCHWARZ 8 teilweise die Körperkontrolle verliert, kann er hart auf das Tor werfen. Der Ball trifft den Kopf von Torwart WEISS 1, ändert die Richtung und geht ins Tor. Was ist die richtige Entscheidung?",
  "options": [
   "Tor für Mannschaft SCHWARZ",
   "Freiwurf für Mannschaft WEISS",
   "Hinausstellung für SCHWARZ 8",
   "Hinausstellung für WEISS 7",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Time-out"
  ],
  "correct": [
   "a",
   "d",
   "f"
  ],
  "rule": "2:8, 8:4, 8:8d, 13:2"
 },
 {
  "id": "8.77",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Der Kreisläufer SCHWARZ 8 erhält den Ball. Als er versucht, sich in Richtung Tor zu drehen, wird er von WEISS 7 stark festgehalten und heruntergezogen. Er erlangt jedoch wieder die volle Körperkontrolle. Ohne dass ein Spieler zwischen ihm und dem Torwart steht, springt er in den Torraum. Er wirft hart und unter voller Körperkontrolle. Der Ball trifft den Torwart WEISS 1 am Kopf. Der erste Kontakt mit dem Ball erfolgt am Kopf. Der Ball ändert seine Richtung und geht ins Tor. Was ist die richtige Entscheidung?",
  "options": [
   "Tor für Mannschaft SCHWARZ",
   "Freiwurf für Mannschaft WEISS",
   "Freiwurf für Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Hinausstellung für SCHWARZ 8",
   "Hinausstellung für WEISS 7",
   "Time-out"
  ],
  "correct": [
   "b",
   "e",
   "f",
   "g"
  ],
  "rule": "2:8, 8:4, 8:8d, 13:1a"
 },
 {
  "id": "8.78",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Außenspieler SCHWARZ 3 hat eine klare Torchance und wirft aufs Tor. Der Ball berührt/streift den Kopf von Torhüter WEISS 1, ohne die Richtung zu ändern. Der Ball geht ins Tor. Was ist die richtige Entscheidung?",
  "options": [
   "Hinausstellung für SCHWARZ 3.",
   "Progressive Bestrafung für WEISS 1.",
   "Tor.",
   "Freiwurf für Mannschaft WEISS."
  ],
  "correct": [
   "c"
  ],
  "rule": "2:8, 4:11, Erläuterung 8, 8:8d"
 },
 {
  "id": "8.79",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "Außenspieler SCHWARZ 3 hat eine klare Torchance und wirft aufs Tor. Der Ball trifft seitlich den Kopf von Torhüter WEISS 1 und ändert die Richtung. Der Kopf ist der erste Kontaktpunkt mit dem Ball. Der Ball geht ins Tor. WEISS 1 fällt zu Boden, hält sich die Hand vor das Gesicht und benötigt offensichtlich medizinische Hilfe. Was ist die richtige Entscheidung?",
  "options": [
   "Time-out.",
   "Die Schiedsrichter fordern medizinische Hilfe für WEISS 1 an und zeigen dazu erst Handzeichen 15 und dann 16.",
   "Hinausstellung für SCHWARZ 3.",
   "Progressive Bestrafung für WEISS 1.",
   "Tor.",
   "Freiwurf für Mannschaft WEISS.",
   "Nach der medizinischen Versorgung muss WEISS 1 das Spielfeld verlassen und darf erst wieder eingewechselt werden, wenn seine Mannschaft 3 Angriffe abgeschlossen hat."
  ],
  "correct": [
   "a",
   "b",
   "c",
   "f"
  ],
  "rule": "2:8, 4:11, Erläuterung 8, 13:1a"
 },
 {
  "id": "8.80",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "10 Sekunden vor Ende des Spiels Mannschaft SCHWARZ ist im Angriff. Während der Ball im Spiel ist, trifft SCHWARZ 10 absichtlich WEISS 7 mit dem Ellbogen im Gesicht. Spieler WEISS 7 fällt zu Boden und bleibt verletzt liegen. Was ist die richtige Entscheidung?",
  "options": [
   "Disqualifikation ohne schriftlichen Bericht für SCHWARZE 10",
   "Disqualifikation mit schriftlichem Bericht für SCHWARZE 10",
   "Time-out",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS fortgesetzt.",
   "Das Spiel wird mit 7-Meter-Wurf für Mannschaft WEISS fortgesetzt.",
   "Die Schiedsrichter können zwei Personen von Mannschaft WEISS die Erlaubnis erteilen, das Spielfeld zu betreten, um WEISS 7 zu helfen.",
   "Nachdem WEISS 7 auf dem Spielfeld medizinisch versorgt wurde, muss WEISS 7 das Spielfeld verlassen und darf erst nach dem dritten Angriff seiner Mannschaft wieder eingewechselt werden."
  ],
  "correct": [
   "b",
   "c",
   "d",
   "f"
  ],
  "rule": "2:8, 4:11, 8:6, 13:1a, Erläuterung 8"
 },
 {
  "id": "8.81",
  "section": "8",
  "sectionTitle": "Persönliche Strafen",
  "question": "WEISS spiel mit leerem Tor. SCHWARZ 7 fängt einen Pass ab und wirft auf das leere Tor. Spieler WEISS 4 fängt den Ball, während er knapp außerhalb des Torraums läuft. Er ist nicht in der Lage, zu stoppen und betritt den Torraum mit beiden Füßen und dem Ball in den Händen. Was ist die richtige Entscheidung?",
  "options": [
   "Freiwurf für Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Progressive Bestrafung für WEISS 4",
   "Hinausstellung für WEISS 4",
   "Keine Strafe",
   "Time-out"
  ],
  "correct": [
   "a",
   "e"
  ],
  "rule": "8:8i, 14:1"
 },
 {
  "id": "9.1",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "WEISS 7 steht im Abwehrzentrum. SCHWARZ 3 versucht, einen Bodenpass zum Außenspieler zu spielen. WEISS 7 versucht, den Ball zu stoppen, indem er seinen Fuß deutlich anhebt, Dabei geht der Ball vom Fuß ins Tor von Team WEISS. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Tor für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Hinausstellung von WEISS 7"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "7:8, 9:1, 13:2, 16:1b"
 },
 {
  "id": "9.2",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "Nach einem Wurf auf das Tor von Team SCHWARZ prallt der Ball vom Torpfosten ab, trifft den Fuß des im Spielfeld stehenden SCHWARZ 3 und springt von dort ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Tor für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Abwurf für Team SCHWARZ"
  ],
  "correct": [
   "b"
  ],
  "rule": "7:8, 9:1, 13:2"
 },
 {
  "id": "9.3",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "Von Torwart WEISS 1 abgewehrt prallt der Ball vom Rücken von WEISS 3, der zwei Meter im Torraum steht, ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Progressive Bestrafung von WEISS 3",
   "Tor für Team SCHWARZ"
  ],
  "correct": [
   "d"
  ],
  "rule": "6:3b, 9:1, 13:2"
 },
 {
  "id": "9.4",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "Torwart WEISS 1 hält den Ball, der die Torlinie zu drei Vierteln passiert hat, vier Sekunden auf der Torlinie fest. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Abwurf für Team WEISS"
  ],
  "correct": [
   "c"
  ],
  "rule": "6:4, 9:1, 12:1"
 },
 {
  "id": "9.5",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "WEISS 3 betritt seinen Torraum und versucht, einen Wurf mit dem Fuß abzuwehren. Der Ball prallt von seinem Fuß ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Tor für Team SCHWARZ",
   "Abwurf für Team WEISS"
  ],
  "correct": [
   "c"
  ],
  "rule": "9:1, 14:2"
 },
 {
  "id": "9.6",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "WEISS 11 wirft einen Heber über den gegnerischen Torwart, der weit vor seinem Tor steht. Bevor der Ball die Torlinie überqueren kann, wird er vom Manager von Team SCHWARZ weggestoßen, der in der ersten Zuschauerreihe hinter dem Tor sitzt. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team WEISS",
   "Tor für Team WEISS",
   "Disqualifikation des Managers von Team SCHWARZ mit schriftlichem Bericht (rote und blaue Karte)",
   "Schriftlicher Bericht"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "9:1, Kommentar"
 },
 {
  "id": "9.7",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "Ein im Spielprotokoll nicht eingetragener Offizieller von Heim-Team WEISS fängt zwei Sekunden vor Spielschluss beim Stand von 25:25 den auf das leere Tor zufliegenden Ball ab und verhindert so einen Torerfolg von Team SCHWARZ. Unmittelbar danach ertönt das automatische Schlusssignal. Wie ist zu entscheiden?",
  "options": [
   "Endstand 25:25",
   "7-Meter-Wurf für Team SCHWARZ",
   "Endstand 25:26",
   "Disqualifikation des Offiziellen mit schriftlichem Bericht (rote und blaue Karte)",
   "Schriftlicher Bericht"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "9:1, Kommentar"
 },
 {
  "id": "9.8",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "Es kommt zum Tor durch 7-Meter-Wurf von SCHWARZ 9. Team WEISS führt nach Anpfiff der Schiedsrichter einen schnellen Anwurf aus, der nach zwei Pässen zu einem Tor durch WEISS 4 führt. In diesem Augenblick pfeift der Zeitnehmer und meldet, dass SCHWARZ 9, der inzwischen wieder auf der Auswechselbank sitzt, zum Zeitpunkt des 7-Meter-Wurfs noch 20 Sekunden seiner ersten Hinausstellung auf der Bank hätte verbringen müssen. Wie ist zu entscheiden?",
  "options": [
   "Der 7-Meter-Wurf für Team SCHWARZ ist zu wiederholen.",
   "SCHWARZ 9 erhält seine zweite Hinausstellung.",
   "Beide Tore gelten.",
   "Beide Tore sind zu annullieren."
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "4:6, 9:1, 9:2, 16:3a"
 },
 {
  "id": "9.9",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "WEISS 5 führt kurz vor Spielende beim Stand von 22:21 für seine Mannschaft einen Anwurf regelgerecht nach Anpfiff aus, indem er den Ball Richtung eigenes Tor wirft. Torwart WEISS 1 berührt den Ball nicht, da er sich im eigenen Torraum befindet. Der Ball geht ins Tor. Die Mitspieler von WEISS 5 hatten nach dem Anpfiff, aber bevor der Ball gespielt wurde, sprintend die Mittellinie in Richtung gegnerisches Tor weit überschritten. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Wiederholung des Anwurfs mit Anpfiff",
   "Persönliche Strafe gegen WEISS 5",
   "Time-out"
  ],
  "correct": [
   "a"
  ],
  "rule": "9:1, 15:2"
 },
 {
  "id": "9.10",
  "section": "9",
  "sectionTitle": "Sonstige Spielsituationen",
  "question": "WEISS 9 versucht, einen Hüftwurf mit dem Bein abzuwehren, indem er den Fuß deutlich anhebt, der Ball geht aber von seinem Fuß ins Tor. Es war der zweite Versuch, einen Wurf mit dem Fuß abzuwehren. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Hinausstellung gegen WEISS 9"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "8:7e, 9:1, 16:1b"
 },
 {
  "id": "10.1",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Team WEISS gewinnt das Losen und entscheidet sich für den Anwurf. Team SCHWARZ verlangt Seitenwechsel. Wie ist zu entscheiden?",
  "options": [
   "Die Seiten werden gewechselt.",
   "Die Seiten werden gewechselt, wenn Team WEISS einverstanden ist.",
   "Das Losen wird wiederholt.",
   "Die Seiten werden nicht gewechselt."
  ],
  "correct": [
   "a"
  ],
  "rule": "10:1"
 },
 {
  "id": "10.2",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Team WEISS gewinnt das Losen. Sie verlangt, dass die Seiten gewechselt werden. Team SCHWARZ vertritt die Ansicht, dass Team WEISS anwerfen müsse. Wie ist zu entscheiden?",
  "options": [
   "Anwurf für Team WEISS",
   "Seitenwechsel und Anwurf für Team SCHWARZ",
   "Wiederholung des Losens",
   "Die Mannschaftsvertreter müssen sich einigen."
  ],
  "correct": [
   "b"
  ],
  "rule": "10:1"
 },
 {
  "id": "10.3",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Wo darf der Anwurf ausgeführt werden?",
  "options": [
   "Irgendwo auf der Mittellinie",
   "Genau in der in der Mitte der Anwurfzone, beide Füße müssen sich dazu in der Anwurfzone befinden",
   "Von der Anwurfzone aus, bei der Ausführung muss sich der Spieler mit Ball und ganzem Körper inkl. Füße/ Hände in der Anwurfzone befinden."
  ],
  "correct": [
   "c"
  ],
  "rule": "10:3a"
 },
 {
  "id": "10.4",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Kurz vor Spielende, beim Stand von 15:15, erzielt der Gastverein das 15:16. Der Heimverein will einen schnellen Anwurf ausführen. Der Ausführende steht mit einem Fuß innerhalb der Anwurfzone, mit dem anderen Fuß außerhalb der Anwurfzone in der gegnerischen Hälfte. Wie ist zu entscheiden?",
  "options": [
   "Korrektur, Anpfiff zum Anwurf",
   "Korrekte Position, Anpfiff zum Anwurf",
   "Time-out, Korrektur, Anpfiff zum Anwurf"
  ],
  "correct": [
   "a"
  ],
  "rule": "10:3a, 15:1, 15:6"
 },
 {
  "id": "10.5",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Team WEISS hat Anwurf. Torwart SCHWARZ 1 befindet sich noch nicht in seinem Torraum. Trotzdem pfeift der Feldschiedsrichter das Spiel an, und WEISS 9 wirft direkt ein Tor. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS an der Mittellinie",
   "Wiederholung des Anwurfs",
   "Tor für Team WEISS",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "c"
  ],
  "rule": "9:1, 10:4, 15:2"
 },
 {
  "id": "10.6",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Welche der folgenden Aussagen zum Anwurf sind richtig?",
  "options": [
   "Der Anwurf ist innerhalb von drei Sekunden nach dem Anpfiff von der Anwurfzone aus in Richtung der gegnerischen Hälfte auszuführen.",
   "Der Anwurf kann unmittelbar zu einem Tor für die anwerfende Mannschaft führen.",
   "Beim Anwurf sind nicht korrekte Positionen von Spielern der verteidigenden Mannschaft zu korrigieren.",
   "Prellt der Werfer nach dem Anpfiff zum Anwurf den Ball, ist auf Freiwurf für den Gegner zu entscheiden.",
   "Die Mitspieler des anwerfenden Spielers dürfen die Mittellinie nicht vor dem Anpfiff überschreiten, es sei denn, sie befinden sich innerhalb der Anwurfzone."
  ],
  "correct": [
   "b",
   "d",
   "e"
  ],
  "rule": "10:3a, 15:2, 15:3, 15:4"
 },
 {
  "id": "10.7",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Bereit zum Anwurf befindet sich SCHWARZ 6 mit Ball vollständig innerhalb der Anwurfzone. Der Schiedsrichter pfeift an und der Werfer prellt den Ball. Zum Zeitpunkt des Anpfiffs befinden sich noch Spieler von Team WEISS in der gegnerischen Spielfeldhälfte. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Freiwurf für Team WEISS",
   "Korrektur der Positionen von Team WEISS und Wiederholung des Anwurfs mit Anpfiff",
   "Korrektur der Position von SCHWARZ 6 und Wiederholung des Anwurfs mit Anpfiff"
  ],
  "correct": [
   "b"
  ],
  "rule": "10:3a, 15:7"
 },
 {
  "id": "10.8",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Team WEISS hat ein Tor geworfen. Team SCHWARZ will einen schnellen Anwurf ausführen. SCHWARZ 9 steht in korrekter Position in der Anwurfzone. Nach dem Anpfiff der Schiedsrichter macht SCHWARZ 9 mit dem Ball 6 Schritte in der Anwurfzone. Innerhalb von 3 Sekunden nach dem Anpfiff des Anwurfs wirft SCHWARZ 9 den Ball in das leere Tor von Team WEISS. Was ist die richtige Entscheidung?",
  "options": [
   "Tor für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "Korrektur und erneuter Anwurf nach Pfiff der Schiedsrichter"
  ],
  "correct": [
   "a"
  ],
  "rule": "10:3b, 15:5b"
 },
 {
  "id": "10.9",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Mannschaft WEISS hat ein Tor erzielt. Mannschaft SCHWARZ will einen schnellen Anwurf ausführen. SCHWARZ 9 erhält den Ball. Er hat den Ball und einen Fuß komplett in der Anwurfzone. Der andere Fuß befindet sich außerhalb der Anwurfzone in der eigenen Hälfte. Die Schiedsrichter pfeifen zur Ausführung des Anwurfes an. Bevor SCHWARZ 9 den anderen Fuß in den Abwurfraum bewegt, wirft er den Ball ins leere Tor von WEISS. Was ist die richtige Entscheidung?",
  "options": [
   "Tor für Mannschaft SCHWARZ",
   "Freiwurf für Mannschaft WEISS",
   "Korrektur, erneut Anwurf für Mannschaft SCHWARZ nach Anpfiff des Schiedsrichters",
   "Der Wurf wurde korrekt ausgeführt, da die Schiedsrichter die Position des Werfers mit dem Anpfiff zur Ausführung freigegeben haben.",
   "Die Schiedsrichter hätten warten müssen, bis sich der Werfer vollständig mit dem Ball in der Anwurfzone befindet, bevor sie den Anpfiff zur Ausführung des Anwurfs geben."
  ],
  "correct": [
   "a",
   "d",
   "e"
  ],
  "rule": "10:3b, 15:5"
 },
 {
  "id": "10.10",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Mannschaft SCHWARZ will einen schnellen Anwurf aus der Anwurfzone ausführen. SCHWARZ 8 befindet sich mit Ball vollständig innerhalb der Anwurfzone. Gleichzeitig befindet sich WEISS 7 ebenfalls in der Anwurfzone und läuft in Richtung seines eigenen Tores. Obwohl kein Mitspieler von Mannschaft SCHWARZ in Richtung von WEISS 7 läuft, wirft SCHWARZ 8 nach Anpfiff den Ball in den Rücken von WEISS 7. WEISS 7 befindet sich noch innerhalb der Anwurfzone, als der Ball ihn trifft. Was ist die richtige Entscheidung?",
  "options": [
   "Freiwurf für die Mannschaft WEISS",
   "Freiwurf für die Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Progressive Bestrafung für WEISS 7",
   "Progressive Bestrafung für SCHWARZ 8",
   "Direkte 2-Minuten-Hinausstellung für SCHWARZ 8"
  ],
  "correct": [
   "a",
   "f"
  ],
  "rule": "8:8, 10:3b, 13:1a"
 },
 {
  "id": "10.11",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Welche der folgenden Aussagen zum Anwurf aus der Anwurfzone sind falsch?",
  "options": [
   "Der Anpfiff zur Ausführung des Anwurfs kann gegeben werden, wenn sich der Werfer mit einem Körperteil innerhalb der Anwurfzone befindet.",
   "Es gibt keine Einschränkung hinsichtlich der Positionen der Mitspieler des Werfers bei der Ausführung des Anwurfs.",
   "Dem Werfer ist es erlaubt, während der Ausführung des Anwurfs die Anwurfzone zu verlassen.",
   "Ein Spieler der abwehrenden Mannschaft darf den Ball nach der Ausführung abfangen, auch wenn der Ball sich noch innerhalb der Anwurfzone befindet.",
   "Dem Werfer ist es nicht erlaubt, den Ball nach dem Anpfiff zur Ausführung zu prellen."
  ],
  "correct": [
   "a",
   "b",
   "c",
   "d"
  ],
  "rule": "10.3b"
 },
 {
  "id": "10.12",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Mannschaft WEISS spielt mit 7 Feldspielern und wirft ein Tor. Mannschaft SCHWARZ will einen schnellen Anwurf ausführen. SCHWARZ 6 befindet sich mit Ball vollständig innerhalb der Anwurfzone. Der Schiedsrichter pfeift die Ausführung an. WEISS 8 betritt eindeutig die Anwurfzone und versucht, mit aktiven Armen den Ball zu blockieren und stört die Ausführung. Trotzdem kann SCHWARZ 6, der sich inzwischen mit dem ganzen Körper und dem Ball innerhalb der Anwurfzone befindet, den Anwurf als Wurf auf das leere Tor ausführen. Der Ball überquert die Torauslinie. Was ist die richtige Entscheidung?",
  "options": [
   "Abwurf für Mannschaft WEISS.",
   "Erneut Anwurf nach Anpfiff.",
   "Freiwurf für Mannschaft SCHWARZ.",
   "7-Meter-Wurf für Mannschaft SCHWARZ.",
   "Time-out.",
   "Progressive Bestrafung für WEISS 8.",
   "Direkte 2-Minuten-Hinausstellung für WEISS 8.",
   "Disqualifikation für WEISS 8 (Rote Karte)."
  ],
  "correct": [
   "d",
   "e",
   "g"
  ],
  "rule": "2:8, 8:8g, 10:3b, 14:1a, Erläuterung 6"
 },
 {
  "id": "10.13",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Welche der folgenden Aussagen zum Anwurf aus der Anwurfzone sind richtig?",
  "options": [
   "Der Anwurf muss innerhalb von 3 Sekunden nach dem Anpfiff ausgeführt werden.",
   "Ein Anwurf kann zu einem Tor für die ausführende Mannschaft führen.",
   "Im Zusammenhang mit einem Anwurf müssen falsche Positionen von Abwehrspielern korrigiert werden.",
   "Wenn der Werfer nach dem Pfiff zur Wurfausführung springt, ist die korrekte Entscheidung Freiwurf für die gegnerische Mannschaft.",
   "Mitspieler des Werfers dürfen die Mittellinie zu keinem Zeitpunkt vor dem Anpfiff zur Ausführung des Wurfes überqueren."
  ],
  "correct": [
   "a",
   "b",
   "d"
  ],
  "rule": "10:3b, 15:2"
 },
 {
  "id": "10.14",
  "section": "10",
  "sectionTitle": "Anwurf",
  "question": "Wann kann ein Schiedsrichter zur Ausführung des Anwurfs anpfeifen?",
  "options": [
   "Wenn sich der Ball und Werfer vollständig innerhalb des Anwurfzone befinden.",
   "Wenn sich der Werfer mit mindestens einem Fuß und dem Ball innerhalb der Anwurfzone befindet und mit dem anderen Fuß außerhalb der Anwurfzone in.",
   "Wenn der Werfer mit mindestens einem Fuß und dem Ball innerhalb der Anwurfzone steht und der andere Fuß außerhalb der Anwurfzone in der gegnerischen Spielfeldhälfte ist.",
   "Wenn sich der Ball und Werfer vollständig innerhalb der Anwurfzone befinden, aber Mitspieler des Werfers innerhalb der Anwurfzone in der gegnerischen Spielfeldhälfte sind."
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "10:3b"
 },
 {
  "id": "11.1",
  "section": "11",
  "sectionTitle": "Einwurf",
  "question": "WEISS 3 führt einen Einwurf aus. Er steht dabei zwei Meter außerhalb der Seitenlinie. Wie ist zu entscheiden?",
  "options": [
   "Keine Entscheidung erforderlich, da kein Regelverstoß",
   "Freiwurf für Team SCHWARZ",
   "Wiederholung des Einwurfs ohne Anpfiff",
   "Wiederholung des Einwurfs mit Anpfiff"
  ],
  "correct": [
   "d"
  ],
  "rule": "11:4, 15:1, 15:5"
 },
 {
  "id": "11.2",
  "section": "11",
  "sectionTitle": "Einwurf",
  "question": "SCHWARZ 4 steht mit einem Fuß auf der Seitenlinie, mit dem anderen im Spielfeld und trifft mit seinem Einwurf direkt ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team SCHWARZ",
   "Wiederholung des Einwurfs für Team SCHWARZ mit Anpfiff",
   "Freiwurf für Team WEISS",
   "Abwurf für Team WEISS"
  ],
  "correct": [
   "a"
  ],
  "rule": "11:4, 15:2"
 },
 {
  "id": "11.3",
  "section": "11",
  "sectionTitle": "Einwurf",
  "question": "WEISS 6 führt, mit einem Fuß im und mit dem anderen außerhalb des Spielfelds stehend, einen Einwurf aus und trifft direkt ins Tor von Team SCHWARZ. Wie ist zu entscheiden?",
  "options": [
   "Erneuter Einwurf für Team WEISS nach Anpfiff",
   "Freiwurf für Team SCHWARZ",
   "Tor für Team WEISS",
   "Abwurf für Team SCHWARZ"
  ],
  "correct": [
   "a"
  ],
  "rule": "11:4, 15:1, 15:5"
 },
 {
  "id": "11.4",
  "section": "11",
  "sectionTitle": "Einwurf",
  "question": "Es erfolgt ein Wurf auf das Tor von Team SCHWARZ. Der Ball prallt von der Latte gegen ein Sportgerät an der Hallendecke über dem Torraum von Team SCHWARZ. Von dort fällt er direkt in die fangbereiten Arme des Torwarts. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team SCHWARZ",
   "Einwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ mit Anpfiff",
   "Einwurf für Team SCHWARZ mit Anpfiff",
   "Time-out ist obligatorisch"
  ],
  "correct": [
   "b"
  ],
  "rule": "11:1"
 },
 {
  "id": "11.5",
  "section": "11",
  "sectionTitle": "Einwurf",
  "question": "Wann darf die abwehrende Mannschaft den Abstand von drei Metern bei Würfen nach einer Spielunterbrechung unterschreiten?",
  "options": [
   "Sobald der Schiedsrichter den Wurf angepfiffen hat",
   "Wenn der Ball die Hand des Werfers verlassen hat, der einen Freiwurf ausführt",
   "Wenn die Abwehrspieler beim Freiwurf oder Einwurf an der eigenen Torraumlinie stehen",
   "Bei der Ausführung eines Abwurfs oder eines Anwurfs, wenn sich der Abwehrspieler außerhalb des Torraums oder der Anwurfzone befindet"
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "11:5, 13:8, 15:4"
 },
 {
  "id": "11.6",
  "section": "11",
  "sectionTitle": "Einwurf",
  "question": "WEISS 5 verpasst ein Zuspiel. Er läuft dem Ball nach und kann ihn vor dem Überqueren der Seitenlinie stoppen. Er selbst gelangt anschließend über die Seitenlinie, ohne dabei den Ball noch zu berühren. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Freiwurf für Team SCHWARZ",
   "Einwurf für Team SCHWARZ"
  ],
  "correct": [
   "a"
  ],
  "rule": "11:1"
 },
 {
  "id": "12.1",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Während der Ausführung eines Abwurfs berührt der Torwart von Team WEISS seine Torraumlinie mit einem Fuß. Wie ist zu entscheiden?",
  "options": [
   "Wiederholung des Abwurfs mit Anpfiff",
   "Freiwurf für Team SCHWARZ",
   "Weiterspielen lassen"
  ],
  "correct": [
   "c"
  ],
  "rule": "1:3, 12:2"
 },
 {
  "id": "12.2",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Nach dem Anpfiff eines 7-Meter-Wurfs tritt der Torwart von Team WEISS mit einem Fuß auf die Torwartgrenzlinie. Der Ball geht über das Tor. Wie ist zu entscheiden?",
  "options": [
   "Wiederholung mit Anpfiff",
   "Kein Tor, daher Spielfortsetzung mit Abwurf",
   "Korrekte Position des Torwarts"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "1:3, 12:1, 14:9"
 },
 {
  "id": "12.3",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Der Torwart von Team WEISS wehrt ab und wirft sich nach dem rollenden Ball. SCHWARZ 7 steht unbedrängt bereit, den Ball aufzunehmen. Der Torwart von Team WEISS schlägt den Ball im letzten Moment mit der Hand über die eigene Torauslinie. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Einwurf für Team SCHWARZ",
   "Abwurf für Team WEISS",
   "Freiwurf für Team WEISS"
  ],
  "correct": [
   "c"
  ],
  "rule": "12:1"
 },
 {
  "id": "12.4",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Torwart WEISS 12 fällt der Ball beim Abwurfversuch aus der Hand direkt auf den Fuß. Von dort rollt er über die Torraumlinie ins Spielfeld. WEISS 12 läuft dem Ball nach, nimmt ihn auf und geht mit dem Ball in der Hand zurück in seinen Torraum, um erneut abzuwerfen. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "Time-out",
   "Korrektur, Abwurf mit Anpfiff"
  ],
  "correct": [
   "d"
  ],
  "rule": "12:2, 15:5b"
 },
 {
  "id": "12.5",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Wann gilt ein Abwurf als ausgeführt, d. h. wann darf der Ball frühestens von einem Feldspieler gespielt werden?",
  "options": [
   "Während der Ball sich noch über dem Torraum befindet",
   "Wenn der Ball die Torraumlinie in Richtung Spielfeld passiert hat",
   "Wenn der Ball die Hand des Torwarts verlassen hat",
   "Wenn ein Mitspieler des Torwarts den Ball berührt hat"
  ],
  "correct": [
   "b"
  ],
  "rule": "12:2"
 },
 {
  "id": "12.6",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Torwart WEISS 12 will abwerfen. SCHWARZ 10 versucht, an der Torraumlinie regelgerecht in Ballbesitz zu gelangen. Dies gelingt ihm und er kommt zum Torerfolg. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Tor für Team SCHWARZ",
   "Abwurf für Team WEISS",
   "Progressive Bestrafung von SCHWARZ 10"
  ],
  "correct": [
   "b"
  ],
  "rule": "12:2"
 },
 {
  "id": "12.7",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Der Torwart von Team WEISS wehrt einen Wurf über die Torauslinie ab. Welche Handzeichen zeigt der Torschiedsrichter?",
  "options": [
   "Nr. 8 (Abwurf)",
   "Nr. 9 (Freiwurf-Richtung)",
   "Erst Nr. 9, dann Nr. 8",
   "Erst Nr. 8, dann Nr. 9"
  ],
  "correct": [
   "a"
  ],
  "rule": "12:1, Handzeichen"
 },
 {
  "id": "12.8",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Torwart WEISS 1 fällt der Ball beim Abwurf aus der Hand. Der Ball springt in Richtung Spielfeld, wo SCHWARZ 6 ihn erwartet. WEISS 2 hechtet in den Torraum und stößt den in der Luft befindlichen Ball über die Seitenlinie. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS nach Anpfiff",
   "Einwurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ"
  ],
  "correct": [
   "a"
  ],
  "rule": "12:2"
 },
 {
  "id": "12.9",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Welche der folgenden Aussagen zum Abwurf sind richtig?",
  "options": [
   "Der Abwurf gilt als ausgeführt, wenn der Ball die Hand des Torwarts verlassen hat.",
   "Beim Abwurf müssen die Gegenspieler den 3-Meter-Abstand einhalten.",
   "Der Abwurf gilt als ausgeführt, wenn der Ball die Hand des Torwarts verlassen und die Torraumlinie passiert hat.",
   "Beim Abwurf dürfen sich die Gegenspieler direkt an der Torraumlinie aufstellen."
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "12:2"
 },
 {
  "id": "12.10",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Torwart SCHWARZ 1 will einen Abwurf ausführen. Da Team SCHWARZ knapp im Rückstand ist, hat er es sehr eilig. Deshalb rutscht ihm der Ball aus der Hand und gelangt zu seinem noch im Torraum befindlichen Mitspieler SCHWARZ 6, der den Ball mit dem Fuß zu seinem Torwart zurückspielt. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team SCHWARZ nach Anpfiff",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS"
  ],
  "correct": [
   "a"
  ],
  "rule": "12:2"
 },
 {
  "id": "12.11",
  "section": "12",
  "sectionTitle": "Abwurf",
  "question": "Welche der folgenden Aussagen zum Abwurf sind richtig?",
  "options": [
   "Die Spieler der gegnerischen Mannschaft müssen sich außerhalb der Freiwurflinie befinden, bis der Ball im Spiel ist.",
   "Die Spieler der gegnerischen Mannschaft müssen sich außerhalb der Torraumlinie und drei Meter von der Stelle entfernt befinden, an welcher der Torwart den Abwurf ausführt.",
   "Den Spielern der gegnerischen Mannschaft ist es erlaubt, den Ball zu berühren, bevor dieser die Torraumlinie der abwerfenden Mannschaft überquert.",
   "Der Torwart kann beim Abwurf kein Eigentor verursachen.",
   "Der Torwart kann mit dem Abwurf nicht direkt ein Tor erzielen.",
   "Der Torwart darf bei der Ausführung des Abwurfs die Torraumlinie nicht betreten."
  ],
  "correct": [
   "b"
  ],
  "rule": "9:1, 12:2, 15:2"
 },
 {
  "id": "13.1",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Es kommt zum Freiwurf für Team WEISS. Bevor WEISS 5 den Ball aufnehmen kann, nimmt SCHWARZ 6 den Ball auf und läuft mit ihm unter dem Arm in Richtung eigenes Tor. Nach einigen Schritten rollt er den Ball WEISS 5 zu. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von SCHWARZ 6",
   "Freiwurf für Team WEISS mit Anpfiff",
   "Verwarnung von SCHWARZ 6",
   "Weiterspielen lassen",
   "Time-out"
  ],
  "correct": [
   "a",
   "b",
   "e"
  ],
  "rule": "8:8b, 13:5, 15:5b, 16:3f"
 },
 {
  "id": "13.2",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "SCHWARZ 7 befindet sich in Ballbesitz und will einen Gegenstoß einleiten, wird aber von WEISS 17 festgehalten. Der Schiedsrichter will gerade pfeifen, als er auf Vorteil erkennt, denn SCHWARZ 8 hat den Ball noch bekommen und wirft auf das Tor. Torwart WEISS 12 hält und will einen Gegenstoß einleiten. Gegen beide Mannschaften wurden bereits je drei Verwarnungen ausgesprochen. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Hinausstellung von WEISS 17",
   "Abwurf für Team WEISS",
   "Time-out",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "2:8a, 8:3, 13:2, 16:3b"
 },
 {
  "id": "13.3",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Team WEISS erhält einen Freiwurf, als SCHWARZ 6 im Ballbesitz ist. SCHWARZ 6 entfernt sich vier Meter von der Stelle, an der Team WEISS den Freiwurf ausführen müsste. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung von SCHWARZ 6",
   "Hinausstellung von SCHWARZ 6",
   "Disqualifikation von SCHWARZ 6 (rote Karte)",
   "Freiwurf für Team WEISS dort, wo der zum Freiwurf führende Fehler begangen wurde",
   "Freiwurf für Team WEISS dort, wo sich der Ball befindet"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "8:8b, 13:5, 13:6 Kommentar, 16:3f"
 },
 {
  "id": "13.4",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Nach einer Freiwurfentscheidung gegen WEISS 4 nimmt dieser den Ball, durchquert den Torraum und legt ihn hin. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von WEISS 4",
   "Verwarnung von WEISS 4",
   "7-Meter-Wurf für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "8:8b, 13:5, 16:3f"
 },
 {
  "id": "13.5",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "WEISS 5 ist in Ballbesitz, als Offizieller B von Team WEISS lautstark gegen die Schiedsrichter protestiert. Die Schiedsrichter pfeifen, und die Zeit wird angehalten. Die Schiedsrichter verwarnen den Offiziellen. Richtige Spielfortsetzung?",
  "options": [
   "Freiwurf für Team SCHWARZ mit Anpfiff in der Nähe des gegnerischen Auswechselraums",
   "Freiwurf für Team WEISS mit Anpfiff in der Nähe ihres Auswechselraums",
   "Freiwurf für Team WEISS mit Anpfiff dort, wo sich der Ball bei Spielunterbrechung befand",
   "Einwurf für Team SCHWARZ in der Nähe des gegnerischen Auswechselraums"
  ],
  "correct": [
   "a"
  ],
  "rule": "8:7a, 13:1a, 13:6, 16:1b"
 },
 {
  "id": "13.6",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Das Spiel wird vom Feldschiedsrichter ohne Regelwidrigkeit einer Mannschaft unterbrochen (kein Time-out). SCHWARZ 13 hat kurz vor dem unterbrechenden Pfiff den Ball in Richtung Tor von Team WEISS geworfen. Der Ball ist noch unterwegs und landet nach dem Pfiff unhaltbar im Tor. Richtige Spielfortsetzung?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team SCHWARZ",
   "Tor für Team SCHWARZ"
  ],
  "correct": [
   "a"
  ],
  "rule": "13:4a"
 },
 {
  "id": "13.7",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "WEISS 7 läuft einen Gegenstoß. Ein Spieler von SCHWARZ befindet sich zwischen ihm und dem Torwart, als WEISS 7 auf das Tor wirft und den Torwart SCHWARZ 12 am Kopf trifft. SCHWARZ 12 bricht zusammen. Der Ball prallt zu WEISS 9 zurück, der allein an der Torraumlinie steht. WEISS 9 wirft den Ball in Richtung des leeren Tores. Kurz bevor der Ball die Torlinie überquert, pfeift der Schiedsrichter, um das Spiel zu unterbrechen. Torwart SCHWARZ 12 muss auf der Spielfläche behandelt werden. Wie ist zu entscheiden?",
  "options": [
   "Tor für Mannschaft WEISS",
   "7-m-Wurf für WEISS",
   "Freiwurf für Team WEISS mit Anpfiff",
   "Time-out",
   "SCHWARZ 12 muss die Spielfläche verlassen und darf diese erst wieder nach dem dritten Angriff seiner Mannschaft betreten."
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "4:11, 8:8d, 13:4b, Erläuterung 2 und 8"
 },
 {
  "id": "13.8",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Team SCHWARZ erhält einen Freiwurf, während WEISS 5 noch in Ballbesitz ist. WEISS 5 bewegt sich in Richtung Schiedsrichter und überreicht diesem höflich den Ball. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von WEISS 5 und Freiwurf für Team SCHWARZ dort wo sich der Ball befindet",
   "Verwarnung von WEISS 5 und Freiwurf für Team SCHWARZ dort, wo sich der Ball befindet",
   "Hinausstellung von WEISS 5 und Freiwurf für Team SCHWARZ dort, wo auf Freiwurf erkannt wurde",
   "Verwarnung von WEISS 5 und Freiwurf für Team SCHWARZ dort, wo auf Freiwurf erkannt wurde"
  ],
  "correct": [
   "c"
  ],
  "rule": "8:8b, 13:5, 13:6 Kommentar, 16:3f"
 },
 {
  "id": "13.9",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Team WEISS begeht einen Wechselfehler, nachdem der Schiedsrichter Team WEISS gerade einen 7-Meter-Wurf zugesprochen hat. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team WEISS",
   "Hinausstellung gegen Team WEISS",
   "Verwarnung des Mannschaftsverantwortlichen von Team WEISS"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "4:5, 13:3, 16:3a"
 },
 {
  "id": "13.10",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Welche der folgenden Aussagen zum Ausführungsort eines Freiwurfs sind richtig?",
  "options": [
   "Wird der Ball nach einer Freiwurfentscheidung nicht sofort niedergelegt, darf der Gegner den Wurf dort ausführen, wo sich der Ball befindet.",
   "Nach einem Wechselfehler darf der Freiwurf statt am Auswechselraum am Ballort ausgeführt werden, wenn dies für die ausführende Mannschaft von Vorteil ist.",
   "Bei passivem Spiel wird der Freiwurf immer dort ausgeführt, wo sich der Ball zum Zeitpunkt des Pfiffs befand.",
   "Bei einem Freiwurf an der Mittellinie kann noch ein bis zu 1,50 Meter entfernter Ausführungsort des Freiwurfs toleriert werden."
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "7:11, 13:6, 13:6 Kommentar"
 },
 {
  "id": "13.11",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "SCHWARZ 11 ist in Ballbesitz und versucht, Abwehrspieler WEISS 2 zu umspielen. Aufgrund eines Pfiffs aus dem Zuschauerbereich bricht WEISS 2 die Verteidigung ab. SCHWARZ 11 kommt frei zum Torwurf. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team SCHWARZ",
   "Time-out, Rücksprache mit Zeitnehmer",
   "Freiwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "13:4a"
 },
 {
  "id": "13.12",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Team WEISS ist an der Freiwurflinie von Team SCHWARZ in Ballbesitz. Offizieller A von Team SCHWARZ reklamiert so stark gegen eine Schiedsrichterentscheidung, dass es zu einer Spielunterbrechung kommt. Wie ist zu entscheiden?",
  "options": [
   "Progressive Bestrafung des Offiziellen A von Team SCHWARZ",
   "Freiwurf für Team WEISS am Auswechselraum von Team SCHWARZ",
   "Freiwurf für Team WEISS an der Freiwurflinie von Team SCHWARZ"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "8:7, 13:6, Auswechselraum Reglement Nr. 5, Nr. 6"
 },
 {
  "id": "13.13",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "SCHWARZ 6 wird verwarnt. Beim Anpfiff zum folgenden Freiwurf für Team WEISS übersieht der Feldschiedsrichter WEISS 11, der sich zwischen Freiwurf- und Torraumlinie befindet. WEISS 11 erhält den Ball und hat eine klare Torchance. Der Torschiedsrichter hat die Situation erkannt. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Wiederholung des Freiwurfs nach Korrektur und Anpfiff",
   "Torschiedsrichter entscheidet auf Freiwurf für Team SCHWARZ",
   "Torschiedsrichter verwarnt WEISS 11",
   "Time-out"
  ],
  "correct": [
   "b"
  ],
  "rule": "13:7, 15:1, 15:5b"
 },
 {
  "id": "13.14",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Mannschaft WEISS ist in Ballbesitz. Mannschaft SCHWARZ hat ihre Abwehrpositionen eingenommen. WEISS 8 läuft nahe der Seitenlinie. WEISS 4 passt den Ball in die Richtung von WEISS 8. WEISS 8 stößt mit einem Fotografen zusammen, der zwischen Tribüne und Spielfeld geht und dabei die Seitenlinie berührt. WEISS 8 kann den Ball nicht fangen und verliert die Körperkontrolle. Bevor die Schiedsrichter das Spiel unterbrechen, überquert der Ball die Seitenlinie. Wie ist zu entscheiden?",
  "options": [
   "Das Spiel wird mit Einwurf für Mannschaft SCHWARZ wieder aufgenommen.",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS wieder aufgenommen.",
   "Time-out",
   "Eintrag im Spielbericht"
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "13:4"
 },
 {
  "id": "13.15",
  "section": "13",
  "sectionTitle": "Freiwurf",
  "question": "Mannschaft SCHWARZ ist im Angriff. Die Schiedsrichter entscheiden auf Freiwurf für SCHWARZ 2. Bevor SCHWARZ 2 den Freiwurf ausführen kann, zieht SCHWARZ 11 den Gegenspieler WEISS 8 nach unten. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Mannschaft SCHWARZ mit Anpfiff",
   "Freiwurf für Mannschaft WEISS mit Anpfiff",
   "Time-out",
   "Progressive Bestrafung für SCHWARZ 11",
   "Hinausstellung für SCHWARZ 11",
   "Disqualifikation ohne Bericht für SCHWARZ 11"
  ],
  "correct": [
   "a",
   "c",
   "e"
  ],
  "rule": "8:3, 8:4, 13:3"
 },
 {
  "id": "14.1",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Beim Spielstand von 20:20 fängt SCHWARZ 7 einen Pass von Team WEISS ab und läuft einen Gegenstoß. Keinem Feldspieler von Team WEISS gelingt es, ihn zu stoppen. Ein Zuschauer läuft auf die Spielfläche und reißt SCHWARZ 7 zu Boden. Daraufhin kommt es zu tumultartigen Szenen, da weitere Zuschauer auf die Spielfläche laufen. Offizieller A von Team SCHWARZ schlägt den Zuschauer nieder, der SCHWARZ 7 umgerissen hat. Wie ist zu entscheiden?",
  "options": [
   "Spielabbruch",
   "Time-out, 7-Meter-Wurf für Team SCHWARZ, Disqualifikation des Offiziellen A von Team SCHWARZ, Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert, schriftlicher Bericht (rote und blaue Karte)",
   "Time-out, 7-Meter-Wurf für Team SCHWARZ, Disqualifikation des Offiziellen A von Team SCHWARZ, Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert (rote Karte)",
   "Time-out, 7-Meter-Wurf für Team SCHWARZ, Hinausstellung des Offiziellen A von Team SCHWARZ, Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert"
  ],
  "correct": [
   "b"
  ],
  "rule": "2:8a, 8:10a, 14:1c, 16:6b"
 },
 {
  "id": "14.2",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Es gibt Einwurf für Team SCHWARZ. Der korrekt ausführende Spieler SCHWARZ 7 sieht, dass Torwart WEISS 12 weit vor seinem Tor, außerhalb des Torraums, steht, und wirft den Ball direkt in Richtung des leeren Tors. Feldspieler WEISS 3 betritt den Torraum und fängt den Ball. Entscheidung?",
  "options": [
   "Tor",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Progressive Bestrafung von WEISS 3",
   "Direkte 2-Minuten-Hinausstellung von WEISS 3"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "8:8i, 14:1a, 15:2"
 },
 {
  "id": "14.3",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Bei der Ausführung eines 7-Meter-Wurfs trifft WEISS 4 den Torpfosten. Der Ball prallt zu ihm zurück, ohne vorher einen Mit- oder Gegenspieler berührt zu haben. WEISS 4 wirft den Ball ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ",
   "Tor für Team WEISS"
  ],
  "correct": [
   "c"
  ],
  "rule": "14:6"
 },
 {
  "id": "14.4",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "WEISS 3 umspielt SCHWARZ 4 an dessen Freiwurflinie. Nach dem dritten Schritt will er werfen, wird jedoch von SCHWARZ 4 gestoßen. Unmittelbar nach dem vierten Schritt erzielt er ein schönes Tor. Ein anderer Spieler von Team SCHWARZ hätte nicht eingreifen können. Wie ist zu entscheiden?",
  "options": [
   "Vorteil und somit Tor für Team WEISS",
   "Progressive Bestrafung von SCHWARZ 4",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "8:3c, 14:1a, 16:1a"
 },
 {
  "id": "14.5",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Bei einem 7-Meter-Wurf durch WEISS 9 gelangt der Ball hinter die Torlinie, doch überschreitet WEISS 4 die Freiwurflinie, bevor der Ball die Hand von WEISS 9 verlassen hat. Wie ist zu entscheiden",
  "options": [
   "Tor für Team WEISS",
   "Wiederholung des 7-Meter-Wurfs",
   "Freiwurf für Team SCHWARZ",
   "Wiederholung des 7-Meter-Wurfs und Verwarnung von WEISS 4"
  ],
  "correct": [
   "c"
  ],
  "rule": "13:1a, 14:7, 15:7"
 },
 {
  "id": "14.6",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "SCHWARZ 2 setzt nach Anpfiff zum 7-Meter-Wurf an. In diesem Moment macht WEISS 5 einen Schritt über die Freiwurflinie. SCHWARZ 2 erzielt trotzdem ein Tor. Wie ist zu entscheiden?",
  "options": [
   "Tor und Disqualifikation von WEISS 5 (rote Karte)",
   "Tor und Hinausstellung von WEISS 5",
   "Tor für Team SCHWARZ",
   "Wiederholung des 7-Meter-Wurfs und Disqualifikation von WEISS 5"
  ],
  "correct": [
   "c"
  ],
  "rule": "14:8"
 },
 {
  "id": "14.7",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "7-Meter-Werfer WEISS 6 steht mit dem Ball bereit, als Offizieller A von Team SCHWARZ seinen Torwart zum Torwartwechsel auffordert. Der Torwart ist im Begriff, dieser Aufforderung nachzukommen. Wie ist zu entscheiden?",
  "options": [
   "Keine Maßnahme erforderlich",
   "Verwarnung des Offiziellen A von Team SCHWARZ",
   "Verwarnung des Offiziellen A und des Torwarts von Team SCHWARZ",
   "Verwarnung des Torwarts von Team SCHWARZ"
  ],
  "correct": [
   "d"
  ],
  "rule": "14:10, 16:1b"
 },
 {
  "id": "14.8",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Nach einem Wurf von WEISS 4 trifft der Ball den Torpfosten und fliegt in Richtung Spielfeld. WEISS 6 steht an der Torraumlinie bereit, um ihn aufzufangen. SCHWARZ 4 geht deutlich in den eigenen Torraum und schlägt den Ball über die Torauslinie. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team WEISS",
   "Einwurf für Team WEISS",
   "Freiwurf für Team WEISS",
   "Abwurf für Team SCHWARZ"
  ],
  "correct": [
   "a"
  ],
  "rule": "6:2c, 14:1a, Erläuterung 6"
 },
 {
  "id": "14.9",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "WEISS 3 führt einen 7-Meter-Wurf aus. WEISS 5 überschreitet die Freiwurflinie nach dem Schiedsrichterpfiff, aber bevor der Ball die Hand von WEISS 3 verlassen hat. Wie ist zu entscheiden?",
  "options": [
   "Wiederholung des 7-Meter-Wurfs",
   "Freiwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ",
   "Progressive Bestrafung von WEISS 5"
  ],
  "correct": [
   "b"
  ],
  "rule": "13:1a, 14:7, 15:7"
 },
 {
  "id": "14.10",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "WEISS 9 steht am Torraum völlig frei und fangbereit. Er wird von WEISS 10 durch den Torraum per Aufsetzer angespielt. Dieses Zuspiel wird von SCHWARZ 3 erkannt. Er betritt sehr deutlich seinen Torraum und fängt – zum zweiten Mal mit beiden Füßen im Torraum stehend – den Ball ab. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Progressive Bestrafung von SCHWARZ 3"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "8:7f, 14:1a, 16:1b, Erläuterung 6"
 },
 {
  "id": "14.11",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Kreisspieler SCHWARZ 10 sperrt Abwehrspieler WEISS 2 regelkonform. Als SCHWARZ 10 sich löst, spielt Rückraumspieler SCHWARZ 4 einen Bodenpass in den Durchbruchsweg zum Tor. Bevor SCHWARZ 10 den Ball annehmen kann, wird er von WEISS 2 am Trikot zurückgehalten. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ, unabhängig von den Positionen der gegnerischen Spieler",
   "7-Meter-Wurf für Team SCHWARZ, wenn kein anderer Spieler von Team WEISS den Kreisspieler regelkonform am Torwurf hätte hindern können",
   "Progressive Bestrafung von WEISS 2",
   "Obligatorische Disqualifikation von WEISS 2 (rote Karte)"
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "8:2c, 14:1a, Erläuterung 6a"
 },
 {
  "id": "14.12",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "WEISS 3 ist in Ballbesitz und läuft einen Gegenstoß in Richtung des Tors von Team SCHWARZ, wodurch sich eine klare Torchance ergibt. Während seines Sprungwurfs pfeift ein Zuschauer mit einer Schiedsrichter-Pfeife. Dies irritiert WEISS 3, sodass er nicht wirft und mit dem Ball im Torraum landet. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ mit Anpfiff",
   "7-Meter-Wurf für Team WEISS",
   "Freiwurf für Team WEISS",
   "Abwurf für Team SCHWARZ mit Anpfiff",
   "Vermerk im Spielprotokoll"
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "14:1c"
 },
 {
  "id": "14.13",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Es erfolgt ein Tempogegenstoß von Team WEISS beim Stand von 26:26. WEISS 5 setzt an der Torraumlinie zum Torwurf an. In diesem Moment pfeift der Zeitnehmer und erklärt, dass die Spielzeit beendet sei. Die Schiedsrichter stellen fest, dass noch 20 Sekunden zu spielen sind. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS am Zeitnehmertisch",
   "7-Meter-Wurf für Team WEISS",
   "Vermerk im Spielprotokoll",
   "Freiwurf für Team WEISS dort, wo sich der Ball bei der Unterbrechung befand"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "2:3, 14:1b, Erläuterung 6a"
 },
 {
  "id": "14.14",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Welche der folgenden Aussagen zur 7-Meter-Ausführung treffen zu?",
  "options": [
   "Der ausführende Spieler darf bis zu einem Meter hinter der 7-Meter-Linie stehen.",
   "Wenn die abwehrende Mannschaft den Torwart wechselt, müssen die Schiedsrichter auf Time-out entscheiden.",
   "Wenn der Torwart bei der Abwehrhandlung die 4-Meter-Linie überschreitet, ist er im Wiederholungsfall persönlich zu bestrafen.",
   "Die Spieler der abwehrenden Mannschaft müssen immer drei Meter vom ausführenden Spieler entfernt sein."
  ],
  "correct": [
   "a"
  ],
  "rule": "14:3, 14:5, 14:8, 14:9"
 },
 {
  "id": "14.15",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "WEISS 5 springt von der rechten Außenposition in den Torraum und prallt dabei auf SCHWARZ 11, der ungefähr einen halben Meter hinter der Linie im Torraum auf ihn wartet und die Arme gestreckt nach oben hält. Dies macht SCHWARZ 11 bereits zum dritten Mal in diesem Spiel. Wie ist zu entscheiden?",
  "options": [
   "7-Meter-Wurf für Team WEISS",
   "Stürmerfoul gegen WEISS 5",
   "Hinausstellung von SCHWARZ 11",
   "Verwarnung von SCHWARZ 11"
  ],
  "correct": [
   "a",
   "c"
  ],
  "rule": "6:2c, 8:7f, 14:1a, 16:3a"
 },
 {
  "id": "14.16",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "WEISS 6 läuft einen Tempogegenstoß und hat eine klare Torchance. Plötzlich fällt die Hallenbeleuchtung aus. Welche der folgenden Aussagen treffen zu?",
  "options": [
   "Die Schiedsrichter warten zunächst das Resultat der klaren Torchance ab.",
   "Die Schiedsrichter unterbrechen das Spiel sofort und geben Time-out.",
   "Sobald die Hallenbeleuchtung wieder funktioniert, wird das Spiel mit einem Freiwurf für Team WEISS fortgesetzt.",
   "Sobald die Hallenbeleuchtung wieder funktioniert, wird das Spiel mit einem 7-Meter-Wurf für Team WEISS fortgesetzt.",
   "Vermerk im Spielprotokoll"
  ],
  "correct": [
   "b",
   "d",
   "e"
  ],
  "rule": "14:1c, Erläuterung 2a"
 },
 {
  "id": "14.17",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "WEISS 5 überschreitet während des 7-Meter-Wurfs von WEISS 3 die Freiwurflinie, nachdem der Schiedsrichter den Wurf angepfiffen, aber bevor der Ball die Hand des Werfers verlassen hat. Der Torwart von Team SCHWARZ hält. Wie ist zu entscheiden?",
  "options": [
   "Wiederholung des 7-Meter-Wurfs",
   "Freiwurf für Team SCHWARZ",
   "Abwurf für Team SCHWARZ"
  ],
  "correct": [
   "c"
  ],
  "rule": "6:4, 12:1, 13:2, 14:7"
 },
 {
  "id": "14.18",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "WEISS 2 ist bereit, einen 7-Meter-Wurf auszuführen. Der Feldschiedsrichter pfeift, aber WEISS 2 lässt den Ball auf den Boden fallen. SCHWARZ 3 nimmt den Ball sofort auf und spielt ihn zu SCHWARZ 2, der einen Gegenstoß läuft und ein Tor erzielt. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team SCHWARZ",
   "Wiederholung des 7-Meter-Wurfs",
   "Freiwurf für Team SCHWARZ",
   "Time-out"
  ],
  "correct": [
   "a"
  ],
  "rule": "13:2, 14:4, 15:2"
 },
 {
  "id": "14.19",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Bei einem Angriff wird der ballführende Spieler WEISS 6 an der gegnerischen Freiwurflinie durch eine grobe Regelwidrigkeit von SCHWARZ 5 zu Fall gebracht. Hinter SCHWARZ 5 steht noch SCHWARZ 8 an der eigenen Torraumlinie. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Disqualifikation von SCHWARZ 5 ohne schriftlichen Bericht (rote Karte)",
   "Hinausstellung von SCHWARZ 5",
   "7-Meter-Wurf für Team WEISS"
  ],
  "correct": [
   "a",
   "b"
  ],
  "rule": "8:5, 13:1b, Erläuterung 6"
 },
 {
  "id": "14.20",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Mannschaft WEISS ist im Angriff und spielt bei leerem Tor mit 7 gegen 6 Feldspielern. SCHWARZ 8 fängt einen Pass ab. SCHWARZ 8 prellt mit dem Ball, und bevor er in eine Torwurfsituation kommt, wird er von WEISS 3 angegriffen, der ihn kurz festhält. Inzwischen hat Torwart WEISS 12 nach einem korrekten Wechsel mit WEISS 7 den Torraum wieder betreten. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Time-out",
   "Hinausstellung für WEISS 3"
  ],
  "correct": [
   "a"
  ],
  "rule": "8:2, 8:3, Erläuterung 6c, Guidelines und Interpretationen (14:1, Erläuterung 6c)"
 },
 {
  "id": "14.21",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Mannschaft WEISS ist im Angriff und spielt bei leerem Tor mit 7 gegen 6 Feldspielern. SCHWARZ 5 fängt einen Pass ab. SCHWARZ 5 versucht sofort einen direkten Wurf auf das leere Tor. In diesem Moment wird er von WEISS 6 von hinten gestoßen, sodass er teilweise die Körperkontrolle verliert und der Wurf das Tor verfehlt. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Time-out",
   "Hinausstellung für WEISS 6",
   "Disqualifikation ohne Bericht für WEISS 6"
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "rule": "2:8, 8:4e, 14:1, Erläuterung 6c, Guidelines und Interpretationen (14:1, Erläuterung 6c)"
 },
 {
  "id": "14.22",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Mannschaft WEISS ist im Angriff und spielt bei leerem Tor mit 7 gegen 6 Feldspielern. WEISS 11 verfehlt einen Pass, und der Ball überquert die Seitenlinie zu einem Einwurf für Mannschaft SCHWARZ. SCHWARZ 9 nimmt den Ball und führt den Einwurf als direkten Wurf auf das leere Tor aus. Der Ball wird von WEISS 4 geblockt, der während der Ausführung zu nahe am Werfer stand. Wie ist zu entscheiden?",
  "options": [
   "Korrektur der Position von WEISS 4",
   "Progressive Bestrafung für WEISS 4",
   "Wiederholung des Einwurfs für Mannschaft SCHWARZ mit Anpfiff",
   "Freiwurf für Mannschaft SCHWARZ",
   "7-Meter-Wurf für Mannschaft SCHWARZ",
   "Direkte 2-Minuten-Hinausstellung für WEISS 4"
  ],
  "correct": [
   "e",
   "f"
  ],
  "rule": "8:8g, 14:1, Erläuterung 6c, Guidelines und Interpretationen (14:1, Erläuterung 6c)"
 },
 {
  "id": "14.23",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Mannschaft WEISS ist im Angriff und spielt bei leerem Tor mit 7 gegen 6 Feldspielern. Die Schiedsrichter pfeifen ein Angreifervergehen von WEISS 7. SCHWARZ 8 bekommt Ballbesitz und ist bereit, den Freiwurf als direkten Wurf auf das leere Tor auszuführen. Noch bevor der Ball die Hand verlassen hat, wird SCHWARZ 8 von WEISS 7 von hinten so festgehalten und heruntergezogen, dass er teilweise die Körperkontrolle verliert. Kurz danach betritt Torwart WEISS 16 nach einem korrekten Wechselvorgang mit WEISS 2 den Torraum. Wie ist zu entscheiden?",
  "options": [
   "Progressive Bestrafung für WEISS 7",
   "Hinausstellung für WEISS 7",
   "Disqualifikation ohne Bericht für WEISS 7",
   "Time-out",
   "Wiederholung des Freiwurfs für Mannschaft SCHWARZ nach Anpfiff",
   "7-Meter-Wurf für Mannschaft SCHWARZ"
  ],
  "correct": [
   "b",
   "d",
   "f"
  ],
  "rule": "2:8, 8:4b, 14:1, Erläuterung 6c, Guidelines und Interpretationen (14:1, Erläuterung 6c)"
 },
 {
  "id": "14.24",
  "section": "14",
  "sectionTitle": "7-Meter-Wurf",
  "question": "Mannschaft WEISS spielt ohne Torwart. SCHWARZ 9 fängt einen Pass ab und wirft auf das leere Tor. Abwehrspieler WEISS 4 springt von außerhalb des Torraums und fängt – während er sich in der Luft über dem Torraum befindet – den Ball und landet mit dem Ball in den Händen im Torraum. Was ist die richtige Entscheidung?",
  "options": [
   "Freiwurf für das SCHWARZE Team",
   "7-Meter-Wurf für das SCHWARZE Team",
   "Keine Strafe für WEISS 4",
   "Progressive Bestrafung WEISS 4",
   "Direkte Hinausstellung WEISS 4"
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "8:8i, 14:1"
 },
 {
  "id": "15.1",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Torwart WEISS 13 holt beim Abwurf mit dem Ball über die Torlinie aus. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Abwurf mit Anpfiff",
   "Tor für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "a"
  ],
  "rule": "12:2, 15:2"
 },
 {
  "id": "15.2",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "20 Sekunden vor Spielende, beim Stand von 20:19 für Team WEISS, lässt sich Torwart WEISS 12 beim Abwurf sehr viel Zeit, indem er mit dem Ball im Torraum prellend hin und her geht. Wie ist zu entscheiden?",
  "options": [
   "Time-out",
   "Freiwurf gegen Team WEISS",
   "Anpfiff zum Abwurf",
   "Hinausstellung von WEISS 12",
   "Anzeigen des Vorwarnzeichens für passives Spiel"
  ],
  "correct": [
   "c"
  ],
  "rule": "5:2, 12:2, 15:5b"
 },
 {
  "id": "15.3",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Es gibt Freiwurf für Team SCHWARZ an der Freiwurflinie von Team WEISS. Als alle Spieler korrekt stehen, pfeifen die Schiedsrichter den Freiwurf an. Noch bevor der Ball die Hand des Ausführenden verlassen hat, überschreiten zwei seiner Mitspieler die Freiwurflinie von Team WEISS. Wie ist zu entscheiden?",
  "options": [
   "Wiederholung des Freiwurfs für Team SCHWARZ",
   "Freiwurf für Team WEISS",
   "Mit Anpfiff",
   "Ohne Anpfiff"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "13:1a, 13:7, 15:7"
 },
 {
  "id": "15.4",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Torwart WEISS 12 steht mit dem Ball in der Hand abwurfbereit im Torraum. SCHWARZ 6 spielt ihm mit der offenen Hand den Ball weg. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung von SCHWARZ 6",
   "Freiwurf für Team WEISS mit Anpfiff",
   "Abwurf für Team WEISS mit Anpfiff",
   "Hinausstellung von SCHWARZ 6"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "12:1, 12:2, 15:5, 15:9, 16:1a"
 },
 {
  "id": "15.5",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Team WEISS wurde ein Einwurf zuerkannt. WEISS 8 wirft direkt auf das Tor. Der Ball prallt vom Pfosten zurück zu WEISS 8, der ihn fängt und ins Tor wirft. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team SCHWARZ",
   "Tor für Team WEISS",
   "Wiederholung des Einwurfs mit Anpfiff",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "b"
  ],
  "rule": "15:2"
 },
 {
  "id": "15.6",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Der Torwart von Team SCHWARZ hat einen Wurf gehalten und will sofort einen Gegenstoß einleiten. Dabei entgleitet ihm der Ball und rollt ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team WEISS",
   "Wiederholung des Abwurfs mit Anpfiff",
   "Einwurf für Team WEISS",
   "Freiwurf für Team WEISS"
  ],
  "correct": [
   "b"
  ],
  "rule": "12:1, 12:2, 15:2"
 },
 {
  "id": "15.7",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "WEISS 6 wirft einen Einwurf in Richtung seines Torwarts. Dieser bemerkt es zu spät, und der Ball geht ins Tor. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Tor für Team SCHWARZ",
   "Abwurf für Team WEISS",
   "Wiederholung des Einwurfs mit Anpfiff"
  ],
  "correct": [
   "b"
  ],
  "rule": "9:1, 15:2"
 },
 {
  "id": "15.8",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "WEISS 7 trifft mit einem Einwurf den Schiedsrichter, nimmt den Ball wieder auf und wirft ihn ins Tor von Team SCHWARZ. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team SCHWARZ",
   "Tor für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "Wiederholung des Einwurfs mit Anpfiff",
   "Freiwurf für Team WEISS"
  ],
  "correct": [
   "c"
  ],
  "rule": "7:9, 13:1a, 15:2"
 },
 {
  "id": "15.9",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Es gibt Freiwurf für Team WEISS. Nach allgemein korrekter Aufstellung legt WEISS 10 den Ball nieder, um eine Anweisung zu geben. SCHWARZ 7 nimmt den Ball blitzschnell auf und läuft einen Gegenstoß. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Wiederholung des Freiwurfs mit Anpfiff",
   "Freiwurf für Team WEISS, Verwarnung von SCHWARZ 7",
   "Freiwurf für Team WEISS, Hinausstellung von SCHWARZ 7"
  ],
  "correct": [
   "a"
  ],
  "rule": "15:2"
 },
 {
  "id": "15.10",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Team SCHWARZ will einen Freiwurf ausführen. WEISS 11 steht nur zwei Meter entfernt und versucht, die Ausführung zu verzögern. Wie ist zu entscheiden?",
  "options": [
   "Persönliche Strafe gegen WEISS 11, Freiwurf für Team SCHWARZ mit Anpfiff",
   "Freiwurf für Team WEISS mit Anpfiff",
   "Hinausstellung von WEISS 11",
   "Korrektur der Position von WEISS 11, Freiwurf mit Anpfiff"
  ],
  "correct": [
   "a"
  ],
  "rule": "15:5b, 15:9, 16:1a, 16:3b"
 },
 {
  "id": "15.11",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Es gibt Freiwurf für Team SCHWARZ an der Freiwurflinie von Team WEISS. Dabei übersehen die Schiedsrichter zwischen Torraum- und Freiwurflinie SCHWARZ 8, der angespielt wird und ein Tor erzielt. Wie ist zu entscheiden?",
  "options": [
   "Wiederholung des Freiwurfs für Team SCHWARZ mit Anpfiff",
   "Freiwurf für Team WEISS",
   "Tor für Team SCHWARZ",
   "Verwarnung von SCHWARZ 8"
  ],
  "correct": [
   "a"
  ],
  "rule": "13:7, 15:5b, 15:7"
 },
 {
  "id": "15.12",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Der Torwart von Team SCHWARZ führt aus dem Torraum einen weiten Abwurf aus. Der Ball gelangt ins Tor von Team WEISS. Weder Mit- noch Gegenspieler haben ihn vorher berührt. Wie ist zu entscheiden?",
  "options": [
   "Abwurf für Team WEISS",
   "Einwurf für Team WEISS",
   "Tor für Team SCHWARZ",
   "Verwarnung des Torwarts von Team SCHWARZ wegen unsportlichen Verhaltens"
  ],
  "correct": [
   "c"
  ],
  "rule": "15:2"
 },
 {
  "id": "15.13",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "WEISS 5 hat bereits eine Verwarnung und zwei Hinausstellungen erhalten. Bei einem Freiwurf für Team SCHWARZ hält er zum ersten Mal im Spiel den Abstand nicht ein und stört dadurch die Ausführung des Wurfs. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung von WEISS 5",
   "Keine Strafe",
   "Dritte Hinausstellung von WEISS 5 und Disqualifikation (rote Karte)"
  ],
  "correct": [
   "c"
  ],
  "rule": "8:7c, 15:4, 15:9, 16:3d, 16:5, 16:6d"
 },
 {
  "id": "15.14",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Kurz vor Spielende führt Team WEISS mit 24:23. Es gibt Freiwurf für Team WEISS, ungefähr einen Meter vor der Freiwurflinie von Team SCHWARZ. Alle Spieler haben zunächst eine korrekte Aufstellung eingenommen. Die Schiedsrichter pfeifen die Ausführung des Freiwurfs an, als WEISS 10 mit dem Ball die gegnerische Freiwurflinie deutlich um einen Schritt in Richtung Tor von Team SCHWARZ überschreitet. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS",
   "Time-out",
   "Hinausstellung von WEISS 10",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "d"
  ],
  "rule": "13:7, 15:7"
 },
 {
  "id": "15.15",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "WEISS 14 will einen Freiwurf ohne Anpfiff ausführen. Er und seine Mitspieler stehen korrekt. Bevor der Ball die Hand von WEISS 14 verlassen hat, laufen WEISS 13 und WEISS 15 über die 9-Meter Linie in Richtung der Kreisposition. Wie ist zu entscheiden?",
  "options": [
   "Korrektur",
   "Freiwurf für Team WEISS mit Anpfiff",
   "Weiterspielen lassen",
   "Freiwurf für Team SCHWARZ"
  ],
  "correct": [
   "a",
   "b"
  ],
  "rule": "13:3, 15:1, 15:7"
 },
 {
  "id": "15.16",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Der Torwart von Team SCHWARZ führt einen Abwurf aus. Der Ball trifft den Schiedsrichter und prallt zurück zum Torwart von Team SCHWARZ, der in der Zwischenzeit den Torraum verlassen hat. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Wiederholung des Abwurfs mit Anpfiff",
   "Freiwurf für Team WEISS",
   "Freiwurf für Team SCHWARZ mit Anpfiff"
  ],
  "correct": [
   "c"
  ],
  "rule": "12:2, 13:1a, 15:2"
 },
 {
  "id": "15.17",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Bei der Freiwurfausführung durch SCHWARZ 11 gerät der Ball bei der Ausholbewegung hinter die Seitenlinie. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Freiwurf für Team WEISS",
   "Einwurf für Team WEISS",
   "Freiwurf für Team WEISS, Ermahnung von SCHWARZ 11"
  ],
  "correct": [
   "a"
  ],
  "rule": "15:1, 15:2"
 },
 {
  "id": "15.18",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Der Torwart WEISS 1 wehrt den Ball knapp vor der Torlinie ab. Beim anschließenden Versuch, einen Mitspieler anzuspielen, rutscht ihm der Ball aus der Hand ins eigene Tor. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team SCHWARZ",
   "Freiwurf für Team SCHWARZ",
   "7-Meter-Wurf für Team SCHWARZ",
   "Wiederholung des Abwurfs für Team WEISS mit Anpfiff"
  ],
  "correct": [
   "d"
  ],
  "rule": "6:4, 12:1, 12:2, 15:2"
 },
 {
  "id": "15.19",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Der Feldschiedsrichter pfeift einen Anwurf an. WEISS 13 nimmt den Ball aus der Hand des zum Anwurf bereitstehenden WEISS 9, da er die beiden Außenangreifer WEISS 7 und WEISS 3 günstig in die gegnerische Spielfeldhälfte sprinten sieht. Er spielt zu WEISS 7, der ein Tor erzielt. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team WEISS",
   "Korrektur, Wiederholung des Anwurfs für Team WEISS",
   "Freiwurf für Team SCHWARZ",
   "Ermahnung von WEISS 13",
   "Ermahnung von WEISS 13 und WEISS 7"
  ],
  "correct": [
   "c"
  ],
  "rule": "15:2, 15:7"
 },
 {
  "id": "15.20",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Vier Sekunden vor Spielende lautet der Spielstand 30:30. Team WEISS erzielt das 30:31. Heim-Team SCHWARZ will einen schnellen Anwurf ausführen. Der Ausführende steht mit einem Fuß innerhalb der Anwurfzone, mit dem anderen Fuß außerhalb der Anwurfzone in der gegnerischen Hälfte. Ohne Anpfiff wirft SCHWARZ 10 den Ball und erzielt das Tor zum 31:31. Das automatische Schlusssignal ertönt. Wie ist zu entscheiden?",
  "options": [
   "Tor für Team SCHWARZ",
   "Wiederholung des Anwurfs für Team SCHWARZ",
   "Das Resultat des Wurfs ist abzuwarten.",
   "Time-out",
   "Spielende, kein Tor"
  ],
  "correct": [
   "e"
  ],
  "rule": "2:3, 2:4, 15:5a"
 },
 {
  "id": "15.21",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "WEISS 7 will einen Freiwurf ausführen und steht wie seine Mitspieler korrekt vor der Freiwurflinie. Der Freiwurf wird ohne Anpfiff schnell ausgeführt. Bevor jedoch der Ball die Hand von WEISS 7 verlassen hat, überschreiten WEISS 9 und WEISS 12 die Freiwurflinie in Richtung Kreisposition. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Korrektur",
   "Freiwurf für Team WEISS mit Anpfiff",
   "Freiwurf für Team SCHWARZ, Verwarnung von WEISS 9 und WEISS 12"
  ],
  "correct": [
   "b",
   "c"
  ],
  "rule": "13:7, 15:1, 15:5, 15:6, 15:7 Abs. 2"
 },
 {
  "id": "15.22",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Mit welchem der folgenden Würfe kann kein Eigentor erzielt werden?",
  "options": [
   "Abwurf",
   "Freiwurf",
   "Einwurf",
   "Anwurf"
  ],
  "correct": [
   "a"
  ],
  "rule": "12:2, 15:2"
 },
 {
  "id": "15.23",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Spieler SCHWARZ 4 steht korrekt zur Ausführung eines Einwurfs bereit. Da er gerade keinen anspielbaren Mitspieler sieht, prellt er den Ball einmal im Spielfeld auf. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team WEISS ohne Anpfiff",
   "Einwurf für Team WEISS mit Anpfiff",
   "Wiederholung des Einwurfs für Team SCHWARZ mit Anpfiff",
   "Freiwurf für Team SCHWARZ mit Anpfiff"
  ],
  "correct": [
   "a"
  ],
  "rule": "15:2, 15:7, 15:8"
 },
 {
  "id": "15.24",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Team WEISS erhält einen Freiwurf, den WEISS 9 ohne Anpfiff sehr schnell im Sprung ausführt. Der Ball gelangt zu WEISS 4, der sich völlig frei vor dem Tor von Team SCHWARZ befindet. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Freiwurf für Team SCHWARZ",
   "Wiederholung des Freiwurfs für Team WEISS mit Anpfiff"
  ],
  "correct": [
   "c"
  ],
  "rule": "15:5b, 15:7"
 },
 {
  "id": "15.25",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Team WEISS erhält einen Freiwurf, den WEISS 5 ohne Anpfiff sehr rasch im schnellen Lauf ausführt. Der Ball soll zu WEISS 4 gelangen, wird aber sofort von SCHWARZ 3 abgefangen, der sich nun völlig frei vor dem Tor von Team WEISS befindet. Wie ist zu entscheiden?",
  "options": [
   "Weiterspielen lassen",
   "Wiederholung des Freiwurfs mit Anpfiff",
   "Wiederholung des Freiwurfs und progressive Strafe gegen SCHWARZ 3"
  ],
  "correct": [
   "a"
  ],
  "rule": "13:2, 15:7, 2. Abschnitt"
 },
 {
  "id": "15.26",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Mannschaft SCHWARZ ist bereit, einen Freiwurf ohne Anpfiff auszuführen. Als SCHWARZ 8 den Wurf ausführt, hat er mit beiden Füßen und der linken Hand Bodenkontakt. SCHWARZ 6 erhält den Ball und erzielt ein Tor. Was ist die richtige Entscheidung?",
  "options": [
   "Tor für Mannschaft SCHWARZ",
   "Korrektur, Wiederholung des Freiwurfs nach Anpfiff des Schiedsrichters",
   "Freiwurf für Mannschaft WEISS"
  ],
  "correct": [
   "b"
  ],
  "rule": "15:1, Kommentar"
 },
 {
  "id": "15.27",
  "section": "15",
  "sectionTitle": "Ausführung von Würfen nach Pfiff",
  "question": "Mannschaft SCHWARZ erzielt ein Tor. Die Schiedsrichter pfeifen den anschließenden Anwurf an. Bevor der Ball die Hand des Werfers verlassen hat, ertönt ein Signal des Zeitnehmers. Spieler WEISS 5 hat das Spielfeld betreten, bevor WEISS 6 das Spielfeld verlassen hat. Was ist die richtige Entscheidung?",
  "options": [
   "Time-out",
   "Hinausstellung für WEISS 5",
   "Hinausstellung für WEISS 6",
   "Da der Ball zum Zeitpunkt des Anpfiffs nicht im Spiel war, wird das Spiel mit Anwurf Mannschaft WEISS fortgesetzt.",
   "Das Spiel wird mit Freiwurf für Mannschaft SCHWARZ fortgesetzt.",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS fortgesetzt."
  ],
  "correct": [
   "a",
   "b",
   "e"
  ],
  "rule": "2:8, 4:4-6, 15:7, 16:3a"
 },
 {
  "id": "16.1",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Ein Mannschaftsoffizieller reklamiert und wird hinausgestellt. Vor Wiederanpfiff protestiert er weiter und wird disqualifiziert. Wie ist zu entscheiden?",
  "options": [
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "c"
  ],
  "rule": "16:9"
 },
 {
  "id": "16.2",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "WEISS 8 wird wegen Stoßens eines Spielers hinausgestellt. Daraufhin beschimpft er den Schiedsrichter: „Du dummer Kerl, du Idiot, du lernst das nie!“ Bevor er das Spielfeld verlässt, spuckt er dem Schiedsrichter ins Gesicht. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von WEISS 8; Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert (rote Karte).",
   "Disqualifikation von WEISS 8; Team WEISS wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert (rote Karte).",
   "Disqualifikation von WEISS 8; Team WEISS wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert (rote und blaue Karte).",
   "Disqualifikation von WEISS 8; Team WEISS wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert (rote und blaue Karte)."
  ],
  "correct": [
   "c"
  ],
  "rule": "8:10a, 16:6b, 16:9c"
 },
 {
  "id": "16.3",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Wie viele Verwarnungen sollten gegen Offizielle einer Mannschaft in einem Spiel höchstens ausgesprochen werden?",
  "options": [
   "Keine",
   "1",
   "2",
   "3"
  ],
  "correct": [
   "b"
  ],
  "rule": "16:1 Kommentar"
 },
 {
  "id": "16.4",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Wann fängt die Hinausstellungszeit eines Spielers an?",
  "options": [
   "Wenn der Schiedsrichter das Zeichen für die Hinausstellung gegeben hat",
   "Wenn der hinausgestellte Spieler die Seitenlinie passiert hat",
   "Wenn der Schiedsrichter das Spiel wieder anpfeift",
   "Wenn der Zeitnehmer die Stoppuhr startet"
  ],
  "correct": [
   "c"
  ],
  "rule": "16:5"
 },
 {
  "id": "16.5",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Wem sind Hinausstellungen anzuzeigen?",
  "options": [
   "Dem fehlbaren Spieler sowie Sekretär/Zeitnehmer",
   "Dem Mannschaftsverantwortlichen und dem Zeitnehmer",
   "Dem Zeitnehmer/Sekretär",
   "Dem fehlbaren Spieler, dem Mannschaftsverantwortlichen und dem Sekretär"
  ],
  "correct": [
   "a"
  ],
  "rule": "16:4"
 },
 {
  "id": "16.6",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "SCHWARZ 5 wurde schon zweimal hinausgestellt, einmal wegen einer progressiv zu bestrafenden Regelwidrigkeit, einmal wegen Wegwerfen des Balls, nachdem der Schiedsrichter auf Freiwurf für Team WEISS entschieden hatte. Jetzt begeht er den zweiten Wechselfehler seiner Mannschaft und vor Wiederaufnahme des Spiels noch eine besonders grobe Unsportlichkeit. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von SCHWARZ 5",
   "Disqualifikation von SCHWARZ 5 mit schriftlichem Bericht (rote und blaue Karte); Team SCHWARZ wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert.",
   "Disqualifikation von SCHWARZ 5 mit schriftlichem Bericht (rote und blaue Karte); Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert."
  ],
  "correct": [
   "c"
  ],
  "rule": "4:5, 8:10a, 16:3a, 16:6B, 16:6d, 16:9b"
 },
 {
  "id": "16.7",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "WEISS 5 wird wegen regelwidrigen Verhaltens hinausgestellt. Während des Verlassens der Spielfläche beleidigt er den Schiedsrichter, der daraufhin die rote Karte zieht. WEISS 5 ärgert sich so sehr, dass er den Schiedsrichter schlägt. Wie ist zu entscheiden?",
  "options": [
   "Schriftlicher Bericht (blaue Karte)",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "8:10a, 16:6b, 16:9c"
 },
 {
  "id": "16.8",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "WEISS 7 wird wegen unfairen Spiels für zwei Minuten hinausgestellt. Sein Kommentar zum Schiedsrichter: „Du bist doch ein blinder Trottel“. Wie ist zu entscheiden?",
  "options": [
   "Weitere Hinausstellung von WEISS 7",
   "Disqualifikation von WEISS 7 ohne schriftlichen Bericht (rote Karte)",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert.",
   "Disqualifikation von WEISS 7 mit schriftlichem Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "d",
   "e"
  ],
  "rule": "8:10a, 16:6b, 16:9c"
 },
 {
  "id": "16.9",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "WEISS 3 begeht nach einer Hinausstellung gegen ihn im Auswechselraum vor dem Wiederanpfiff des Spiels eine grobe Unsportlichkeit gegen den Offiziellen B von Team SCHWARZ, der vorher auf das Spielfeld gelaufen war, obwohl nicht Time-out gegeben worden war. Gegen die Bank von Team SCHWARZ wurde noch keine Strafe ausgesprochen. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von WEISS 3 ohne schriftlichen Bericht (rote Karte)",
   "Verwarnung des Offiziellen B von Team SCHWARZ",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "a",
   "b",
   "d"
  ],
  "rule": "4:2, 8:9, 16:1b, 16:6b, 16:9c"
 },
 {
  "id": "16.10",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Mit der Disqualifikation eines Spielers reduziert sich die Spielerzahl seiner Mannschaft auf dem Spielfeld, es sei denn, die Disqualifikation erfolgte …",
  "options": [
   "wegen einer groben Unsportlichkeit in der Halbzeitpause.",
   "wegen eines Vergehens außerhalb der Spielfläche.",
   "bereits vor Spielbeginn.",
   "wegen Beleidigung der Schiedsrichter."
  ],
  "correct": [
   "c"
  ],
  "rule": "16:11b"
 },
 {
  "id": "16.11",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Während der Halbzeitpause begeht WEISS 7 auf der Spielfläche eine Tätlichkeit gegen Torwart SCHWARZ 12. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von WEISS 7, schriftlicher Bericht (rote und blaue Karte); Team WEISS wird zu Beginn der zweiten Halbzeit auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Verwarnung von WEISS 7",
   "WEISS 7 wird nur ermahnt, weil das Spiel unterbrochen ist."
  ],
  "correct": [
   "a"
  ],
  "rule": "8:6, 16:6a, 16:10, 17:10"
 },
 {
  "id": "16.12",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Ein Schiedsrichter wird während der Pause auf dem Weg in die Kabine von einem Spieler beleidigt. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation des Spielers ohne schriftlichen Bericht (rote Karte)",
   "Hinausstellung des Spielers (zu Beginn der zweiten Halbzeit)",
   "Die Mannschaft wird zu Beginn der zweiten Halbzeit auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Disqualifikation des Spielers, schriftlicher Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "8:10a, 16:6b, 16:10, 17:10"
 },
 {
  "id": "16.13",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Nach dem Halbzeitpfiff geraten WEISS 9 und SCHWARZ 5 auf der Spielfläche heftig aneinander und schreien sich an. In der Folge stößt WEISS 9 SCHWARZ 5 mit beiden Händen gegen die Brust, so dass dieser die Körperkontrolle verliert. Wie ist zu entscheiden?",
  "options": [
   "Hinausstellung von WEISS 9 zu Beginn der zweiten Halbzeit",
   "Disqualifikation von WEISS 9 ohne schriftlichen Bericht (rote Karte); Team WEISS wird zu Beginn der zweiten Halbzeit auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Disqualifikation von WEISS 9, Team WEISS beginnt die zweite Halbzeit mit sechs Feldspielern.",
   "Disqualifikation von WEISS 9 mit schriftlichem Bericht (rote und blaue Karte); Team WEISS wird zu Beginn der zweiten Halbzeit auf der Spielfläche zwei Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "b"
  ],
  "rule": "8:9, 16:10, 16:6b"
 },
 {
  "id": "16.14",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Nach dem Spiel schreit WEISS 10 den Schiedsrichter an: „Du hast uns den Sieg gestohlen, du Idiot!“ Wie ist zu entscheiden?",
  "options": [
   "Verwarnung von WEISS 10",
   "Disqualifikation von WEISS 10, schriftlicher Bericht (rote und blaue Karte)",
   "Schriftlicher Bericht",
   "Verwarnung von WEISS 10, schriftlicher Bericht"
  ],
  "correct": [
   "c"
  ],
  "rule": "16:11c"
 },
 {
  "id": "16.15",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "WEISS 9 begeht während der Halbzeitpause noch auf der Spielfläche eine Tätlichkeit gegen den Offiziellen B von Team SCHWARZ, der WEISS 9 daraufhin beleidigt. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von WEISS 9 mit schriftlichem Bericht (rote und blaue Karte); Team WEISS wird zu Beginn der zweiten Halbzeit auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Disqualifikation des Offiziellen B von Team SCHWARZ, schriftlicher Bericht (rote und blaue Karte); Team SCHWARZ wird zu Beginn der zweiten Halbzeit auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Disqualifikation von WEISS 9 (rote Karte); Team WEISS beginnt die zweite Halbzeit mit sechs Feldspielern.",
   "Disqualifikation des Offiziellen B von Team SCHWARZ (rote Karte); Team SCHWARZ beginnt die zweite Halbzeit mit sechs Feldspielern."
  ],
  "correct": [
   "a",
   "b"
  ],
  "rule": "8:10a, 16:6, 16:10"
 },
 {
  "id": "16.16",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "WEISS 7 wird aufgrund seiner dritten Hinausstellung disqualifiziert. Anschließend will er mit den Schiedsrichtern diskutieren und verlässt deshalb die Spielfläche nicht. Wie ist zu entscheiden?",
  "options": [
   "Keine weiteren Maßnahmen",
   "Team WEISS wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert."
  ],
  "correct": [
   "b"
  ],
  "rule": "16:9b"
 },
 {
  "id": "16.17",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Der während der Spielzeit verwarnte WEISS 11 begeht während der Halbzeitpause eine Unsportlichkeit. Team WEISS spielte am Ende der ersten Halbzeit mit Vollbestand. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung von WEISS 11",
   "Hinausstellung von WEISS 11",
   "Disqualifikation von WEISS 11",
   "Team WEISS wird zu Beginn der zweiten Halbzeit auf der Spielfläche zwei Minuten lang um einen Spieler reduziert.",
   "Die Spielerzahl von Team WEISS wird zu Beginn der zweiten Halbzeit auf der Spielfläche nicht reduziert."
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "16:3d, 16:5, 16:10"
 },
 {
  "id": "16.18",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "WEISS 4 hat sich verletzt. Die Schiedsrichter geben Time-out und mittels Handzeichen die Erlaubnis zur Versorgung des Spielers auf der Spielfläche. Die Offiziellen A und B von Team WEISS sowie der Offizielle A von Team SCHWARZ, der bereits eine Verwarnung erhalten hatte, betreten die Spielfläche. Wie ist zu entscheiden?",
  "options": [
   "Keine Intervention",
   "Team SCHWARZ spielt ab Wiederanpfiff weiterhin mit derselben Anzahl an Spielern wie vor dem Time-out.",
   "Hinausstellung des Offiziellen A von Team SCHWARZ",
   "Disqualifikation des Trainers von Team SCHWARZ (rote Karte)",
   "Team SCHWARZ wird auf der Spielfläche ab Wiederanpfiff zwei Minuten lang um einen Spieler reduziert.",
   "Nach Behandlung auf der Spielfläche muss WEISS 4 die Spielfläche verlassen und darf diese erst nach dem dritten Angriff seiner Mannschaft wieder betreten."
  ],
  "correct": [
   "c",
   "e",
   "f"
  ],
  "rule": "4:11, 16:3e, 16:3 Kommentar, Erläuterung 8c"
 },
 {
  "id": "16.19",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "SCHWARZ 9 wird aufgrund einer groben Regelwidrigkeit gegen WEISS 9 disqualifiziert. Vor dem Wiederanpfiff schlägt SCHWARZ 9 dem Offiziellen A von Team WEISS ins Gesicht. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation von SCHWARZ 9 ohne schriftlichen Bericht (rote Karte); Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert.",
   "Disqualifikation von SCHWARZ 9 ohne schriftlichen Bericht (rote Karte); Team SCHWARZ wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert.",
   "Keine zusätzliche Bestrafung möglich",
   "Disqualifikation von SCHWARZ 9, schriftlicher Bericht (rote und blaue Karte); Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert.",
   "Disqualifikation von SCHWARZ 9, schriftlicher Bericht (rote und blaue Karte); Team SCHWARZ wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "e"
  ],
  "rule": "8:10a, 16:9d"
 },
 {
  "id": "16.20",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "SCHWARZ 8 wird nach Time-out mit einer Hinausstellung belegt. Beim Hinausgehen, vor dem Wiederanpfiff, äußert er sich gegenüber den Schiedsrichtern unsportlich. Wie ist zu entscheiden?",
  "options": [
   "Weitere Hinausstellung von SCHWARZ 8; Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert.",
   "Weitere Hinausstellung von SCHWARZ 8; Team SCHWARZ wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert.",
   "Disqualifikation von SCHWARZ 8 (rote Karte); Team SCHWARZ wird auf der Spielfläche zwei Minuten lang um zwei Spieler reduziert.",
   "Disqualifikation von SCHWARZ 8 (rote Karte); Team SCHWARZ wird auf der Spielfläche vier Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "b"
  ],
  "rule": "8:7a, 16:3d, 16:9a"
 },
 {
  "id": "16.21",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "In welchen der folgenden Fälle muss eine Mannschaft auf der Spielfläche vier Minuten lang um einen Spieler reduziert werden?",
  "options": [
   "Ein Spieler wird disqualifiziert und protestiert beim Verlassen der Spielfläche in einer Art, die eine Hinausstellung verdient.",
   "Ein Spieler, der bereits eine Hinausstellung erhalten hat, beleidigt beim Verlassen der Spielfläche einen Schiedsrichter und wird disqualifiziert.",
   "Ein Spieler, der wegen unsportlichen Verhaltens gegen einen Gegenspieler eine Hinausstellung erhalten hat, schlägt diesem noch auf der Spielfläche ins Gesicht und wird disqualifiziert.",
   "Ein Spieler, der wegen unsportlichen Verhaltens eine Hinausstellung erhalten hat, kommt nach dem Überschreiten der Seitenlinie zurück auf die Spielfläche, protestiert und erhält eine zusätzliche Hinausstellung.",
   "Ein Spieler, der bereits eine Disqualifikation wegen Anspuckens eines Gegners erhalten hat, stößt beim Verlassen der Spielfläche den Schiedsrichter.",
   "Ein Spieler, der bereits eine Disqualifikation infolge eines groben Vergehens erhalten hat, beleidigt nach Verlassen der Spielfläche und Wiederanpfiff die Schiedsrichter aus dem Zuschauerbereich."
  ],
  "correct": [
   "a",
   "b",
   "c",
   "d",
   "e"
  ],
  "rule": "16:9"
 },
 {
  "id": "16.22",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "WEISS 5 wird bei 07:00 hinausgestellt. Vor Wiederanpfiff reklamiert er und erhält erneut eine Hinausstellung. Genau eine Minute später läuft er auf das Spielfeld. Der Zeitnehmer pfeift. Aufgrund der erneuten Hinausstellung wird WEISS 5 disqualifiziert. Daraufhin beleidigt WEISS 5 die Schiedsrichter. Wie ist zu entscheiden?",
  "options": [
   "Team WEISS wird auf der Spielfläche von 07:00 bis 08:00 um einen Spieler, von 08:00 bis 10:00 um zwei Spieler und von 10:00 bis 11:00 um einen Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche von 07:00 bis 08:00 um einen Spieler, von 08:00 bis 11:00 um zwei Spieler und von 11:00 bis 12:00 um einen Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche von 07:00 bis 08:00 um zwei Spieler, von 08:00 bis 10:00 um drei Spieler und von 10:00 bis 11:00 um zwei Spieler reduziert.",
   "Team WEISS wird auf der Spielfläche von 07:00 bis 08:00 um zwei Spieler, von 08:00 bis 10:00 um vier Spieler und von 10:00 bis 11:00 um zwei Spieler reduziert.",
   "Disqualifikation von WEISS 5, schriftlicher Bericht (rote und blaue Karte)"
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "8:10a, 16:3a, 16:6d, 16:9d"
 },
 {
  "id": "16.23",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Der Offizielle C von Mannschaft WEISS hatte in der ersten Halbzeit eine Verwarnung wegen unsportlichen Verhaltens erhalten. Bei Spielzeit 35:50 zeigt der Offizielle B von Mannschaft WEISS mit deutlichen Gesten, dass er mit einer Entscheidung der Schiedsrichter nicht einverstanden ist und erhält dafür eine Hinausstellung. Drei Minuten vor Spielschluss betritt der Mannschaftsverantwortliche von WEISS ohne Erlaubnis der Schiedsrichter das Spielfeld. Wie ist zu entscheiden?",
  "options": [
   "Verwarnung des Mannschaftsverantwortlichen von WEISS",
   "Hinausstellung für den Mannschaftsverantwortlichen von WEISS, Mannschaft WEISS muss sich auf dem Spielfeld für 2 Minuten um einen Spieler reduzieren, der Mannschaftsverantwortliche kann im Auswechselraum verbleiben",
   "Hinausstellung für den Mannschaftsverantwortlichen von WEISS, Mannschaft WEISS muss sich auf dem Spielfeld für 2 Minuten um einen Spieler reduzieren, der Mannschaftsverantwortliche muss den Auswechselraum verlassen",
   "Disqualifikation ohne Bericht für den Mannschaftsverantwortlichen von WEISS, Mannschaft WEISS muss sich auf dem Spielfeld für 2 Minuten um einen Spieler reduzieren",
   "Disqualifikation mit Bericht für den Mannschaftsverantwortlichen von WEISS, Mannschaft WEISS muss sich auf dem Spielfeld für 2 Minuten um einen Spieler reduzieren"
  ],
  "correct": [
   "d"
  ],
  "rule": "16:6c"
 },
 {
  "id": "16.24",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "SCHWARZ 11 erzielt ein Tor. Beim Wurf wird er von WEISS 10 von der Seite gestoßen, so dass er teilweise die Körperkontrolle verliert. Die Schiedsrichter geben eine Hinausstellung für WEISS 10. Spieler WEISS 10 verlässt das Spielfeld. Die Schiedsrichter pfeifen den anschließenden Anwurf an, und bevor der Wurf ausgeführt wird, betritt WEISS 9 als zusätzlicher Spieler das Spielfeld. Der Delegierte pfeift und die Uhr wird angehalten. Die öffentliche Uhr zeigt 1 Minute und 58 Sekunden vor dem Ende der Hinausstellung für WEISS 10 an. Was ist die richtige Entscheidung?",
  "options": [
   "Hinausstellung für WEISS 9",
   "Mannschaft WEISS wird um zwei Spieler für 2 Minuten auf dem Spielfeld reduziert.",
   "Für 1 Minute und 58 Sekunden wird Mannschaft WEISS um zwei Spieler auf dem Spielfeld reduziert. Nach 1 Minute und 58 Sekunden der ersten Hinausstellung, Mannschaft WEISS ist für weitere 2 Sekunden um einen Spieler auf dem Spielfeld reduziert.",
   "Das Spiel wird mit Anwurf für Mannschaft WEISS fortgesetzt.",
   "Das Spiel wird mit Freiwurf für Mannschaft SCHWARZ fortgesetzt.",
   "Time-out"
  ],
  "correct": [
   "a",
   "c",
   "e",
   "f"
  ],
  "rule": "2:8, 4:4-6, 15:7, 16:3a"
 },
 {
  "id": "16.25",
  "section": "16",
  "sectionTitle": "Hinausstellung und Disqualifikation",
  "question": "Mannschaft WEISS ist in Ballbesitz und der Ball ist im Spiel. Offizieller B vom WEISS beschwert sich über eine fehlende Hinausstellung für Mannschaft SCHWARZ. Der Delegierte unterbricht das Spiel und Offizieller B erhält eine gelbe Karte. Wegen dieser Strafe und bevor das Spiel wieder angepfiffen wird, protestiert er erneut, und die Schiedsrichter geben ihm eine Hinausstellung. Offizieller B nennt den Schiedsrichter daraufhin einen \"Idioten\". Was ist die richtige Entscheidung?",
  "options": [
   "Mannschaft WEISS wird für 4 Minuten um einen Spieler auf dem Spielfeld reduziert.",
   "Mannschaft WEISS wird um zwei Spieler für 2 Minuten auf dem Spielfeld reduziert.",
   "Mannschaft WEISS wird für 2 Minuten um einen Spieler auf dem Spielfeld reduziert.",
   "Disqualifikation ohne schriftlichen Bericht für den Offiziellen B Mannschaft WEISS.",
   "Disqualifikation mit schriftlichem Bericht für den Offiziellen B Mannschaft WEISS.",
   "Später im Spiel ist es möglich, noch eine gelbe Karte und/oder eine Hinausstellung gegen einen weiteren Offiziellen von Mannschaft WEISS zu geben.",
   "Die Gelbe Karte, die Hinausstellung und Disqualifikation werden im Spielprotokoll vermerkt.",
   "Das Spiel wird mit Freiwurf für Mannschaft WEISS fortgesetzt.",
   "Das Spiel wird mit einem Freiwurf für Mannschaft SCHWARZ fortgesetzt."
  ],
  "correct": [
   "c",
   "e",
   "f",
   "g"
  ],
  "rule": "8:7-10, 13:1a, 16:6, 16:8, 16:9"
 },
 {
  "id": "17.1",
  "section": "17",
  "sectionTitle": "Aufgaben der Schiedsrichter",
  "question": "Die Schiedsrichter sind gegensätzlicher Auffassung, in welche Richtung ein Einwurf auszuführen ist. Wie ist vorzugehen?",
  "options": [
   "Der Feldschiedsrichter entscheidet.",
   "Der Torschiedsrichter entscheidet.",
   "Die Schiedsrichter einigen sich nach kurzer Rücksprache.",
   "Time-out",
   "Kein Time-out, aber Einwurf nach Anpfiff"
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "2:8d, 17:7"
 },
 {
  "id": "17.2",
  "section": "17",
  "sectionTitle": "Aufgaben der Schiedsrichter",
  "question": "Das automatische Schlusssignal der Zeitmessanlage ist defekt. Der Zeitnehmer hat die Störung nicht bemerkt und reagiert nicht, obwohl die Spielzeit abgelaufen ist. Wer gibt in diesem Fall das Schlusssignal?",
  "options": [
   "Nur der Sekretär",
   "Nur der Feldschiedsrichter",
   "Nur der Delegierte",
   "Nur einer der Schiedsrichter",
   "Nur der Zeitnehmer",
   "Entweder der Zeitnehmer oder der Delegierte oder einer der Schiedsrichter"
  ],
  "correct": [
   "f"
  ],
  "rule": "2:3, 17:9"
 },
 {
  "id": "17.3",
  "section": "17",
  "sectionTitle": "Aufgaben der Schiedsrichter",
  "question": "Ein Spieler begeht eine Regelwidrigkeit. Der Feldschiedsrichter entscheidet auf Disqualifikation (rote Karte) und Freiwurf, der Torschiedsrichter auf Hinausstellung und 7-Meter-Wurf. Wie ist der Spieler zu bestrafen und das Spiel fortzusetzen?",
  "options": [
   "Kommt es zu keiner gemeinsamen Entscheidung, Hinausstellung für SCHWARZ 2.",
   "Wenn keine gemeinsame Entscheidung getroffen wird, Disqualifikation von SCHWARZ 2.",
   "Kommt es zu keiner gemeinsamen Entscheidung, Spielfortsetzung Freiwurf.",
   "Wenn keine gemeinsame Entscheidung getroffen wird, Spielfortsetzung 7-Meter-Wurf.",
   "Die Schiedsrichter müssen versuchen, eine gemeinsame Entscheidung zu treffen."
  ],
  "correct": [
   "b",
   "d",
   "e"
  ],
  "rule": "17:6"
 },
 {
  "id": "17.4",
  "section": "17",
  "sectionTitle": "Aufgaben der Schiedsrichter",
  "question": "Wer entscheidet in Zweifelsfällen über die Richtigkeit der Zeitmessung?",
  "options": [
   "Zeitnehmer und Sekretär",
   "Die Schiedsrichter gemeinsam",
   "Der Zeitnehmer",
   "Die Schiedsrichter und der Zeitnehmer gemeinsam"
  ],
  "correct": [
   "b"
  ],
  "rule": "17:9"
 },
 {
  "id": "17.5",
  "section": "17",
  "sectionTitle": "Aufgaben der Schiedsrichter",
  "question": "Welche Strafen sind im Spielprotokoll zu begründen?",
  "options": [
   "Alle Disqualifikationen, mit Ausnahme von Disqualifikationen infolge einer dritten Hinausstellung",
   "Alle Strafen, mit Ausnahme von Ermahnungen",
   "Alle Hinausstellungen und Disqualifikationen",
   "Disqualifikationen infolge gesundheitsgefährdender Fouls und grob unsportlichen Verhaltens in den letzten 30 Sekunden des Spiels, wenn dem Gegner damit die Möglichkeit genommen werden soll, eine Torchance herauszuspielen",
   "Disqualifikationen infolge besonders grob unsportlichen Verhaltens",
   "Alle progressiven Strafen in den letzten 30 Sekunden des Spiels, wenn dem Gegner damit die Möglichkeit genommen werden soll, eine Torchance herauszuspielen"
  ],
  "correct": [
   "e"
  ],
  "rule": "8:5, 8:10a-b, 16:6, 17:10"
 },
 {
  "id": "17.6",
  "section": "17",
  "sectionTitle": "Aufgaben der Schiedsrichter",
  "question": "Wer hat während des Spiels das Recht, den Schiedsrichter anzusprechen?",
  "options": [
   "Alle Spieler",
   "Alle Offiziellen",
   "Mannschaftsverantwortliche",
   "Spielführer"
  ],
  "correct": [
   "c"
  ],
  "rule": "4:2, 17:11"
 },
 {
  "id": "17.7",
  "section": "17",
  "sectionTitle": "Aufgaben der Schiedsrichter",
  "question": "Die Schiedsrichter sind hinsichtlich der verbleibenden Spielzeit unterschiedlicher Auffassung. Im Gespräch will der Torschiedsrichter (Erstgenannter) zunächst 50 Sekunden spielen lassen, der Feldschiedsrichter 42 Sekunden. Wie ist zu entscheiden?",
  "options": [
   "Die längere Spielzeit (50 Sekunden) ist gültig.",
   "Der Erstgenannte ist zuständig (50 Sekunden).",
   "Der Feldschiedsrichter ist zuständig (42 Sekunden).",
   "Die beiden Schiedsrichter müssen sich einigen."
  ],
  "correct": [
   "d"
  ],
  "rule": "17:9"
 },
 {
  "id": "17.8",
  "section": "17",
  "sectionTitle": "Aufgaben der Schiedsrichter",
  "question": "Welcher Schiedsrichter wird bei Spielbeginn Feld- bzw. Torschiedsrichter?",
  "options": [
   "Der in der Ansetzung Erstgenannte wird Feldschiedsrichter.",
   "Der in der Ansetzung Erstgenannte wird Torschiedsrichter.",
   "Die Schiedsrichter losen, wer auf welcher Position beginnt.",
   "Freie Entscheidung der Schiedsrichter"
  ],
  "correct": [
   "d"
  ],
  "rule": "17:1"
 },
 {
  "id": "17.9",
  "section": "17",
  "sectionTitle": "Aufgaben der Schiedsrichter",
  "question": "Bei einem Zusammenprall zweier Spieler pfeifen beide Schiedsrichter. Der Feldschiedsrichter entscheidet auf Stürmerfoul, der Torschiedsrichter auf Vergehen der Abwehr. Wie ist zu entscheiden?",
  "options": [
   "Die Entscheidung des Torschiedsrichters ist maßgebend.",
   "Die Entscheidung des Feldschiedsrichters ist maßgebend.",
   "Die Schiedsrichter kommunizieren und treffen eine gemeinsame Entscheidung.",
   "Time-out ist obligatorisch.",
   "Time-out ist notwendig, wenn die gemeinsame Entscheidung gegen die angreifende Mannschaft fällt.",
   "Time-out ist nicht obligatorisch, wenn die Schiedsrichter elektronische Geräte zur internen Kommunikation benutzen."
  ],
  "correct": [
   "c",
   "d"
  ],
  "rule": "17:7"
 },
 {
  "id": "18.1",
  "section": "18",
  "sectionTitle": "Zeitnehmer und Sekretär",
  "question": "Welche der folgenden Vorgaben trifft das Regelwerk hinsichtlich der Aufgabenteilung von Zeitnehmer und Sekretär?",
  "options": [
   "Die Kontrolle des Aus- und Eintretens der Auswechselspieler ist dem Zeitnehmer vorbehalten.",
   "Generell sollten alle notwendigen Spielunterbrechungen vom Zeitnehmer vorgenommen werden.",
   "Erkennt der Sekretär ein verfrühtes Eintreten eines Auswechselspielers, muss er pfeifen.",
   "Wenn keine öffentliche Zeitmessanlage vorhanden ist, unterrichtet der Zeitnehmer die Mannschaftsverantwortlichen über die bereits gespielte bzw. noch verbleibende Zeit.",
   "Zeitnehmer und Sekretär sind gemeinsam dafür zuständig, die Angriffe zu zählen, wenn ein Spieler nach Behandlung auf der Spielfläche diese erst nach drei Angriffen seiner Mannschaft wieder betreten darf."
  ],
  "correct": [
   "b",
   "d",
   "e"
  ],
  "rule": "18:1, 18:2"
 },
 {
  "id": "18.2",
  "section": "18",
  "sectionTitle": "Zeitnehmer und Sekretär",
  "question": "WEISS 5 hat eine klare Torchance. Offizieller A von Team WEISS beleidigt den Zeitnehmer, woraufhin dieser genau in dem Moment pfeift, als WEISS 5 zum Wurf ansetzt. Das Vergehen wurde nur vom Zeitnehmer bemerkt. Wie ist zu entscheiden?",
  "options": [
   "Freiwurf für Team SCHWARZ",
   "Bestrafung des Offiziellen A von Team WEISS",
   "Freiwurf für Team WEISS",
   "7-Meter-Wurf für Team WEISS",
   "Schriftlicher Bericht"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "Erläuterung 7"
 },
 {
  "id": "18.3",
  "section": "18",
  "sectionTitle": "Zeitnehmer und Sekretär",
  "question": "Ein Mannschaftsverantwortlicher beleidigt den Sekretär, ohne dass die Schiedsrichter dies bemerken. Bei der nächsten Unterbrechung meldet der Sekretär das Vergehen. Wie ist zu entscheiden?",
  "options": [
   "Disqualifikation des Mannschaftsverantwortlichen, schriftlicher Bericht (rote und blaue Karte)",
   "Hinausstellung des Mannschaftsverantwortlichen",
   "Schriftlicher Bericht",
   "Verwarnung des Mannschaftsverantwortlichen",
   "Keine persönliche Strafe möglich"
  ],
  "correct": [
   "c",
   "e"
  ],
  "rule": "18:1, Erläuterung 7B"
 },
 {
  "id": "18.4",
  "section": "18",
  "sectionTitle": "Zeitnehmer und Sekretär",
  "question": "Team WEISS ist an der gegnerischen 9-Meter-Linie in Ballbesitz. Der Delegierte unterbricht das Spiel und berichtet den Schiedsrichtern, dass Offizieller A von Team SCHWARZ ihn beleidigt hat. Wie ist zu entscheiden?",
  "options": [
   "Ermahnung des Offiziellen A von Team SCHWARZ, schriftlicher Bericht",
   "Disqualifikation des Offiziellen A von Team SCHWARZ, schriftlicher Bericht (rote und blaue Karte)",
   "Spielfortsetzung mit Freiwurf für Team WEISS am Auswechselraum von Team SCHWARZ",
   "Spielfortsetzung mit Freiwurf für Team WEISS an der 9-Meter-Linie von Team SCHWARZ"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "8:10a, 13:6, 16:6b, Erläuterung 7B, Auswechselraum-Reglement Nr. 5"
 },
 {
  "id": "18.5",
  "section": "18",
  "sectionTitle": "Zeitnehmer und Sekretär",
  "question": "Team WEISS ist an der gegnerischen 9-Meter-Linie in Ballbesitz. Der Zeitnehmer unterbricht das Spiel und berichtet den Schiedsrichtern, dass Offizieller A von Team WEISS ihn beleidigt hat. Wie ist zu entscheiden?",
  "options": [
   "Schriftlicher Bericht",
   "Hinausstellung des Offiziellen A von Team WEISS, schriftlicher Bericht",
   "Spielfortsetzung mit Freiwurf für Team SCHWARZ am Auswechselraum von Team WEISS",
   "Spielfortsetzung mit dem der Spielsituation entsprechenden Wurf durch Team WEISS"
  ],
  "correct": [
   "a",
   "d"
  ],
  "rule": "13:4a, Erläuterung 7B"
 },
 {
  "id": "18.6",
  "section": "18",
  "sectionTitle": "Zeitnehmer und Sekretär",
  "question": "Der Mannschaftsverantwortliche von Team WEISS begibt sich zum Coachen während des Spieles wiederholt unmittelbar an den Zeitnehmertisch. Dabei protestiert er gegen Entscheidungen der Schiedsrichter. Die Schiedsrichter bemerken wegen des Lärms in der Halle nichts. Wie ist zu entscheiden?",
  "options": [
   "Der Zeitnehmer unterbricht sofort das Spiel und unterrichtet die Schiedsrichter über das Fehlverhalten des Offiziellen A.",
   "Der Zeitnehmer wartet bis zur nächsten Unterbrechung des Spieles und informiert die Schiedsrichter über das Fehlverhalten des Offiziellen A.",
   "Progressive Bestrafung gegen den Offiziellen A von Team WEISS",
   "Keine Bestrafung möglich"
  ],
  "correct": [
   "b",
   "d"
  ],
  "rule": "Erläuterung 7B, Auswechselraum Reglement Nr. 5"
 },
 {
  "id": "18.7",
  "section": "18",
  "sectionTitle": "Zeitnehmer und Sekretär",
  "question": "Haben die Schiedsrichter einen Verstoß gegen das Auswechselraum-Reglement nicht bemerkt, müssen sie von Zeitnehmer/Sekretär",
  "options": [
   "sofort darauf aufmerksam gemacht werden.",
   "bei der nächsten Spielunterbrechung darauf aufmerksam gemacht werden."
  ],
  "correct": [
   "b"
  ],
  "rule": "Erläuterung 7B"
 },
 {
  "id": "18.8",
  "section": "18",
  "sectionTitle": "Zeitnehmer und Sekretär",
  "question": "Wenn der Delegierte aufgrund eines Verstoßes durch Mannschaft WEISS eine sofortige Unterbrechung des Spiels für erforderlich hält, während der Ball im Spiel ist, wird das Spiel anschließend mit Ballbesitz für Mannschaft SCHWARZ fortgesetzt. Trifft diese Aussage zu?",
  "options": [
   "Ja",
   "Nein"
  ],
  "correct": [
   "a"
  ],
  "rule": "Erläuterung 7B"
 },
 {
  "id": "ARR1",
  "section": "ARR",
  "sectionTitle": "Auswechselraum-Reglement",
  "question": "Wie groß sollte der Abstand zwischen Auswechselbänken und Mittellinie sein?",
  "options": [
   "1 Meter",
   "2 Meter",
   "3 Meter",
   "3,5 Meter"
  ],
  "correct": [
   "d"
  ],
  "rule": "Auswechselraum-Reglement Nr. 1"
 },
 {
  "id": "ARR2",
  "section": "ARR",
  "sectionTitle": "Auswechselraum-Reglement",
  "question": "Der Offizielle A von Team WEISS hat bereits auf der Auswechselbank eine Verwarnung erhalten. Er verlässt den Auswechselraum, setzt sich auf die Tribüne und protestiert von dort aus weiter gegen Schiedsrichterentscheidungen. Wie ist zu entscheiden?",
  "options": [
   "Keine Entscheidung möglich",
   "Hinausstellung des Offiziellen A von Team WEISS",
   "Disqualifikation des Offiziellen A von Team WEISS (rote Karte)",
   "Disqualifikation des Offiziellen A von Team WEISS, schriftlicher Bericht (rote und blaue Karte)",
   "Team WEISS wird auf der Spielfläche zwei Minuten lang um einen Spieler reduziert."
  ],
  "correct": [
   "b",
   "e"
  ],
  "rule": "8:7a, 16:3e, Auswechselraum Reglement Nr. 5 und 6"
 }
];
