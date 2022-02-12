import React from 'react';

const Card = ({ img, rating, reviewCount, location, title, price }) => {
    return (
        <div className="card">
            <img className="card--img" src={`../images/${img}`} alt="card img" />

            <div className="card--stats">
                <img className="card--star" src="https://clipart.world/wp-content/uploads/2020/09/Orange-star-clipart-transparent.png" alt="star img" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    );
}

export default Card;
