import React from 'react';
import { Destination } from '../../types/types';
import './DestinationCard.css';

interface DestinationCardProps {
  destination: Destination;
  onReserve: (destination: Destination) => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onReserve }) => {
  return (
    <div className="destination-card">
      <div className="destination-image">
        <img src={destination.image} alt={destination.title} />
      </div>
      <div className="destination-info">
        <h3>{destination.title}</h3>
        <p className="price">€{destination.price}</p>
        <button 
          className="btn-reserve"
          onClick={() => onReserve(destination)}
        >
          Réserver
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;