import React from 'react'
import "../TweetPage/tweetpage.css"
import tweet from "../Assets/images/tweet.png"
import avatar from "../Assets/images/avatar.jpg"
import image1 from "../Assets/images/image1.jpg"
import { CgMoreAlt } from "react-icons/cg"


const Tweetpage = () => {
  return (
    <div className='tweetpage'>
        <div className ='nav'>
             <h1 className='home'>Home</h1>
                <div className='heading'>
                    <h5 className='heading-text'>For you</h5>
                    <h5 className='heading-text'>Following</h5>
                </div>
                <hr />
            </div>

        <div className='sub-head'>
             <span className='U'>U</span>
             <span className='happening'><b>What is happening?!</b></span>
        </div>
             <img src={tweet} alt="" />
             

           <div className='tweet-container'>
                <div className=''><img src={avatar} className='image' alt="" /></div>
                <div className='tweet'>
                    <p><b>Lerry</b> @AsiwajuLerry. 48m <i><CgMoreAlt/></i></p>
                    <p>Good live</p>
                    <img src={image1} className='image1' alt="" />
                </div>
            </div>  
    </div>
  )
}

export default Tweetpage