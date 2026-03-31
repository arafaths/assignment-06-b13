import React from 'react';

const SectionTitle = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Digital Tools</h1>
      <p className="text-gray-500 mt-2 max-w-140 mx-auto">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

        <div className="mt-5 border w-fit mx-auto border-gray-300 p-1 rounded-full  ">
          <button className="btn btn-primary rounded-full border-0">Products</button>
          <button className="btn rounded-full border-0">Cart (2)</button>
        </div>
    </div>
  );
};

export default SectionTitle;