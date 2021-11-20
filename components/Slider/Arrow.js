/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledArrow = styled.div`
  display: flex;
  position: absolute;
  ${(props) => (props.direction === "right" ? "right: 25px; top: 50%;" : "")};
  ${(props) => (props.direction === "left" ? "left: 25px; top: 50%;" : "")};
  ${(props) => (props.direction === "pause" ? "bottom: 65px; left: 48%" : "")};
  ${(props) => (props.direction === "play" ? "bottom: 65px; left: 48%" : "")};
  ${(props) => (props.playState ? "opacity: 0;" : "opacity: 1;")}

  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(
      ${(props) =>
        props.direction === "left"
          ? "-2"
          : props.direction === "right"
          ? "2"
          : props.direction === "play"
          ? "3"
          : "0"}px
    );
    &:focus {
      outline: 0;
    }
  }
`;

const Arrow = ({
  direction,
  handleClick,
  playState,
  wrapperProps,
  ...imgProps
}) => {
  let icon;
  switch (direction) {
    case "right":
      icon =
        "https://img2.pngio.com/arrow-arrow-right-chevron-chevronright-right-right-icon-icon-arrow-right-png-512_512.png";
      break;
    case "left":
      icon =
        "https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/chevron-left-512.png";
      break;
    case "pause":
      icon =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAABhYWGxsbG0tLQwMDBHR0fKysrt7e1wcHC7u7tsbGyQkJCkpKReXl4VFRU6Ojr19fVAQEAeHh4NFjK4AAABjklEQVR4nO3SW2rDQBBFQcuxZcvvx/73mo/G4BCQJpA7JFBnAZeuYVYrSZIkSZIkSZKk/9953C512S2u7C6LK+O5g+Z7++vQ0rQwMzWtXPddTF+7NZ02DKfZlVPjyq2T6q1N42nDcJ9ZuTevbLrJXh2bbzvMrByaV47dZK/Wv/L6H80r626yV4SEFSFhMkLCipAwGSFhRUiYjJCwIiRMRkhYERImIySsCAmTERJWhITJCAkrQsJkhIQVIWEyQsKKkDAZIWFFSJiMkLAiJExGSFgREiYjJKwICZMRElaEhMkICStCwmSEhBUhYTJCwoqQMBkhYUVImIyQsCIkTEZIWBESJiMkrAgJkxESVoSEyQgJK0LCZISEFSFhMkLCipAwGSFhRUiYjJCwIiRMRkhYERImIySsCAmTERJWhITJCAmrvyw8Nt92mFk5NK8cu8l+ftt9ZuX+K+8U6tF42ml25dS48uikem//bDptWpiZmlaecx8h13ncLrXeLa7sLosr47mDRpIkSZIkSZIkKd0n1Z1BHSVRBlQAAAAASUVORK5CYII=";
      break;
    case "play":
      icon = "https://i.dlpng.com/static/png/6903815_preview.png";
      break;

    default:
      break;
  }
  return (
    <StyledArrow
      onClick={handleClick}
      direction={direction}
      playState={playState}
      {...wrapperProps}
    >
      <img src={icon} alt="right arrow" className="h-6 w-6" {...imgProps} />
    </StyledArrow>
  );
};

Arrow.propTypes = {
  handleClick: PropTypes.func,
  direction: PropTypes.string,
  playState: PropTypes.bool,
  imgProps: PropTypes.object,
  wrapperProps: PropTypes.object,
};

export default Arrow;
