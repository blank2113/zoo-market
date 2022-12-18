import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./bestSales.css";
import SwiperCore, { Scrollbar } from "swiper/core";
// import required modules
import { Pagination, Navigation } from "swiper";

function BestSales() {
    const [data4, setData4] = useState([]);
    const getSalesList=()=>{
        fetch('../../data/bestSales.json')
        .then(res => res.json())
        .then(result => setData4(result))
    }
    useEffect(()=>{ getSalesList()})
  return (
    <div className="best-sales">
      <div className="container">
        <h5 className="title">Успейте купить по лучшей цене!</h5>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          cssMode={true}
          scrollbar={{ draggable: true, dragSize: 240 }}
          navigation={true}
          modules={[Pagination, Navigation, Scrollbar]}
          breakpoints={ {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }}
          className="swiper"
        >
          {data4.map((item) => (
            <SwiperSlide className="swiper-card">
              <img src={item.img} />
              <p className="swiper-card__prev">{item.prevPrice}</p>
              <p className="swiper-card__curr">{item.currentPrice}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BestSales;
