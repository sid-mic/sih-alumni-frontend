import React from "react";
import { css } from "styled-components";
import PropTypes from "prop-types";

const Dots = ({ slides, activeSlide, wrapperProps, ...dotProps }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
    {...wrapperProps}
  >
    {slides.map((slide, i) => (
      <span
        key={slide}
        css={css`
          padding: 10px;
          margin-right: 5px;
          cursor: pointer;
          border-radius: 50%;
          background: ${activeSlide === i ? "black" : "white"};
        `}
        {...dotProps}
      />
    ))}
  </div>
);

Dots.propTypes = {
  wrapperProps: PropTypes.object,
  dotProps: PropTypes.object,
  slides: PropTypes.array,
  activeSlide: PropTypes.number,
};

export default Dots;
