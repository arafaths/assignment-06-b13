import React from 'react';

const Ctasection = () => {
  return (
    <section className="w-full py-20 px-4">
     
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-3xl p-12 text-center text-white shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="px-8 py-4 bg-white text-[#7c3aed] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Explore Products
          </button>

          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
            View Pricing
          </button>
        </div>

        <p className="text-purple-200 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Ctasection;