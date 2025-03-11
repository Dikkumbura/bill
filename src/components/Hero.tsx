
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="hero-background"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-stars"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <div 
          className={cn(
            "flex-1 transition-all duration-1000 transform translate-y-8 opacity-0",
            isLoaded && "translate-y-0 opacity-100"
          )}
        >
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              William Arrowood
            </h1>
            <div className="h-1 w-24 bg-white my-6"></div>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              A visionary leader in the insurance industry with a portfolio of successful businesses,
              redefining excellence and innovation in insurance, risk management, and underwriting.
            </p>
          </div>
          
          <a 
            href="#businesses" 
            className="inline-flex items-center group"
          >
            <span className="relative inline-flex overflow-hidden">
              <span className="text-white font-medium transition-transform group-hover:translate-y-full duration-300">
                Explore my businesses
              </span>
              <span className="absolute inset-0 text-white font-medium -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                Explore my businesses
              </span>
            </span>
            <span className="ml-2 transform transition-transform group-hover:translate-x-2 duration-300">→</span>
          </a>
        </div>
        
        <div 
          className={cn(
            "flex-1 aspect-square max-w-md transition-all duration-1000 delay-300 transform translate-y-8 opacity-0",
            isLoaded && "translate-y-0 opacity-100"
          )}
        >
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 rounded-lg transform -rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy rounded-lg transform rotate-3"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-navy p-8 rounded-lg bg-navy-light border border-white/10">
              <div className="text-center">
                <h3 className="text-white font-serif text-3xl font-bold">Insurance Portfolio</h3>
                <p className="text-white/80 mt-4">
                  Building a legacy of expertise, innovation, and leadership in the insurance sector.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded bg-white/10">
                    <p className="text-white text-xl font-bold">8+</p>
                    <p className="text-white/80 text-sm">Businesses</p>
                  </div>
                  <div className="text-center p-3 rounded bg-white/10">
                    <p className="text-white text-xl font-bold">40+</p>
                    <p className="text-white/80 text-sm">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#businesses" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50 hover:text-white transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
