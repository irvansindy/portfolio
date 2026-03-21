import React, { useState } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState("#home");

  const navItems = [
    { id: 1, label: "Beranda", href: "#home" },
    { id: 2, label: "Tentang", href: "#about" },
    { id: 3, label: "Pengalaman", href: "#experience" },
    { id: 4, label: "Layanan", href: "#service" },
    { id: 5, label: "Proyek", href: "#portfolio" },
    { id: 6, label: "Berita", href: "#news" },
    { id: 7, label: "Kontak", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveItem(href);
    onClose();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="ms-sidebar-overlay"
        style={{ display: isOpen ? "block" : "none" }}
        onClick={onClose}
      ></div>

      <div className={`ms-sidebar ${isOpen ? "ms-open" : ""}`}>
        <div className="menu-list">
          <a
            href="#"
            className="close-sidebar"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            ×
          </a>

          <ul className="navbar-nav mb-2 ml-auto" id="top-menu">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${
                  activeItem === item.href ? "active" : ""
                }`}
              >
                <a
                  className="nav-link ms-nav"
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
