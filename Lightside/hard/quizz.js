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
      questionImage.classList.add("light__hard-img");
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
  "Quel est le nom de bébé Yoda ? ",
  ["Chewi", "Grogu", "BB-8"],
  2,
  "./images/lukas-denier-GtdpQRAMXZk-unsplash.webp"
);
quiz.addQuestion(question1);

let question2 = new Question(
  "À quelle espèce appartient l'Amiral Ackbar ?",
  ["Dowutin", "Chiss", "Mon calamari"],
  3,
  "./images/brian-mcgowan-SE5mmOZWqHE-unsplash.webp"
);
quiz.addQuestion(question2);

let question3 = new Question(
  "À quel jeu Han remporte le faucon de Lando ? ",
  ["Sabacc", "Jhabacc", "Basacc"],
  1,
  "./images/brian-mcgowan-OVMZUckcQYo-unsplash.webp"
);
quiz.addQuestion(question3);

let question4 = new Question(
  "De quelle planète vient Ezra Bridger ?",
  ["Bakura", "Lothal", "Dathomir"],
  2,
  "./images/javier-miranda-Jn2EaLLYZfY-unsplash.webp"
);
quiz.addQuestion(question4);

let question5 = new Question(
  "Quel objet Jedi/Sith contient des secrets sur la force ?",
  ["Holocron", "Sabre", "Puce de crédits"],
  1,
  "./images/victor-serban-SgAqgz9tEKw-unsplash.webp"
);
quiz.addQuestion(question5);

let question6 = new Question(
  "L'ascendance chiss se déplace en Hyperespace grâce aux :",
  ["Navigateurs", "Navigatrices", "Ordinateurs"],
  2,
  "./images/wei-zeng-MLwVJh8qeQg-unsplash.webp"
);
quiz.addQuestion(question6);

let question7 = new Question(
  "Que détient Din Djarin ?",
  ["Le Pink saber", "Le Grey saber", "Le Dark saber"],
  3,
  "./images/michael-marais-JLHyIwix46c-unsplash.webp"
);
quiz.addQuestion(question7);

let question8 = new Question(
  "De qui est composé la Bad Batch ?",
  ["Clones modifiés", "Super droïdes", "Jedi gris"],
  1,
  "./images/anton-ivanov-HNk2D-e7OsE-unsplash.webp"
);
quiz.addQuestion(question8);

let question9 = new Question(
  "Sur quelle planète meurt Cassian Andor ?",
  ["Endor", "Scarif", "Ferrix"],
  2,
  "./images/aishath-naj-jwnsA9jX81U-unsplash.webp"
);
quiz.addQuestion(question9);

let question10 = new Question(
  "Que casse Ahsoka sur l'armure de Vador ?",
  ["Son casque", "Son plastron", "Sa jambe"],
  1,
  "./images/matt-hudson--qgZfQlF-20-unsplash.webp"
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
