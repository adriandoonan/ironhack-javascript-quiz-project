class Quiz {

    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
        this.answersMatrix = Array.from(' '.repeat(questions.length)).map(elem => ({answer:null,score:0}))
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }
    
    moveToNextQuestion() {
        this.currentQuestionIndex++
    }
    moveToPreviousQuestion() {
      this.currentQuestionIndex--
    }

    shuffleQuestions() {
        this.questions.sort((a,b) => Math.random() >= Math.random() ? -1 : 1 )
    }

    checkAnswer(answer) {
        this.answersMatrix[this.currentQuestionIndex].answer = answer
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++
            this.answersMatrix[this.currentQuestionIndex].score = 1
            console.log('correct answers matrix', this.answersMatrix);
            return true
        }
        else {
            //console.log('no, wrong,', answer);
            this.answersMatrix[this.currentQuestionIndex].score = 0
            return false
        }
    }

    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length
    }

    filterQuestionsByDifficulty(difficulty) {
        if (![1,2,3].includes(difficulty)) return 
        this.questions = this.questions.filter(
            question => question.difficulty <= difficulty
            )
    }

    averageDifficulty(){
        return Math.round(this.questions.reduce((acc, cur) => 
            acc + Number(cur.difficulty),0) / this.questions.length);
    }
}



//#region testing
const questionsAve = [
    {
      text: "Question 1",
      choices: ["a", "b", "c"],
      answer: "a",
      difficulty: 1,
    },
    {
      text: "Question 2",
      choices: ["d", "e", "f"],
      answer: "d",
      difficulty: 2,
    },
    {
      text: "Question 3",
      choices: ["g", "h", "i"],
      answer: "g",
      difficulty: 2,
    },
    {
      text: "Question 4",
      choices: ["j", "k", "l"],
      answer: "j",
      difficulty: 1,
    },
    {
      text: "Question 5",
      choices: ["m", "n", "o"],
      answer: "m",
      difficulty: 3,
    },
    {
        text: "Question 5",
        choices: ["m", "n", "o"],
        answer: "m",
        difficulty: 1,
      },
      {
        text: "Question 5",
        choices: ["m", "n", "o"],
        answer: "m",
        difficulty: 1,
      },
      {
        text: "Question 5",
        choices: ["m", "n", "o"],
        answer: "m",
        difficulty: 1,
      },
      {
        text: "Question 5",
        choices: ["m", "n", "o"],
        answer: "m",
        difficulty: 1,
      },
  ];

  questionsAve.reduce((acc, cur) => acc + cur.difficulty,0) / questionsAve.length;


  const quizAve = new Quiz(questionsAve, 60, 60);

  quizAve.averageDifficulty()





const questions = [
    {
      text: "Question 1",
      choices: ["a", "b", "c"],
      answer: "a",
      difficulty: 1,
    },
    {
      text: "Question 2",
      choices: ["d", "e", "f"],
      answer: "d",
      difficulty: 2,
    },
    {
      text: "Question 3",
      choices: ["g", "h", "i"],
      answer: "g",
      difficulty: 2,
    },
    {
      text: "Question 4",
      choices: ["j", "k", "l"],
      answer: "j",
      difficulty: 3,
    },
  ];

  const quiz = new Quiz(questions, 60, 60);

  quiz.questions.length

  quiz.filterQuestionsByDifficulty(2)
  quiz.questions.length

  //#endregion

