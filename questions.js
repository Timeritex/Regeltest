// Fragenkatalog für den Handball-Regelfragen-Test
// Jede Frage: Text, 4 Antwortmöglichkeiten, Index der richtigen Antwort, Erklärung, Kategorie
const QUESTIONS = [
  {
    category: "Spielfeld & Ausrüstung",
    question: "Wie groß ist ein reguläres Handballfeld?",
    answers: ["20 m x 40 m", "18 m x 36 m", "20 m x 45 m", "25 m x 50 m"],
    correct: 0,
    explanation: "Das Spielfeld ist 40 m lang und 20 m breit und besteht aus zwei Torräumen und dem Mittelfeld."
  },
  {
    category: "Spielfeld & Ausrüstung",
    question: "Wie weit ist die Torraumlinie vom Tor entfernt?",
    answers: ["4 m", "6 m", "7 m", "9 m"],
    correct: 1,
    explanation: "Die Torraumlinie verläuft im Abstand von 6 m parallel zur Torlinie."
  },
  {
    category: "Spielfeld & Ausrüstung",
    question: "In welchem Abstand zum Tor liegt die 7-m-Linie?",
    answers: ["6 m", "7 m", "9 m", "10 m"],
    correct: 1,
    explanation: "Die 7-m-Linie ist eine 1 m lange Linie im Abstand von 7 m vor dem Tor, von der aus Strafwürfe ausgeführt werden."
  },
  {
    category: "Spielfeld & Ausrüstung",
    question: "Wie groß sind die Tore im Handball?",
    answers: ["2 m x 3 m", "2 m x 3,5 m", "2,44 m x 3,66 m", "2,5 m x 4 m"],
    correct: 0,
    explanation: "Ein Handballtor ist 2 m hoch und 3 m breit (Innenmaße)."
  },
  {
    category: "Zeitregeln",
    question: "Wie lange dauert ein reguläres Handballspiel bei Erwachsenen?",
    answers: ["2 x 20 Minuten", "2 x 25 Minuten", "2 x 30 Minuten", "2 x 35 Minuten"],
    correct: 2,
    explanation: "Bei Erwachsenen (ab 16 Jahren) wird 2 x 30 Minuten gespielt, mit 10 bis 15 Minuten Halbzeitpause."
  },
  {
    category: "Zeitregeln",
    question: "Wie viele Team-Auszeiten stehen jeder Mannschaft pro Spiel (reguläre Spielzeit) zu?",
    answers: ["1", "2", "3", "4"],
    correct: 2,
    explanation: "Jedes Team hat 3 Team-Auszeiten von je 1 Minute, davon maximal 2 pro Halbzeit."
  },
  {
    category: "Zeitregeln",
    question: "Wie lange dauert eine Zeitstrafe?",
    answers: ["1 Minute", "2 Minuten", "3 Minuten", "5 Minuten"],
    correct: 1,
    explanation: "Eine Zeitstrafe dauert 2 Minuten; der bestrafte Spieler darf in dieser Zeit nicht mitspielen und nicht ersetzt werden."
  },
  {
    category: "Spielerregeln",
    question: "Wie viele Spieler einer Mannschaft dürfen gleichzeitig auf dem Feld stehen (inkl. Torwart)?",
    answers: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "Jede Mannschaft hat maximal 7 Spieler gleichzeitig auf dem Feld – 6 Feldspieler und 1 Torwart."
  },
  {
    category: "Spielerregeln",
    question: "Wie viele Schritte darf ein Spieler maximal mit dem Ball in der Hand machen, ohne zu dribbeln?",
    answers: ["2 Schritte", "3 Schritte", "4 Schritte", "5 Schritte"],
    correct: 1,
    explanation: "Ein Spieler darf maximal 3 Schritte mit dem Ball in der Hand gehen, bevor er ihn abspielen, werfen oder dribbeln muss."
  },
  {
    category: "Spielerregeln",
    question: "Wie lange darf ein Spieler den Ball maximal halten, ohne ihn zu dribbeln, abzuspielen oder zu werfen?",
    answers: ["1 Sekunde", "2 Sekunden", "3 Sekunden", "5 Sekunden"],
    correct: 2,
    explanation: "Der Ball darf maximal 3 Sekunden lang in der Hand gehalten werden, ohne dass er den Boden berührt (Dribbling) oder abgespielt wird."
  },
  {
    category: "Spielerregeln",
    question: "Was passiert, wenn ein Spieler den Ball nach einem beendeten Dribbling erneut aufnimmt und wieder dribbelt (Doppeldribbling)?",
    answers: [
      "Nichts, das ist erlaubt",
      "Freiwurf für die gegnerische Mannschaft",
      "7-Meter-Wurf für die gegnerische Mannschaft",
      "Zeitstrafe für den Spieler"
    ],
    correct: 1,
    explanation: "Doppeldribbling (erneutes Dribbeln nach bereits beendetem Dribbling) wird mit Freiwurf für die gegnerische Mannschaft geahndet."
  },
  {
    category: "Spielerregeln",
    question: "Wie viele Auswechselspieler darf eine Mannschaft maximal für ein Spiel melden (zusätzlich zu den 7 Feldspielern)?",
    answers: ["5", "7", "9", "14 insgesamt inkl. Torwarte"],
    correct: 3,
    explanation: "Ein Mannschaftskader besteht aus maximal 16 Spielern, davon dürfen 14 Spieler gleichzeitig auf dem Spielberichtsbogen stehen (inkl. Torhüter) und beliebig oft ausgewechselt werden."
  },
  {
    category: "Spielerregeln",
    question: "Wo dürfen Spieler ausgewechselt werden?",
    answers: [
      "Nur an der Mittellinie",
      "Überall entlang der Seitenlinie der eigenen Wechselzone",
      "Nur hinter der eigenen Torlinie",
      "Nur während einer Auszeit"
    ],
    correct: 1,
    explanation: "Auswechslungen erfolgen jederzeit (auch während des laufenden Spiels) innerhalb der eigenen Wechselzone an der Seitenlinie."
  },
  {
    category: "Torwart",
    question: "Darf ein Torwart den Ball innerhalb seines Torraums mit dem Fuß spielen?",
    answers: [
      "Ja, uneingeschränkt",
      "Nein, das ist nie erlaubt",
      "Nur bei der Abwehr eines Wurfs",
      "Nur wenn kein Gegenspieler in der Nähe ist"
    ],
    correct: 0,
    explanation: "Im eigenen Torraum darf der Torwart den Ball mit jedem Körperteil, auch mit dem Fuß, spielen und abwehren."
  },
  {
    category: "Torwart",
    question: "Was passiert, wenn ein Feldspieler den Torraum betritt, um dadurch einen Vorteil zu erlangen?",
    answers: [
      "Nichts, solange der Ball nicht im Torraum ist",
      "Freiwurf für die gegnerische Mannschaft",
      "Der Spieler wird automatisch disqualifiziert",
      "Einwurf für die gegnerische Mannschaft"
    ],
    correct: 1,
    explanation: "Das Betreten des gegnerischen Torraums, um einen Vorteil zu erlangen (z. B. schnellere Abwehr oder Vermeidung von Deckung), wird mit Freiwurf bestraft."
  },
  {
    category: "Torwart",
    question: "Darf ein Torwart das eigene Spielfeld (außerhalb des Torraums) als Feldspieler betreten?",
    answers: [
      "Nein, niemals",
      "Ja, er darf sich wie ein normaler Feldspieler am Spiel beteiligen",
      "Nur in der zweiten Halbzeit",
      "Nur nach Absprache mit dem Schiedsrichter"
    ],
    correct: 1,
    explanation: "Ein Torwart darf jederzeit das Spielfeld verlassen bzw. betreten und sich als Feldspieler am Angriffsspiel beteiligen."
  },
  {
    category: "Fouls & Strafen",
    question: "Welche Sanktionsstufen gibt es im Handball in aufsteigender Reihenfolge?",
    answers: [
      "Zeitstrafe – Verwarnung – Rote Karte",
      "Verwarnung – Zeitstrafe – Rote Karte",
      "Rote Karte – Verwarnung – Zeitstrafe",
      "Freiwurf – Verwarnung – Zeitstrafe"
    ],
    correct: 1,
    explanation: "Die progressive Bestrafung verläuft von der Verwarnung (gelbe Karte) über die Zeitstrafe (2 Minuten) bis zur Disqualifikation (rote Karte)."
  },
  {
    category: "Fouls & Strafen",
    question: "Wie viele Zeitstrafen führen bei ein und demselben Spieler automatisch zur Disqualifikation?",
    answers: ["1", "2", "3", "4"],
    correct: 2,
    explanation: "Erhält ein Spieler die dritte Zeitstrafe, wird er automatisch disqualifiziert (rote Karte)."
  },
  {
    category: "Fouls & Strafen",
    question: "Was bedeutet eine rote Karte für einen Spieler?",
    answers: [
      "2 Minuten Zeitstrafe",
      "Verwarnung ohne weitere Folgen",
      "Disqualifikation für den Rest des Spiels, Mannschaft darf nach 2 Minuten wieder komplett spielen",
      "Sofortiger Spielabbruch"
    ],
    correct: 2,
    explanation: "Eine rote Karte bedeutet die Disqualifikation des Spielers für den Rest des Spiels. Die Mannschaft muss zunächst 2 Minuten in Unterzahl spielen, danach darf sie wieder mit voller Spielerzahl antreten (sofern kein zusätzlicher Bericht vorliegt)."
  },
  {
    category: "Fouls & Strafen",
    question: "Wofür wird zusätzlich zur roten Karte ein Bericht erstellt?",
    answers: [
      "Bei jedem Foulspiel",
      "Bei besonders groben Regelverstößen oder unsportlichem Verhalten",
      "Nur bei Torwartwechseln",
      "Bei jeder Zeitstrafe"
    ],
    correct: 1,
    explanation: "Ein Bericht wird erstellt, wenn ein Verstoß so schwerwiegend ist, dass ihn der Verband gesondert bewerten muss (z. B. für mögliche Sperren)."
  },
  {
    category: "Fouls & Strafen",
    question: "Womit wird ein Regelverstoß geahndet, der die Torchance eindeutig verhindert (Torchance-Verhinderung)?",
    answers: [
      "Immer nur Freiwurf",
      "Mindestens Zeitstrafe, ggf. auch Disqualifikation",
      "Automatisch rote Karte ohne Möglichkeit einer geringeren Strafe",
      "Einwurf für die gegnerische Mannschaft"
    ],
    correct: 1,
    explanation: "Die Vereitelung einer klaren Torchance durch ein Foul wird in der Regel mit mindestens einer 2-Minuten-Zeitstrafe geahndet."
  },
  {
    category: "Fouls & Strafen",
    question: "Was ist die Vorteilsregel im Handball?",
    answers: [
      "Der Schiedsrichter pfeift jedes Foul sofort ab",
      "Bei einem Foul wird nicht abgepfiffen, wenn die gefoulte Mannschaft dadurch im Ballbesitz bleibt und keinen Nachteil hat",
      "Ein Team bekommt automatisch einen 7-Meter, wenn es im Vorteil ist",
      "Die führende Mannschaft darf länger in Ballbesitz bleiben"
    ],
    correct: 1,
    explanation: "Bei der Vorteilsregel unterbricht der Schiedsrichter das Spiel nicht, wenn die gefoulte Mannschaft trotz des Fouls im Vorteil bleibt (z. B. weiterhin den Ball kontrolliert)."
  },
  {
    category: "Wurfarten & Ballbesitz",
    question: "Womit wird das Spiel nach einem erzielten Tor fortgesetzt?",
    answers: ["Einwurf", "Anwurf in der Spielfeldmitte", "Abwurf des Torwarts", "7-Meter-Wurf"],
    correct: 1,
    explanation: "Nach jedem Tor wird das Spiel mit einem Anwurf der gegnerischen Mannschaft in der Spielfeldmitte fortgesetzt."
  },
  {
    category: "Wurfarten & Ballbesitz",
    question: "Wann kommt es zu einem Einwurf?",
    answers: [
      "Wenn der Ball die Seitenlinie vollständig überquert oder von einem Feldspieler zuletzt ins Toraus gespielt wurde",
      "Nach jedem Foul",
      "Nach jeder Zeitstrafe",
      "Wenn der Torwart den Ball fängt"
    ],
    correct: 0,
    explanation: "Ein Einwurf wird ausgeführt, wenn der Ball die Seitenlinie vollständig überschritten hat oder ein Feldspieler den Ball zuletzt berührt hat, bevor er die Torauslinie überquerte."
  },
  {
    category: "Wurfarten & Ballbesitz",
    question: "Wann wird ein 7-Meter-Wurf verhängt?",
    answers: [
      "Bei jedem Freiwurf in Tornähe",
      "Wenn eine klare Torchance regelwidrig vereitelt wird",
      "Nach jeder Auszeit",
      "Wenn der Torwart den Ball ins Toraus lenkt"
    ],
    correct: 1,
    explanation: "Ein 7-Meter-Wurf wird verhängt, wenn eine eindeutige Torchance durch einen Regelverstoß der Abwehr zunichtegemacht wird, unter anderem auch bei Torraumfehlern des Torwarts."
  },
  {
    category: "Wurfarten & Ballbesitz",
    question: "Darf beim Freiwurf oder 7-Meter direkt ein Tor erzielt werden?",
    answers: [
      "Nur beim 7-Meter, beim Freiwurf nie",
      "Bei beiden ja, direkt aus dem Wurf",
      "Nur beim Freiwurf, beim 7-Meter nie",
      "Bei keinem von beiden"
    ],
    correct: 1,
    explanation: "Sowohl beim Freiwurf als auch beim 7-Meter-Wurf kann direkt ein Tor erzielt werden."
  },
  {
    category: "Wurfarten & Ballbesitz",
    question: "Was ist \"Passives Spiel\"?",
    answers: [
      "Ein Team verzichtet erkennbar darauf, aktiv einen Torabschluss zu suchen",
      "Ein Team spielt ohne Torwart",
      "Ein Team wechselt sehr oft aus",
      "Ein Team verzögert absichtlich den Einwurf"
    ],
    correct: 0,
    explanation: "Passives Spiel liegt vor, wenn eine Mannschaft keine erkennbare Absicht zeigt, einen Torwurf zu versuchen, und wird mit Freiwurf für die gegnerische Mannschaft geahndet."
  },
  {
    category: "Wurfarten & Ballbesitz",
    question: "Wie weit müssen gegnerische Spieler bei der Ausführung eines Freiwurfs mindestens entfernt sein?",
    answers: ["1 m", "2 m", "3 m", "6 m"],
    correct: 2,
    explanation: "Gegnerische Spieler müssen bei einem Freiwurf mindestens 3 m Abstand zum ausführenden Spieler halten."
  },
  {
    category: "Sonstiges",
    question: "Wie viele Schiedsrichter leiten ein Handballspiel in der Regel auf dem Feld?",
    answers: ["1", "2", "3", "4"],
    correct: 1,
    explanation: "Ein Spiel wird in der Regel von zwei gleichberechtigten Schiedsrichtern geleitet, unterstützt von Zeitnehmer und Sekretär am Tisch."
  },
  {
    category: "Sonstiges",
    question: "Was passiert bei Unentschieden am Ende eines K.-o.-Spiels, das einen Sieger benötigt?",
    answers: [
      "Elfmeterschießen (7-Meter-Werfen) sofort",
      "Zunächst Verlängerung, danach ggf. 7-Meter-Werfen",
      "Das Spiel wird wiederholt",
      "Der Verein mit dem besseren Torverhältnis der Liga gewinnt"
    ],
    correct: 1,
    explanation: "Bei Spielen, die einen Sieger erfordern, folgt nach Unentschieden zunächst eine Verlängerung (2 x 5 Minuten, ggf. eine zweite), erst danach entscheidet das 7-Meter-Werfen."
  },
  {
    category: "Sonstiges",
    question: "Darf ein Spieler den Ball absichtlich mit dem Fuß oder Bein spielen?",
    answers: [
      "Ja, das ist immer erlaubt",
      "Nein, das wird mit Freiwurf für die gegnerische Mannschaft geahndet",
      "Nur der Torwart darf das im Feld",
      "Nur in der eigenen Hälfte"
    ],
    correct: 1,
    explanation: "Feldspieler dürfen den Ball nicht absichtlich mit Fuß oder Bein unterhalb des Knies spielen; ein Verstoß führt zu Freiwurf für die Gegner."
  },
  {
    category: "Sonstiges",
    question: "Wie wird gefährliches Spiel, z. B. ein Wurf mit Schwung gegen den Kopf eines Gegenspielers, im Regelfall geahndet?",
    answers: [
      "Immer nur mit Freiwurf",
      "Je nach Schwere mindestens mit Zeitstrafe, bis hin zur Disqualifikation",
      "Nie geahndet, da Teil des Spiels",
      "Nur mit einer Verwarnung"
    ],
    correct: 1,
    explanation: "Aktionen mit Verletzungsgefahr für den Kopf/Hals werden konsequent geahndet, in der Regel mindestens mit einer 2-Minuten-Zeitstrafe."
  },
  {
    category: "Sonstiges",
    question: "Was gilt für das Blocken eines Gegenspielers mit dem Arm oder der Hand?",
    answers: [
      "Blocken mit gestrecktem, angelegtem Arm ist erlaubt",
      "Jeglicher Körperkontakt ist grundsätzlich verboten",
      "Nur mit beiden Händen erlaubt",
      "Nur der Torwart darf blocken"
    ],
    correct: 0,
    explanation: "Der Gegenspieler darf mit dem Körper (auch mit angelegtem, gestrecktem Arm) gestellt und am Weiterlaufen gehindert werden, solange kein Halten, Stoßen oder Schlagen erfolgt."
  }
];
