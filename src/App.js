import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                img={"https://clipart.world/wp-content/uploads/2020/09/Orange-star-clipart-transparent.png"}
                rating={"5.0"}
                reviewCount={6}
                country={"USA"}
                title={"Life Lessons with Olympic Athlete"}
                price={136}
            />
        </div>
    );
}

export default App;
