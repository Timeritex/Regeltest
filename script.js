(function () {
  "use strict";

  try {
    init();
  } catch (err) {
    console.error("Handball-Quiz: Initialisierung fehlgeschlagen", err);
    const start = document.getElementById("start-screen");
    if (start) {
      const box = document.createElement("div");
      box.style.cssText = "margin-top:1rem;padding:1rem;border-radius:10px;background:#fdecec;color:#8a231e;font-size:0.9rem;";
      box.textContent =
        "Die App konnte nicht gestartet werden (Skriptfehler: " + (err && err.message ? err.message : err) +
        "). Bitte Seite neu laden. Falls das Problem bestehen bleibt, ist evtl. questions.js nicht geladen.";
      start.appendChild(box);
    }
  }

  function init() {

  const SECTION_ORDER = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","ARR"];

  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");

  const startForm = document.getElementById("start-form");
  const modeRadios = document.querySelectorAll('input[name="mode"]');
  const randomCountGroup = document.getElementById("random-count-group");
  const sectionGroup = document.getElementById("section-group");
  const questionCountSelect = document.getElementById("question-count");
  const sectionSelect = document.getElementById("section-select");

  const progressBar = document.getElementById("progress-bar");
  const progressLabel = document.getElementById("progress-label");
  const scoreLabel = document.getElementById("score-label");
  const categoryLabel = document.getElementById("category-label");
  const questionText = document.getElementById("question-text");
  const answersList = document.getElementById("answers-list");
  const referenceLine = document.getElementById("reference-line");
  const resultBanner = document.getElementById("result-banner");
  const submitButton = document.getElementById("submit-button");
  const nextButton = document.getElementById("next-button");
  const quitButton = document.getElementById("quit-button");

  const resultSummary = document.getElementById("result-summary");
  const resultReview = document.getElementById("result-review");
  const restartButton = document.getElementById("restart-button");

  let activeQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let answered = false;
  let missed = [];

  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function letterFor(index) {
    return String.fromCharCode(97 + index); // a, b, c, ...
  }

  // ---- Start screen setup ----

  function sectionCounts() {
    const counts = {};
    QUESTIONS.forEach((q) => {
      counts[q.section] = (counts[q.section] || 0) + 1;
    });
    return counts;
  }

  function populateSectionSelect() {
    const counts = sectionCounts();
    sectionSelect.innerHTML = "";
    SECTION_ORDER.forEach((sec) => {
      const title = SECTION_TITLES[sec] || sec;
      const count = counts[sec] || 0;
      const opt = document.createElement("option");
      opt.value = sec;
      const label = sec === "ARR" ? "ARR" : sec;
      opt.textContent = `${label}. ${title} (${count} Fragen)`;
      sectionSelect.appendChild(opt);
    });
  }

  function updateModeUI() {
    const mode = document.querySelector('input[name="mode"]:checked').value;
    randomCountGroup.classList.toggle("hidden", mode !== "random");
    sectionGroup.classList.toggle("hidden", mode !== "section");
  }

  modeRadios.forEach((radio) => radio.addEventListener("change", updateModeUI));

  populateSectionSelect();
  updateModeUI();

  // ---- Screen management ----

  function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach((s) => s.classList.add("hidden"));
    screen.classList.remove("hidden");
  }

  // ---- Quiz flow ----

  function startQuiz() {
    const mode = document.querySelector('input[name="mode"]:checked').value;

    if (mode === "all") {
      activeQuestions = shuffle(QUESTIONS);
    } else if (mode === "section") {
      const sec = sectionSelect.value;
      activeQuestions = shuffle(QUESTIONS.filter((q) => q.section === sec));
    } else {
      const count = parseInt(questionCountSelect.value, 10);
      const pool = shuffle(QUESTIONS);
      activeQuestions = pool.slice(0, Math.min(count, pool.length));
    }

    currentIndex = 0;
    score = 0;
    missed = [];
    showScreen(quizScreen);
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    referenceLine.classList.add("hidden");
    referenceLine.innerHTML = "";
    resultBanner.classList.add("hidden");
    resultBanner.innerHTML = "";
    submitButton.classList.remove("hidden");
    nextButton.classList.add("hidden");

    const q = activeQuestions[currentIndex];
    const total = activeQuestions.length;

    progressLabel.textContent = `Frage ${currentIndex + 1} / ${total}`;
    scoreLabel.textContent = `Punkte: ${score}`;
    const secTitle = SECTION_TITLES[q.section] || q.section;
    categoryLabel.textContent = `${q.section}. ${secTitle}`;
    progressBar.style.width = `${(currentIndex / total) * 100}%`;

    questionText.textContent = q.question;
    answersList.innerHTML = "";

    q.options.forEach((text, idx) => {
      const letter = letterFor(idx);
      const li = document.createElement("li");
      li.className = "answer-item";

      const label = document.createElement("label");
      label.className = "answer-label";
      label.setAttribute("for", `opt-${idx}`);

      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = `opt-${idx}`;
      input.className = "answer-checkbox";
      input.dataset.letter = letter;

      const badge = document.createElement("span");
      badge.className = "answer-badge";
      badge.textContent = letter;

      const box = document.createElement("span");
      box.className = "answer-box";

      const span = document.createElement("span");
      span.className = "answer-text";
      span.textContent = text;

      label.appendChild(input);
      label.appendChild(badge);
      label.appendChild(box);
      label.appendChild(span);
      li.appendChild(label);
      answersList.appendChild(li);
    });
  }

  function currentSelection() {
    return Array.from(answersList.querySelectorAll(".answer-checkbox"))
      .filter((cb) => cb.checked)
      .map((cb) => cb.dataset.letter)
      .sort();
  }

  function submitAnswer() {
    if (answered) return;
    answered = true;

    const q = activeQuestions[currentIndex];
    const selected = currentSelection();
    const correctSet = q.correct.slice().sort();
    const isCorrect =
      selected.length === correctSet.length &&
      selected.every((l, i) => l === correctSet[i]);

    Array.from(answersList.querySelectorAll(".answer-checkbox")).forEach((cb) => {
      cb.disabled = true;
      const li = cb.closest(".answer-item");
      const letter = cb.dataset.letter;
      const isCorrectLetter = q.correct.includes(letter);
      const isSelected = cb.checked;

      if (isSelected && isCorrectLetter) {
        li.classList.add("state-correct");
      } else if (isSelected && !isCorrectLetter) {
        li.classList.add("state-wrong");
      } else if (!isSelected && isCorrectLetter) {
        li.classList.add("state-missed");
      }
    });

    resultBanner.classList.remove("hidden");
    if (isCorrect) {
      score += 1;
      resultBanner.textContent = "Richtig beantwortet!";
      resultBanner.className = "result-banner result-correct";
    } else {
      resultBanner.textContent = "Nicht ganz richtig.";
      resultBanner.className = "result-banner result-wrong";
      missed.push(q);
    }

    const correctLetters = correctSet.join(", ");
    referenceLine.classList.remove("hidden");
    referenceLine.innerHTML =
      `<span class="reference-question">Frage ${escapeHtml(q.id)}</span>` +
      `<span class="reference-divider">&middot;</span>` +
      `<span class="reference-correct">Richtig: ${escapeHtml(correctLetters)}</span>` +
      `<span class="reference-divider">&middot;</span>` +
      `<span class="reference-rule">Regelbezug: ${escapeHtml(q.rule)}</span>`;

    scoreLabel.textContent = `Punkte: ${score}`;
    submitButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function nextQuestion() {
    currentIndex += 1;
    if (currentIndex >= activeQuestions.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  function finishQuiz() {
    progressBar.style.width = "100%";
    const total = activeQuestions.length;
    const answeredCount = missed.length + score;
    const percent = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0;

    let verdict;
    if (percent === 100) verdict = "Perfekt! Du kennst den Regelfragenkatalog aus dem Effeff.";
    else if (percent >= 80) verdict = "Sehr gut! Du hast die Regeln fest im Griff.";
    else if (percent >= 60) verdict = "Gut gemacht, aber es gibt noch Luft nach oben.";
    else if (percent >= 40) verdict = "Ausbaufähig &ndash; ein Blick ins Regelwerk lohnt sich.";
    else verdict = "Zeit, das Regelbuch nochmal zur Hand zu nehmen!";

    resultSummary.innerHTML = `
      <p class="result-score">${score} / ${answeredCount} Punkte (${percent}%)</p>
      <p class="result-verdict">${verdict}</p>
    `;

    resultReview.innerHTML = "";
    if (missed.length === 0) {
      const p = document.createElement("p");
      p.className = "all-correct";
      p.textContent = "Du hast alle beantworteten Fragen richtig gelöst. Stark!";
      resultReview.appendChild(p);
    } else {
      const heading = document.createElement("h3");
      heading.textContent = `Zum Nacharbeiten (${missed.length})`;
      resultReview.appendChild(heading);

      const list = document.createElement("ul");
      list.className = "review-list";
      missed.forEach((q) => {
        const li = document.createElement("li");
        const correctText = q.correct
          .map((letter) => {
            const idx = letter.charCodeAt(0) - 97;
            return `${letter}) ${q.options[idx]}`;
          })
          .join("<br>");
        li.innerHTML = `
          <div class="review-head">
            <span class="review-id">Frage ${escapeHtml(q.id)}</span>
            <span class="review-section">${escapeHtml(SECTION_TITLES[q.section] || q.section)}</span>
          </div>
          <p class="review-question">${escapeHtml(q.question)}</p>
          <p class="review-correct"><strong>Richtige Antwort${q.correct.length > 1 ? "en" : ""}:</strong><br>${correctText}</p>
          <p class="review-rule">Regelbezug: ${escapeHtml(q.rule)}</p>
        `;
        list.appendChild(li);
      });
      resultReview.appendChild(list);
    }

    showScreen(resultScreen);
  }

  startForm.addEventListener("submit", (e) => {
    e.preventDefault();
    startQuiz();
  });

  submitButton.addEventListener("click", submitAnswer);
  nextButton.addEventListener("click", nextQuestion);

  quitButton.addEventListener("click", () => {
    finishQuiz();
  });

  restartButton.addEventListener("click", () => {
    showScreen(startScreen);
  });

  } // end init()
})();
