import { Carousel } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <Carousel autoplay>
          <div>
            <img
              style={{ marginTop: "-130px" }}
              width="100%"
              src="https://cityherowear.com/wp-content/uploads/2021/07/CityHero188363.jpg"
              alt=""
            />{" "}
          </div>
          <div>
            <img
              style={{ marginTop: "-130px" }}
              width="100%"
              src="	https://cityherowear.com/wp-content/uploads/2021/01/nujdin_2122_zerno.jpg"
              alt=""
            />{" "}
          </div>
          <div>
            <img
              style={{ marginTop: "-130px" }}
              width="100%"
              src="https://cityherowear.com/wp-content/uploads/2020/10/%D0%BD%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2DSC08566.jpg"
              alt=""
            />{" "}
          </div>
          <div>
            <img
              style={{ marginTop: "-130px" }}
              width="100%"
              src="	https://cityherowear.com/wp-content/uploads/2020/04/20200405_1325273.jpg"
              alt=""
            />{" "}
          </div>
        </Carousel>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "20px",
            fontSize: "30px",
          }}
        >
          КОЛЛЕКЦИИ
        </div>
        <div style={{ display: "flex" }}>
          <img
            className="home-img"
            width="50%"
            src="https://cityherowear.com/wp-content/uploads/2019/03/samuray-story-2_1200_minus-red_progressive.jpg"
            alt=""
          />
          <img
            className="home-img"
            width="50%"
            src="	https://cityherowear.com/wp-content/uploads/2019/03/pacific_1200_minus-red_progressive.jpg"
            alt=""
          />
        </div>
        <div style={{ display: "flex" }}>
          {/* <Link style={{width:"100%"}} to="/men"> */}
          <div
            onClick={() => navigate("/products/Men")}
            onMouseEnter={(e) => (e.target.style.opacity = "1")}
            onMouseLeave={(e) => (e.target.style.opacity = "0")}
            className="img-div"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "40px",
              cursor: "pointer",
            }}
          >
            ДЛЯ НЕГО
          </div>
          {/* </Link> */}
          {/* <Link style={{width:"100%"}} to="/women"> */}
          <div
            onClick={() => navigate("/products/Women")}
            onMouseEnter={(e) => (e.target.style.opacity = "1")}
            onMouseLeave={(e) => (e.target.style.opacity = "0")}
            className="img-div"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "40px",
              cursor: "pointer",
            }}
          >
            ДЛЯ НЕЁ
          </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Home;
