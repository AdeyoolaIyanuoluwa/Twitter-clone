import React from 'react'
import { BiHomeCircle } from "react-icons/bi"
import { CgSearch, CgProfile } from "react-icons/cg"
import { GrNotification } from "react-icons/gr"
import { GoVerified } from "react-icons/go"
import { CiCircleMore } from "react-icons/ci"
import "../Leftbar/leftbar.css"

const Leftbar = () => {
  return (
    <div className='sidenav'>
        <nav >
            <div className='home'>
                <span>
                    <BiHomeCircle/>
                </span>
                <span>Home</span>
            </div>
            <div >
                <span><CgSearch/></span>
                <span>Explore</span>
            </div>
            <div>
                <span><GrNotification/></span>
                <span>Notifications</span>
            </div>
            <div>
                <span><GoVerified/></span>
                <span>Messages</span>
            </div>
            <div>
                <span><CgProfile/></span>
                <span>Profile</span>
            </div>
            <div>
                <span><CiCircleMore/></span>
                <span>More</span>
            </div>
        </nav>
    </div>
  )
}

export default Leftbar