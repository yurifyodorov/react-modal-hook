import React from "react";
import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return (
    <>
      <header>login-page layout (Public)</header>
      <div>{children}</div>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};
