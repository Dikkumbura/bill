import AnimatedSection from "./AnimatedSection";
import { Award, Briefcase, Users, TrendingUp } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Briefcase className="h-6 w-6 text-white" />,
      title: "10+ Businesses",
      description: "Founded and developed multiple successful insurance ventures"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Industry Leader",
      description: "Recognized expert in insurance operations and management"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Strategic Growth",
      description: "Consistent business expansion and market development"
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Innovation",
      description: "Pioneering new approaches in the insurance industry"
    }
  ];

  return (
    <section id="about" className="enhanced-section py-16 relative">
      {/* Background Effects */}
      <div className="grid-overlay"></div>
      <div className="glow-orb glow-orb-blue" style={{ width: "350px", height: "350px", top: "10%", right: "5%" }}></div>
      <div className="glow-orb glow-orb-indigo" style={{ width: "300px", height: "300px", bottom: "15%", left: "10%" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection animation="fade-in">
            <div className="flex flex-col h-full">
              {/* Image centered only on mobile, aligned left on desktop */}
              <div className="w-48 h-48 mx-auto lg:mx-0 mb-8 relative">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img
                    src="/images/BILL-AROWOOD-PROFILE-PICTURE-CROPPING-TEST1.png.webp"
                    alt="William Arrowood"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Leadership in the Insurance Industry
              </h2>
              <div className="h-1 w-24 bg-white mb-8"></div>
              
              {/* Make paragraphs same height as the right card's content */}
              <div className="space-y-6 text-white/80 flex-grow flex flex-col justify-between">
                <p className="leading-relaxed">
                  William Arrowood has established himself as a visionary leader in 
                  the insurance industry, building a diverse portfolio of successful 
                  businesses that address various needs in the market.
                </p>
                <p className="leading-relaxed">
                  With a deep understanding of risk management, underwriting 
                  principles, and customer service, William has created companies 
                  that consistently deliver exceptional value to clients while 
                  maintaining operational excellence.
                </p>
                <p className="leading-relaxed">
                  His entrepreneurial approach combines traditional insurance expertise with innovative 
                  solutions, enabling his businesses to adapt to changing market conditions and emerging 
                  opportunities.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="h-full flex">
              <div className="enhanced-card p-8 w-full">
                <h3 className="text-2xl font-serif font-semibold text-white mb-8">
                  Professional Achievements
                </h3>
                
                <div className="space-y-8">
                  {achievements.map((achievement, index) => (
                    <AnimatedSection key={index} delay={100 * index} threshold={0.2}>
                      <div className="flex gap-4 items-start group hover:bg-white/5 p-3 rounded-lg transition-all">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-500/30 group-hover:to-indigo-600/30 transition-all">
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1">{achievement.title}</h4>
                          <p className="text-white/70 group-hover:text-white/80 transition-colors">{achievement.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                
                <div className="mt-8 pt-4 border-t border-white/10">
                  <div className="text-sm text-white/70">
                    <span className="font-medium text-white">Philosophy:</span> Excellence in service, integrity in operations, and innovation in solutions.
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
