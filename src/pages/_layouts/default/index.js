import React from "react";
import PropTypes from "prop-types";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <header>default layout (Private)</header>
      <div>{children}</div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
