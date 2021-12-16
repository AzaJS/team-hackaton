import { Badge } from "antd";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "./Header.css";
import { cartContext } from "../../contexts/cartContext";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const NAV_ITEMS = [
    {
      title: "ДЛЯ НЕГО",
      link: "/products/Men",
      id: 1,
    },
    {
      title: "ДЛЯ НЕЁ",
      link: "/products/Women",
      id: 2,
    },
    {
      title: "ГАЛЕРЕЯ",
      link: "/gallery",
      id: 3,
    },
    {
      title: "О НАС",
      link: "/aboutus",
      id: 4,
    },
    {
      title: "КОНТАКТЫ",
      link: "/contacts",
      id: 5,
    },
  ];
  return (
    <div className={location.pathname === "/" ? "header_active" : "header"}>
      <div className="navbar">
        <Link to="/">
          <img
            style={{
              marginLeft: "100px",
              marginBottom: "15px",
              boxShadow: "3px 3px 3px grey",
            }}
            width="15%"
            src="https://cityherowear.com/wp-content/uploads/2020/07/city_hero_logo_700x700-91x91.jpg"
            alt="logo"
          />
        </Link>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              style={{ display: "flex", justifyContent: "space-evenly" }}
              className={
                location.pathname === item.link
                  ? "navbar__item-active"
                  : "navbar__item"
              }
            >
              {item.title}
            </Link>
          ))}
          {email === "tilekovjanar1@gmail.com" ||
          email === "aziret1@gmail.com" ? (
            <Link
              className={
                location.pathname === "/admin"
                  ? "navbar__item-active"
                  : "navbar__item"
              }
              to="/admin"
            >
              АДМИН
            </Link>
          ) : null}
        </div>
      </div>
      <div
        style={{
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <nav>
            <div style={{ marginRight: "20px" }}>
              <Link to="/cart">
                <Badge style={{ backgroundColor: "black" }} count={+cartLength}>
                  <ShoppingCartOutlined
                    style={{ fontSize: "30px", cursor: "pointer" }}
                  />
                </Badge>
              </Link>
            </div>
            <div>
              {email ? (
                <Link to="/auth">
                  <button className="sign-btn" onClick={handleLogout}>
                    Выйти
                  </button>
                </Link>
              ) : null}
              {email ? null : (
                <Link to="/auth">
                  <button className="sign-btn">Войти</button>
                </Link>
              )}
            </div>
          </nav>
        </div>
        <div
          className="info-nav"
          style={{ marginRight: "50px", fontSize: "18px" }}
        >
          <p>Tел: +996 556 80 42 60</p>
          <p>Пн-Пт с 11:00 до 19:00 Мск</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
