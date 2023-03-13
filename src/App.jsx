import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className='crossword-section'>
        <div className='crossword'>
          <div className='row'>
            <div className='cell white'><div className='clue-number'>1</div><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell white'><div className='clue-number'>2</div><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell white'><div className='clue-number'>3</div><input></input></div>
          </div>
          <div className='row'>
            <div className='cell white'><input></input></div>
            <div className='cell black'><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell black'><input></input></div>
            <div className='cell white'><input></input></div>
          </div>
          <div className='row'>
            <div className='cell white'><div className='clue-number'>4</div><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell white'><input></input></div>
          </div>
          <div className='row'>
            <div className='cell white'><input></input></div>
            <div className='cell black'><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell black'><input></input></div>
            <div className='cell white'><input></input></div>
          </div>
          <div className='row'>
            <div className='cell white'><div className='clue-number'>5</div><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell white'><input></input></div>
            <div className='cell white'><input></input></div>
          </div>
        </div>
        <div className='clues'>
          <h2>Across</h2>
          <p>1. </p>
          <h2>Down</h2>
          <p>1. something else</p>
        </div>
      </section>
    </div>
  )
}

export default App
