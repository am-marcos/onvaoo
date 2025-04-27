import React from 'react';
import Button from './ui/Button';

interface HeroCardProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  isWide?: boolean;
}

const HeroCard: React.FC<HeroCardProps> = ({ image, title, subtitle, buttonText, isWide = false }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${isWide ? 'col-span-2' : ''}`}>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover aspect-[4/3]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
        <h3 className="text-amber-500 font-bold text-xl md:text-2xl">{title}</h3>
        <p className="text-white mb-4">{subtitle}</p>
        <Button variant="primary" size="sm" className="self-start">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <HeroCard 
          image="https://cdn.generationvoyage.fr/2022/10/visiter-bourgogne-scaled.jpg" 
          title="Redécouvrez la France autrement"
          subtitle="Explorez des destinations uniques et authentiques"
          buttonText="Découvrir"
          isWide={true}
        />
        <HeroCard 
          image="/images/unique.jpg" 
          title="Art urbain"
          subtitle="Découvrez la richesse culturelle des villes"
          buttonText="Explorer"
        />
      </div>
    </section>
  );
};

export default HeroSection;