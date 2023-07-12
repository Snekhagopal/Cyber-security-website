import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../stylesheet/Carosel.scss";
import Logo1 from "../assets/brand-logo1.png";
import Logo2 from "../assets/brand-logo2.png";
import Logo3 from "../assets/brand-logo3.png";
import Logo4 from "../assets/brand-logo4.png";
import Logo5 from "../assets/brand-logo5.png";
import Logo6 from "../assets/brand-logo6.png";
import Logo7 from "../assets/brand-logo7.png";
import Logo8 from "../assets/brand-logo8.png";

const Carosel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carosel">
      <h2> Top Brands We Have Secured</h2>
      <Slider {...settings}>
        <div className="logosimage">
          {/* <h3>1</h3> */}
          <img src={Logo2}></img>
        </div>
        <div className="logosimage">
          {/* <h3>2</h3> */}
          <img src={Logo4}></img>
        </div>
        <div className="logosimage">
          {/* <h3>3</h3> */}
          <img src={Logo8}></img>
        </div>
        <div className="logosimage">
          {/* <h3>4</h3> */}
          <img src={Logo7}></img>
        </div>
        <div className="logosimage">
          {/* <h3>5</h3> */}
          <img src={Logo6}></img>
        </div>
        <div className="logosimage">
          {/* <h3>6</h3> */}
          <img src={Logo5}></img>
        </div>
        <div className="logosimage">
          {/* <h3>7</h3> */}
          <img src={Logo1}></img>
        </div>
        <div className="logosimage">
          {/* <h3>8</h3> */}
          <img src={Logo3}></img>
        </div>
      </Slider>
    </div>
  );
};

export default Carosel;
