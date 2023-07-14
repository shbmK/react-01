import React from "react";

export default function Card() {
  return (
    <div className="card">
        <img src="swimmer.png" className="swim-pict"/>
        <div className="card--stats">
            <img src="star.png" alt="" className="star" />
            <span>5.0</span>
            <span className="gray">(6)</span>
            <span className="gray">India</span>
        </div>
        <p>Swim Lessons with Olympian</p>
        <p><span className="bold">From ₹2K</span> / person</p>
    </div>
  )
}