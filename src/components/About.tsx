import AnimatedSection from "./AnimatedSection";
import { Award, Briefcase, Users, TrendingUp } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Briefcase className="h-6 w-6 text-white" />,
      title: "8+ Businesses",
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
    <section id="about" className="section-padding overflow-hidden relative">
      {/* Background Effects */}
      <div className="section-background">
        <div className="section-grid"></div>
        <div className="section-glow"></div>
        <div className="section-stars"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection animation="fade-in">
            <div className="lg:max-w-lg space-y-8">
              <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8">
                <div className="absolute inset-0 bg-white/10 rounded-full transform -rotate-6"></div>
                <img
                  src="/images/BILL-AROWOOD-PROFILE-PICTURE-CROPPING-TEST1.png.webp"
                  alt="William Arrowood"
                  className="relative rounded-full w-full h-full object-cover border-4 border-white/10"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 transform rotate-3"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Leadership in the Insurance Industry
              </h2>
              <div className="h-1 w-24 bg-white mb-6"></div>
              
              <div className="space-y-6 text-white/80">
                <p>
                  William Arrowood has established himself as a visionary leader in the insurance industry, 
                  building a diverse portfolio of successful businesses that address various needs in the market.
                </p>
                <p>
                  With a deep understanding of risk management, underwriting principles, and customer service, 
                  William has created companies that consistently deliver exceptional value to clients while 
                  maintaining operational excellence.
                </p>
                <p>
                  His entrepreneurial approach combines traditional insurance expertise with innovative 
                  solutions, enabling his businesses to adapt to changing market conditions and emerging 
                  opportunities.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="absolute top-6 left-6 w-full h-full bg-white/5 rounded-lg"></div>
              <div className="relative bg-navy-light rounded-lg border border-white/10 p-6 space-y-8">
                <h3 className="text-2xl font-serif font-semibold text-white">Professional Achievements</h3>
                
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <AnimatedSection key={index} delay={100 * index} threshold={0.2}>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1">{achievement.title}</h4>
                          <p className="text-white/70">{achievement.description}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                
                <div className="pt-4">
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
