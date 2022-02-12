import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
        {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img className="card--img" src={`../images/${props.img}`} alt="card img" />

            <div className="card--stats">
                <img className="card--star" src="https://clipart.world/wp-content/uploads/2020/09/Orange-star-clipart-transparent.png" alt="star img" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}

export default Card;
