import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value, unit='' }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value} {unit}</td>
    </tr>
  )
}

const Statics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return (<p>No feedback given</p>)
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} unit="%" />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  //button click handlers
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleZero = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
  }

  //calculations for the statistics
  const calcTotal = () => good + neutral + bad
  const calcAverage = () => (good - bad) / calcTotal()
  const calcPositive = () => (good / calcTotal()) * 100

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Button onClick={handleZero} text="Clear" />
      <h1>Statistics</h1>
      <Statics good={good} neutral={neutral} bad={bad} total={calcTotal()} average={calcAverage()} positive={calcPositive()} />
    </div>
  )
}

export default App