import React from 'react'
import { navLinks } from './navLinks'
import "./sidebar.scss"
const Smallscreen = () => {
  return (
    <div>
            {navLinks.map(({image},i)=>(
                 <li key={i}>
                 <span >
                     <b className='icon'>{image}</b></span>
             </li>
            ))}
    </div>
  )
}

export default Smallscreen