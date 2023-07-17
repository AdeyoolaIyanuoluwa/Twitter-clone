import React from 'react'
import "./rightnav.scss"
import { CgSearch } from "react-icons/cg"
import Button from '../../components/Button/button'
import { CgMoreAlt } from "react-icons/cg"

const Trend = ({ title, subtitle, count }) => {
    return(
        <div className='trending-bx'>
        <span className='trending'>{title}</span> <span><i className="i"><CgMoreAlt/></i></span>
        <p className='sub-trending'>{subtitle}</p>
        <p className='count-tweet'>{count} Tweets</p>
    </div>
    )
}

const Rightnav = () => {
  return (
    <div className='rightnav'>
        <div className='input-box'>
            <div className='input-inner'>
                <span className='search-icon'><CgSearch/></span>
                <input className='input' placeholder='Search Twitter'/>
            </div>
        </div>

        <div className='verified'>
            <h3 className='verified-txt1'>Get Verified</h3>
            <h5 className='verified-txt2'>Subscribe to unlock new features.</h5>
            <Button children="Get Verified"/>
        </div>

        <div className='trends-box'>
            <span className='trends'>Trends for you</span>
            
        <Trend title="Trending in Nigeria" subtitle="Song of the year" count="19.9k" />

        <Trend title="Trending in Nigeria" subtitle="Song of the year" count="19.9k" />

        <Trend title="Trending in Nigeria" subtitle="Song of the year" count="19.9k" />

        <Trend title="Trending in Nigeria" subtitle="Song of the year" count="19.9k" />
        
        <Trend title="Trending in Nigeria" subtitle="Song of the year" count="19.9k" />


        </div>
    </div>
  )
}

export default Rightnav