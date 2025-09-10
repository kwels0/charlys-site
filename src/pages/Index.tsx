import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Star, Play, Phone, Mail, MapPin, Clock, Home, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import heroAgent from '@/assets/hero-agent.jpg';
import houseBackground from '@/assets/house-background.jpg';
import clientSarah from '@/assets/client-sarah.jpg';
import clientMichael from '@/assets/client-michael.jpg';
import clientCouple from '@/assets/client-couple.jpg';


const Index = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Smooth scroll functionality
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form validation
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
        const result = await emailjs.send(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            preferred_date: formData.date,
            preferred_time: formData.time,
            message: formData.message,
            to_email: 'sarah@sarahmartinezrealty.com', // Your Gmail address
          },
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        );

        if (result.status === 200) {
          toast.success('Thank you! Your booking request has been sent. We\'ll contact you within 24 hours to confirm your showing.');
          setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
        }
      } catch (error) {
        console.error('EmailJS error:', error);
        toast.error('Sorry, there was an error sending your request. Please try again or contact us directly.');
      }
    }
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'testimonials', 'videos', 'watch', 'micro-knowledge', 'well-call-you', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsNavVisible(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Lisbeth Casillas",
      neighborhood: "Acton, CA",
      rating: 5,
      quote: "Charly did an amazing job assisting us with the purchase of our new home, as well as the sale of our old home. Throughout this process Charly was professional, positive, informative and to say the least helpful. He walked us through the entire process and assisted us with any questions or concerns we had. He even assisted us during the moving process by providing movers at no cost to us. An additional perk was the discount we got at a furniture store! He went above and beyond to make this process a positive experience. Thank you, Charly for everything you did to help our family find our dream home!!",
      image: clientSarah,
      type: "Verified Buyer"
    },
    {
      name: "Lizbeth Sandoval",  
      neighborhood: "Parkview, Lancaster, CA",
      rating: 5,
      quote: "We are very thankful for his help and we love where we live we feel very happy and comfortable with our loving home. We recommend buying a house from this company best experience I ever had and very thankful for everything.",
      image: clientMichael,
      type: "Verified Seller"
    },
    {
      name: "Ariana Gonzalez",
      neighborhood: "CA 93551", 
      rating: 5,
      quote: "Charly hands down knows real estate!!!! He was able to answer all my questions accurately and he is one of the nicest people I've ever met!!!! Working with his team Beyond Estates was an amazing experience they took a lot of stress off my hands! Unfortunately for my circumstances I was not able to qualify for what I wanted but they provided me with options so in the future when im ready im definitely coming back!!! Thank you so much Charly and Beyond Estates you guys are AMAZING!!!!!!!",
      image: clientCouple,
      type: "Verified Buyer"
    }
  ];

  const faqs = [
    {
      question: "What should I bring to a showing?",
      answer: "Pre-approval letter, ID, list of questions, and comfortable shoes for walking."
    },
    {
      question: "How are offers evaluated?",
      answer: "Price, financing terms, contingencies, and closing timeline all factor into seller decisions."
    },
    {
      question: "What red flags should I watch for?",
      answer: "Water damage, foundation issues, electrical problems, and neighborhood concerns."
    },
    {
      question: "How long does the buying process take?",
      answer: "Typically 30-45 days from accepted offer to closing, depending on financing and inspections."
    },
    {
      question: "Do you work with first-time buyers?",
      answer: "Absolutely! We specialize in guiding first-time buyers through every step of the process."
    },
    {
      question: "What's your commission structure?",
      answer: "Our competitive rates are discussed during our initial consultation based on your specific needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip to content link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isNavVisible ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-background/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="w-6 h-6 text-accent" />
              <span className="font-heading font-semibold text-lg">Charly Daoud</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
               {[
                { id: 'home', label: 'Home' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'videos', label: 'Videos' },
                { id: 'watch', label: 'Watch Us' },
                { id: 'micro-knowledge', label: 'Knowledge' },
                { id: 'well-call-you', label: 'We\'ll Call You' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-body text-sm transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent font-medium' : 'text-text-muted'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button 
              variant="default" 
              onClick={() => scrollToSection('contact')}
              data-cta="book-showing-nav"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            >
              Book a Showing
            </Button>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
          {/* House background */}
          <div className="absolute inset-0 z-0">
            <img 
              src={houseBackground}
              alt="Luxury home background"
              className="w-full h-full object-cover opacity-20"
              loading="eager"
            />
            <div className="absolute inset-0 bg-background/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Person image on the left */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={heroAgent}
                    alt="Professional real estate agent ready to help you find your dream home"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Text content on the right */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <h1 className="text-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Beyond Estates
                </h1>
                
                <h2 className="text-heading text-3xl lg:text-4xl font-semibold text-accent mb-8">
                  REAL ESTATE • FURNITURE • SOLAR
                </h2>
                
                <p className="text-body text-xl text-text-muted mb-8 max-w-2xl">
                  Your complete solution for homes, furnishing, and sustainable living. Expert guidance from property selection to move-in ready.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection('contact')}
                    data-cta="book-showing-hero"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-3"
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('watch')}
                    data-cta="watch-action-hero"
                    className="border-accent text-accent hover:bg-accent/10 px-8 py-3"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-surface/50" data-section="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-heading text-4xl font-bold text-foreground mb-4">
                What My Clients Say
              </h2>
              <p className="text-body text-xl text-text-muted max-w-2xl mx-auto">
                Real stories from satisfied buyers and sellers who trusted me with their home journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-card border-surface shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={`${testimonial.name} profile photo`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-text-muted">{testimonial.neighborhood}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3" aria-label={`${testimonial.rating} star rating`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <blockquote className="text-body text-foreground mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {testimonial.type}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="py-24" data-section="videos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-heading text-4xl font-bold text-foreground mb-4">
                Educational Videos
              </h2>
              <p className="text-body text-xl text-text-muted max-w-2xl mx-auto">
                Learn the ins and outs of home buying and selling with my expert video guides.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Beyond Estates Home Buying CRASH COURSE 🏡‼️",
                  summary: "🎥 The Complete Home Buying Process Explained! 🏠",
                  duration: "3:43",
                  thumbnail: "https://img.youtube.com/vi/5qxpyaF7JeY/maxresdefault.jpg",
                  url: "https://www.youtube.com/watch?v=5qxpyaF7JeY"
                },
                {
                  title: "Beyond Estates Explained! We Go Beyond Helping You Just Buy Your Home 🏡",
                  summary: "If Your Looking To Buy Why Not Talk To Us👀 ",
                  duration: "1:01",
                  thumbnail: "https://img.youtube.com/vi/AFLj5KKMArA/maxresdefault.jpg",
                  url: "https://youtu.be/AFLj5KKMArA"
                },
                {
                  title: "🎉 Congratulations — Your Offer Was Accepted! What Happens Next?",
                  summary: "Your Step-by-Step Guide to Buying a Home",
                  duration: "0:18",
                  thumbnail: "https://img.youtube.com/vi/plBdD_0SEVs/maxresdefault.jpg",
                  url: "https://youtu.be/plBdD_0SEVs"
                }
              ].map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-card border-surface shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Make the media area a link */}
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-video={`video-${index + 1}`}
                    className="relative block aspect-video bg-surface"
                    aria-label={`Play ${video.title} on YouTube`}
                    title={`Play ${video.title} on YouTube`}
                  >
                    <img
                      src={video.thumbnail}
                      alt={`${video.title} video thumbnail`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                      <Play className="w-16 h-16 text-white" fill="white" />
                    </span>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </a>

                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {/* Optional: make the title clickable too */}
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {video.title}
                      </a>
                    </h3>
                    <p className="text-body text-text-muted mb-4">{video.summary}</p>
                    <Collapsible>
                      <CollapsibleTrigger className="text-accent text-sm font-medium hover:text-accent/80">
                        Open transcript
                      </CollapsibleTrigger>
                      <CollapsibleContent className="text-sm text-text-muted mt-2 p-3 bg-surface/50 rounded">
                        Transcript excerpt: "Welcome to our comprehensive guide on {video.title.toLowerCase()}. In this video, we'll cover essential strategies and tips..."
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>



        {/* Watch Us In Action Section */}
        <section id="watch" className="py-24 bg-surface/50" data-section="watch">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-heading text-4xl font-bold text-foreground mb-4">
                See How I Work
              </h2>
              <p className="text-body text-xl text-text-muted max-w-2xl mx-auto">
                Watch me guide clients through every step of their home journey with expertise and care.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-surface">
                  <iframe
                    src="https://www.youtube.com/embed/FUFXdRrZXcU"
                    title="HAPPY CLIENT Testimonial *CAUTION* Some Crying Involved 🥲"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="mt-6 p-4 bg-card rounded-lg border border-surface">
                  <h4 className="font-heading font-semibold text-foreground mb-2">Description</h4>
                  <p className="text-body text-sm text-text-muted">
                    "There Is Crying In This Video🥹This Is One For The Books! One That Touched Me Personally. These Clients Were Being Told So Much Wrong Info By Other People That They Thought There Real Estate Goals Were Not Possible. We Changed That & Did What Every One Said Was Impossible. He Even Didn’t Trust Me At First Because I Said I Can Do What Everyone Else Said Was Not Possible & Now Here We Are! Celebrating The Accomplishment Of Jeff & Joyce’s Real Estate Goals. #bringmebuyers "
                  </p>
                  <a href="#" className="text-accent text-sm font-medium hover:text-accent/80 mt-2 inline-block">
                    View full transcript
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  What I Check During Every Showing
                </h3>
                
                <ul className="space-y-4">
                  {[
                    "Water pressure and plumbing functionality",
                    "Foundation and structural integrity", 
                    "HOA documents and neighborhood restrictions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-body text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <h4 className="font-heading font-semibold text-foreground mb-3">Ready to Start?</h4>
                  <p className="text-body text-text-muted mb-4">
                    Book your personalized showing and experience my thorough, professional approach firsthand.
                  </p>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    data-cta="book-showing-watch"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Schedule Your Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Micro Knowledge Section */}
        <section id="micro-knowledge" className="py-24" data-section="micro-knowledge">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-heading text-4xl font-bold text-foreground mb-4">
                Micro Knowledge Hub
              </h2>
              <p className="text-body text-xl text-text-muted max-w-2xl mx-auto">
                Quick answers, local insights, and pro tips to make your home journey smoother.
              </p>
            </div>

            {/* Portrait Videos Section */}
            <div className="mb-16">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
                Expert Insights
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Market Analysis",
                    summary: "Current market trends and opportunities",
                    reelUrl: "https://www.instagram.com/charlyprenuer/reel/DOHFNoogeOm/",
                    thumbnail: "src/assets/Screenshot 2025-09-09 101012.png"
                  },
                  {
                    title: "Investment Tips", 
                    summary: "Smart strategies for property investment",
                    reelUrl: "https://www.instagram.com/charlyprenuer/reel/DMx9cx2hgp4/",
                    thumbnail: "src\assets\Screenshot 2025-09-11 073301.png"
                  },
                  {
                    title: "Financing Guide",
                    summary: "Understanding loans and mortgage options", 
                    reelUrl: "https://www.instagram.com/charlyprenuer/reel/DM8-zi6B3Ll/",
                    thumbnail: "src\assets\Screenshot 2025-09-09 101935.png"
                  }
                ].map((video, index) => (
                  <Card key={index} className="overflow-hidden bg-card border-surface shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative aspect-[9/16] bg-surface">
                      <img 
                        src={video.thumbnail}
                        alt={`${video.title} Instagram Reel thumbnail`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <a
                        href={video.reelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                        aria-label={`View ${video.title} Instagram Reel`}
                      >
                        <Play className="w-12 h-12 text-white" fill="white" />
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                        {video.title}
                      </h4>
                      <p className="text-body text-sm text-text-muted">
                        {video.summary}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>


            {/* FAQ Section */}
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h3>
              
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-card rounded-lg border border-surface hover:border-accent/50 transition-colors text-left">
                        <span className="font-heading font-medium text-foreground">{faq.question}</span>
                        <ChevronDown className="w-5 h-5 text-text-muted transition-transform" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4 text-body text-text-muted">
                        {faq.answer}
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We'll Call You Section */}
        <section id="well-call-you" className="py-24 bg-background" data-section="well-call-you">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
              We'll Call You
            </h2>
            <p className="text-body text-xl text-text-muted mb-12 max-w-3xl mx-auto">
              Ready to take the next step? Don't wait - let us reach out to you. Our expert team is standing by to discuss your real estate, furniture, and solar needs.
            </p>
            
            <div className="mb-8">
              <p className="text-body text-lg text-foreground mb-4">
                🏠 <strong>Real Estate:</strong> Find your perfect home with personalized guidance
              </p>
              <p className="text-body text-lg text-foreground mb-4">
                🪑 <strong>Furniture:</strong> Complete furnishing solutions for your new space
              </p>
              <p className="text-body text-lg text-foreground mb-6">
                ☀️ <strong>Solar:</strong> Sustainable energy solutions to power your home
              </p>
            </div>

            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              data-cta="book-now-call-you"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-12 py-4 text-lg"
            >
              Book Now
            </Button>
            
            <p className="text-body text-sm text-text-muted mt-6">
              We typically respond within 1 hour during business hours
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-surface/50" data-section="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-heading text-4xl font-bold text-foreground mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-body text-xl text-text-muted max-w-2xl mx-auto">
                Let's schedule your personalized showing. I'll guide you through every step of your home journey.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`bg-card border-surface ${formErrors.name ? 'border-destructive' : ''}`}
                        aria-describedby={formErrors.name ? 'name-error' : undefined}
                        required
                      />
                      {formErrors.name && (
                        <p id="name-error" className="text-destructive text-sm mt-1" role="alert">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`bg-card border-surface ${formErrors.email ? 'border-destructive' : ''}`}
                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                        required
                      />
                      {formErrors.email && (
                        <p id="email-error" className="text-destructive text-sm mt-1" role="alert">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-card border-surface"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date
                      </label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="bg-card border-surface"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Time
                      </label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="bg-card border-surface"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your home goals, preferred neighborhoods, or any specific requirements..."
                      className="bg-card border-surface resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                    data-cta="book-showing-form"
                  >
                    Book Your Showing
                  </Button>

                    <p className="text-sm text-text-muted mt-1">
                      * Required fields. I'll contact you within 24 hours to confirm your appointment.
                    </p>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                    Contact Me Directly
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">(555) 123-4567</div>
                        <div className="text-sm text-text-muted">Direct line</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">sarah@sarahmartinezrealty.com</div>
                        <div className="text-sm text-text-muted">Email me anytime</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-foreground">123 Main Street, Suite 456</div>
                        <div className="text-sm text-text-muted">Downtown, State 12345</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Mon-Fri: 8AM-8PM</div>
                        <div className="text-sm text-text-muted">Sat-Sun: 9AM-6PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-xl border border-surface">
                  <h4 className="font-heading font-semibold text-foreground mb-3">Prefer Email?</h4>
                  <p className="text-body text-text-muted mb-4">
                    Send me a message directly and I'll respond within 24 hours.
                  </p>
                  <a 
                    href="mailto:sarah@sarahmartinezrealty.com?subject=Home Showing Request&body=Hi Sarah, I'd like to schedule a home showing. Please contact me to discuss available times."
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Sarah
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-surface py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="w-6 h-6 text-accent" />
                <span className="font-heading font-semibold text-lg text-foreground">Sarah Martinez</span>
              </div>
              <p className="text-body text-text-muted mb-4">
                Licensed Real Estate Professional<br />
                License #: RE123456789<br />
                Equal Housing Opportunity<br />
                Coldwell Banker Realty
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Testimonials', 'Videos', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-text-muted hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Social links would go here */}
                <div className="text-text-muted text-sm">
                  Connect with us on social media for market updates and home tips.
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-surface mt-8 pt-8 text-center">
            <p className="text-sm text-text-muted">
              © 2024 Sarah Martinez Real Estate. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg flex items-center justify-center transition-all opacity-0 invisible hover:opacity-100 hover:visible focus:opacity-100 focus:visible"
        aria-label="Back to top"
        style={{
          opacity: window.scrollY > 300 ? 1 : 0,
          visibility: window.scrollY > 300 ? 'visible' : 'hidden'
        }}
      >
        <ChevronDown className="w-5 h-5 rotate-180" />
      </button>

      {/* JSON-LD Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "RealEstateAgent",
                "@id": "https://sarahmartinezrealty.com/#agent",
                "name": "Sarah Martinez",
                "url": "https://sarahmartinezrealty.com",
                "telephone": "(555) 123-4567",
                "email": "sarah@sarahmartinezrealty.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Main Street, Suite 456",
                  "addressLocality": "Downtown",
                  "addressRegion": "State",
                  "postalCode": "12345"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "reviewCount": "350"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://sarahmartinezrealty.com/#faq",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default Index;