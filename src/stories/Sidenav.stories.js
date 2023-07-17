import React from "react"
import Sidebar from "../components/Sidebar/sidebar"

export default {
    title: "Component/Sidebar",
    component: Sidebar
}

const Template = (args)=>{
    return(
        <div>
            <Sidebar/>
        </div>
    )
};
export const sideBar = Template.bind({});
// sideBar.args ={
//     title: "Home",
//     image: Icon
// }