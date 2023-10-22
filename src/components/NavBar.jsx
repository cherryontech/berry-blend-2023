// import React from 'react'
import { Link } from 'react-router-dom'
// import About from '../routes/About'
// import Resources from '../routes/Resources'


export default function NavBar(){
    return (
    <>
    <header>
        <ul className="topnav">
            <li className="right"><Link to = '/About' >About</Link></li>
            <li className="right"><Link to = '/Resources' >Resources</Link></li>
        </ul>
    </header>
  </>
    )
    
}