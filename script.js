const quizData = [
  {
    question: "What is a database?",
    a: "DBMS is a collection of queries",
    b: "DBMS is a high-level language",
    c: "DBMS is a programming language",
    d: "DBMS stores, modifies and retrieves data",
    correct: "d",
  },
  {
    question: "Who created the first DBMS?",
    a: "Edgar Frank Codd",
    b: "Charles Bachman",
    c: "Charles Babbage",
    d: "Sharon B. Codd",
    correct: "b",
  },
  {
    question: "Which of the following is not a type of database?",
    a: "Hierarchical",
    b: "Network",
    c: "Distributed",
    d: "Decentralized",
    correct: "d",
  },
  {
    question: "Which of the following is not an example of DBMS?",
    a: "MySQL",
    b: "Microsoft Acess",
    c: "IBM DB2",
    d: "Google",
    correct: "d",
  },
  {
    question: "Which of the following is a component of the DBMS?",
    a: "Data",
    b: "Data Languages",
    c: "Data Manager",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Which command is used to remove a relation from an SQL?",
    a: "Drop table",
    b: "Delete",
    c: "Purge",
    d: "Remove",
    correct: "a",
  },
  {
    question:
      "Which forms have a relation that contains information about a single entity?",
    a: "4NF",
    b: "2NF",
    c: "5NF",
    d: "3NF",
    correct: "a",
  },
  {
    question: "The oldest DB model is ________",
    a: "Network",
    b: "Physical",
    c: "Hierarchical",
    d: "Relational",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEL = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEL.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}</h2>
      <button onclick = 'location.reload()'>Reload</button>`;
    }
  }
});
