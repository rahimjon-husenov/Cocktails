import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link className="h7" to='/'>
         <h1 className="h7">The Cocktail DB</h1>
        </Link>
       
          
            <Link className="h7" to='/'><h1 className="h7">Home</h1></Link>
          
           <Link  className="h7" to='/about'><h1 className="h7">About</h1></Link>
         
        
      </div>
    </nav>
  )
}
