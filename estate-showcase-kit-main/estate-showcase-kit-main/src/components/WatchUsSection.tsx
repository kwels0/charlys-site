import { Play, Award, MapPin, TrendingUp } from 'lucide-react';

const WatchUsSection = () => {
  return (
    <section id="watch-us" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video section */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video bg-gradient-to-br from-primary to-primary-hover rounded-xl overflow-hidden shadow-xl">
              {/* Video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <button className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-accent-hover transition-colors group">
                    <Play size={32} className="text-accent-foreground ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                  <p className="text-lg opacity-90">Watch Our Story</p>
                  <p className="text-sm opacity-70">Click to replace with your video URL</p>
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content section */}
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-primary">
              Watch Us in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See firsthand how our dedicated team transforms the real estate experience 
              through personalized service and unwavering commitment to excellence.
            </p>

            {/* Differentiators */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Concierge Buying Experience</h3>
                  <p className="text-muted-foreground">
                    White-glove service from initial consultation to keys in hand, 
                    handling every detail with precision and care.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Neighborhood Expertise</h3>
                  <p className="text-muted-foreground">
                    Deep local knowledge spanning decades, ensuring you find not just a house, 
                    but the perfect community for your lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Data-Driven Pricing</h3>
                  <p className="text-muted-foreground">
                    Advanced market analysis and cutting-edge tools ensure optimal 
                    pricing strategy for maximum value in every transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchUsSection;