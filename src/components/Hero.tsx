import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0099CC]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <CheckCircle className="w-5 h-5 text-[#FFD166]" />
            <span className="text-white font-medium">Affordable</span>
            <span className="text-white/60">•</span>
            <CheckCircle className="w-5 h-5 text-[#FFD166]" />
            <span className="text-white font-medium">Friendly</span>
            <span className="text-white/60">•</span>
            <CheckCircle className="w-5 h-5 text-[#FFD166]" />
            <span className="text-white font-medium">Trustworthy</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Elite Documentation & Tax Services
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Serving You with Innovation, Integrity & Efficiency
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('booking')}
              className="group bg-[#FFD166] text-[#0A2540] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFC233] transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/30 shadow-xl"
            >
              See Services
            </button>
          </div>

          <div className="pt-12">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-white/60 hover:text-white transition-colors"
            >
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
