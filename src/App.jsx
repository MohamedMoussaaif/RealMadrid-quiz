import { useState } from 'react'
import './App.css'
import { Quiz } from './Quiz/Quiz'
import Thankyou from './Quiz/Thankyou'

function App() {

  const [quizFinished, setQuizFinished] = useState(0);
  let [score, setScore] = useState(0);

  return (
    <div>
      <div className={`${quizFinished ? 'hidden' : ''}`}>
        <Quiz setQuizFinished = {setQuizFinished} setScore={setScore} score={score}/>
      </div>
      <div className={`${!quizFinished ? 'hidden' : ''}`}>
        <Thankyou score={score}/>
      </div>
    </div>
  )
}

export default App
