import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const CardEmty = ({ setActiveModel }) => {
  return (
    <div className="min-h-[400px] container mx-auto flex items-center justify-center p-4">
      <div className=" w-full bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 text-left mb-16">
          Your Cart
        </h2>

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-gray-50 p-6 rounded-full">
            <CiShoppingCart
              size={48}
              className="text-gray-300"
              strokeWidth={1.5}
            />
          </div>

          <p className="text-gray-500 text-lg font-medium">
            Your cart is empty
          </p>

          <button
            onClick={() => setActiveModel('products')}
            className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEmty;
