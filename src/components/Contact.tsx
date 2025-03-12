import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: ""
  });
  
  // State for card hover effects
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // This is just a placeholder for the actual form submission logic
    console.log("Form submitted:", formData);
    
    // Reset form
    setFormData({
      name: "",
      businessName: "",
      email: "",
      phone: "",
      message: ""
    });
    
    // Show success message
    alert("Thanks for your message. We'll be in touch soon!");
  };

  return (
    <section id="contact" className="enhanced-section py-16 relative">
      {/* Background Effects */}
      <div className="grid-overlay"></div>
      <div className="glow-orb glow-orb-blue" style={{ width: "300px", height: "300px", top: "10%", left: "20%" }}></div>
      <div className="glow-orb glow-orb-indigo" style={{ width: "250px", height: "250px", bottom: "20%", right: "5%" }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch for Business Inquiries
            </h2>
            <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
            
            <p className="text-white/80 max-w-2xl mx-auto">
              For business inquiries or partnership opportunities, please use the dedicated contact form on the respective business website.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Contact Form */}
          <AnimatedSection delay={150}>
            <div className="enhanced-card p-8 h-full flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-6">Direct Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-white/90 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                      placeholder="Your Company LLC"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                    Business Inquiry
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full h-full min-h-[120px] px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md shadow hover:shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
          
          {/* Right Column - Contact Cards */}
          <AnimatedSection delay={300}>
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              {/* NEW CONTACT CARDS LAYOUT */}
              <div className="flex flex-col h-full justify-between">
                {/* Top row: 2 cards side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Email Card */}
                  <AnimatedSection delay={150}>
                    <div 
                      className={cn(
                        "enhanced-card p-6 flex flex-col items-center text-center h-full transition-all duration-300 relative overflow-hidden",
                        "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                        hoveredCard === 0 && "border-white/30 -translate-y-1"
                      )}
                      onMouseEnter={() => setHoveredCard(0)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Glow Effect */}
                      <div 
                        className={cn(
                          "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                          "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                          "blur-2xl",
                          hoveredCard === 0 && "opacity-100"
                        )}
                      ></div>
                      
                      <div className={cn(
                        "w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 transition-all duration-300",
                        hoveredCard === 0 && "bg-white/20 scale-110"
                      )}>
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
                      <a 
                        href="mailto:contact@williamarrowood.com" 
                        className="text-white/80 hover:text-white transition-colors text-base md:text-lg truncate max-w-full block"
                      >
                        <span className="inline-block truncate max-w-[90%] align-bottom">contact@williamarrowood.com</span>
                        <span className="inline-flex ml-1 text-white/50 group-hover:text-white/80 transition-colors align-bottom">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </a>
                      
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

                  {/* Phone Card */}
                  <AnimatedSection delay={200}>
                    <div 
                      className={cn(
                        "enhanced-card p-6 flex flex-col items-center text-center h-full transition-all duration-300 relative overflow-hidden",
                        "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                        hoveredCard === 1 && "border-white/30 -translate-y-1"
                      )}
                      onMouseEnter={() => setHoveredCard(1)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Glow Effect */}
                      <div 
                        className={cn(
                          "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                          "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                          "blur-2xl",
                          hoveredCard === 1 && "opacity-100"
                        )}
                      ></div>
                      
                      <div className={cn(
                        "w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 transition-all duration-300",
                        hoveredCard === 1 && "bg-white/20 scale-110"
                      )}>
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>
                      <a 
                        href="tel:+18337772453"
                        className="text-white/80 hover:text-white transition-colors text-base md:text-lg"
                      >
                        <span>833.777.2453</span>
                        <span className="inline-flex ml-1 text-white/50 hover:text-white/80 transition-colors">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </a>
                      
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
                </div>

                {/* Office Card - Full width, positioned at bottom */}
                <AnimatedSection delay={250}>
                  <div 
                    className={cn(
                      "enhanced-card p-6 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden",
                      "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                      hoveredCard === 2 && "border-white/30 -translate-y-1"
                    )}
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Glow Effect */}
                    <div 
                      className={cn(
                        "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
                        "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                        "blur-2xl",
                        hoveredCard === 2 && "opacity-100"
                      )}
                    ></div>
                    
                    <div className={cn(
                      "w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 transition-all duration-300",
                      hoveredCard === 2 && "bg-white/20 scale-110"
                    )}>
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Office</h3>
                    <a 
                      href="https://www.google.com/maps/search/800+Oak+Ridge+Turnpike+Suite+A-500+Oak+Ridge,+TN+37830"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors text-base md:text-lg"
                    >
                      <div className="space-y-1 mb-3">
                        <div>800 Oak Ridge Turnpike</div>
                        <div>Suite A-500</div>
                        <div>Oak Ridge, TN 37830</div>
                      </div>
                      <span className="inline-flex items-center justify-center text-white/60 hover:text-white/90 transition-colors mt-1 border border-white/20 py-1 px-3 rounded-full text-sm">
                        View on map
                        <svg className="ml-1" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </a>
                    
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
      </div>
    </section>
  );
};

export default Contact;
