import './App.css'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quizContext'

import Welcome from './components/welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'

function App() {
  const [quizstate, dispatch] = useContext(QuizContext)

  useEffect(()=>{
    dispatch({type: 'REORDER_QUESTIONS'})
  },[])

  return (
    <div className="App">
      <h1>Quiz App</h1>
      { quizstate.gameStage == 'Start' && <Welcome/> }
      { quizstate.gameStage == 'Playing' && <Question/> }
      { quizstate.gameStage == 'End' && <GameOver/> }
    </div>
  )
}

export default App
