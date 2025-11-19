import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'S.M.',
    text: 'They explained my taxes in Amharic and helped me get more benefits! The service was professional and I felt comfortable asking all my questions.',
    service: 'Tax Filing'
  },
  {
    name: 'H.G.',
    text: 'Professional and fast — my work permit documents were done clearly. They made sure everything was perfect before submission.',
    service: 'Immigration Services'
  },
  {
    name: 'A.T.',
    text: 'Finally found someone who understands our community needs. The translation service was accurate and the notarization was handled perfectly.',
    service: 'Translation & Notarization'
  },
  {
    name: 'M.K.',
    text: 'Very affordable prices and excellent service. They helped me with my rideshare taxes and saved me money. Highly recommend!',
    service: 'Rideshare Tax Filing'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#0099CC] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real feedback from families we've helped
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl min-h-[300px] flex flex-col justify-center">
            <Quote className="w-12 h-12 text-[#FFD166] mb-6" />

            <div className="transition-opacity duration-500">
              <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#FFD166]">
                    {testimonials[currentIndex].service}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={goToPrevious}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#FFD166] w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
