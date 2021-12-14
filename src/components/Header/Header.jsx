import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
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
    <div className={location.pathname === "/" ? ("header_active"):("header")}>
      <div className="navbar">
        <Link to="/">
          <img
            style={{ marginLeft: "100px", marginBottom: "15px", boxShadow: "3px 3px 3px grey" }}
            width="100px"
            src="https://cityherowear.com/wp-content/uploads/2020/07/city_hero_logo_700x700-91x91.jpg"
            alt="logo"
          />
        </Link>
        <div style={{ display: "flex", justifyContent: "space-evenly"}}>
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
        <div>Корзина</div>
        <div style={{ marginRight: "50px", fontSize: "18px" }}>
          <p>тел: +7 (495) 723-03-39</p>
          <p>Пн-Пт с 11 до 19 Мск</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
