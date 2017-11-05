import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-item">
          <Link to="/" className="main-nav__link">home</Link>
        </li>
        <li className="main-nav__list-item">
          <Link to="/gateway" className="main-nav__link">gateway</Link>
        </li>
        <li className="main-nav__list-item">
          <Link to="/devices" className="main-nav__link">devices</Link>
        </li>
        <li className="main-nav__list-item">
          <Link to="/messages" className="main-nav__link">error messages</Link>
        </li>
        <li className="main-nav__list-item">
          <Link to="/providers" className="main-nav__link">cloud providers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;