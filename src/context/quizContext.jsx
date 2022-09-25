import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ['Start', 'playing', 'End']

const initialState = {
    gameStage : STAGES[0],
    questions
}

const quizReducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case 'CHANGE_STATE':
            return state    
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const data = useReducer(quizReducer, initialState)
    return <QuizContext.Provider value={data}>{children}</QuizContext.Provider>
}