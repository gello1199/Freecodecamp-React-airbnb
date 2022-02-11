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
                img="colin-lloyd.png"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Olympic Athlete"
                price={136}
            />
        </div>
    );
}

export default App;
