import React, { useState } from 'react';
import { Search } from 'lucide-react';
import DestinationCard from '../DestinationCard/DestinationCard';
import ReservationModal from '../Reservation/ReservationModal';
import { Destination } from '../../types/types';
import './Explorer.css';

const destinations: Destination[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'lorem',
    price: 40,
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'lorem',
    price: 80,
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'lorem',
    price: 100,
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'lorem',
    price: 40,
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'lorem',
    price: 80,
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'lorem',
    price: 100,
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'lorem',
    price: 40,
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'lorem',
    price: 80,
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'lorem',
    price: 100,
  },
];

const Explorer: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleReservation = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  return (
    <div className="explorer">
      <div className="search-container">
        <button className="btn btn-search">
          <Search size={16} />
          Rechercher
        </button>
      </div>

      <div className="destinations-grid">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            onReserve={handleReservation}
          />
        ))}
      </div>

      {selectedDestination && (
        <ReservationModal
          isOpen={!!selectedDestination}
          onClose={closeModal}
          destination={selectedDestination}
        />
      )}
    </div>
  );
};

export default Explorer;