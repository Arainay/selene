import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-item">
          <NavLink exact to="/" className="main-nav__link" activeClassName="active">home</NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/gateway" className="main-nav__link" activeClassName="active">gateway</NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/devices" className="main-nav__link" activeClassName="active">devices</NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/messages" className="main-nav__link" activeClassName="active">error messages</NavLink>
        </li>
        <li className="main-nav__list-item">
          <NavLink to="/providers" className="main-nav__link" activeClassName="active">cloud providers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;