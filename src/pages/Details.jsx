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
    <div className="flex gap-10 container mx-auto px-6 py-10">
      {/* Right Picture  */}
      <div className="flex gap-4">
        <div className="w-[150px] h-[150px] border border-zinc-300 rounded-xl overflow-hidden flex items-center justify-center">
          <img src={product.images[0]} alt="" />
        </div>
        <div className="w-[500px] h-[500px] rounded-xl overflow-hidden border border-zinc-300">
          <img src={product.images[0]} alt="" />
        </div>
      </div>

      {/* Product Details  */}
      <div className="flex flex-col w-full">
        <h1 className="text-5xl font-bold">{product.title}</h1>
        <div className="mt-3 flex items-center gap-1 text-yellow-400 text-xl">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>
              {i < Math.floor(product.rating) ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
          <span className="ml-2 text-gray-500">({product.rating})</span>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="flex gap-3">
            <span className="text-2xl font-semibold text-black">
              ${discountedPrice}
            </span>
            {discountPercentage > 0 && (
              <span className="text-2xl text-gray-400 line-through">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <p className="mt-4">{product.description}</p>

        <hr className="text-zinc-300 my-7" />

        {/* Tags */}
        <div>
          <p className="text-sm mb-3">Tags</p>
          <div className="flex flex-wrap gap-3">
            {product?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-6 py-3 text-sm font-light bg-zinc-200 text-zinc-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="text-zinc-300 my-7" />

        {/* Success Message */}
        {message && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 transition-all duration-300">
            {message}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 mt-auto">
          <div className="flex items-center gap-10 bg-zinc-200 px-6 py-3 rounded-full">
            <FaMinus
              onClick={() => count > 0 && setCount(count - 1)}
              size={18}
              className="cursor-pointer"
            />
            <span className="text-xl">{count}</span>
            <FaPlus
              onClick={() => setCount(count + 1)}
              size={18}
              className="font-light cursor-pointer"
            />
          </div>
          <div className="w-full">
            <button
              onClick={handleAddToCart}
              className="w-full px-6 py-3 cursor-pointer bg-black text-white rounded-full"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
