import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { IoTrashOutline } from "react-icons/io5";

const Cart = () => {
  const { cart } = useContext(UserContext);
  console.log(cart);

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">YOUR CART</h1>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Column - Cart Items */}
        <div className="md:w-2/3 flex flex-col gap-5 ">
          {cart && cart.length > 0 ? (
            cart.map((item, index) => {
              return (
                <div className="flex justify-between items-start py-4 border p-5 border-zinc-200 rounded-2xl ">
                  <div className="w-24 h-24 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      className="w-full h-full"
                      src={item.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-between w-full ml-4">
                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          Category: {item.category}
                        </p>
                      </div>
                      <p className="text-lg font-medium text-gray-900">
                        ${item.price}
                      </p>
                    </div>
                    <div className="text-right flex flex-col justify-between gap-7 items-end">
                      <IoTrashOutline size={24} className="text-gray-500 cursor-pointer" />
                      <div className="flex items-center mt-2 space-x-2">
                        <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded">
                          -
                        </button>
                        <span>1</span>
                        <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-5xl text-center m-auto font-bold mt-20 flex items-center h-48">
              Your Cart is empty
            </h1>
          )}
        </div>

        {/* Right Column - Order Summary */}
        <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Order Summary
          </h3>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">$20</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="text-gray-900">-$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="text-gray-900">$15</span>
            </div>
          </div>

          <div className="flex justify-between py-4 border-t border-b border-gray-200 mb-6">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-bold text-gray-900">$35</span>
          </div>

          <div className="mb-6">
  <form className="flex w-full overflow-hidde rounded-md bg-zinc-200 ">
    <input
      type="text"
      placeholder="Add promo code"
      className="flex-1 px-4 py-2 w-32 outline-none text-sm focus:outline-none"
    />
    <button
      type="submit"
      className="px-[16px] py-[5px] rounded-r-md bg-gray-800 text-white text-sm hover:bg-gray-700 transition-colors"
    >
      Apply
    </button>
  </form>
</div>


          <button className="w-full py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-colors">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
