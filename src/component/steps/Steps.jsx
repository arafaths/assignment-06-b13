import React from 'react';
import Icon01 from '../../assets/user.png'
import Icon02 from '../../assets/package.png'
import Icon03 from '../../assets/rocket.png'

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
            <div className="text-purple-600">
              <img src={Icon01} alt="" />
            </div>
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
            02
          </div>

          <div className="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
            <div className="text-purple-600">
              <img src={Icon02} alt="" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Choose Products
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="relative p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center max-w-sm w-full">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
            03
          </div>

          <div className="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
            <div className="text-purple-600">
              <img src={Icon03} alt="" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Start Creating
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;