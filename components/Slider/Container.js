import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Container = React.forwardRef(
  (
    { className, children, element: Element = "div", marginX = "mx-auto" },
    ref
  ) => (
    <Element ref={ref} className={classNames("container", marginX, className)}>
      {children}
    </Element>
  )
);

Container.propTypes = {
  marginX: PropTypes.string,
  className: PropTypes.string,
  element: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
