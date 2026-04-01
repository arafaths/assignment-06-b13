import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ addedIds, setAddedIds }) => {
  const HandlerDelete = (id, name) => {
    const newArr = addedIds.filter(card => card.id !== id)
    setAddedIds(newArr)
    toast.warn(`${name} Delete`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          
        });
  };

  const HandlerPayment = () => {
    setAddedIds([])
    toast.success('Success', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  let totalPrice = 0;
  addedIds.forEach(card => {
    totalPrice+= card.price
  })
  return (
    <div className="container mx-auto bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full  bg-white rounded-xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Your Cart</h2>

        {addedIds.map((card, index) => {
          return (
            <div className="space-y-4" key={index}>
              <div className="flex items-center justify-between bg-gray-50/50 p-4 rounded-xl border border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                    <img src={card.image} alt="" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{card.name}</h3>
                    <p className="text-gray-500 text-sm">${card.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => HandlerDelete(card.id, card.name)}
                  className="text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors btn"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}

        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400 font-medium">Total:</span>
            <span className="text-2xl font-bold text-gray-800">
              ${totalPrice}
            </span>
          </div>

          <button
            onClick={HandlerPayment}
            className="btn btn-primary md:btn-xl rounded-full w-full"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;