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
      questionImage.classList.add("dark__hard-img");
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
  "Qui est l'apprenti de Dark Plagueis ? ",
  ["Dark Nihilus", "Dark Sidious", "Dark Vador"],
  2,
  "./images/jr-korpa-RADGP_E2pBk-unsplash .webp"
);
quiz.addQuestion(question1);

let question2 = new Question(
  "Les Death Troopers sont des :",
  ["Jet troopers", "Pilotes TIE", "Soldats d'élite"],
  3,
  "./images/otto-rascon-5BzS_9rwqos-unsplash.webp"
);
quiz.addQuestion(question2);

let question3 = new Question(
  "D'où viennent les Grysk ? ",
  ["Geonosis", "Régions incconues", "Kashyyyk"],
  2,
  "./images/micha-frank-P5EF4V-wGc8-unsplash.webp"
);
quiz.addQuestion(question3);

let question4 = new Question(
  "Comment s'appelle l'arme des gardes royaux ?",
  ["Pique de Force", "Pique d'Énergie", "Baton de Force"],
  1,
  "./images/otto-rascon-ZlCGx4Gue9w-unsplash.webp"
);
quiz.addQuestion(question4);

let question5 = new Question(
  "Quel nom porte la planète Sith originelle ?",
  ["Malachor", "Korriban", "Jaguada"],
  2,
  "./images/javier-miranda-lH1VONHniMo-unsplash.webp"
);
quiz.addQuestion(question5);

let question6 = new Question(
  "Comment les civils appellent les stormtroopers ?",
  ["Boîtes de conserve", "Boîtes d'allumenttes", "Boîtes d'andouilles"],
  1,
  "./images/brian-mcgowan-itRfuFf1gdY-unsplash.webp"
);
quiz.addQuestion(question6);

let question7 = new Question(
  "Quelle planète a été tranformée en base Starkiller ?",
  ["Mandalore", "Hoth", "Ilum"],
  3,
  "./images/casey-horner-n3i9j5qPiE4-unsplash.webp"
);
quiz.addQuestion(question7);

let question8 = new Question(
  "Quel syndicat du crime dirige Maul ?",
  ["Syndicat Pyke", "Aube Écarlate", "Soleil Noir"],
  2,
  "./images/tom-beier-n3nexpX1ymE-unsplash.webp"
);
quiz.addQuestion(question8);

let question9 = new Question(
  "Qui est la guide spirituelle des Sœurs de la Nuit ?",
  ["Talzin", "Ventress", "Talia"],
  1,
  "./images/sergey-vinogradov-ETAJ0pD-ydE-unsplash.webp"
);
quiz.addQuestion(question9);

let question10 = new Question(
  "Comment s'appelle le vaisseau des Chevaliers de Ren ?",
  ["Y-wing", "Executor", "Night Buzzard"],
  3,
  "./images/brian-mcgowan-oKl7Uhak54U-unsplash.webp"
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
