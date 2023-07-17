import React from 'react'
import {  BiLogoTwitter } from "react-icons/bi"
import { CgMoreAlt } from "react-icons/cg"
import "./sidebar.scss"
import Button from '../Button/button'
import { navLinks } from './navLinks'
import Smallscreen from './smallscreen'
import { NavLink } from 'react-router-dom'
import Avatar from '../Avatar/avatar'



const Sidebar = () => {
  return (
    <div>
        <nav className='sidenav'>
           <ul>
            <div className='logo'>
                <BiLogoTwitter/>
            </div>
               
             {navLinks.map(({title,image,url}, i)=>(
            
                        <NavLink key={i} to={url} className={({isActive})=>isActive?"active":""}>
                           <li>
                           <span>
                                <b className='icon'>{image}</b>{title}</span>
                           </li>
                        </NavLink>
            
             ))} 


            <Button mainbutton ={true} children="Tweet"/>
           </ul>

           <div className='username'>
                <div>
                    <Avatar/>
                </div>
               <div className='text'>
                    <b>USERNAME</b>
                    <p>@username</p>
               </div>
               <div className='icon2'><CgMoreAlt/></div>
           </div>
        </nav>


        <nav className='small-screen'>
           <ul>
            <div className='logo'>
                <BiLogoTwitter/>
            </div>
                <Smallscreen/>
           </ul>

           <div className='username'>
                <Avatar/>
           </div>
        </nav>
    </div>
  )
}

export default Sidebar