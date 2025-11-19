import { CreditCard, Smartphone } from 'lucide-react';

export default function Payment() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Secure Payment Options
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We accept secure online payments for your convenience
          </p>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-white p-4 rounded-xl shadow-md w-20 h-20 flex items-center justify-center">
                  <CreditCard className="w-10 h-10 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-[#0A2540]">Visa</span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="bg-white p-4 rounded-xl shadow-md w-20 h-20 flex items-center justify-center">
                  <CreditCard className="w-10 h-10 text-orange-600" />
                </div>
                <span className="text-sm font-semibold text-[#0A2540]">Mastercard</span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="bg-white p-4 rounded-xl shadow-md w-20 h-20 flex items-center justify-center">
                  <Smartphone className="w-10 h-10 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-[#0A2540]">Interac</span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="bg-white p-4 rounded-xl shadow-md w-20 h-20 flex items-center justify-center">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                    <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.028.14a.804.804 0 01-.793.68H8.032c-.172 0-.31-.14-.268-.328l1.478-9.366a.913.913 0 01.9-.768h1.845c2.647 0 4.65-.788 5.567-3.085.344-.862.396-1.59.163-2.127-.09-.206-.207-.39-.35-.553a.535.535 0 01.7-.933z" fill="#009CDE"/>
                    <path d="M18.568 3.112c-.137-.447-.348-.837-.632-1.158-.57-.645-1.456-1.024-2.638-1.024H9.234a.913.913 0 00-.901.768L6.38 14.071c-.042.188.096.328.268.328h2.467l.619-3.927-.02.124a.913.913 0 01.901-.768h1.879c3.69 0 6.581-1.498 7.423-5.833.024-.127.045-.251.064-.373-.138-.042-.138-.042 0 0 .115-.73.033-1.226-.413-1.51z" fill="#012169"/>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#0A2540]">PayPal</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 mb-6">
                All payments are processed securely. We also accept cash and e-Transfer.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('booking');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#0A2540] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0099CC] transition-all shadow-lg"
              >
                Pay Online Now
              </button>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Payment plans available for services exceeding $200
          </div>
        </div>
      </div>
    </section>
  );
}
