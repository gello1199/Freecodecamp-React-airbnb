import React from 'react';

const Card = ({ img, rating, reviewCount, country, title, price }) => {
    return (
        <div className="card">
            <img className="card--img" src="https://images.unsplash.com/photo-1548182629-4c64b91b789d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="card img" />

            <div className="card--stats">
                <img className="card--star" src={img} alt="star img" />
                <span>{rating}</span>
                <span className="gray">{reviewCount} • </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    );
}

export default Card;
