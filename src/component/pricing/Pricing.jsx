import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  return (
    <div className="container mx-auto mt-30">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="mt-15 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5">
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body relative">
            
            <div className="">
              <h2 className="text-xl font-bold">Premium</h2>
              <p className="text-sm text-gray-500">Best for professionals</p>
              <p className="mt-5 text-3xl font-bold">
                $29{' '}
                <span className="text-lg text-gray-500 font-normal">
                  /Month
                </span>
              </p>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="card w-80 bg-color text-white shadow-sm">
          <div className="card-body relative">
            <span className="badge badge-xs badge-warning absolute -top-2 left-[35%]">
              Most Popular
            </span>
            <div className="">
              <h2 className="text-xl font-bold">Premium</h2>
              <p className="text-sm text-white">Best for professionals</p>
              <p className="mt-5 text-3xl font-bold">
                $29{' '}
                <span className="text-lg text-white font-normal">/Month</span>
              </p>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="text-white">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn  btn-block rounded-full">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body relative">
            
            <div className="">
              <h2 className="text-xl font-bold">Premium</h2>
              <p className="text-sm text-gray-500">Best for professionals</p>
              <p className="mt-5 text-3xl font-bold">
                $29{' '}
                <span className="text-lg text-gray-500 font-normal">
                  /Month
                </span>
              </p>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">
                  <FaCheck />
                </span>
                <span>High-resolution image generation</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
