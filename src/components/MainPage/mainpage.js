import React from 'react'
import Leftbar from '../Leftbar/leftbar'
import Tweetpage from '../TweetPage/tweetpage'
import "../MainPage/mainpage.css"
import Rightnav from '../Rightnav/rightnav'

const Mainpage = () => {
  return (
    <div className='mainpage'>
        <div className='leftbar'>
            <Leftbar/>
        </div>
        <div>
            <Tweetpage/>
        </div>
        <div className='Rightbar'>
             <Rightnav/>
        </div>
        
    </div>
  )
}

export default Mainpage