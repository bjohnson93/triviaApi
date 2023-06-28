export class Question {
  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }


  get MultipleChoiceQ() {
    return `
    <div class="col-12 text-center">
          <h1>${this.category}</h1>
          <h2>${this.question}</h2>
          <h3>${this.difficulty}</h3>
          <div>
            ${this.ComputeQuestionButtons}
          </div>
        </div>
    `
  }

  get ComputeQuestionButtons() {
    let template = ''

    let randomIndex = Math.floor(Math.random() * (this.incorrectAnswers.length + 1))

    this.incorrectAnswers.splice(randomIndex, 0, this.correctAnswer)

    this.incorrectAnswers.forEach(answer => template += `
    <button onclick="app.QuestionsController.guessAnswer(`${ answer }`)" class="btn btn-danger" >${answer}</button>`)
    // this.incorrectAnswers.forEach(answer => template += `
    // <button class="btn ${answer == this.correctAnswer ? 'btn-danger' : 'btn-success'}" >${answer}</button>`)
    return
  }

  get QuestionTemplate() {
    return `
    <section class="row p-5">
    <div class="col-12 fs-1 bg-success text-light">Category: ${this.category}</div>
    </section>
    <section class="row p-3 y">
      <div class="col-12 p-3 bg-secondary">
        <p class="fs-1 p-3">${this.question}</p>
      </div>
    </section>
    <section class="row p-3 fs-3 justify-content-between">
      <div class="col-5 p-5">
      <button class="px-5 py-2 rounded btn btn-primary text-light fs-3" onclick="app.QuestionsController.checkAnswer('True')">True</button>
      
      </div>
      <div class="col-5 p-5">
      <button class="px-5 py-2 rounded btn btn-primary text-light fs-3" onclick="app.QuestionsController.checkAnswer('False')">False</button>
      </div>
    </section>
    `
  }
}


// let qData = {
//   "category": "Science: Computers",
//   "type": "multiple",
//   "difficulty": "easy",
//   "question": "What does CPU stand for?",
//   "correct_answer": "Central Processing Unit",
//   "incorrect_answers": [
//     "Central Process Unit",
//     "Computer Personal Unit",
//     "Central Processor Unit"
//   }