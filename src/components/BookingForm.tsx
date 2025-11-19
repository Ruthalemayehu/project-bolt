import { useState } from 'react';
import { Calendar, Mail, Phone, User, MessageSquare, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    language: 'English',
    message: '',
    agreeToPolicy: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        language: 'English',
        message: '',
        agreeToPolicy: false
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Book a Free 15-Minute Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help with your tax filing or immigration needs
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="flex items-center space-x-2 text-[#0A2540] font-semibold mb-2">
                  <User className="w-5 h-5" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099CC] focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center space-x-2 text-[#0A2540] font-semibold mb-2">
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099CC] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="flex items-center space-x-2 text-[#0A2540] font-semibold mb-2">
                  <Phone className="w-5 h-5" />
                  <span>Phone</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099CC] focus:border-transparent transition-all"
                  placeholder="(416) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="language" className="flex items-center space-x-2 text-[#0A2540] font-semibold mb-2">
                  <Calendar className="w-5 h-5" />
                  <span>Preferred Language</span>
                </label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099CC] focus:border-transparent transition-all"
                >
                  <option value="English">English</option>
                  <option value="Amharic">Amharic</option>
                  <option value="Tigrinya">Tigrinya</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="flex items-center space-x-2 text-[#0A2540] font-semibold mb-2">
                <MessageSquare className="w-5 h-5" />
                <span>How can we help?</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099CC] focus:border-transparent transition-all"
                placeholder="Tell us briefly about your needs..."
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 text-[#0099CC] border-gray-300 rounded focus:ring-[#0099CC]"
                />
                <span className="text-gray-700">
                  I agree to the privacy policy and consent to being contacted about my inquiry
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FFD166] to-[#FFA500] text-[#0A2540] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-[1.02]"
            >
              Submit Request
            </button>
          </form>

          {showSuccess && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform animate-scale-in">
                <div className="text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We've received your consultation request. We'll contact you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
