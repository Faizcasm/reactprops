import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className="card">
      {data.map((item, index) => (
        <div key={index} className="card-item">
        <img src={item.image} alt='img'/>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
