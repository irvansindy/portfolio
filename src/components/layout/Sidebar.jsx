import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { id: 1, label: 'Home', href: '#home', active: true },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Experience', href: '#experience' },
    { id: 4, label: 'Service', href: '#service' },
    { id: 5, label: 'Portfolio', href: '#portfolio' },
    { id: 6, label: 'News', href: '#news' },
    { id: 7, label: 'Contacts', href: '#contact' }
  ];

  const handleNavClick = (e) => {
    onClose();
  };

  return (
    <>
      <div className={`ms-sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`ms-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="menu-list">
          <a href="javascript:void(0)" className="close-sidebar" onClick={onClose}>×</a>
          <ul className="navbar-nav mb-2 ml-auto" id="top-menu">
            {navItems.map((item) => (
              <li key={item.id} className={`nav-item ${item.active ? 'active' : ''}`}>
                <a 
                  className="nav-link ms-nav" 
                  href={item.href}
                  onClick={handleNavClick}
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
