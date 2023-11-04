import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHippo} from '@fortawesome/free-solid-svg-icons'
import DarkMode from './DarkMode'

 const Navbar = () => {

  return (
    <nav className="navbar">
        <h2 className='logo'><FontAwesomeIcon icon={faHippo}/></h2>
        <ul className='link'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/register"><li>Register</li></Link>
          <Link to="/tempo"><li>Tempo</li></Link>
          <DarkMode/>
        </ul>
    </nav>
  )
}
export default Navbar