import { ArrowRight, Download, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container-custom py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light mb-6">
            Your Dream Home
            <span className="block text-gradient">Awaits</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto opacity-90">
            Experience unparalleled service in luxury real estate with our expert team 
            guiding you every step of the way
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn-accent inline-flex items-center gap-2">
              Book a Viewing
              <ArrowRight size={20} />
            </button>
            <button className="btn-ghost text-white border-white hover:bg-white hover:text-primary inline-flex items-center gap-2">
              <Download size={20} />
              Download Buyer's Guide
            </button>
          </div>
          
          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-light text-accent mb-2">
                15+
              </div>
              <div className="text-sm opacity-80">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-light text-accent mb-2">
                1,200+
              </div>
              <div className="text-sm opacity-80">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-light text-accent mb-2">
                12
              </div>
              <div className="text-sm opacity-80">Average Days on Market</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;