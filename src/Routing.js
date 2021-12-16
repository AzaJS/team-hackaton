import React from "react";
import { Navigate, Route, Routes } from "react-router";

import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";

import ProductsList from "./components/ProductsList/ProductsList";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./components/AdminPage/AdminPage";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import OrderForm from "./components/OrderForm/OrderForm";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products/:gender",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/gallery",
      element: <Gallery />,
      id: 3,
    },
    {
      link: "/aboutus",
      element: <AboutUs />,
      id: 4,
    },
    {
      link: "/contacts",
      element: <Contacts />,
      id: 5,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 6,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 7,
    },
    {
      link: "/product/:id",
      element: <DetailsProduct />,
      id: 8,
    },
    {
      link: "/order",
      element: <OrderForm />,
      id: 9,
    },
    // {
    //   link: "/products/:type",
    //   element: <ProductsList />,
    //   id: 10,
    // },
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { user } = useAuth();

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
      {user
        ? ADMIN_ROUTES.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                user.email === "tilekovjanar1@gmail.com" ||
                user.email === "aziret1@gmail.com" ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
            />
          ))
        : null}
    </Routes>
  );
};

export default Routing;
