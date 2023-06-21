import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import { Container, SubText } from "./Carousel.styled";

const backgroundColors = ["#29abe1", "salmon", "orange"];

const Carousel = ({ onSlideChange, subTexts }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    onSlideChange(swiper);
  };

  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="landingSwiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide style={{ backgroundColor: backgroundColors[0] }}>
          <img src="/discover.png" alt="Man discovering a landscape." />
        </ SwiperSlide>
        <SwiperSlide style={{ backgroundColor: backgroundColors[1] }}>
          <img src="/community.png" alt="Hands together visual." />
        </ SwiperSlide>
        <SwiperSlide style={{ backgroundColor: backgroundColors[2] }}>
          <img src="/bureaucratic.png" alt="Light bulb visual." />
        </ SwiperSlide>
      </ Swiper>
      <SubText>{subTexts[activeIndex]}</ SubText>
    </ Container>
  );
};

export default Carousel;
