import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
    gameStage : STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false
}

const quizReducer = (state, action) => {

    switch (action.type) {
        case 'CHANGE_STATE':
            return {...state, gameStage: STAGES[1]}

        case 'REORDER_QUESTIONS':
            const reordered_questions = questions.sort(()=>{
               return Math.random() - 0.5
            })

            return {...state, questions: reordered_questions}

        case 'CHANGE_QUESTION':
            const nextCurrentQuesiton = state.currentQuestion + 1
            let endGame = false

            if(!questions[nextCurrentQuesiton]){
                endGame = true
            }
            return {
                ...state, 
                currentQuestion: nextCurrentQuesiton, 
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false
            }

        case 'RESTART':
            return initialState
        
        case 'CHECK_ANSWER':
            if(state.answerSelected) return state
            let correctAnswer = 0

            if(action.payload.answer == action.payload.option) correctAnswer = 1

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: action.payload.option
            }
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const data = useReducer(quizReducer, initialState)
    return <QuizContext.Provider value={data}>{children}</QuizContext.Provider>
}