import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const isNew = true;

  // Ensure numbers for safety
  const price = Number(product.price);
  const discountPercentage = Number(product.discountPercentage);
  const discountAmount = (price * discountPercentage) / 100;
  const discountedPrice = (price - discountAmount).toFixed(2);

  return (
    <Link
      to={`/shop/${product.id}`}
      state={{ product }}
      className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {isNew && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full font-medium">
            NEW
          </span>
        )}

        {discountPercentage > 0 && (
          <span className="absolute top-2 right-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
            -{Math.round(discountPercentage)}%
          </span>
        )}
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 sm:mt-4 flex items-end justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-semibold text-black">
              ${discountedPrice}
            </span>
            {discountPercentage > 0 && (
              <span className="text-xs sm:text-sm text-gray-400 line-through">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          <button 
            className="text-xs sm:text-sm bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            onClick={(e) => e.preventDefault()} // Prevent link navigation
          >
            Add to Cart
          </button>
        </div>

        <div className="mt-2 sm:mt-3 flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="text-xs sm:text-sm">
              {i < Math.floor(product.rating) ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
          <span className="ml-1 text-xs sm:text-sm text-gray-500">
            ({product.rating.toFixed(1)})
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;