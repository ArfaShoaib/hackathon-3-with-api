'use client'
const PricingFAQs = () => {
    const faqs = [
      {
        question: "the quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venal consequent sent nostrum met."
      },
      {
        question: "the quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venal consequent sent nostrum met."
      },
      {
        question: "the quick fox jumps over the lazy dog",
        answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venal consequent sent nostrum met."
      }
    ];
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Pricing FAQs</h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600">❯</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-12">
          <p className="text-gray-600">Haven&#39;t got your answer? Contact our support</p>
        </div>
      </div>
    );
  };
  
  export default PricingFAQs;