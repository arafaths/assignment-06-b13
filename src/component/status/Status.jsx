import React from 'react';

const Status = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-pink-500 to-purple-500 text-white py-10 container mx-auto">
      <div className="grid gap-4 md:grid-cols-3 text-center">
        <div>
          <h2 className="text-4xl font-bold">50K+</h2>
          <p>Active Users</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">200+</h2>
          <p>Premium Tools</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">4.9</h2>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Status;