import React from 'react';
import { Star } from 'lucide-react';

interface GuideProps {
  name: string;
  specialty: string;
  rating: number;
  image: string;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={index < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const GuideCard: React.FC<GuideProps> = ({ name, specialty, rating, image }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <RatingStars rating={rating} />
      <p className="text-sm font-medium text-gray-900">{name}</p>
      <p className="text-xs text-gray-500 mb-4">{specialty}</p>
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Guides: React.FC = () => {
  const guides = [
    {
      name: "Jérôme",
      specialty: "Spécialiste du patrimoine",
      rating: 3,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Anne-Sophie",
      specialty: "Connaît les petits secrets de Paris",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Charlotte",
      specialty: "Spécialiste de la gastronomie",
      rating: 4,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      name: "Marc",
      specialty: "Expert outdoor",
      rating: 4,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 md:p-6 mt-10 mb-12">
      <h2 className="text-xl font-bold text-center mb-10 text-gray-900 uppercase">Nos guides</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {guides.map((guide, index) => (
          <GuideCard 
            key={index}
            name={guide.name}
            specialty={guide.specialty}
            rating={guide.rating}
            image={guide.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Guides;