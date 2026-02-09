import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = ({ logos = [], backgroundImage }) => {
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,       // remove arrows
    dots: false,          // remove dots
    infinite: true,
    autoplay: true,      // auto slide
    autoplaySpeed: 2500, // 3 seconds per slide
    speed: 800,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, centerMode: true } },
      { breakpoint: 768, settings: { slidesToShow: 3, centerMode: true } },
      { breakpoint: 480, settings: { slidesToShow: 3, centerMode: true } },
    ],
  };

  return (
    <section
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "50px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider {...settings} style={{ width: "100%" }}>
          {logos.map((logo) => (
            <div
              key={logo.id}
            >
              {logo.href ? (
                <a href={logo.href} className="flex p-5 justify-center items-center" target="_blank" rel="noopener noreferrer">
                  {logo.content}
                </a>
              ) : (
                logo.content
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSlider;
