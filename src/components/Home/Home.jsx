import { Carousel } from "antd";
import React from "react";

const Home = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            width="100%"
            height="730px"
            src="https://cityherowear.com/wp-content/uploads/2021/07/CityHero188363.jpg"
            alt=""
          />{" "}
        </div>
        <div>
          <img
            width="100%"
            height="730px"
            src="	https://cityherowear.com/wp-content/uploads/2021/01/nujdin_2122_zerno.jpg"
            alt=""
          />{" "}
        </div>
        <div>
          <img
            width="100%"
            height="730px"
            src="https://cityherowear.com/wp-content/uploads/2020/10/%D0%BD%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2DSC08566.jpg"
            alt=""
          />{" "}
        </div>
        <div>
          <img
            width="100%"
            height="730px"
            src="	https://cityherowear.com/wp-content/uploads/2020/04/20200405_1325273.jpg"
            alt=""
          />{" "}
        </div>
      </Carousel>
    </div>
  );
};

export default Home;