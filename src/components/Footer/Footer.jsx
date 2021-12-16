import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        marginTop: "100px",
        backgroundColor: "#c6c6c6",
        paddingTop: "5px",
      }}
    >
      <div
        style={{
          backgroundImage:
            "url(https://cityherowear.com/wp-content/uploads/2021/12/CityHero18757_33_web.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "20vh",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        <div>
          <h2>Мастерская</h2>
          <p>+996 556 80 42 60</p>
          <p>Пн - Пт с 11:00 до 19:00</p>
          <p>© 2021 CITY HERO™</p>
        </div>
        <div>
          <h2>Мы в соцсетях</h2>
          <div>
            <a
              href="https://www.facebook.com/cityheroworkshop/"
              target="_blank"
            >
              <img
                className="footer-img"
                src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/city_hero/" target="_blank">
              <img
                className="footer-img"
                src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                alt=""
              />
            </a>
            <a href="https://vk.com/cityhero" target="_blank">
              <img
                className="footer-img"
                src="https://cdn-icons-png.flaticon.com/512/25/25684.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="footer-info">
          <h2>Информация</h2>
          <p>Доставка</p>
          <p>Оплата</p>
          <p>Обмен и возврат</p>
          <p>Правовая информация</p>
          <p>О нас</p>
          <p>Сотрудничество</p>
          <p>Контакты</p>
          <p>Политика конфиденциальности</p>
        </div>
        <div>
          <h2>Мы принимаем</h2>
          <img
            style={{ width: "200px" }}
            src="https://cityherowear.com/wp-content/uploads/2018/11/visa_mastercard_mir_pp.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
