import React, { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

const MigAiDemo: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredCta, setHoveredCta] = useState(false);

  // Function to render custom SVG icons for each feature
  const renderFeatureIcon = (featureIndex: number) => {
    switch(featureIndex) {
      case 0: // Instant Quotes
        return (
          <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 1: // Automated Appointment Scheduling
        return (
          <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 2: // Claims Filing (Auto)
        return (
          <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 3: // Customer Support Ticketing
        return (
          <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-16 bg-navy-dark overflow-hidden">
      {/* Animated Background Elements - Hero Section Transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient overlay to transition from hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark/80"></div>
        
        {/* Glowing orbs that match the hero aesthetic */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-blue-400/5 rounded-full blur-2xl animate-float"></div>
        
        {/* Flowing network lines */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" className="opacity-10">
            <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 L100 50 M50 0 L50 100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#network-pattern)"></rect>
            
            {/* Animated points at intersections */}
            {Array.from({ length: 10 }).map((_, i) => (
              <circle 
                key={i} 
                cx={`${10 + (i * 10)}%`} 
                cy={`${(i % 5) * 25}%`} 
                r="1" 
                fill="#4f46e5" 
                className={`animate-pulse opacity-${30 + (i % 7) * 10}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>
        
        {/* Subtle rising particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-rise"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-5px`,
                animationDuration: `${6 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Introducing the MIG AI Agent
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The AI-Powered AI Assistant Transforming Insurance Agencies.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Feature Card - Now with sophisticated icon styling */}
        <AnimatedSection delay={200} animation="fade-in">
          <div className={cn(
            "bg-gradient-to-br from-navy-light/40 to-navy-dark/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl mb-8",
            "transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/20"
          )}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First column of features */}
              <div className="space-y-6">
                <AnimatedSection delay={300} threshold={0.2}>
                  <div 
                    className={cn(
                      "flex items-start group p-4 rounded-lg transition-all duration-500 relative",
                      "hover:bg-white/5 transform hover:-translate-y-1"
                    )}
                    onMouseEnter={() => setHoveredCard(0)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 bg-navy-light/50 border border-white/10 rounded-full flex items-center justify-center mr-4 transition-all duration-500",
                      hoveredCard === 0 ? "bg-navy-light/70 border-white/20 scale-110" : "shadow-inner shadow-navy-dark/50"
                    )}>
                      {renderFeatureIcon(0)}
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-white/90">Instant Quotes</h3>
                      <p className="text-white/70 group-hover:text-white/80 transition-colors">No delays, no missed leads. Get real-time quotes to your clients and prospects.</p>
                    </div>
                    {/* Glow Effect when hovered */}
                    <div 
                      className={cn(
                        "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                        "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                        "blur-2xl rounded-lg",
                        hoveredCard === 0 && "opacity-100"
                      )}
                    ></div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={400} threshold={0.2}>
                  <div 
                    className={cn(
                      "flex items-start group p-4 rounded-lg transition-all duration-500 relative",
                      "hover:bg-white/5 transform hover:-translate-y-1"
                    )}
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 bg-navy-light/50 border border-white/10 rounded-full flex items-center justify-center mr-4 transition-all duration-500",
                      hoveredCard === 1 ? "bg-navy-light/70 border-white/20 scale-110" : "shadow-inner shadow-navy-dark/50"
                    )}>
                      {renderFeatureIcon(1)}
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-white/90">Automated Appointment Scheduling</h3>
                      <p className="text-white/70 group-hover:text-white/80 transition-colors">Boost productivity & never miss a client. Let AI handle your calendar.</p>
                    </div>
                    {/* Glow Effect when hovered */}
                    <div 
                      className={cn(
                        "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                        "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                        "blur-2xl rounded-lg",
                        hoveredCard === 1 && "opacity-100"
                      )}
                    ></div>
                  </div>
                </AnimatedSection>
              </div>
              
              {/* Second column of features */}
              <div className="space-y-6">
                <AnimatedSection delay={500} threshold={0.2}>
                  <div 
                    className={cn(
                      "flex items-start group p-4 rounded-lg transition-all duration-500 relative",
                      "hover:bg-white/5 transform hover:-translate-y-1"
                    )}
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 bg-navy-light/50 border border-white/10 rounded-full flex items-center justify-center mr-4 transition-all duration-500",
                      hoveredCard === 2 ? "bg-navy-light/70 border-white/20 scale-110" : "shadow-inner shadow-navy-dark/50"
                    )}>
                      {renderFeatureIcon(2)}
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-white/90">Claims Filing (Auto)</h3>
                      <p className="text-white/70 group-hover:text-white/80 transition-colors">Fast, hassle-free claims handling. Streamline the process for your clients.</p>
                    </div>
                    {/* Glow Effect when hovered */}
                    <div 
                      className={cn(
                        "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                        "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                        "blur-2xl rounded-lg",
                        hoveredCard === 2 && "opacity-100"
                      )}
                    ></div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={600} threshold={0.2}>
                  <div 
                    className={cn(
                      "flex items-start group p-4 rounded-lg transition-all duration-500 relative",
                      "hover:bg-white/5 transform hover:-translate-y-1"
                    )}
                    onMouseEnter={() => setHoveredCard(3)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 bg-navy-light/50 border border-white/10 rounded-full flex items-center justify-center mr-4 transition-all duration-500",
                      hoveredCard === 3 ? "bg-navy-light/70 border-white/20 scale-110" : "shadow-inner shadow-navy-dark/50"
                    )}>
                      {renderFeatureIcon(3)}
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-white/90">Customer Support Ticketing</h3>
                      <p className="text-white/70 group-hover:text-white/80 transition-colors">Seamless issue resolution & client interactions. Keep your clients happy.</p>
                    </div>
                    {/* Glow Effect when hovered */}
                    <div 
                      className={cn(
                        "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                        "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                        "blur-2xl rounded-lg",
                        hoveredCard === 3 && "opacity-100"
                      )}
                    ></div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* CTA Button */}
        <AnimatedSection delay={700}>
          <div className="flex justify-center">
            <a 
              href="https://insurx.us" 
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-medium",
                "shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 group",
                "relative overflow-hidden transform hover:-translate-y-1"
              )}
              onMouseEnter={() => setHoveredCta(true)}
              onMouseLeave={() => setHoveredCta(false)}
            >
              {/* Glow Effect */}
              <div 
                className={cn(
                  "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                  "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]",
                  "blur-2xl",
                  hoveredCta && "opacity-100"
                )}
              ></div>
              
              <span className="flex items-center relative z-10">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Be the first to leverage AI for your agency
              </span>
              <span className="ml-2 transform transition-transform group-hover:translate-x-1 duration-300 relative z-10">→</span>
              
              {/* Bottom border animation */}
              <div 
                className={cn(
                  "absolute bottom-0 left-0 h-1 bg-white",
                  "transition-all duration-500 ease-out opacity-30",
                  hoveredCta ? "w-full" : "w-0"
                )}
              ></div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MigAiDemo; 