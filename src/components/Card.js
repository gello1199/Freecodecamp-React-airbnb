import React from 'react';

const Card = ({ img, rating, reviewCount, country, title, price }) => {
    return (
        <div className="card">
            <img className="card--img" src={`../images/${img}`} alt="card img" />

            <div className="card--stats">
                <img className="card--star" src="https://clipart.world/wp-content/uploads/2020/09/Orange-star-clipart-transparent.png" alt="star img" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    );
}

export default Card;
