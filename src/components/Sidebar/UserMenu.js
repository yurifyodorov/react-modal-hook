import React from 'react';
import { Nav, Dropdown, Avatar } from 'rsuite';

const User = () => {
  return (
    <div className="user">
      <Avatar className="avatar" circle>
        RS
      </Avatar>
      <span className="username">Юрий Федоров</span>
    </div>
  );
};

const UserMenu = () => {
  return (
    <Nav className="user-menu">
      <Dropdown placement="topStart" trigger="click" icon={<User />}>
        <Dropdown.Item>Пункт 1</Dropdown.Item>
        <Dropdown.Item>Пункт 1111</Dropdown.Item>
        <Dropdown.Item>Выход</Dropdown.Item>
      </Dropdown>
    </Nav>
  );
};

export default UserMenu;
