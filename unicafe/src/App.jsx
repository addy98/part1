import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = ((good)+(bad*-1))/all
  const positive = good/all*100

  return (
    <>
      <h2>give feedback</h2>

      <Button name='good' feedback={good} feedbackSetter={setGood} />
      <Button name='neutral' feedback={neutral} feedbackSetter={setNeutral} />
      <Button name='bad' feedback={bad} feedbackSetter={setBad} />
      
      <h2>statistics</h2>
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}
      average={average}
      positive={positive}/>
    </>
  )
}

export default App
