import React, { Children } from 'react'
import "../Button/button.css"

const Button = ({children, mainbutton}) => {
  return (
    <div>
        <button className={mainbutton ? "main-button" : "sub-button"}>{children}</button>
    </div>
  )
}

export default Button