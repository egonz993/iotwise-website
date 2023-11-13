import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const partnerData = [
  {image: "/images/iot/logo-lorawan.png"},
  {image: "/images/iot/logo-sigfox.png"},
  {image: "/images/iot/logo-nbiot.png"},
  {image: "/images/iot/logo-ltem.png"},
  {image: "/images/iot/logo-zigbee.png"},
  {image: "/images/iot/logo-bluetooth.png"},
  {image: "/images/iot/logo-wifi.png"},
  {image: "/images/iot/logo-gsm.png"},
  {image: "/images/iot/logo-3gpp.png"},
  {image: "/images/iot/logo-lte.png"},
  {image: "/images/iot/logo-wisun.png"},
  {image: "/images/iot/logo-nfc.png"},
];

const PartnerSlider = () => {
  return (
    <>
      <div className="brand-area-two ptb-100">
        <div className="container">
          <Swiper
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="brand-slide text-center"
          >
            {partnerData &&
              partnerData.map((value, i) => (
                <SwiperSlide key={i}>
                  <a href={value.url} target="_blank">
                    <img src={value.image} alt="Image" width={75} />
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnerSlider;
