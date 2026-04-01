import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import Banner from '../../assets/banner.png'

const Header = () => {
  return (
    <div className="mt-10 container mx-auto grid md:grid-cols-2 items-center px-10 py-16 gap-10">
      <div>
        <span className=" bg-purple-200 color px-3 py-1 rounded-full text-sm flex items-center gap-2 w-fit">
          <FaRegDotCircle /> New: AI-Powered Tools Available
        </span>

        <h1 className="text-5xl font-bold mt-5 leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="mt-4 text-gray-500 max-w-125">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        <div className="flex gap-4 mt-6">
          <button className="btn btn-primary rounded-full">
            Explore Products
          </button>

          <button className="btn btn-outline btn-primary rounded-full">▶ Watch Demo</button>
        </div>
      </div>

      <div>
        <img
          src={Banner}
          alt="AI"
        />
      </div>
    </div>
  );
};

export default Header;