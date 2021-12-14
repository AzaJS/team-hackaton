import React from "react";
import { Route, Routes } from "react-router";

import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
// import { useAuth } from "./contexts/authContext";
// import AdminPage from "./components/AdminPage/AdminPage";
import Error404 from "./components/AdminPage/Error404";
import MensProductsList from "./components/MensProductsList/MensProductsList";
import WomensProductsList from "./components/WomensProductsList/WomensProductsList";

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
    }
  ];
  // const ADMIN_ROUTES = [
  //   {
  //     link: "/admin",
  //     element: <AdminPage />,
  //     id: 1,
  //   },
  // ];
  // const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
      {/* {user? ADMIN_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={
            user.email === "tilekov_janar1@gmail.com" ? (
              item.element
            ) : (
              <Navigate replace to="*" />
            )
          }
        />
      )) : null} */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
