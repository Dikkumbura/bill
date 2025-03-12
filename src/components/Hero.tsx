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
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="text-white/80 font-medium">Transforming Insurance Through AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Pass the Torch to AI: <span className="text-gradient">William Arrowood</span> Leads Insurance Automation
            </h1>
            <div className="h-1 w-24 bg-white my-6"></div>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              Simplify Your Day. Ignite More Sales. Automate Routine Tasks. Spark Real Growth.
            </p>
          </div>
          
          <a 
            href="https://insurx.us" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
          >
            <span className="text-white font-medium">See AI in Action</span>
            <span className="ml-2 transform transition-transform group-hover:translate-x-1 duration-300">→</span>
          </a>
        </div>
        
        <div 
          className={cn(
            "flex-1 max-w-md transition-all duration-1000 delay-300 transform translate-y-8 opacity-0",
            isLoaded && "translate-y-0 opacity-100"
          )}
        >
          <div className="relative w-full h-full bg-navy-dark/80 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-xl">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Meet William Arrowood</h3>
            
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <p className="text-white/80 leading-relaxed">
                In a rapidly evolving industry, William Arrowood stands apart. Having built and successfully scaled numerous industry-leading companies—including Madison Insurance Group (MIG)—he understands the power of innovation and automation.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Now, he's engaged with Insurx to bring AI-driven solutions to the insurance space, helping agencies streamline operations, increase revenue, and dominate the market.
                </p>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="text-center p-3 rounded bg-white/10 hover:bg-white/15 transition-colors">
                <p className="text-white text-xl font-bold">Simplify</p>
                <p className="text-white/70 text-xs">Operations</p>
              </div>
              <div className="text-center p-3 rounded bg-white/10 hover:bg-white/15 transition-colors">
                <p className="text-white text-xl font-bold">Automate</p>
                <p className="text-white/70 text-xs">Workflows</p>
              </div>
              <div className="text-center p-3 rounded bg-white/10 hover:bg-white/15 transition-colors">
                <p className="text-white text-xl font-bold">Grow</p>
                <p className="text-white/70 text-xs">Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#businesses" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50 hover:text-white transition-colors"
      >
        <span className="text-sm mb-2">Discover More</span>
        <ChevronDown size={20} />
      </a>
      
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #3b82f6, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;
