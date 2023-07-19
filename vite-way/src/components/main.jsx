import React from "react";
export default function Main(props) {
  return (
    <main className={props.darkMode?"dark":""}> 
      <div className="main-title">Fun facts about React</div>
      <ul className="main-facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps</li>
      </ul>
    </main>
  )
}