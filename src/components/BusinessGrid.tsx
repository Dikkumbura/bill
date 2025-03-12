import BusinessCard from "./BusinessCard";
import AnimatedSection from "./AnimatedSection";

const businesses = [
  {
    name: "AIC Insurance",
    description: "Specialized insurance solutions with a focus on comprehensive coverage and customer service.",
    url: "https://www.accinsco.com/"
  },
  {
    name: "INVO PEO",
    description: "Innovative insurance solutions designed for modern business needs and risk management.",
    url: "https://invopeo.com/"
  },
  {
    name: "Madison PEO",
    description: "Professional employer organization offering comprehensive HR solutions and employee benefits.",
    url: "https://www.madisonpeo.com/"
  },
  {
    name: "Madison Insurance Group",
    description: "Comprehensive insurance services with a client-centered approach to coverage and claims.",
    url: "https://www.miginsgroup.com/"
  },
  {
    name: "Insurance Training School",
    description: "Educational platform for insurance professionals focused on industry training and development.",
    url: "https://www.learninsurancelive.com/"
  },
  {
    name: "Invo Underwriting",
    description: "Specialized underwriting services with expertise in risk assessment and policy management.",
    url: "https://invounderwriting.com/"
  },
  {
    name: "Arrow Brokers",
    description: "Insurance brokerage firm providing tailored solutions and personalized client service.",
    url: "https://arrowbrokers.com/"
  }
];

const BusinessGrid = () => {
  // Since we have 7 cards, we can arrange them in a 2-3-2 pattern
  // This creates a more balanced, diamond-like layout
  return (
    <section id="businesses" className="enhanced-section py-16 relative">
      {/* Background Effects */}
      <div className="grid-overlay"></div>
      <div className="glow-orb glow-orb-blue" style={{ width: "400px", height: "400px", top: "15%", left: "5%" }}></div>
      <div className="glow-orb glow-orb-indigo" style={{ width: "350px", height: "350px", bottom: "5%", right: "10%" }}></div>
      <div className="glow-orb glow-orb-blue" style={{ width: "250px", height: "250px", top: "40%", right: "20%" }}></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Insurance Enterprise Portfolio
            </h2>
            <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              A collection of industry-leading businesses established to serve
              diverse needs across the insurance ecosystem.
            </p>
          </div>
        </AnimatedSection>

        {/* First row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {businesses.slice(0, 2).map((business, index) => (
            <AnimatedSection key={business.name} delay={index * 75} threshold={0.1}>
              <BusinessCard
                name={business.name}
                description={business.description}
                url={business.url}
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>
        
        {/* Middle row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {businesses.slice(2, 5).map((business, index) => (
            <AnimatedSection key={business.name} delay={(index + 2) * 75} threshold={0.1}>
              <BusinessCard
                name={business.name}
                description={business.description}
                url={business.url}
                index={index + 2}
              />
            </AnimatedSection>
          ))}
        </div>
        
        {/* Bottom row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businesses.slice(5, 7).map((business, index) => (
            <AnimatedSection key={business.name} delay={(index + 5) * 75} threshold={0.1}>
              <BusinessCard
                name={business.name}
                description={business.description}
                url={business.url}
                index={index + 5}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessGrid;
