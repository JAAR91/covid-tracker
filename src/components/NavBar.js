import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <header className="py-2 shadow">
      <nav className="px-4 text-white intense-magenta d-flex justify-content-between">
        <Link to="/" className="text-decoration-none text-white fw-bold d-flex align-items-center justify-content-center">
          { pathname !== '/'
            ? (
              <>
                <FaAngleLeft />
              </>
            )
            : ''}
        </Link>
        <h3 className="m-0 d-flex align-items-center justify-content-center">
          Covid Tracker
        </h3>
        <div className="m-0 d-flex flex-row p-1">
          <FaMicrophone />
          <div className="mx-2" />
          <IoMdSettings />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
