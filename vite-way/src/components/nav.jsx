import React, { useState } from "react"
import reactLogo from '../assets/react.svg'
export default function Nav(props){
    
    return (
        <nav className={props.darkMode?"dark":""}>
            <img className="nav-logo" src={reactLogo} alt="logo" width="60px"/>
            <h2 className="nav-logo_text">ReactFacts</h2>
            
            <div className="toggler">
                <p className="toggler--light">Dark</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Light</p>
            </div>
        </nav>
    )
}