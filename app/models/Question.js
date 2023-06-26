export class Question {
  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
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