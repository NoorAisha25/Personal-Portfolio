import React from 'react'
import "./About.css" // Importing CSS for About component styling
import Card from '../Card/Card'
import full from "../../assets/full-stack.png"
import cpp from "../../assets/c++.png"
import dsa from "../../assets/dsa ...png"
function About() {
  return (
    <div id="about">
<div className="leftabout">
<div className="circle-line"> 
<div className="circle"> </div>
<div className="line"> </div>
<div className="circle"> </div>
<div className="line"> </div>
<div className="circle"> </div>
</div>
<div className="aboutdetails">
    <div className="personalinfo">  
    <h1>Personal Info</h1>
    <ul>
        <li>
            <span>NAME</span> : NOOR AISHA
        </li>
        <li>
            <span>AGE</span> : 20 YEARS
        </li>
        <li>
            <span>GENDER</span> : FEMALE
        </li>
        <li>
            <span>LANGUAGE KNOWN</span> : URDU, ENGLISH, HINDI
        </li>
    </ul>
    </div>
    <div className="education">  
    <h1>Education</h1>
    <ul>
        <li>
            <span>DEGREE</span> : B-TECH 
        </li>
        <li>
            <span>BRANCH</span> : INFORMATION TECHNOLOGY
        </li>
        <li>
            <span>CGPA</span> : 9.21
        </li>
    </ul>
    </div>
    <div className="skills">  
    <h1>Skills</h1>
    <ul>
        <li>
            FULL STACK WEB DEVELOPMENT
        </li>
        <li>
            C/C++ PROGRAMMING
        </li>
        <li>
            DATA STRUCTURES AND ALGORITHMS
        </li>
    </ul>
    </div>
</div>
</div>
<div className="rightabout">    
<Card title="FULL STACK WEB DEVELOPMENT" image={full}/>
<Card title="C/C++ PROGRAMMING" image={cpp}/>
<Card title="DATA STRUCTURE & ALGORITHM" image={dsa}/>
</div>
    </div>
  )
}

export default About