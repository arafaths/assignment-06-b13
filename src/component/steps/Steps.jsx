import React from 'react';

const Steps = () => {
  return (
    <div className="container mx-auto mt-25">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Get Started In 3 Steps</h2>
        <p className="text-gray-500 text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="relative p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center max-w-sm w-full">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
            01
          </div>

          <div className="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
            <div className="text-purple-600">icon</div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Create Account
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="relative p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center max-w-sm w-full">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
            01
          </div>

          <div className="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
            <div className="text-purple-600">icon</div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Create Account
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="relative p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center max-w-sm w-full">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
            01
          </div>

          <div className="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
            <div className="text-purple-600">icon</div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Create Account
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;