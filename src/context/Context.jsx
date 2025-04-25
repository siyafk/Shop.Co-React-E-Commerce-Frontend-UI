import { createContext, useEffect, useState } from "react";
import Instance from "./Axios";

export const UserContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const getProducts = async () => {
    try {
      if (category) {
        const res = await Instance.get(`/products/category/${category}`);
        const data = res.data.products;
        console.log(data);
        setProducts(data);
      } else if (search) {
        const res = await Instance.get(`/products/search?q=${search}`);
        const data = res.data.products;
        console.log(data);
        setProducts(data);
      } else {
        const res = await Instance.get("/products?limit=50");
        const data = res.data.products;
        console.log(data);
        setProducts(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getProducts();
    }, 300);
  }, [search, category]);

  return (
    <UserContext.Provider
      value={{
        products,
        setProducts,
        category,
        setCategory,
        search,
        setSearch,
        cart,
        setCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Context;
