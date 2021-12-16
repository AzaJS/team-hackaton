import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_ONE_PRODUCT, CASE_GET_PRODUCTS } from "../helpers/cases";
import { PRODUCTS_API } from "../helpers/consts";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  productsTotalCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  console.log(action, "action");
  switch (action.type) {
    case CASE_GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        productsTotalCount: action.payload.length,
      };
    }
    case CASE_GET_ONE_PRODUCT: {
      return {
        ...state,
        oneProduct: action.payload.data,
      };
    }
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function createProduct(newProduct) {
    await axios.post(PRODUCTS_API, newProduct);
    getProducts();
  }

  async function getProducts(gender, type, priceGte, priceLte) {
    console.log(gender, type);
    let url = `${PRODUCTS_API}`;

    let options = "?";

    if (gender) {
      options += `gender=${gender}`;
    }
    if (priceGte || priceLte) {
      options += `&price_gte=${priceGte}&price_lte=${priceLte}`;
    }

    if (type) {
      for (const t of type) {
        options += `&type=${t}`;
      }
    }

    if (!window.location.search) {
      url += options;
    } else {
      url += `${window.location.search}&${options}`;
    }

    let { data } = await axios.get(url);
    dispatch({
      type: CASE_GET_PRODUCTS,
      payload: data,
    });
  }

  // async function getMensProducts(category) {
  //   let { data } = await axios.get(
  //     `${PRODUCTS_API}${window.location.search}&gender=${category}`
  //   );
  //   // console.log(result.data.gender, "resultgender")
  //   // let genderArr = result.data.filter((item) => {
  //   //   return item.gender === "Men";
  //   // });
  //   dispatch({
  //     type: CASE_GET_MENS_PRODUCTS,
  //     payload: data,
  //   });
  // }

  async function getOneProduct(id) {
    let result = await axios.get(`${PRODUCTS_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_PRODUCT,
      payload: result,
    });
  }
  async function deleteProduct(id) {
    await axios.delete(`${PRODUCTS_API}/${id}`);
    getProducts();
  }
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${PRODUCTS_API}/${id}`, editedProduct);
    getProducts();
  }
  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        productsTotalCount: state.productsTotalCount,
        getProducts,
        createProduct,
        deleteProduct,
        updateProduct,
        getOneProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
