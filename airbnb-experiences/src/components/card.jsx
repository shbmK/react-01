import React from "react";

export default function Card(prop) {
    let badgeText
    if (prop.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (prop.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`${prop.item.coverImg}`} className="swim-pict"/>
        <div className="card--stats">
            <img src="star.png" alt="" className="star" />
            <span>{prop.item.stats.rating}</span>
            <span className="gray">({prop.item.stats.reviewCount})</span>
            <span className="gray">{prop.item.location}</span>
        </div>
        <p>{prop.item.title}</p>
        <p><span className="bold">From ₹{prop.item.price}K</span> / person</p>
    </div>
  )
}