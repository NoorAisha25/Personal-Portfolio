import React from 'react'
import Card from '../Card/Card'
import "./Project.css"
import project1 from "../../assets/project1.jpeg"
import project2 from "../../assets/PROJECT2.jpeg"
import project3 from "../../assets/project3.png"
import project4 from "../../assets/PROJECT4.jpeg"
function Project() {
  return (
    <div id="project">
     <h1 id="para">PROJECTS</h1>
     <div className="slider">   
     <Card title="WEDDING INVITATION WEBSITE" image={project4}/>
     <Card title="AGENTIC-AI" image={project1}/>
     <Card title="MODEL ROCKET" image={project3}/>
     <Card title="REGRESSION MODEL" image={project2}/>
     
     </div>
    </div>
  )
}
export default Project