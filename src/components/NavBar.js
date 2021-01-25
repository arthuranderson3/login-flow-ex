import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../provider/ProvideAuth';

const NavBar = () => {
  const auth = useAuth();
  let navBarItems = [
    ['Login', '/login'],
    ['Register', '/register'],
  ];
  if (auth.isAuthenticated) {
    navBarItems = [
      ['Home', '/home'],
      ['Logout', '/logout'],
    ];
  }
  const navBarLinks = navBarItems.map(([label, to]) => {
    return (
      <li key={to} className='nav-item'>
        <Link className='nav-link' to={to}>
          {label}
        </Link>
      </li>
    );
  });
  return (
    <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/home'>
          WebRoot Login
        </Link>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav ml-auto'>{navBarLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
