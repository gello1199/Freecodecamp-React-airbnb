import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <img className="card--img" src="https://images.unsplash.com/photo-1548182629-4c64b91b789d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="card img" />

            <div className="card--stats">
                <img className="card--star" src="https://clipart.world/wp-content/uploads/2020/09/Orange-star-clipart-transparent.png" alt="star img" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}

export default Card;
