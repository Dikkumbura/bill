import BusinessCard from "./BusinessCard";
import AnimatedSection from "./AnimatedSection";
import { useEffect, useRef, useState } from "react";

const businesses = [
  {
    name: "ACC Insurance",
    description: "Specialized insurance solutions with a focus on comprehensive coverage and customer service.",
    url: "https://www.accinsco.com/"
  },
  {
    name: "Invopeo",
    description: "Innovative insurance solutions designed for modern business needs and risk management.",
    url: "https://invopeo.com/"
  },
  {
    name: "Madison PEO",
    description: "Professional employer organization offering comprehensive HR solutions and employee benefits.",
    url: "https://www.madisonpeo.com/"
  },
  {
    name: "MIG Insurance Group",
    description: "Comprehensive insurance services with a client-centered approach to coverage and claims.",
    url: "https://www.miginsgroup.com/"
  },
  {
    name: "Learn Insurance Live",
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
  const [columns, setColumns] = useState(4);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
      else if (width < 1024) setColumns(2);
      else if (width < 1280) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Distribute businesses across columns
  const columnArrays = Array.from({ length: columns }, (_, i) => 
    businesses.filter((_, index) => index % columns === i)
  );

  return (
    <section id="businesses" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="hero-background"></div>
        <div className="hero-grid opacity-70"></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)] blur-3xl"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 70% 70%, rgba(23, 58, 105, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)
            `,
            mixBlendMode: 'soft-light',
            animation: 'glowPulse 8s ease-in-out infinite'
          }}
        ></div>
        <div className="hero-stars opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Insurance Business Portfolio
            </h2>
            <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              A collection of industry-leading businesses established to serve
              diverse needs across the insurance ecosystem.
            </p>
          </div>
        </AnimatedSection>

        <div ref={gridRef} className="flex gap-4 sm:gap-6">
          {columnArrays.map((columnBusinesses, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-4 sm:gap-6">
              {columnBusinesses.map((business, index) => (
                <AnimatedSection 
                  key={business.name} 
                  delay={100 * (index + columnIndex)} 
                  threshold={0.1}
                >
                  <BusinessCard
                    name={business.name}
                    description={business.description}
                    url={business.url}
                    index={index}
                  />
                </AnimatedSection>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessGrid;
