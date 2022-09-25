import React, { useContext} from 'react'
import { QuizContext } from '../context/quizContext'

import './welcome.css'

const welcome = () => {
  const [quizstate, dispatch] = useContext(QuizContext)

  return (
    <div id='welcome'>
        <h2>Seja Bem-Vindo!</h2>
        <p>clique no botão abaixo para começar</p>
        <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>iniciar</button>
    </div>
  )
}

export default welcome