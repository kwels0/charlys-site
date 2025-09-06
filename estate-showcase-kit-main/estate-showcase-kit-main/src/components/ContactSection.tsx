import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter phone as XXX-XXX-XXXX';
    }

    if (!formData.purpose) {
      newErrors.purpose = 'Please select a purpose';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          purpose: '',
          message: ''
        });
      }, 3000);
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as XXX-XXX-XXXX
    if (digits.length >= 6) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    } else if (digits.length >= 3) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }
    return digits;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formattedPhone }));
    
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-primary">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your real estate journey? We're here to help you 
            every step of the way with personalized service and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-premium p-8">
            <h3 className="font-heading text-2xl mb-6 text-primary">
              Get in Touch
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-success mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.name ? 'border-destructive' : 'border-input-border focus:border-accent'
                    }`}
                    placeholder="Enter your full name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.email ? 'border-destructive' : 'border-input-border focus:border-accent'
                    }`}
                    placeholder="your.email@example.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.phone ? 'border-destructive' : 'border-input-border focus:border-accent'
                    }`}
                    placeholder="XXX-XXX-XXXX"
                    maxLength={12}
                    aria-describedby={errors.phone ? 'phone-error phone-help' : 'phone-help'}
                  />
                  <p id="phone-help" className="mt-1 text-xs text-muted-foreground">
                    Format: XXX-XXX-XXXX
                  </p>
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Purpose field */}
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-foreground mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.purpose ? 'border-destructive' : 'border-input-border focus:border-accent'
                    }`}
                    aria-describedby={errors.purpose ? 'purpose-error' : undefined}
                  >
                    <option value="">Select your interest</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="investing">Investment Properties</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                  {errors.purpose && (
                    <p id="purpose-error" className="mt-1 text-sm text-destructive">
                      {errors.purpose}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
                      errors.message ? 'border-destructive' : 'border-input-border focus:border-accent'
                    }`}
                    placeholder="Tell us about your real estate needs..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full btn-accent inline-flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Details */}
            <div className="card-premium p-8">
              <h3 className="font-heading text-2xl mb-6 text-primary">
                Visit Our Office
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Real Estate Boulevard<br />
                      Suite 456<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a 
                      href="tel:+1-555-0123" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      (555) 012-3456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:hello@eliteproperties.com" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      hello@eliteproperties.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <div className="text-muted-foreground text-sm">
                      <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="card-premium overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Interactive Map</p>
                  <p className="text-xs">Replace with embedded map</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-premium p-8">
              <h3 className="font-heading text-xl mb-4 text-primary">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;