import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic Tax Return',
    price: '$69',
    description: 'Perfect for simple employment income',
    features: [
      'T1 General tax return',
      'Employment income (T4)',
      'Basic deductions & credits',
      'Electronic filing',
      'Benefits optimization',
      'CRA correspondence support'
    ]
  },
  {
    name: 'Family & Rideshare',
    price: '$119',
    description: 'For families and gig workers',
    features: [
      'Multiple income sources',
      'Rideshare/gig economy income',
      'Rental property income',
      'Investment income',
      'Family & childcare benefits',
      'Small business expenses',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'Immigration Forms',
    price: '$149',
    description: 'Comprehensive immigration support',
    features: [
      'PR application assistance',
      'Work/study permit guidance',
      'Document review & preparation',
      'Form completion support',
      'Translation coordination',
      'Application tracking',
      'Consultation included'
    ]
  }
];

export default function Pricing() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, affordable pricing with no hidden fees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-[#FFD166]' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFD166] to-[#FFA500] text-[#0A2540] px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-[#0A2540]">{plan.price}</span>
                  <span className="text-gray-500 ml-2">+</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0099CC] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToBooking}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#FFD166] to-[#FFA500] text-[#0A2540] hover:shadow-lg'
                    : 'bg-[#0A2540] text-white hover:bg-[#0099CC]'
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All prices in CAD. Additional services available.{' '}
            <button onClick={scrollToBooking} className="text-[#0099CC] font-semibold hover:underline">
              Contact us
            </button>{' '}
            for custom quotes.
          </p>
        </div>
      </div>
    </section>
  );
}
