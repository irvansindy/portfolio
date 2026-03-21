import React from "react";

const Header = ({ onMenuClick, onAdminClick }) => {
  return (
    <header>
      <nav>
        <a href="#" className="ms-sidebar-toggle" onClick={onMenuClick}>
          <img
            src="/assets/images/icons/menu.svg"
            className="svg_img"
            alt="menu"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
