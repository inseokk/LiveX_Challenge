import React from 'react';
import './Navbar.css';
import logo from './logo.svg'

function Navbar({ setCurrentPage, searchQuery, setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" onClick={() => setCurrentPage('Home')}></img>
      </div>
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search content..." 
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </nav>
  );
}

export default Navbar;