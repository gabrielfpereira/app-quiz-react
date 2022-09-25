import React, { useContext} from 'react'
import { QuizContext } from '../context/quizContext'
import Option from './Option'
import './question.css'

const Question = () => {
    const [quizstate, dispatch] = useContext(QuizContext)
    const currentQuestion = quizstate.questions[quizstate.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({type: 'CHECK_ANSWER', payload: { answer: currentQuestion.answer, option}})
    }

  return (
    <div id='question'>
        <p>pergunta {quizstate.currentQuestion + 1} de {quizstate.questions.length}</p>
        <h2>{ currentQuestion.question }</h2>
        <div id="options-container">
            { currentQuestion.options.map((item,index) => (
                <Option 
                    option={item} 
                    key={index} 
                    answer={currentQuestion.answer} 
                    selectOption={() => onSelectOption(item)} />
            ))}
        </div>

        { quizstate.answerSelected && <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>Continuar</button>}
    </div>
  )
}

export default Question