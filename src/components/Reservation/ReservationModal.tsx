import React from 'react';
import { X } from 'lucide-react';
import ReservationForm from './ReservationForm';
import { Destination } from '../../types/types';
import './ReservationModal.css';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: Destination;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, destination }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-header">
          <h2>Réservation pour {destination.title}</h2>
          <p className="modal-price">Prix: €{destination.price}</p>
        </div>
        <ReservationForm destination={destination} onSubmit={onClose} />
      </div>
    </div>
  );
};

export default ReservationModal;