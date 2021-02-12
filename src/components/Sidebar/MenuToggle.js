import React from 'react';
import { Nav, Icon } from 'rsuite';

const MenuToggle = ({ expand, onChange }) => {
  return (
    <Nav pullRight className="menu-toggle">
      <Nav.Item onClick={onChange}>
        <Icon icon={expand ? 'angle-left' : 'bars'} />
      </Nav.Item>
    </Nav>
  );
};

export default MenuToggle;
