import React from 'react';

import RossetiIcon from '../../assets/rosseti-logo.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <img className="image" src={RossetiIcon} alt="logo" />
      <div className="title">
        <span>Россети</span>
        <p>ФСК ЕЭС</p>
      </div>
    </div>
  );
};

export default Logo;
