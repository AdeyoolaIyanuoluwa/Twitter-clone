import React from 'react'
import "../TweetPage/tweetpage.scss"
import tweet from "../Assets/images/tweet.png"
import avatar from "../Assets/images/avatar.jpg"
import image1 from "../Assets/images/image1.jpg"
import { CgMoreAlt } from "react-icons/cg"
import retweet from "../Assets/images/retweet.png"


const Tweetpage = () => {
  return (
    <div className='tweetpage'>
        <div className ='nav'>
             <h1 className='home'>Home</h1>
                <div className='heading'>
                    <span className='heading-text'>For you</span>
                    <span className='heading-text'>Following</span>
                </div>
            </div>

        <div className='sub-head'>
             <span className='A'>U</span>
             <span className='happening'>What is happening?!</span>
        </div>
             <img src={tweet} className='tweet1' alt="" />
             

           <div className='tweet-container'>
                    <div className='image-cont'>
                         <img src={avatar} className='image' alt="" />   
                    </div>
        
                <div className='tweet'>
                    <p><b>Iyanuoluwa</b> <span className='txt'>@Adewumi. 48m </span>
                    <i className='i'><CgMoreAlt/></i>
                    </p>
                    <p className='txt'>Good life</p>
                    <img src={image1} className='image1' alt="" />
                </div>
            </div>  
            <div><img className='retweet' src={retweet} alt="" /></div>

           <div className='tweet-container'>
                    <div className='image-cont'>
                         <img src={avatar} className='image' alt="" />   
                    </div>
        
                <div className='tweet'>
                    <p><b>Lerry</b> <span className='txt'>@AsiwajuLerry. 48m </span>
                    <i className='i'><CgMoreAlt/></i>
                    </p>
                    <p className='txt'>Good life</p>
                    <img src={image1} className='image1' alt="" />
                </div>
            </div>  
            <div><img className='retweet' src={retweet} alt="" /></div>
    </div>
  )
}

export default Tweetpage