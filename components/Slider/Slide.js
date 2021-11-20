import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";

const Slide = ({
  content,
  width,
  imagePosition = "center",
  ...wrapperProps
}) => (
  <div
    css={css`
      height: 100%;
      width: ${width}px;
      background-image: url("${content}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: ${imagePosition};
    `}
    {...wrapperProps}
  />
);

Slide.propTypes = {
  content: PropTypes.string,
  width: PropTypes.number,
  imagePosition: PropTypes.string,
  wrapperProps: PropTypes.object,
};

export default Slide;
