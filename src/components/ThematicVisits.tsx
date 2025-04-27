import React from "react";

interface CategoryCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <div className="group cursor-pointer transition-transform hover:scale-[1.02] duration-300">
      <div className="relative overflow-hidden rounded-lg mb-2">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover"
        />
      </div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

const ThematicVisits: React.FC = () => {
  const categories = [
    {
      image:
        "https://images.pexels.com/photos/9824376/pexels-photo-9824376.jpeg",
      title: "Culture & Histoire",
      subtitle: "Patrimoine et monuments",
    },
    {
      image:
        "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
      title: "Nature & Aventure",
      subtitle: "Montagnes et lacs",
    },
    {
      image:
        "https://img.lemde.fr/2024/09/09/0/0/2294/1530/664/0/75/0/33885e0_1725882448761-dsc-0957-copie.jpg",
      title: "Gastronomie",
      subtitle: "Cuisine et terroir",
    },
    {
      image:
        "https://parisianavores.paris/wp-content/uploads/2020/04/musee-robert-tatin-lieux-insolites-france.jpg",
      title: "Insolite & Secrets",
      subtitle: "Lieux méconnus",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 md:p-6 mt-8">
      <h2 className="text-xl font-bold text-center mb-8 text-gray-900 uppercase">
        Nos visites thématiques
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
            subtitle={category.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default ThematicVisits;
