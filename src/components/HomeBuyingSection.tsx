import { useState } from 'react';
import { ChevronDown, CheckCircle, AlertCircle, Home, Search, Eye, FileText, ClipboardCheck, Key, Truck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Pre-Approval',
    icon: CheckCircle,
    description: 'Get pre-approved for your mortgage to understand your budget and strengthen your offers.',
    tip: 'Tip: Get pre-approved before you start looking to move quickly on the perfect property.',
    details: 'Work with our recommended lenders to get the best rates and terms. We\'ll guide you through the documentation process and help you understand different loan options.'
  },
  {
    id: 2,
    title: 'Property Search',
    icon: Search,
    description: 'Explore properties that match your criteria with our expert guidance and market insights.',
    tip: 'Tip: Be open to properties that are 80% of what you want - the perfect home might surprise you.',
    details: 'Using advanced search tools and our local expertise, we\'ll identify properties that meet your needs and budget. We\'ll also provide detailed market analysis for each option.'
  },
  {
    id: 3,
    title: 'Property Tours',
    icon: Eye,
    description: 'Tour selected properties and evaluate them with our professional assessment.',
    tip: 'Tip: Visit properties at different times of day to get a complete picture of the neighborhood.',
    details: 'We\'ll arrange private showings and provide detailed insights about each property\'s condition, market position, and potential. Our experienced eye helps you see beyond staging.'
  },
  {
    id: 4,
    title: 'Make an Offer',
    icon: FileText,
    description: 'Submit competitive offers with strategic pricing and favorable terms.',
    tip: 'Tip: In competitive markets, consider escalation clauses and flexible closing dates.',
    details: 'Our negotiation expertise and market knowledge help craft offers that stand out. We\'ll handle all paperwork and communicate with the seller\'s agent to maximize your chances.'
  },
  {
    id: 5,
    title: 'Inspection & Appraisal',
    icon: ClipboardCheck,
    description: 'Conduct thorough property inspections and secure financing appraisal.',
    tip: 'Tip: Attend the inspection to learn about your future home\'s systems and maintenance needs.',
    details: 'We coordinate with trusted inspectors and help you understand findings. Our network ensures quality assessments that protect your investment and inform your decisions.'
  },
  {
    id: 6,
    title: 'Closing Process',
    icon: Key,
    description: 'Navigate final paperwork, walkthrough, and transfer of ownership.',
    tip: 'Tip: Do a final walkthrough 24 hours before closing to ensure everything is in order.',
    details: 'We manage the entire closing process, coordinating with all parties to ensure a smooth transaction. Our attention to detail prevents last-minute surprises.'
  },
  {
    id: 7,
    title: 'Welcome Home',
    icon: Home,
    description: 'Receive your keys and begin the next chapter in your new home.',
    tip: 'Tip: Change locks and update your address with important institutions immediately.',
    details: 'Our service continues after closing with move-in coordination, local service recommendations, and ongoing support as you settle into your new home.'
  }
];

const HomeBuyingSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  return (
    <section id="home-buying" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-primary">
            Home Buying Explained
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate the home buying process with confidence. Our step-by-step guide 
            ensures you understand every stage of your real estate journey.
          </p>
        </div>

        {/* Timeline/Accordion */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep === step.id;
            const isCompleted = false; // Could be dynamic based on user progress

            return (
              <div key={step.id} className="relative">
                {/* Timeline line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-16 bg-muted-foreground/30"></div>
                )}

                {/* Step container */}
                <div className="flex gap-6 mb-8">
                  {/* Step number and icon */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isCompleted 
                        ? 'bg-success text-success-foreground' 
                        : isActive 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-muted-foreground">
                      {step.id}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-1">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className="w-full text-left group"
                      aria-expanded={isActive}
                      aria-controls={`step-content-${step.id}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading text-xl md:text-2xl group-hover:text-accent transition-colors">
                          {step.title}
                        </h3>
                        <ChevronDown 
                          size={20} 
                          className={`text-muted-foreground transition-transform ${
                            isActive ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <AlertCircle size={16} />
                        {step.tip}
                      </div>
                    </button>

                    {/* Expandable content */}
                    <div
                      id={`step-content-${step.id}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="card-premium p-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your home buying journey?
          </p>
          <button className="btn-accent">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBuyingSection;