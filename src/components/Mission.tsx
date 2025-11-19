import { Shield, Languages, Zap } from 'lucide-react';

export default function Mission() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To make tax filing and immigration paperwork simple, stress-free, and affordable
            for Ethiopian & Eritrean families in Ontario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="bg-gradient-to-br from-[#0099CC] to-[#0A2540] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
              Privacy Protection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your personal information is handled with the highest level of confidentiality
              and security. We follow strict privacy protocols to protect your data.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="bg-gradient-to-br from-[#FFD166] to-[#FFA500] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Languages className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
              Plain Language Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We communicate in Amharic, Tigrinya, and English. No confusing jargon—
              just clear explanations that make sense for your situation.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="bg-gradient-to-br from-[#0099CC] to-[#0A2540] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
              Fast & Accurate
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Quick turnaround times without compromising accuracy. We file electronically
              and ensure your documents are submitted correctly the first time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
