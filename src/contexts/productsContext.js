import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export const productsContext = React.createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let productsArray = [];
      querySnapshot.forEach((doc) => {
        // itemsArray.push(doc.data())
        productsArray.push({ ...doc.data(), id: doc.id });
      });
      setProducts(productsArray);
    });
  }, []);
  console.log(products);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
  };

  return (
    <productsContext.Provider
      value={{
        products,
        handleDelete,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;