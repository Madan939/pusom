import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Course", path: "/course" },
    { name: "News", path: "/news-and-notice" },
    { name: "Gallery", path: "/gallery" },
    { name: "Download", path: "/download" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className='w-full bg-[#4678B2] sticky top-0 z-50 shadow-md'>
      <nav className='container mx-auto flex justify-between items-center px-4 py-4'>
        <div>
          <Link to="/">
            <img src="/assets/images/header/logo.svg" alt="logo" className='h-16' />
          </Link>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex space-x-6 font-semibold'>
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#EAB308]'
                      : 'hover:text-[#EAB308] transition text-white'
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className='hidden lg:block'>
          <Link
            to="/entrance-result"
            className='bg-[#EAB308] rounded-md text-white font-bold px-4 py-2 hover:bg-yellow-500 transition'
          >
            BBA Entrance Result
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className='lg:hidden'>
          <img
            src={`/assets/images/header/${showMenu ? 'hamburger-menu.svg' : 'hamburger.svg'}`}
            alt="hamburger"
            className='h-10 cursor-pointer'
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>

      <div
        className={`lg:hidden absolute top-[95%] left-0 w-full bg-[#4678B2] overflow-hidden transition-all duration-300 ease-in-out ${showMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className='container mx-auto px-6 py-4'>
          <ul className='space-y-4 font-semibold'>
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#EAB308]'
                      : 'hover:text-[#EAB308] transition text-white'
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                to="/entrance-result"
                className='block bg-[#EAB308] rounded-md text-white font-bold px-4 py-2 hover:bg-yellow-500 transition w-max'
              >
                BBA Entrance Result
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
