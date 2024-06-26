import React from "react";
import PropTypes from "prop-types";
import "./TextCarousel.css";

const Carousel = ({ text }) => {
  return (
    <div className="logo">
      <div className="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Carousel;
