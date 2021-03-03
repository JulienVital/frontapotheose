import React from 'react';
import Card from 'src/components/Assets/Card';

import './style.scss';

const Team = () => (
  <div className="team">
    <div className="team__title">
      <h1 className="team__title--text">TADAM! Mesdames, messieurs : La TEAM O'BOOK 
      </h1> 
    </div>     
    <div className="team__group">  
      <div className="team__group--front">
        <h2 className="team__group--front-title">
            Team FRONT
        </h2>
        <div className="team__group--front-card">
          <Card />
          <Card />
        </div>     
      </div>
      <div className="team__group--back">
        <h2 className="team__group--back-title">
          Team BACK
        </h2>
        <div className="team__group--back-card">
          <Card />
          <Card />
        </div>         
      </div>
    </div>
  </div>
);

export default Team;
