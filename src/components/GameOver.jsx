import React,{useContext} from 'react'
import { QuizContext } from '../context/quizContext'
import './gameOver.css'

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id='gameOver'>
      <h2>Game Over</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>

      <button onClick={()=> dispatch({type: 'RESTART'})}>Reinicar</button>
    </div>
  )
}

export default GameOver