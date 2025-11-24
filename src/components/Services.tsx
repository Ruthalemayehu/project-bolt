import { useRef } from 'react';

import { ArrowRight, ArrowLeft } from 'lucide-react';
import services from '../data/services';

export default function ServicesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth; // scroll by one page
      carouselRef.current.scrollBy({ left: direction === 'left' ? -width : width, behavior: 'smooth' });
    }
  };

  // Split into pages of 9 services
  const pages = [];
  for (let i = 0; i < services.length; i += 9) {
    pages.push(services.slice(i, i + 9));
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for all your tax filing, immigration, and document needs
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 hover:text-gray-800 transition"
          >
            <ArrowLeft size={28} strokeWidth={2} />
          </button>

          {/* Scrollable container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-6"
          >
            {pages.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-3 grid-rows-3 gap-6 snap-start flex-shrink-0"
              >
                {page.map((service, index) => {
                  const slug = service.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <div
                      id={`service-${slug}`}
                      key={index}
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col justify-center"
                    >
                      <h3 className="text-lg font-semibold text-[#0A2540] mb-2">{service}</h3>
                      <button
                        onClick={() => { window.location.hash = '#booking'; }}
                        className="mt-auto text-[#0099CC] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all text-sm"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={16} strokeWidth={2} />
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 hover:text-gray-800 transition"
          >
            <ArrowRight size={28} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
