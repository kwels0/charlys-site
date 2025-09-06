import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';
import WatchUsSection from '@/components/WatchUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HomeBuyingSection from '@/components/HomeBuyingSection';
import MicroKnowledgeSection from '@/components/MicroKnowledgeSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main id="main-content">
        <HeroSection />
        <PortfolioSection />
        <WatchUsSection />
        <TestimonialsSection />
        <HomeBuyingSection />
        <MicroKnowledgeSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-xl mb-4">Elite Properties</h3>
              <p className="text-sm opacity-80">
                Your trusted partner in luxury real estate for over 15 years.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#watch-us" className="hover:text-accent transition-colors">Watch Us in Action</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="text-sm space-y-2 opacity-80">
                <p>(555) 012-3456</p>
                <p>hello@eliteproperties.com</p>
                <p>123 Real Estate Blvd, Suite 456<br />Beverly Hills, CA 90210</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 Elite Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
