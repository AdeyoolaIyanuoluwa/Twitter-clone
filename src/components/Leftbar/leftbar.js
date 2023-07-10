import React from 'react'
import { BiSolidHomeCircle, BiLogoTwitter } from "react-icons/bi"
import { CgSearch, CgProfile, CgMoreAlt } from "react-icons/cg"
import { GrNotification } from "react-icons/gr"
import { GoVerified } from "react-icons/go"
import { CiCircleMore } from "react-icons/ci"
import "../Leftbar/leftbar.css"
import Button from '../Button/button'

const Leftbar = () => {
  return (
    <div className='sidenav'>
        <nav >
           <ul>
            <div className='logo'>
                <BiLogoTwitter/>
            </div>
           <li className='home'>
                    
           <span><b><i className='icon'><BiSolidHomeCircle/></i> Home</b></span>
            </li>
            <li >
                <span>
                    <b className='icon'><CgSearch/></b>  Explore</span>
            </li>
            <li>
                <span>
                    <b className='icon'><GrNotification/></b>Notifications</span>
            </li>
            <li>
                <span><b className='icon'><GoVerified/></b> Messages</span>
            </li>
            <li>
                <span><b  className='icon'><CgProfile/></b> Profile</span>
            </li>
            <li>
                <span><b className='icon'><CiCircleMore/></b> More</span>
            </li>
            <Button mainbutton ={true} children="Tweet"/>
           </ul>

           <div className='username'>
                <span className='U'>U</span>
               <div className='text'>
                    <b>USERNAME</b>
                    <p>@username</p>
               </div>
               <div className='icon2'><CgMoreAlt/></div>
           </div>
        </nav>
    </div>
  )
}

export default Leftbar