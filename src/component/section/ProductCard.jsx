import React from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({ cards, addedIds, setAddedIds }) => {
  

  const handleBuy = (card, name) => {
    if (!addedIds.some(c => c.id === card.id)) {
      setAddedIds([...addedIds, card]);
      toast.success(`${name} added to cart`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        
      });
      return
    }
    toast.error(`${name} already add`, {
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

  return (
    <div className="container mx-auto mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {cards.map(card => {
        const isBuy = addedIds.some(c => c.id === card.id);

        return (
          <div
            key={card.id}
            className="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-lg transition relative"
          >
            <span
              className={`absolute right-3 top-3 text-xs px-3 py-1 rounded-full
                ${
                  card.badge == 'Popular'
                    ? 'bg-purple-100 text-purple-600'
                    : card.badge == 'Best Seller'
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-green-100 text-green-600'
                }
                `}
            >
              {card.badge}
            </span>

            <div className="w-16 h-16 p-4 border border-gray-200 rounded-full flex items-center justify-center">
              <img src={card.image} alt={card.name} />
            </div>

            <h2 className="text-xl font-semibold mt-3">{card.name}</h2>

            <p className="mt-2 text-lg font-bold">
              ${card.price}{' '}
              <span className="text-gray-500 text-sm">/{card.type}</span>
            </p>

            <ul className="mt-3 text-gray-600 space-y-1">
              {card.features.map((fea, index) => (
                <li key={index}>✔ {fea}</li>
              ))}
            </ul>

            <button
              onClick={() => handleBuy(card, card.name)}
              className={`mt-5 w-full btn rounded-full ${isBuy ? 'btn-success' : 'btn-primary'}`}
            >
              {isBuy ? 'Added to Cart' : 'Buy Now'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
