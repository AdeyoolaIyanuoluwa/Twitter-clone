import React from 'react'
import "../Rightnav/rightnav.scss"
import { CgSearch } from "react-icons/cg"
import Button from '../Button/button'
import { CgMoreAlt } from "react-icons/cg"

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
            
            <div className='trending-bx'>
                <span className='trending'>Trending in Nigeria</span> <span><i className="i"><CgMoreAlt/></i></span>
                <p className='sub-trending'>Song of the year</p>
                <p className='count-tweet'>19.9k Tweets</p>
            </div>
            <div className='trending-bx'>
                <span className='trending'>Trending in Nigeria</span> <span><i className="i"><CgMoreAlt/></i></span>
                <p className='sub-trending'>Song of the year</p>
                <p className='count-tweet'>19.9k Tweets</p>
            </div>
            <div className='trending-bx'>
                <span className='trending'>Trending in Nigeria</span> <span><i className="i"><CgMoreAlt/></i></span>
                <p className='sub-trending'>Song of the year</p>
                <p className='count-tweet'>19.9k Tweets</p>
            </div>
            <div className='trending-bx'>
                <span className='trending'>Trending in Nigeria</span> <span><i className="i"><CgMoreAlt/></i></span>
                <p className='sub-trending'>Song of the year</p>
                <p className='count-tweet'>19.9k Tweets</p>
            </div>
            <div className='trending-bx'>
                <span className='trending'>Trending in Nigeria</span> <span><i className="i"><CgMoreAlt/></i></span>
                <p className='sub-trending'>Song of the year</p>
                <p className='count-tweet'>19.9k Tweets</p>
            </div>
            <div className='trending-bx'>
                <span className='trending'>Trending in Nigeria</span> <span><i className="i"><CgMoreAlt/></i></span>
                <p className='sub-trending'>Song of the year</p>
                <p className='count-tweet'>19.9k Tweets</p>
            </div>
            <div className='trending-bx'>
                <span className='trending'>Trending in Nigeria</span> <span><i className="i"><CgMoreAlt/></i></span>
                <p className='sub-trending'>Song of the year</p>
                <p className='count-tweet'>19.9k Tweets</p>
            </div>
            <div className='trending-bx'>
                <span className='trending'>Trending in Nigeria</span> <span><i className="i"><CgMoreAlt/></i></span>
                <p className='sub-trending'>Song of the year</p>
                <p className='count-tweet'>19.9k Tweets</p>
            </div>
        </div>
    </div>
  )
}

export default Rightnav