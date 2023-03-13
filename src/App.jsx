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
          The are one of each clue type: Hidden, Anagram, Cherry Pick, Sandwich, Reversal and Cryptic Definition.  <a href='https://paper.dropbox.com/doc/Easley-Very-Interesting-Talks-Tom--B0aSywIrEonsVyKAaiGANy~eAQ-e36UJD5XSrVc0lRcaMv7o'>See here for reminders</a>.
          <h2>Across</h2>
          <p>1. Voice assistant takes part in oral exam (5)</p>
          <p>4. Turn 'n warp crustacean (5)</p>
          <p>5. Nemesis beginning to eat nervous Ed's mould yam (5)</p>
          <h2>Down</h2>
          <p>1. Eve tempted by the creation of Jobs? (5)</p>
          <p>2. Destroy or remake saree (5)</p>
          <p>3. Any holds? No bother! (5)</p>
        </div>
      </section>
      <section className='resources'>
        <h2>
          Resources
        </h2>
        <p>
          Tips: <a href='https://www.timmoorey.com/pdfs/clue_types.pdf'>https://www.timmoorey.com/pdfs/tips.pdf</a>
        </p>
        <p>
          Clue types: <a href='https://www.timmoorey.com/pdfs/clue_types.pdf'>https://www.timmoorey.com/pdfs/clue_types.pdf</a>
        </p>
        <p>
          Abbreviations: <a href='https://www.timmoorey.com/pdfs/clue_types.pdf'>https://www.timmoorey.com/pdfs/abbreviations.pdf</a>
        </p>
      </section>
    </div>
  )
}

export default App
