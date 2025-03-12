import React, { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

const Testimonial: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="enhanced-section py-16 relative">
      {/* Background effects */}
      <div className="grid-overlay"></div>
      <div className="glow-orb glow-orb-blue" style={{ width: "300px", height: "300px", top: "5%", right: "10%" }}></div>
      <div className="glow-orb glow-orb-indigo" style={{ width: "250px", height: "250px", bottom: "10%", left: "20%" }}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What William Arrowood Says About AI & INSURX
            </h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200} threshold={0.1}>
          <div 
            className={cn(
              "enhanced-card p-8 md:p-12 relative overflow-hidden transition-all duration-500",
              "transform hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]", 
              isHovered && "border-white/20 -translate-y-1"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glow Effect when hovered */}
            <div 
              className={cn(
                "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                "blur-2xl",
                isHovered && "opacity-100"
              )}
            ></div>
          
            <div className="flex flex-col items-center relative z-10">
              <svg 
                className={cn(
                  "w-12 h-12 text-blue-500/80 mb-6 transition-all duration-500",
                  isHovered && "scale-110 text-blue-500/100"
                )}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
              </svg>
              
              <blockquote className={cn(
                "text-xl md:text-2xl text-white/90 font-light text-center italic leading-relaxed mb-8",
                "transition-colors duration-300",
                isHovered && "text-white"
              )}>
                "AI isn't just about technology—it's about unlocking real growth opportunities. Insurx's solutions have transformed the way we operate, making us more efficient and more profitable."
              </blockquote>
              
              <div className="flex items-center flex-col">
                <div className={cn(
                  "w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-4 rounded-full transition-all duration-500",
                  isHovered && "w-16"
                )}></div>
                <p className="text-white font-semibold">William Arrowood</p>
                <p className="text-white/70 text-sm">President, Madison Insurance Group</p>
              </div>
            </div>
            
            {/* Bottom border animation */}
            <div 
              className={cn(
                "absolute bottom-0 left-0 h-1 bg-white",
                "transition-all duration-500 ease-out opacity-30",
                isHovered ? "w-full" : "w-0"
              )}
            ></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonial; 