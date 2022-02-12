import React from 'react';

const Card = (props) => {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={`../images/${props.coverImg}`} alt="card img" />

            <div className="card--stats">
                <img className="card--star" src="https://clipart.world/wp-content/uploads/2020/09/Orange-star-clipart-transparent.png" alt="star img" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}

export default Card;
