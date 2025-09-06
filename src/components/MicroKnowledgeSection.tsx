import { ArrowRight, DollarSign, FileText, Calculator, Shield, TrendingUp, Users } from 'lucide-react';

const knowledgeCards = [
  {
    id: 1,
    title: 'What is Earnest Money?',
    snippet: 'A deposit showing serious intent to purchase, typically 1-3% of home price. It protects the seller and shows you\'re committed to the deal.',
    icon: DollarSign,
    category: 'Finances'
  },
  {
    id: 2,
    title: 'Understanding Closing Costs',
    snippet: 'Fees paid at closing, usually 2-5% of loan amount. Includes appraisal, title insurance, attorney fees, and lender charges.',
    icon: Calculator,
    category: 'Finances'
  },
  {
    id: 3,
    title: 'How to Read a Listing',
    snippet: 'Decode listing language and photos. Look for keywords like "cozy" (small), "unique" (unusual), and pay attention to photo angles.',
    icon: FileText,
    category: 'Buying Tips'
  },
  {
    id: 4,
    title: 'Home Insurance Basics',
    snippet: 'Protects your investment against damage and liability. Required by lenders and should cover dwelling, personal property, and liability.',
    icon: Shield,
    category: 'Protection'
  },
  {
    id: 5,
    title: 'Market Trends Impact',
    snippet: 'Buyer\'s vs seller\'s markets affect strategy. Low inventory favors sellers; high inventory favors buyers. We track these trends daily.',
    icon: TrendingUp,
    category: 'Market'
  },
  {
    id: 6,
    title: 'Working with Agents',
    snippet: 'Your agent represents your interests in negotiations, provides market expertise, and handles complex paperwork. Choose someone you trust.',
    icon: Users,
    category: 'Process'
  }
];

const categories = ['All', 'Finances', 'Buying Tips', 'Protection', 'Market', 'Process'];

const MicroKnowledgeSection = () => {
  return (
    <section id="micro-knowledge" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-primary">
            Micro Knowledge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick insights and essential knowledge to help you navigate 
            real estate decisions with confidence and clarity.
          </p>
        </div>

        {/* Knowledge cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {knowledgeCards.map((card) => {
            const IconComponent = card.icon;
            
            return (
              <div key={card.id} className="card-premium group hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  {/* Icon and category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {card.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg mb-3 text-card-foreground group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>

                  {/* Snippet */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {card.snippet}
                  </p>

                  {/* Learn more link */}
                  <button className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors group/link">
                    Learn more
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA section */}
        <div className="text-center">
          <div className="card-premium max-w-2xl mx-auto p-8">
            <h3 className="font-heading text-2xl mb-4 text-primary">
              Have More Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experienced team is here to provide personalized answers 
              and guide you through every aspect of your real estate journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Schedule a Consultation
              </button>
              <button className="btn-ghost text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                Download Complete Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroKnowledgeSection;