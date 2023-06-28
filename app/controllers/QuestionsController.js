import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawQuestion() {
  let questions = AppState.questions

  let template = ''

  questions.forEach(q => template += q.QuestionTemplate)

  setHTML('questions', template)
}

function _drawCurrentQ() {
  let firstQuestion = AppState.questions[0]
  setHTML('currentQuestion', firstQuestion.MultipleChoiceQ)
}

export class QuestionsController {

  constructor() {
    console.log('the questions controller is hooked up');

    // this.getAnimalQuestion()
    // this.getSportsQuestion()
    this.getMultipleChoice()
    AppState.on('questions', _drawQuestion);
    AppState.on('questions', _drawCurrentQ)

  }

  checkAnswer(bool) {
    questionsService.checkAnswer(bool)

  }


  async getAnimalQuestion() {
    try {
      await questionsService.getAnimalQuestion()
      Pop.success('We have an animal question!')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
  async getMultipleChoice() {
    try {
      await questionsService.getMultipleChoice()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async getSportsQuestion() {
    try {
      await questionsService.getSportsQuestion()
      Pop.success('we have a sports question!!')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
  async getArtQuestion() {
    try {
      await questionsService.getArtQuestion()
      Pop.success('we have a art question!!')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  guessAnswer(userAnswer) {
    questionsService.guessAnswer(userAnswer)
  }
}