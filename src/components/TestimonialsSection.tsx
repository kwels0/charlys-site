import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Pause } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Chen',
    role: 'First-time Homebuyers',
    rating: 5,
    quote: 'Elite Properties made our dream of homeownership a reality. Their expertise and patience throughout the process was extraordinary. We couldn\'t have asked for better guidance.',
    location: 'Purchased in Westchester, NY'
  },
  {
    id: 2,
    name: 'Robert Martinez',
    role: 'Commercial Investor',
    rating: 5,
    quote: 'The market insights and negotiation skills demonstrated by this team resulted in a fantastic investment opportunity. Their professionalism is unmatched in the industry.',
    location: 'Downtown LA Investment'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Luxury Home Seller',
    rating: 5,
    quote: 'Selling our family estate was emotional, but Elite Properties handled everything with such care and achieved a price beyond our expectations. Truly exceptional service.',
    location: 'Beverly Hills Estate Sale'
  },
  {
    id: 4,
    name: 'David & Jennifer Wu',
    role: 'Relocation Specialists',
    rating: 5,
    quote: 'Moving cross-country seemed daunting until we found Elite Properties. They coordinated everything seamlessly and helped us find the perfect home sight unseen.',
    location: 'Corporate Relocation to CA'
  },
  {
    id: 5,
    name: 'Alexandra Rodriguez',
    role: 'Luxury Condo Buyer',
    rating: 5,
    quote: 'The attention to detail and market knowledge helped me secure my dream penthouse. Their network and relationships in luxury real estate are invaluable.',
    location: 'Manhattan Penthouse'
  },
  {
    id: 6,
    name: 'James Patterson',
    role: 'Investment Portfolio',
    rating: 5,
    quote: 'Building my real estate portfolio was made effortless with their strategic guidance. Each property purchase has exceeded my investment goals.',
    location: 'Multi-property Portfolio'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-accent fill-accent' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-primary">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our valued clients about their exceptional experiences 
            working with our dedicated real estate team
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel container */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 bg-white p-8 md:p-12"
                >
                  <div className="text-center">
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Client info */}
                    <div>
                      <h4 className="font-semibold text-lg text-primary mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-accent">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-accent hover:text-accent-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-accent w-8' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-accent hover:text-accent-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>

            {/* Auto-play toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="ml-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-accent hover:text-accent-foreground"
              aria-label={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
            >
              {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          {/* Live region for screen readers */}
          <div 
            aria-live="polite" 
            aria-atomic="true" 
            className="sr-only"
          >
            {`Testimonial ${currentIndex + 1} of ${testimonials.length}: ${testimonials[currentIndex].quote} - ${testimonials[currentIndex].name}`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;