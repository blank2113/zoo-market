import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import kuz from '../../assets/kuz.png';
import "./bestProducts.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCore, { Scrollbar } from "swiper/core";
import { Pagination, Navigation } from "swiper";

function BestProducts() {
  const [data3, setData3] = useState([]);
  const getInfo = () => {
    fetch("../../data/bestProducts.json")
      .then((res) => res.json())
      .then((result) => setData3(result));
  };
  useEffect(() => getInfo());
  return (
    <div className="best-products">
      <div className="container">
        <h4 className="title">Самые востребованные товары</h4>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          cssMode={true}
          scrollbar={{ draggable: true, dragSize: 240 }}
          navigation={true}
          modules={[Pagination, Navigation, Scrollbar]}
          className="swiper"
        >
          {data3.map((item) => (
            <SwiperSlide className="swiper-card">
              <img src={item.img} />
              <p className="swiper-card__curr">{item.currentPrice}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BestProducts;
