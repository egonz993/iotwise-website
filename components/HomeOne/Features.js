import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "bx bx-shopping-bag",
    title: "Data Science",
    shortText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-engineer",
    title: "Data Engineer",
    shortText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
    viewDetails: "/service-details",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-success",
    title: "Facing AI Challenges",
    shortText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.",
    viewDetails: "/service-details",
    aosDelay: "300",
  },
];

const Features = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6 p-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                    <Link href={value.viewDetails} className="read-more-icon">
                      <span className="flaticon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
