import React from "react";
import PropTypes from "prop-types";
import { Container, Content } from "rsuite";

import Sidebar from "../../../components/Sidebar/Sidebar";

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Container className="page-main">
        <Sidebar />
        <Content className="content">{children}</Content>
      </Container>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
