import React from 'react';

const ProductCard = () => {
  return (
    <div className="container mx-auto mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      <div className="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-lg transition">
        <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
          New
        </span>

        <h2 className="text-xl font-semibold mt-3">AI Writing Pro</h2>

        <p className="mt-2 text-lg font-bold">
          $29 <span className="text-gray-500 text-sm">/Mo</span>
        </p>

        <ul className="mt-3 text-gray-600 space-y-1">
          <li>✔ Unlimited AI generations</li>
          <li>✔ Unlimited AI generations</li>
          <li>✔ Unlimited AI generations</li>
        </ul>

        <button className="mt-5 w-full btn btn-primary rounded-full">
          Buy Now
        </button>
      </div>

      <div className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition">
        <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
          New
        </span>

        <h2 className="text-xl font-semibold mt-3">AI Writing Pro</h2>

        <p className="mt-2 text-lg font-bold">
          $29 <span className="text-gray-500 text-sm">/Mo</span>
        </p>

        <ul className="mt-3 text-gray-600 space-y-1">
          <li>✔ Unlimited AI generations</li>
          <li>✔ Unlimited AI generations</li>
          <li>✔ Unlimited AI generations</li>
        </ul>

        <button className="mt-5 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-full">
          Buy Now
        </button>
      </div>

      <div className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition">
        <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
          New
        </span>

        <h2 className="text-xl font-semibold mt-3">AI Writing Pro</h2>

        <p className="mt-2 text-lg font-bold">
          $29 <span className="text-gray-500 text-sm">/Mo</span>
        </p>

        <ul className="mt-3 text-gray-600 space-y-1">
          <li>✔ Unlimited AI generations</li>
          <li>✔ Unlimited AI generations</li>
          <li>✔ Unlimited AI generations</li>
        </ul>

        <button className="mt-5 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;