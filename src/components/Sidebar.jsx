import React, { useContext, useState } from "react";
import { FiSliders } from "react-icons/fi";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { UserContext } from "../context/Context";

const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { category, setCategory } = useContext(UserContext);

  const handleCategoryClick = (cat) => {
    setCategory((prev) => (prev === cat ? "" : cat));
  };

  return (
    <div className={`border border-zinc-200 rounded-xl p-4 lg:p-5 bg-white shadow-sm transition-all duration-300 ${
      isOpen ? "max-h-[1350px]" : "max-h-[72px] lg:max-h-[300px]"
    }`}>
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-lg lg:text-xl font-semibold">Filters</h1>
        <div className="flex items-center gap-2">
          <FiSliders size={20} className="text-zinc-500" />
          <FaAngleDown
            size={18}
            className={`text-zinc-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "mt-4" : "mt-0"
      }`}>
        <hr className="border-zinc-200 my-3 lg:my-4" />

        <div className={`transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 h-0"
        }`}>
          <h2 className="text-sm lg:text-base font-medium mb-3">Category</h2>
          <ul className="grid grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto pr-2">
            {categories.map((cat, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(cat)}
                className={`flex items-center justify-between p-2 text-xs lg:text-sm rounded-lg cursor-pointer transition-all duration-200 ${
                  category === cat
                    ? "bg-zinc-100 text-zinc-800 font-medium"
                    : "text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                <span className="capitalize">{cat.replace(/-/g, ' ')}</span>
                <FaAngleRight size={14} className="text-zinc-400 ml-2" />
              </li>
            ))}
          </ul>
          <button 
            onClick={() => setCategory("")} 
            className="w-full mt-4 lg:mt-6 bg-black text-white px-4 py-2 lg:py-2.5 text-sm rounded-lg hover:bg-zinc-800 transition-colors duration-200"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;