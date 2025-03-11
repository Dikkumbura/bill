import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessCardProps {
  name: string;
  description: string;
  url: string;
  index: number;
}

const BusinessCard = ({ name, description, url, index }: BusinessCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Extract domain name without protocol and www
  const domain = url.replace(/(https?:\/\/)?(www\.)?/, '');

  // Check if it's ACC Insurance or Invopeo to show their logos
  const isAccInsurance = name === "ACC Insurance";
  const isInvopeo = name === "Invopeo";
  const isMadisonPeo = name === "Madison PEO";
  const isMigInsurance = name === "MIG Insurance Group";
  const isLearnInsurance = name === "Learn Insurance Live";
  const isInvoUnderwriting = name === "Invo Underwriting";
  const isMadisonianetwork = name === "Madisonianetwork";
  const isArrowBrokers = name === "Arrow Brokers";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block group relative overflow-hidden rounded-lg border border-white/20",
        "bg-navy-dark/50 backdrop-blur-sm",
        "transition-all duration-500 ease-out transform isolation",
        "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 hover:z-10",
        "hover:border-white/30",
        "min-h-[200px]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
          "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          "blur-2xl",
          isHovered && "opacity-100"
        )}
      ></div>
      
      <div className="p-6 relative z-10 flex flex-col transition-colors duration-500">
        <div className="flex justify-between items-start mb-4">
          {isAccInsurance ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden bg-navy-dark",
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="/images/AIC.svg" 
                alt="ACC Insurance Logo" 
                className="w-12 h-12 object-contain p-1"
              />
            </div>
          ) : isInvopeo ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden",
                "bg-navy-dark", // Dark background for Invopeo logo
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="/images/INVO-PEO-logo-final.png" 
                alt="Invopeo Logo" 
                className="w-12 h-12 object-contain p-1"
              />
            </div>
          ) : isMadisonPeo ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden",
                "bg-navy-dark",
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="/images/MadisonPEO-LogoWHITE55-1.png" 
                alt="Madison PEO Logo" 
                className="w-12 h-12 object-contain p-1"
              />
            </div>
          ) : isMigInsurance ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden",
                "bg-white",
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="/images/HEADER---MIG-AVATAR-LOGO---MADISON-ONLY-1.png.webp" 
                alt="MIG Insurance Group Logo" 
                className="w-12 h-12 object-contain p-1 brightness-125"
              />
            </div>
          ) : isLearnInsurance ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden",
                "bg-white",
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="/images/ITS-weblogo200.jpg" 
                alt="Learn Insurance Live Logo" 
                className="w-12 h-12 object-contain p-1"
              />
            </div>
          ) : isInvoUnderwriting ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden",
                "bg-white",
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="/images/INVOU logo-HORIZ.png" 
                alt="INVO Underwriting Logo" 
                className="w-12 h-12 object-contain p-1"
              />
            </div>
          ) : isMadisonianetwork ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden",
                "bg-white",
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="/images/MIAN_logo_notag.svg" 
                alt="Madisonianetwork Logo" 
                className="w-12 h-12 object-contain p-1"
              />
            </div>
          ) : isArrowBrokers ? (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden",
                "bg-white",
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <img 
                src="/images/arrow_brokers_redoSMALL.jpg" 
                alt="Arrow Brokers Logo" 
                className="w-12 h-12 object-contain p-1"
              />
            </div>
          ) : (
            <div 
              className={cn(
                "w-14 h-14 flex items-center justify-center rounded-lg text-white font-bold text-2xl bg-navy-dark",
                "transition-all duration-500",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              {name.charAt(0)}
            </div>
          )}
          <ExternalLink 
            className={cn(
              "text-white/50 transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )} 
            size={20} 
          />
        </div>
        
        <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-2 group-hover:text-white/80 transition-colors duration-300">{name}</h3>
        
        <p className="text-white/80 text-sm leading-relaxed mb-4">{description}</p>
        
        <div className="text-sm font-medium text-white/60 mt-auto">{domain}</div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-0 left-0 h-1 bg-white",
          "transition-all duration-500 ease-out opacity-30",
          isHovered ? "w-full" : "w-0"
        )}
      ></div>
    </a>
  );
};

export default BusinessCard;
