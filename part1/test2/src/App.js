import { useState } from "react"

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => <p>{counter}</p>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button press history: {allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  //Greetings
  const name = 'Peter'
  const age = 10
  
  //Current date and time
  const now = new Date()
  
  //Single counter and reset button
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  //Complex states
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  let [allClicks, setAll] = useState([])
  const handleLeftClick = () => { 
    setClicks({ ...clicks, left: clicks.left + 1 }) 
    setAll(allClicks.concat('L'))
  }
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
    setAll(allClicks.concat('R'))
  }
  const zeroLeft = () => setClicks({ ...clicks, left: 0 })
  const zeroRight = () => setClicks({ ...clicks, right: 0 })
  const clearAll = () => {
    setClicks({ left: 0, right: 0 })
    setAll(allClicks = [])
  }

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + age} />
      <Hello name={name} age={age} />

      <h1>Current date and time</h1>
      <p>{now.toString()}</p>

      <h1>Single counter and reset</h1>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text="Plus" />
      <Button onClick={decreaseByOne} text="Minus" />
      <Button onClick={setToZero} text="Zero" />

      <h1>Complex states</h1>
      <p>{clicks.left} {clicks.right}</p>
      <Button onClick={handleLeftClick} text="Left" />
      <Button onClick={zeroLeft} text="Zero Left" />
      <Button onClick={handleRightClick} text="Right" />
      <Button onClick={zeroRight} text="Zero Right" />  
      <History allClicks={allClicks} />
      <Button onClick={clearAll} text="Clear" />
    </div>
  )
}

export default App