import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { Pop } from "../utils/Pop.js";
import { questionsApi } from "./AxiosService.js"

class QuestionsService {
  guessAnswer(userAnswer) {
    let q = AppState.questions[0]
    if (userAnswer == q.correctAnswer) {
      Pop.success('You got it right!')
    }
    else {
      Pop.error("You've got it wrong!")
    }

    AppState.questions.shift()

    AppState.emit('questions')
  }
  async getMultipleChoice() {
    const res = await triviaApi.get('?amount=10&type=multiple')
    console.log('got questions', res.data);
    const realQuestions = res.data.results.map(questionPojo => new Question(questionPojo))
    AppState.questions = realQuestions

  }
  async getAnimalQuestion() {

    const response = await questionsApi.get('?amount=1&category=27&difficulty=easy&type=boolean')

    // console.log('got animal questions', response.data);
    //use map to create classed version of data. When using .map() to class your data, make sure the .map is happening on the correct property, holding an array of data objects from the api.
    //when you console log the above, the object is response, then results
    const arrayOfAnimalQuestions = response.data.results.map(qPojo => new Question(qPojo))
    // console.log(arrayOfAnimalQuestions);
    AppState.questions = arrayOfAnimalQuestions
    AppState.emit('questions')
  }
  async getSportsQuestion() {
    const response = await questionsApi.get('?amount=1&category=21&difficulty=easy&type=boolean')
    console.log('here is a sports question', response.data);
    const arrayOfSportsQuestions = response.data.results.map(qPojo => new Question(qPojo))
    AppState.questions = arrayOfSportsQuestions
    console.log(arrayOfSportsQuestions);
    AppState.emit('questions')
  }
  async getArtQuestion() {
    const response = await questionsApi.get('?amount=1&category=25&difficulty=easy&type=boolean')
    console.log('here is an art question', response.data);
    const arrayOfArtQuestions = response.data.results.map(qPojo => new Question(qPojo))
    AppState.questions = arrayOfArtQuestions
    console.log(arrayOfArtQuestions);
    AppState.emit('questions')
  }
  checkAnswer(bool) {
    //you want to take answers out of array
    let question = AppState.questions[0]
    console.log('here is the question', question);

    // I want to compare their answer to see if it is the correct or incorrect answer
    if (question.correctAnswer == bool) {
      console.log('you are right!')
      Pop.success('Nicely Done!')
    } else

      console.log('you are wrong, the correct answer is ', question.correctAnswer);
    Pop.error('Nope, you are wrong')
    return

    //if it is correct, congratulate them and generate a new question  
    //if it is incorrect, tell them they're wrong and generate new question
  }

}

export const questionsService = new QuestionsService()