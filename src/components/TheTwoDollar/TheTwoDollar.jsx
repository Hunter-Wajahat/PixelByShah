import React from 'react'
import './twoDollar.css'
import dpIcon from "../../assets/dpIcon.png"
import myMascot from "../../assets/myMascot.jpg"
const TheTwoDollar = () => {
  return (
    <div className='storyConainer'>
      <h1 className='storyHead'>The 2$ Logo Story</h1>
      <main className='chatConainer'>
        <div className="clientText">
          <img height="30px" src={dpIcon} alt="dp icon" className="clientDP" />
          <div className="clientMessage"> <p>Client:</p> Bro, I need a simple logo… can you do it for cheap?</div>
        </div>
        <div className="myText">
          <img height="30px" src={myMascot} alt="dp icon" className="myDP" />
          <div className="myMessage"> <p>ME:</p> Sure.</div>
        </div>
        <div className="storyEvent">
          <p>I spent 3 hours trying different colors…</p>
          <p>Changing fonts…</p>
          <p>Trying to make every little detail perfect…</p>
          <p>Finally, I sent the logo.</p>
        </div>
        <div className="clientText">
          <img height="30px" src={dpIcon} alt="dp icon" className="clientDP" />
          <div className="clientMessage"> <p>Client:</p> Bro, I need a simple logo… can you do it for cheap?</div>
        </div>

        <div className="storyEvent">
          <p>That’s when I realized…</p>
          <p>The problem wasn’t the money…</p>
          <p>The problem was people who don’t value skill…</p>
          <p>From that day on, I decided… <br />
            No more cheap work… only value-based work.</p>
          <h3>Lesson:
            “Stop working for people who don’t respect your effort.”</h3>
        </div>
      </main>

    </div>
  )
}

export default TheTwoDollar
