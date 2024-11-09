import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Nested routes will render here */}
      </main>
    </div>
  );
};

export default Layout;
