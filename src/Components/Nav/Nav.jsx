import React, { use } from 'react'
import "./Nav.css"
import {Link} from "react-scroll"
import { useRef } from 'react'
function Nav () {
    let menu = useRef();
    let mobile = useRef();
  return (
    <nav>
    <h1>PORTFOLIO</h1>
    <ul className='desktopmenu'>
      <Link to ="home" activeClass='active' smooth={true} spy={true} duration={1000}><li>Home</li></Link> 
      <Link to ="about" activeClass='active'smooth={true} spy={true} duration={1000}><li>About</li></Link>
      <Link to ="project" activeClass='active'smooth={true} spy={true} duration={1000}><li>Project</li></Link>
      <Link to ="contact" activeClass='active'smooth={true} spy={true} duration={1000}><li>Contact</li></Link>
    </ul>
    
    <div className="hamburger" ref={menu} onClick={()=> {
        mobile.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")
        }}>
        <div className='ham'></div>
        <div className='ham'></div>
        <div className='ham'></div>
    </div>
        
    <ul className='mobilemenu' ref={mobile} >
      <Link to ="home" activeClass='active' smooth={true} spy={true} duration={1000}><li>Home</li></Link> 
      <Link to ="about" activeClass='active'smooth={true} spy={true} duration={1000}><li>About</li></Link>
      <Link to ="project" activeClass='active'smooth={true} spy={true} duration={1000}><li>Project</li></Link>
      <Link to ="contact" activeClass='active'smooth={true} spy={true} duration={1000}><li>Contact</li></Link>
    </ul>
    </nav>
  )
}

export default Nav
