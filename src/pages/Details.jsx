import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaMinus, FaPlus, FaRegStar, FaStar } from "react-icons/fa";
import { UserContext } from "../context/Context";

const Details = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const { cart, setCart } = useContext(UserContext);

  const price = Number(product.price);
  const discountPercentage = Number(product.discountPercentage);
  const discountAmount = (price * discountPercentage) / 100;
  const discountedPrice = (price - discountAmount).toFixed(2);

  const handleAddToCart = () => {
    if (count <= 0) {
      setMessage("Please select at least 1 item.");
      setTimeout(() => setMessage(""), 2000);
      return;
    }

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + count }
          : item
      );
      setCart(updatedCart);
    } else {
      const newProduct = { ...product, quantity: count };
      setCart((prevCart) => [...prevCart, newProduct]);
    }

    setMessage("✅ Product added to cart!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="container mx-auto px-6 py-[7rem] flex flex-col lg:flex-row gap-12">
      
      {/* Image Section */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div className="w-full h-[300px] lg:h-[500px] border border-zinc-200 rounded-xl overflow-hidden flex items-center justify-center bg-white">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="object-contain w-full h-full p-6"
          />
        </div>
        <div className="flex gap-3 justify-center">
          {/* Thumbnail */}
          {product.images.slice(0, 3).map((img, idx) => (
            <div key={idx} className="w-[80px] h-[80px] border border-zinc-200 rounded-xl overflow-hidden flex items-center justify-center bg-white">
              <img src={img} alt="" className="object-contain w-full h-full p-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-800">{product.title}</h1>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1 text-yellow-400 text-xl">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>
              {i < Math.floor(product.rating) ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
          <span className="ml-2 text-gray-500 text-sm">({product.rating})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-4 mt-6">
          <span className="text-2xl font-bold text-black">${discountedPrice}</span>
          {discountPercentage > 0 && (
            <span className="text-xl text-gray-400 line-through">${price.toFixed(2)}</span>
          )}
          {discountPercentage > 0 && (
            <span className="text-green-600 text-sm font-medium">-{discountPercentage}% OFF</span>
          )}
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

        {/* Tags */}
        {product?.tags?.length > 0 && (
          <>
            <hr className="my-8" />
            <div>
              <p className="text-sm text-gray-500 mb-3">Tags</p>
              <div className="flex flex-wrap gap-3">
                {product.tags.map((tag, index) => (
                  <span key={index} className="px-5 py-2 bg-zinc-100 text-gray-500 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Success Message */}
        {message && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mt-6 transition-all duration-300">
            {message}
          </div>
        )}

        {/* Quantity and Add to Cart */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-10">
          <div className="flex items-center gap-6 bg-zinc-100 px-6 py-3 rounded-full">
            <FaMinus
              onClick={() => count > 0 && setCount(count - 1)}
              size={18}
              className="cursor-pointer"
            />
            <span className="text-xl">{count}</span>
            <FaPlus
              onClick={() => setCount(count + 1)}
              size={18}
              className="cursor-pointer"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-full hover:bg-zinc-800 transition-all"
          >
            Add To Cart
          </button>
        </div>
      </div>

    </div>
  );
};

export default Details;
