import React from "react";
import srcswim from "../assets/swimmer.png"
import star from "../assets/star.png"
export default function Card() {
  return (
    <div className="card">
        <img src={srcswim} className="swim-pict"/>
        <div className="card--stats">
            <img src={star} alt="" className="star" />
            <span>5.0</span>
            <span className="gray">(6)</span>
            <span className="gray">India</span>
        </div>
        <p>Swim Lessons with Olympian</p>
        <p><span className="bold">From ₹2K</span> / person</p>
    </div>
  )
}