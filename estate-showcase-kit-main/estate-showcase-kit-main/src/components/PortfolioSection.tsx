import { useState } from 'react';
import { Eye } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import property4 from '@/assets/property-4.jpg';
import property5 from '@/assets/property-5.jpg';
import property6 from '@/assets/property-6.jpg';

const properties = [
  {
    id: 1,
    title: 'Modern Luxury Estate',
    description: 'Stunning contemporary home with panoramic views',
    price: '$2,450,000',
    type: 'Residential',
    image: property1,
    location: 'Beverly Hills, CA'
  },
  {
    id: 2,
    title: 'Historic Townhouse',
    description: 'Beautifully restored with modern amenities',
    price: '$1,250,000',
    type: 'Residential',
    image: property2,
    location: 'Georgetown, DC'
  },
  {
    id: 3,
    title: 'Penthouse Suite',
    description: 'Luxury living with city skyline views',
    price: '$3,200,000',
    type: 'Residential',
    image: property3,
    location: 'Manhattan, NY'
  },
  {
    id: 4,
    title: 'Family Home',
    description: 'Perfect for growing families in great neighborhood',
    price: '$850,000',
    type: 'Residential',
    image: property4,
    location: 'Westchester, NY'
  },
  {
    id: 5,
    title: 'Waterfront Estate',
    description: 'Private dock and stunning water views',
    price: '$4,100,000',
    type: 'Residential',
    image: property5,
    location: 'Lake Tahoe, CA'
  },
  {
    id: 6,
    title: 'Commercial Building',
    description: 'Prime location for business ventures',
    price: '$5,750,000',
    type: 'Commercial',
    image: property6,
    location: 'Downtown, LA'
  }
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Residential', 'Commercial'];
  
  const filteredProperties = activeFilter === 'All' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-primary">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium properties, 
            each offering unique luxury and exceptional value
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Properties grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="card-premium group">
              {/* Property image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={`${property.title} - ${property.description}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn-ghost text-white border-white hover:bg-white hover:text-primary inline-flex items-center gap-2">
                    <Eye size={20} />
                    View Details
                  </button>
                </div>
                
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-lg text-sm font-semibold">
                  {property.price}
                </div>
              </div>
              
              {/* Property details */}
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2 text-card-foreground">
                  {property.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {property.description}
                </p>
                <div className="text-sm text-muted-foreground">
                  📍 {property.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;