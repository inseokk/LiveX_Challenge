import React from 'react';
import './SideMenu.css';

function SideMenu({ currentPage, setCurrentPage }) {
  return (
    <div className="side-menu">
      <h3>Menu</h3>
      <ul className="menu-list">
        <li 
          className={`menu-item ${currentPage === 'Apps' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Apps')}
        >
          Apps
        </li>
        <li 
          className={`menu-item ${currentPage === 'Documents' ? 'active' : ''}`}
          onClick={() => setCurrentPage('Documents')}
        >
          Documents
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;