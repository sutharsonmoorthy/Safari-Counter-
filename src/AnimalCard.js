import React from 'react';

const AnimalCard = ({ name, image, count, onUpdate }) => {
  return (
    <div className="animal-card">
      <div className="image-wrapper">
        <img src={image} alt={name} className="card-img" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <div className="controls">
          <button className="btn-small" onClick={() => onUpdate(name, -1)}>−</button>
          <span className="count">{count}</span>
          <button className="btn-small" onClick={() => onUpdate(name, 1)}>+</button>
        </div>
        {count === 0 ? (
          <p className="limit-msg">No {name}s spotted yet</p>
        ) : (
          <p className="status-text">Spotted! </p>
        )}
      </div>
    </div>
  );
};

export default AnimalCard;