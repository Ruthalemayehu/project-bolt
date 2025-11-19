import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you file electronically?',
    answer: 'Yes! We file all tax returns electronically through CRA EFILE for faster processing and quicker refunds. You typically receive your refund within 2 weeks when filed electronically.'
  },
  {
    question: 'Can you give immigration legal advice?',
    answer: 'We provide guidance on completing immigration forms and document preparation, but we are not immigration lawyers. For complex legal matters, we can refer you to qualified immigration consultants or lawyers.'
  },
  {
    question: 'What languages do you support?',
    answer: 'We provide full services in Amharic, Tigrinya, and English. Our team understands the cultural context and can explain complex government processes in your preferred language.'
  },
  {
    question: 'How do I send documents to you?',
    answer: 'You can bring documents to our office, send secure scanned copies via email, or use our secure document upload portal. We also offer pickup services for clients who need assistance.'
  },
  {
    question: 'How long does tax filing take?',
    answer: 'Simple tax returns are typically completed within 24-48 hours. More complex returns with business income or rental properties may take 3-5 business days. We always communicate timelines upfront.'
  },
  {
    question: 'Are my documents kept confidential?',
    answer: 'Absolutely. We follow strict privacy protocols and are compliant with Canadian privacy laws. Your documents are stored securely, and we never share your information without your explicit consent.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, Interac e-Transfer, credit cards (Visa, Mastercard), debit cards, and PayPal. Payment plans are available for immigration services exceeding $200.'
  },
  {
    question: 'Can you help with CRA notices and letters?',
    answer: 'Yes! We help you understand CRA correspondence and can assist with responses, reassessments, benefit adjustments, and payment arrangements. We\'ll make sure you understand what CRA is asking for.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#0A2540] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#0099CC] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#0A2540] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0099CC] transition-all shadow-lg"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
