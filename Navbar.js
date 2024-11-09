import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/houses">Houses</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  );
};

export default Navbar;
