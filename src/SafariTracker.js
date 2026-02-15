import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import './SafariTracker.css';


import tigerImg from './assets/tiger.jpg';
import elephantImg from './assets/elephant.jpg';
import leopardImg from './assets/leopard.jpg';
import bisonImg from './assets/bison.jpg';
import deerImg from './assets/deer.jpg';
import dholeImg from './assets/dhole.jpg';

const SafariTracker = () => {
  const [sightings, setSightings] = useState({
    Tiger: 0, Elephant: 0, Leopard: 0, Bison: 0, Deer: 0, Dhole: 0
  });

  const animalData = [
    { name: 'Tiger', image: tigerImg },
    { name: 'Elephant', image: elephantImg },
    { name: 'Leopard', image: leopardImg },
    { name: 'Bison', image: bisonImg },
    { name: 'Deer', image: deerImg },
    { name: 'Dhole', image: dholeImg }
  ];

  const handleUpdate = (name, val) => {
    setSightings(prev => ({
      ...prev,
      [name]: Math.max(0, prev[name] + val)
    }));
  };

  const totalCount = Object.values(sightings).reduce((a, b) => a + b, 0);

  return (
    <div className="safari-wrapper">
      <header>
        <h1>Safari Tracker</h1>
        <div className="total-badge">Total Spotted: {totalCount}</div>
      </header>

      <div className="grid">
        {animalData.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            image={animal.image}
            count={sightings[animal.name]}
            onUpdate={handleUpdate}
          />
        ))}
      </div>

      <button className="reset-btn" onClick={() => setSightings({
        Tiger: 0, Elephant: 0, Leopard: 0, Bison: 0, Deer: 0, Dhole: 0
      })}>
        Reset All
      </button>

      <footer className="tracker-footer">
        <p>Want to learn more about these animals?</p>
        <a
          href="https://fact-generator-react.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="fact-app-link"
        >
          Open Animal Fact Generator 
        </a>
      </footer>
    </div>
  );
};

export default SafariTracker;