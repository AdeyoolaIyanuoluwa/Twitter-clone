import React from 'react'
import styles from "./tweetpage.module.scss"
import tweet from "../../assets/images/tweet.png"
import avatar from "../../assets/images/avatar.jpg"
import image1 from "../../assets/images/image1.jpg"
import { CgMoreAlt } from "react-icons/cg"
import retweet from "../../assets/images/retweet.png"
import Avatar from '../../components/Avatar/avatar'


const Thetweet= ({mainname,username,tweet})=>{
  return(
    <div className={styles.tweet_container}>
        <div className={styles.image_cont}>
            <img src={avatar} className={styles.image} alt="" />   
        </div>

        <div className={styles.tweet}>
            <p><b>{mainname}</b> <span className={styles.txt}>{username}. 48m </span>
            <i className={styles.i}><CgMoreAlt/></i>
            </p>
            <p className={styles.txt}>{tweet}</p>
            <img src={image1} className={styles.image1} alt="" />
        </div>
  </div>
  )
}

const Tweetpage = () => {
  return (
    <div className={styles.tweetpage}>
        <div className ={styles.nav}>
             <h1 className={styles.home}>Home</h1>

                <div className={styles.heading}>
                    <span className={styles.heading__heading_text}>For you</span>
                    <span className={styles.heading__heading_text}>Following</span>
                </div>
            </div>

        <div className={styles.sub_head}>
           <div>
             <Avatar/>
           </div>

             <span className={styles.happening}>What is happening?!</span>
        </div>
             <img src={tweet} className={styles.tweet1} alt="" />
             

             <Thetweet mainname="Iyanuoluwa" username="@Adewumi" tweet="Good life"/>
            <div><img className={styles.retweet} src={retweet} alt="" /></div>

             <Thetweet mainname="Lerry" username="@AsiwajuLerry" tweet="A Good life"/>
            <div><img className={styles.retweet} src={retweet} alt="" /></div>
    </div>
  )
}

export default Tweetpage