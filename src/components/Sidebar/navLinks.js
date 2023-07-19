import { BiSolidHomeCircle } from "react-icons/bi"
import { CgSearch, CgProfile } from "react-icons/cg"
import { GrNotification } from "react-icons/gr"
import { GoVerified } from "react-icons/go"
import { CiCircleMore } from "react-icons/ci"

export const navLinks = [
                {
                title: 'Home',
                image: <BiSolidHomeCircle/>,
                url: "/"
            }, 
            {
                title: 'Explore',
                image: <CgSearch/> ,
                url: "/explore"
            },
            {
                title: 'Notifications',
                image: <GrNotification/>,
                url: "/notifications"
            },
            {
                title: 'Messages',
                image: <GoVerified/>,
                url: "/messages"
            },
            {
                title: 'List',
                image: <CgProfile/>,
                url: "/list"
            },
            {
                title: 'Verified',
                image: <CgProfile/>,
                url: "/verified"
            },
            {
                title: 'Profile',
                image: <CgProfile/>,
                url: "/profile"
            },
            {
                title: 'More',
                image: <CiCircleMore/>,
                url: "/more"
            },
]