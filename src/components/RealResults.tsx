import React, { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

const RealResults: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-16 bg-navy-dark overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient overlay to transition from previous section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark/70"></div>
        
        {/* Animated chart-like background elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,50 Q25,30 50,50 Q75,70 100,50 L100,100 L0,100 Z" 
              fill="url(#blue-gradient)" 
              className="animate-wave-slow"
            />
            <path 
              d="M0,70 Q30,60 50,70 Q70,80 100,70 L100,100 L0,100 Z" 
              fill="url(#indigo-gradient)" 
              className="animate-wave"
            />
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="indigo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Growth lines animation */}
        <div className="absolute inset-0 flex justify-around items-end opacity-10">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="w-0.5 bg-gradient-to-t from-blue-500 to-transparent rounded-full"
              style={{ 
                height: `${20 + Math.random() * 30}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${i * 0.2}s` 
              }}
            >
              <div className="w-0.5 h-full bg-gradient-to-t from-blue-500 to-transparent animate-grow-height"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="inline-flex items-center text-3xl md:text-4xl font-bold text-white">
              <svg className="w-8 h-8 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Real Results, Real Growth
            </h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200} animation="fade-in">
          <div className={cn(
            "bg-navy-light/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl mb-8",
            "transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/20"
          )}>
            <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
              Early implementations of AI automation in the insurance space are delivering massive results:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lead Conversion Card */}
              <AnimatedSection delay={300} threshold={0.1}>
                <div 
                  className={cn(
                    "bg-gradient-to-br from-navy-light/40 to-navy-dark/60 rounded-lg p-6 border border-white/5 transition-all duration-500 relative",
                    "shadow-lg transform hover:-translate-y-1 h-[180px] flex flex-col",
                    hoveredCard === 0 ? "border-white/20 shadow-xl shadow-blue-900/10" : "hover:border-white/10 hover:shadow-xl hover:shadow-blue-900/10"
                  )}
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Glow Effect */}
                  <div 
                    className={cn(
                      "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                      "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                      "blur-2xl rounded-lg",
                      hoveredCard === 0 && "opacity-100"
                    )}
                  ></div>

                  <div className="flex items-center mb-4">
                    <div className={cn(
                      "w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20 transition-all duration-500",
                      hoveredCard === 0 && "scale-110 shadow-blue-500/30"
                    )}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold">Lead Conversion</h3>
                  </div>
                  <p className="text-white/70">Higher lead conversion rates</p>
                  
                  {/* Bottom border animation */}
                  <div 
                    className={cn(
                      "absolute bottom-0 left-0 h-1 bg-white rounded-b-lg",
                      "transition-all duration-500 ease-out opacity-30",
                      hoveredCard === 0 ? "w-full" : "w-0"
                    )}
                  ></div>
                </div>
              </AnimatedSection>
              
              {/* Admin Overhead Card */}
              <AnimatedSection delay={400} threshold={0.1}>
                <div 
                  className={cn(
                    "bg-gradient-to-br from-navy-light/40 to-navy-dark/60 rounded-lg p-6 border border-white/5 transition-all duration-500 relative",
                    "shadow-lg transform hover:-translate-y-1 h-[180px] flex flex-col",
                    hoveredCard === 1 ? "border-white/20 shadow-xl shadow-blue-900/10" : "hover:border-white/10 hover:shadow-xl hover:shadow-blue-900/10"
                  )}
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Glow Effect */}
                  <div 
                    className={cn(
                      "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                      "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                      "blur-2xl rounded-lg",
                      hoveredCard === 1 && "opacity-100"
                    )}
                  ></div>
                
                  <div className="flex items-center mb-4">
                    <div className={cn(
                      "w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20 transition-all duration-500",
                      hoveredCard === 1 && "scale-110 shadow-blue-500/30"
                    )}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold">Admin Overhead</h3>
                  </div>
                  <p className="text-white/70">Reduced admin overhead</p>
                  
                  {/* Bottom border animation */}
                  <div 
                    className={cn(
                      "absolute bottom-0 left-0 h-1 bg-white rounded-b-lg",
                      "transition-all duration-500 ease-out opacity-30",
                      hoveredCard === 1 ? "w-full" : "w-0"
                    )}
                  ></div>
                </div>
              </AnimatedSection>
              
              {/* Agent Efficiency Card */}
              <AnimatedSection delay={500} threshold={0.1}>
                <div 
                  className={cn(
                    "bg-gradient-to-br from-navy-light/40 to-navy-dark/60 rounded-lg p-6 border border-white/5 transition-all duration-500 relative",
                    "shadow-lg transform hover:-translate-y-1 h-[180px] flex flex-col",
                    hoveredCard === 2 ? "border-white/20 shadow-xl shadow-blue-900/10" : "hover:border-white/10 hover:shadow-xl hover:shadow-blue-900/10"
                  )}
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Glow Effect */}
                  <div 
                    className={cn(
                      "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                      "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                      "blur-2xl rounded-lg",
                      hoveredCard === 2 && "opacity-100"
                    )}
                  ></div>
                
                  <div className="flex items-center mb-4">
                    <div className={cn(
                      "w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20 transition-all duration-500",
                      hoveredCard === 2 && "scale-110 shadow-blue-500/30"
                    )}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold">Agent Efficiency</h3>
                  </div>
                  <div className="text-white/70">
                    <p>Increased agent efficiency &</p>
                    <p>revenue</p>
                  </div>
                  
                  {/* Bottom border animation */}
                  <div 
                    className={cn(
                      "absolute bottom-0 left-0 h-1 bg-white rounded-b-lg",
                      "transition-all duration-500 ease-out opacity-30",
                      hoveredCard === 2 ? "w-full" : "w-0"
                    )}
                  ></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="relative mt-24 z-10">
        {/* Visual connector element */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealResults; 