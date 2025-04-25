import React, { useContext } from "react";
import Product from "../components/Product";
import { UserContext } from "../context/Context";
import Sidebar from "../components/Sidebar";

const Shop = () => {
  const { products } = useContext(UserContext);

  if (!products) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 pt-24 pb-8"> {/* Added pt-24 */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-72 xl:w-80">
          <Sidebar />
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;