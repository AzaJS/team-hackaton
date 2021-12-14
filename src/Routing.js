import React from "react";
import { Navigate, Route, Routes } from "react-router";

import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";

import MensProductsList from "./components/MensProductsList/MensProductsList";
import WomensProductsList from "./components/WomensProductsList/WomensProductsList";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./components/AdminPage/AdminPage";


const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/men",
      element: <MensProductsList />,
      id: 2,
    },
    {
      link: "/women",
      element: <WomensProductsList />,
      id: 3,
    },
    {
      link: "/gallery",
      element: <Gallery />,
      id: 4,
    },
    {
      link: "/aboutus",
      element: <AboutUs />,
      id: 5,
    },
    {
      link: "/contacts",
      element: <Contacts />,
      id: 6,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 7,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 8,
    }
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];
  const { user } = useAuth();

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
      {user? ADMIN_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={
            user.email === "tilekovjanar1@gmail.com" ? (
              item.element
            ) : (
              <Navigate replace to="*" />
            )
          }
        />
      )) : null}
    </Routes>
  );
};

export default Routing;
