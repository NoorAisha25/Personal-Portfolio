import React from 'react'
import "./Home.css" 
import woman from "../../assets/woman.png"
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  return (
    <div id="home">
    <div className="lefthome">
       <div className="homedetails">
        <div className="line1">I'M </div>
        <div className="line2">NOOR AISHA</div>
        <div className="line3">
            <Typewriter
              words={['SOFTWARE ENGINEER', 'WEB DEVELOPER', 'TECH ENTHUSIAST']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />

        </div>
        <a href="https://drive.google.com/file/d/18GvQfeCbzDAqVvsx2wT_XpBR4sCZWmcd/view?usp=drivesdk" target="_blank" rel="noopener"
        className="CV">Download Resume</a>
       </div>

    </div>
    <div className="righthome">
        <img src={woman} alt=""/>
    </div>
    </div>
  )
}

export default Home
