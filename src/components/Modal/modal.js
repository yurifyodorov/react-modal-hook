import React from "react";
import PropTypes from "prop-types";
import { Drawer, Button } from "rsuite";

const CustomModal = ({ isActive, children, title, handleClose }) => {
  return (
    <Drawer show={isActive} onHide={handleClose}>
      <Drawer.Header>
        <Drawer.Title>{title}</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        {children}
      </Drawer.Body>
      <Drawer.Footer>
        <Button onClick={handleClose} appearance="primary">
          Понятно
        </Button>
        <Button onClick={handleClose} appearance="subtle">
          Отмена
        </Button>
      </Drawer.Footer>
    </Drawer>
  );
};

CustomModal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default CustomModal;
