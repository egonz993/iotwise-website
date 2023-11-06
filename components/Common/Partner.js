import React from "react";

const partnerData = [
  {
    image: "/images/brands/brand1.png",
    url: "#",
    aosDelay: "100",
  },
  {
    image: "/images/brands/brand2.png",
    url: "#",
    aosDelay: "200",
  },
  {
    image: "/images/brands/brand3.png",
    url: "#",
    aosDelay: "300",
  },
  {
    image: "/images/brands/brand4.png",
    url: "#",
    aosDelay: "400",
  },
  {
    image: "/images/brands/brand5.png",
    url: "#",
    aosDelay: "500",
  },
  {
    image: "/images/brands/brand6.png",
    url: "#",
    aosDelay: "600",
  },
  {
    image: "/images/brands/brand7.png",
    url: "#",
    aosDelay: "700",
  },
  {
    image: "/images/brands/brand8.png",
    url: "#",
    aosDelay: "800",
  },
  {
    image: "/images/brands/brand9.png",
    url: "#",
    aosDelay: "900",
  },
  {
    image: "/images/brands/brand10.png",
    url: "#",
    aosDelay: "1000",
  },
];

const Partner = () => {
  return (
    <>
      <div className="brand-area">
        <div className="container">
          <div className="brand-list">
            {partnerData &&
              partnerData.map((value, i) => (
                <div
                  className="single-brand"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <a href={value.url} target="_blank">
                    <img src={value.image} alt="Image" />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
