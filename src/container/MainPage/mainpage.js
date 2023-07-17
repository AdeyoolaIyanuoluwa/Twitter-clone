import React from 'react'
import Tweetpage from '../TweetPage/tweetpage'
import "./mainpage.scss"
import Rightnav from '../Rightnav/rightnav'
import Sidebar from '../../components/Sidebar/sidebar'

const Mainpage = () => {
  return (
    <div className='mainpage'>
        <div className='leftbar'>
           <Sidebar/>
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