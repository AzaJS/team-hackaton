import { Badge } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const NAV_ITEMS = [
    {
      title: "ДЛЯ НЕГО",
      link: "/men",
      id: 1,
    },
    {
      title: "ДЛЯ НЕЁ",
      link: "/women",
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
            width="100px"
            src="https://cityherowear.com/wp-content/uploads/2020/07/city_hero_logo_700x700-91x91.jpg"
            alt="logo"
          />
        </Link>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {NAV_ITEMS.map((item) => (
            <Link
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
          {email === "tilekovjanar1@gmail.com" ? (
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
                <Badge>
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
        <div style={{ marginRight: "50px", fontSize: "18px" }}>
          <p>тел: +7 (495) 723-03-39</p>
          <p>Пн-Пт с 11 до 19 Мск</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
