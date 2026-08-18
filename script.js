(function () {
  "use strict";

  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");

  const startForm = document.getElementById("start-form");
  const questionCountSelect = document.getElementById("question-count");

  const progressBar = document.getElementById("progress-bar");
  const progressLabel = document.getElementById("progress-label");
  const scoreLabel = document.getElementById("score-label");
  const categoryLabel = document.getElementById("category-label");
  const questionText = document.getElementById("question-text");
  const answersList = document.getElementById("answers-list");
  const feedback = document.getElementById("feedback");
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

  function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach((s) => s.classList.add("hidden"));
    screen.classList.remove("hidden");
  }

  function startQuiz(count) {
    const pool = shuffle(QUESTIONS);
    activeQuestions = count >= pool.length ? pool : pool.slice(0, count);
    currentIndex = 0;
    score = 0;
    missed = [];
    showScreen(quizScreen);
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    feedback.textContent = "";
    feedback.className = "feedback";
    nextButton.disabled = true;

    const q = activeQuestions[currentIndex];
    const total = activeQuestions.length;

    progressLabel.textContent = `Frage ${currentIndex + 1} / ${total}`;
    scoreLabel.textContent = `Punkte: ${score}`;
    categoryLabel.textContent = q.category;
    progressBar.style.width = `${(currentIndex / total) * 100}%`;

    questionText.textContent = q.question;
    answersList.innerHTML = "";

    const answerOrder = q.answers.map((text, idx) => ({ text, idx }));
    const shuffledAnswers = shuffle(answerOrder);

    shuffledAnswers.forEach((ans) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer-btn";
      btn.textContent = ans.text;
      btn.addEventListener("click", () => selectAnswer(ans.idx, btn));
      li.appendChild(btn);
      answersList.appendChild(li);
    });
  }

  function selectAnswer(chosenIdx, btnEl) {
    if (answered) return;
    answered = true;

    const q = activeQuestions[currentIndex];
    const isCorrect = chosenIdx === q.correct;

    Array.from(answersList.querySelectorAll(".answer-btn")).forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === q.answers[q.correct]) {
        btn.classList.add("correct");
      }
    });

    if (isCorrect) {
      score += 1;
      btnEl.classList.add("correct");
      feedback.textContent = "Richtig! " + q.explanation;
      feedback.classList.add("feedback-correct");
    } else {
      btnEl.classList.add("wrong");
      feedback.textContent = "Leider falsch. " + q.explanation;
      feedback.classList.add("feedback-wrong");
      missed.push(q);
    }

    scoreLabel.textContent = `Punkte: ${score}`;
    nextButton.disabled = false;
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
    const percent = Math.round((score / total) * 100);

    let verdict;
    if (percent === 100) verdict = "Perfekt! Du kennst die Handballregeln aus dem Effeff.";
    else if (percent >= 80) verdict = "Sehr gut! Du hast die Regeln fest im Griff.";
    else if (percent >= 60) verdict = "Gut gemacht, aber es gibt noch Luft nach oben.";
    else if (percent >= 40) verdict = "Ausbaufähig – ein Blick ins Regelwerk lohnt sich.";
    else verdict = "Zeit, das Regelbuch nochmal zur Hand zu nehmen!";

    resultSummary.innerHTML = `
      <p class="result-score">${score} / ${total} Punkte (${percent}%)</p>
      <p class="result-verdict">${verdict}</p>
    `;

    resultReview.innerHTML = "";
    if (missed.length === 0) {
      const p = document.createElement("p");
      p.textContent = "Du hast alle Fragen richtig beantwortet. Stark!";
      resultReview.appendChild(p);
    } else {
      const heading = document.createElement("h3");
      heading.textContent = "Zum Nacharbeiten:";
      resultReview.appendChild(heading);

      const list = document.createElement("ul");
      list.className = "review-list";
      missed.forEach((q) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${q.question}</strong><br>Richtige Antwort: ${q.answers[q.correct]}<br><span class="review-explanation">${q.explanation}</span>`;
        list.appendChild(li);
      });
      resultReview.appendChild(list);
    }

    showScreen(resultScreen);
  }

  startForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = questionCountSelect.value;
    const count = value === "all" ? QUESTIONS.length : parseInt(value, 10);
    startQuiz(count);
  });

  nextButton.addEventListener("click", nextQuestion);

  quitButton.addEventListener("click", () => {
    finishQuiz();
  });

  restartButton.addEventListener("click", () => {
    showScreen(startScreen);
  });
})();
