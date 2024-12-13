import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import "./App.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import data from "./data";

const ProductAll = () => {
  const bg1 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/doterra1.jpg)`,
  };
  const bg2 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/doterra2.jpg)`,
  };
  const bg3 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/candle.jpg)`,
  };
  const bg4 = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/lighting.jpg)`,
  };
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg" style={bg1}></SwiperSlide>
        <SwiperSlide className="bg" style={bg2}></SwiperSlide>
        <SwiperSlide className="bg" style={bg3}></SwiperSlide>
        <SwiperSlide className="bg" style={bg4}></SwiperSlide>
      </Swiper>
      <ul className="contents">
        {data.map((item) => {
          return <Card item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ProductAll;
