import { useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Footer from './components/Footer'


const Statistics = (props) => {
  if (props.text)
  return (
      <tr>
        <td>{props.text}:</td>
        <td>{props.value}</td>
      </tr> 
  )
}


const App = () => {
  const headName = "Give us your feedback!"
  const footName = "statistics"
  const [clicks, setClicks] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
  })
  

  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)

  const average = all === 0 ? 0 : sum / all
  const positive = all === 0 ? 0 : (clicks.good / all) * 100

  // click event
  const goodClick = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1
    }
    setClicks(newClicks)
    setAll(all + 1)
    setSum(sum + 1)
  }

  const neturalClick = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1
    }
    setClicks(newClicks)
    setAll(all + 1)
    setSum(sum + 0)
  }

  const badClick = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
    setAll(all + 1)
    setSum(sum - 1)
  }


  return ( 
  <div>
      <Header headNameSetting={headName}/>

      <Button onClick={goodClick} text="good"></Button>
      <Button onClick={neturalClick} text="neutral"></Button>
      <Button onClick={badClick} text="bad"></Button>
      
      <Footer footNameSetting={footName}/>
      {all === 0 ? (
        <p>Plz press button</p>
      ) : (
      <table>
        <tbody>
          <Statistics text="good" value={clicks.good}/>
          <Statistics text="neutral" value={clicks.neutral}/>
          <Statistics text="bad" value={clicks.bad}/>
          <Statistics text="all" value={all}/>
          <Statistics text="Average" value={average}/>
          <Statistics text="Positive" value={`${positive.toFixed(2)}%`}/>
        </tbody>
      </table>
      )
    } 
    </div>
  )
}



export default App