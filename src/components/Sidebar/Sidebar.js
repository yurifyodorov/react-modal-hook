import React, { useState } from 'react';
import { Sidebar, Sidenav, Navbar, Nav, Dropdown, Icon } from 'rsuite';
import useBreakpoints from '../../utils/hooks/useBreakpoint'; // FIXME: absolute path

import Logo from '../Logo/Logo';
import MenuToggle from './MenuToggle';
import UserMenu from './UserMenu';

import './Sidebar.scss';

const SidebarMenu = () => {
  const [isExpand, setIsExpand] = useState(false);

  const breakpoint = useBreakpoints();

  const handleToggle = () => {
    setIsExpand(!isExpand);
  };

  return (
    <Sidebar
      className={`sidebar ${!isExpand ? '' : '-expanded'}`}
      style={{ display: 'flex', flexDirection: 'column' }}
      width={`${!isExpand && breakpoint === 'lg' ? 288 : 80}`}
      collapsible
    >
      <Logo />
      <MenuToggle expand={isExpand} onChange={handleToggle} />
      <Sidenav
        className="menu"
        expanded={!isExpand && breakpoint === 'lg' ? !isExpand : isExpand}
        defaultOpenKeys={['3']}
        appearance="subtle"
      >
        <Sidenav.Body>
          <Nav>
            <Dropdown
              className="item -dropdown"
              eventKey="1"
              trigger="hover"
              title="Площадки"
              icon={<Icon className="icon" icon="building" />}
              placement="rightStart"
            >
              <Dropdown.Item className="subitem" eventKey="2-1">
                Разметка
              </Dropdown.Item>
              <Dropdown.Item className="subitem" eventKey="2-2">
                Управление
              </Dropdown.Item>
              <Dropdown.Item className="subitem" eventKey="2-3">
                Наблюдение
              </Dropdown.Item>
            </Dropdown>
            <Nav.Item className="item" eventKey="2" icon={<Icon className="icon" icon="archive" />}>
              Архив
            </Nav.Item>
            <Nav.Item className="item" eventKey="3" icon={<Icon className="icon" icon="attribution" />}>
              Статистика
            </Nav.Item>
            <Nav.Item className="item" eventKey="4" icon={<Icon className="icon" icon="area-chart" />}>
              Графики
            </Nav.Item>
            <Nav.Item className="item" eventKey="5" icon={<Icon className="icon" icon="group" />}>
              Управление пользователями
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <Navbar className="footer">
        <Navbar.Body>
          <UserMenu />
        </Navbar.Body>
      </Navbar>
    </Sidebar>
  );
};

export default SidebarMenu;
