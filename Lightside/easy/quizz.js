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
      questionImage.classList.add("light__easy-img");
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
  "Qui est le fidèle compagnon de R2D2 ? ",
  ["Chopper", "BB-8", "C3PO"],
  3,
  "./images/alexandr-popadin-rCZ44N2lKS0-unsplash.webp"
);
quiz.addQuestion(question1);

let question2 = new Question(
  "Sur quelle planète s'est réfugié Yoda ? ",
  ["Dagobah", "Tatooine", "Naboo"],
  1,
  "./images/riku-lu-f50UNtxoeiI-unsplash.webp"
);
quiz.addQuestion(question2);

let question3 = new Question(
  "Comment se nomment les célébres chasseurs rebelles ? ",
  ["Speeder", "TIE", "X-wing"],
  3,
  "./images/rod-long-IzR5fJC9Eso-unsplash.webp"
);
quiz.addQuestion(question3);

let question4 = new Question(
  "Qui est le célébre compagnon de Chewbacca ?",
  ["Han", "Zeb", "Ezra"],
  1,
  "./images/kadyn-pierce-eYUyw7wbGZE-unsplash.webp"
);
quiz.addQuestion(question4);

let question5 = new Question(
  "Quel est le nom du vaisseau de Han ?",
  ["Ghost", "Faucon Millenium", "Phantom"],
  2,
  "./images/eugene-chystiakov-f7VkQtELGyY-unsplash.webp"
);
quiz.addQuestion(question5);

let question6 = new Question(
  "Sur quelle planète Luke rencontre un Wampa (Bigfoot) ?",
  ["Tatooine", "Hoth", "Endor"],
  2,
  "./images/elias-lobos-x5u8s8VKuX8-unsplash.webp"
);
quiz.addQuestion(question6);

let question7 = new Question(
  "Qui était le maître d'Obi-wan ?",
  ["Yoda", "Windu", "Qui-Gon"],
  3,
  "./images/gmax-studios-CnJBqlEiYIU-unsplash.webp"
);
quiz.addQuestion(question7);

let question8 = new Question(
  "Quel nom choisi Rey à la fin de l'épisode 9 ?",
  ["Palpatine", "Kenobi", "Skywalker"],
  3,
  "./images/becky-fantham-DcKkpYS8nC8-unsplash.webp"
);
quiz.addQuestion(question8);

let question9 = new Question(
  "Sur quelle planète Finn rencontre Rey ?",
  ["Jakku", "Tatooine", "Mustafar"],
  1,
  "./images/martin-reisch-ddEBSlXB4YQ-unsplash.webp"
);
quiz.addQuestion(question9);

let question10 = new Question(
  "Qui est le Jedi le plus puissant de l'histoire ?",
  ["Yoda", "Luke", "Anakin"],
  3,
  "./images/eric-niklas-eCyBV7uz9JA-unsplash.webp"
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
