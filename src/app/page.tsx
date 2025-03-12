import Hero from "@/components/Hero";
import MigAiDemo from "@/components/MigAiDemo";
import RealResults from "@/components/RealResults";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* MIG AI Demo Section */}
      <section className="relative py-16 bg-navy-dark">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Introducing the MIG AI Agent
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The AI-Powered AI AssistantTransforming Insurance Agencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-navy-light/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white text-lg">
                    <strong>Instant Quotes</strong> – No delays, no missed leads.
                  </span>
                </li>
                {/* Add other list items similarly */}
              </ul>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <a 
                href="#demo" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 group"
              >
                <span className="flex items-center">
                  Be the first to leverage AI for your agency
                </span>
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <MigAiDemo />
      <RealResults />
      <Testimonial />
      {/* Other sections */}
    </main>
  );
} 