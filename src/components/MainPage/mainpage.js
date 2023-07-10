import React from 'react'
import Leftbar from '../Leftbar/leftbar'
import Tweetpage from '../TweetPage/tweetpage'
import "../MainPage/mainpage.css"

const Mainpage = () => {
  return (
    <div className='mainpage'>
        <div>
            {/* <Leftbar/> */}
        </div>
        <div>
            <Tweetpage/>
        </div>
    </div>
  )
}

export default Mainpage