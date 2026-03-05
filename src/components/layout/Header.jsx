import React from 'react';
import menuIcon from '../../assets/images/icons/menu.svg';

const Header = ({ onMenuClick }) => {
  return (
    <header>
      <nav>
        <a href="javascript:void(0)" className="ms-sidebar-toggle" onClick={onMenuClick}>
          <img src={menuIcon} className="svg_img" alt="menu" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
