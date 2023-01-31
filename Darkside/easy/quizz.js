let top__container = document.getElementById("top__container");
let questions__container = document.getElementById("questions__container");
let finish__container = document.getElementById("finish__container");

//Quizz's function
function Quiz() {
  this.questions = [];
  this.answerCorrectsNumber = 0;
  this.indexCurrentQuestion = 0;

  this.addQuestion = function (question) {
    this.questions.push(question);
  };

  this.displayCurrentQuestion = function () {
    if (this.indexCurrentQuestion < this.questions.length) {
      this.questions[this.indexCurrentQuestion].getElement(
        this.indexCurrentQuestion + 1,
        this.questions.length
      );
    } else {
      questions__container.style.display = "none";

      let NbrCorrectUser = document.querySelector("#answerCorrectsNumber");
      NbrCorrectUser.textContent = quiz.answerCorrectsNumber;
      finish__container.style.display = "block";
    }
  };
}

//Questions's function
function Question(title, answers, answerCorrect, image) {
  (this.image = image),
    (this.title = title),
    (this.answers = answers),
    (this.answerCorrect = answerCorrect),
    (this.getElement = function (indexQuestion, nbrOfQuestions) {
      let questionImage = document.createElement("img");
      questionImage.classList.add("image__questions");
      questionImage.classList.add("dark__easy-img");
      questionImage.src = this.image;

      questions__container.append(questionImage);

      let questionTitle = document.createElement("h3");
      questionTitle.classList.add("title_questions");
      questionTitle.textContent = this.title;

      questions__container.append(questionTitle);

      let questionAnswer = document.createElement("ul");
      questionAnswer.classList.add("list_questions");

      this.answers.forEach((answer, index) => {
        let answerElement = document.createElement("li");
        answerElement.classList.add("answers");
        answerElement.textContent = answer;
        answerElement.id = index + 1;
        answerElement.addEventListener("click", this.checkAnswer);

        questionAnswer.append(answerElement);
      });

      let questionNumber = document.createElement("h4");
      questionNumber.classList.add("avancement_question");
      questionNumber.textContent =
        "Questions : " + indexQuestion + "/" + nbrOfQuestions;

      questions__container.append(questionNumber);

      questions__container.append(questionAnswer);
    });

  (this.addAnswer = function (answer) {
    this.answers.push(answer);
  }),
    (this.checkAnswer = (e) => {
      let answerSelect = e.target;
      if (this.isCorrectAnswer(answerSelect.id)) {
        answerSelect.classList.add("answersCorrect");
        quiz.answerCorrectsNumber++;
      } else {
        answerSelect.classList.add("answersWrong");
        let RightAnswer = document.getElementById(this.answerCorrect);
        RightAnswer.classList.add("answersCorrect");
      }

      setTimeout(function () {
        questions__container.textContent = "";
        quiz.indexCurrentQuestion++;
        quiz.displayCurrentQuestion();
      }, 1100);
    });

  this.isCorrectAnswer = function (answerUser) {
    if (answerUser == this.answerCorrect) {
      return true;
    } else {
      return false;
    }
  };
}

let quiz = new Quiz();

let question1 = new Question(
  "Qui est Dark Vador ? ",
  ["Obi-Wan Kenobi", "Anakin Skywalker", "Plo Koon"],
  2,
  "./images/daniel-maquiling-LSnUMmRm7Sk-unsplash.webp"
);
quiz.addQuestion(question1);

let question2 = new Question(
  "Quelle est la particularité du sabre laser de Dark Maul ? ",
  ["Il est en or", "Il est jaune", "Il a une double lame"],
  3,
  "./images/pexels-otto-rascon-9482201.webp"
);
quiz.addQuestion(question2);

let question3 = new Question(
  "À quoi correspond l'ordre 66 ? ",
  ["Les droïdes se coupent", "La purge Jedi", "Les clones dansent"],
  2,
  "./images/bimata-prathama-JQb5c40ijlY-unsplash.webp"
);
quiz.addQuestion(question3);

let question4 = new Question(
  "Kylo Ren est le fils de :",
  ["Han et Leïa", "Han et Luke", "Leïa et Luke"],
  1,
  "./images/nathalia-arantes-3aF6LlaCo38-unsplash.webp"
);
quiz.addQuestion(question4);

let question5 = new Question(
  "Qui est le Comte Dooku ?",
  ["Dark Tyranus", "Dark Sidious", "Dark Vador"],
  1,
  "./images/jr-korpa-RADGP_E2pBk-unsplash.webp"
);
quiz.addQuestion(question5);

let question6 = new Question(
  "Combien y a t-il de Sith sous l'air de la République ?",
  ["10", "125", "2"],
  3,
  "./images/cade-roberts-EpIUbeFrqwQ-unsplash.webp"
);
quiz.addQuestion(question6);

let question7 = new Question(
  "Pour qui combat le capitaine Phasma ?",
  ["L'empire", "Le premier ordre", "La république"],
  2,
  "./images/eduardo-balderas-uoRwuaQhMBw-unsplash.webp"
);
quiz.addQuestion(question7);

let question8 = new Question(
  "Qui a tué Qui-Gon Jin ?",
  ["Sidious", "Maul", "Jango Fett"],
  2,
  "./images/zain-saleem-aPAkXcVouEE-unsplash.webp"
);
quiz.addQuestion(question8);

let question9 = new Question(
  "Sur quelle planète Obi-Wan coupe les membres de Vador ?",
  ["Kashyyyk", "Naboo", "Mustafar"],
  3,
  "./images/tanya-grypachevskaya-80x3QULJDN4-unsplash.webp"
);
quiz.addQuestion(question9);

let question10 = new Question(
  "Qui est le Sith le plus puissant ?",
  ["Vador", "Tyranus", "Sidious"],
  3,
  "./images/marek-piwnicki-4Kiq_mLEIO0-unsplash.webp"
);
quiz.addQuestion(question10);

let questionsNumber = document.querySelectorAll(".questionsNumber");

questionsNumber.forEach(function (questionsNumber) {
  questionsNumber.textContent = quiz.questions.length;
});

//Start Questions's function
function startQuestions() {
  top__container.style.display = "none";
  questions__container.style.display = "block";

  quiz.displayCurrentQuestion();
}

let btn_start = document.getElementById("btn_start");
btn_start.addEventListener("click", startQuestions);
