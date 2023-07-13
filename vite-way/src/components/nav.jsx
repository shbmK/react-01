import React from "react"
import reactLogo from '../assets/react.svg'
export default function Nav(){
    return (
        <nav>
            <img className="nav-logo" src={reactLogo} alt="logo" width="60px"/>
            <h2 className="nav-logo_text">ReactFacts</h2>
            <h3 className="nav-title">Project-1</h3>
        </nav>
    )
}