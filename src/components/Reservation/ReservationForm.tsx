import React, { useState } from 'react';
import { Destination } from '../../types/types';
import './ReservationForm.css';

interface ReservationFormProps {
  destination: Destination;
  onSubmit: () => void;
}

interface FormData {
  personCount: string;
  fullName: string;
  entryDate: string;
  email: string;
  departureDate: string;
  returnDate: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ destination, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    personCount: '1',
    fullName: '',
    entryDate: '',
    email: '',
    departureDate: '',
    returnDate: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the reservation data to your backend
    console.log('Reservation submitted:', {
      destination,
      ...formData
    });
    
    // Close the modal
    onSubmit();
  };
  
  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="personCount">Nombre de personnes</label>
        <input 
          type="number" 
          id="personCount"
          name="personCount"
          min="1"
          value={formData.personCount}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="fullName">Nom complet</label>
        <input 
          type="text" 
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="entryDate">Entrée mois et date</label>
        <input 
          type="date" 
          id="entryDate"
          name="entryDate"
          value={formData.entryDate}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="departureDate">Date de départ</label>
        <input 
          type="date" 
          id="departureDate"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="returnDate">Date de retour</label>
        <input 
          type="date" 
          id="returnDate"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="btn-submit">
          Réserver
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;