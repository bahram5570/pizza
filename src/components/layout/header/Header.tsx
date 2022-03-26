import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import brandIcon from '../../data/images/brandIcon.png';
import HeaderCart from './HeaderCart';
import HeaderCartSmall from './HeaderCartSmall';
import HeaderMenuIcon from './HeaderMenuIcon';
import { FaHome, FaListUl, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';

const initialDarkMode = localStorage.getItem('darkMode')
  ? JSON.parse(localStorage.getItem('darkMode') || '')
  : false;

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [darkMode, setDarkMode] = useState(initialDarkMode);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="px-4 lg:px-16 py-2 bg-headerRed dark:bg-[#333333] text-white">
      <div className="flex justify-between md:items-center border-b-2 border-red-600 dark:border-neutral-500">
        <img src={brandIcon} alt="brandIcon" className="w-auto h-24 mb-1" />

        <div className="flex flex-col md:flex-row items-end md:items-center lg:mr-8">
          <HeaderMenuIcon
            showMenu={showMenu}
            onShowMenu={() => setShowMenu(!showMenu)}
          />

          <nav>
            <ul
              className={`header_ul ${
                showMenu
                  ? 'max-h-80 md:max-h-fit'
                  : 'max-h-0 md:max-h-fit overflow-hidden'
              }`}
            >
              <li
                onClick={() => darkModeHandler()}
                className="
                    text-lg 
                    my-2 
                    lg:mx-4 
                    flex 
                    md:flex-col-reverse 
                    justify-end 
                    md:items-center 
                    md:w-12 
                    hover:scale-110
                    duration-200
                    cursor-pointer"
              >
                <p className="hidden md:block">{darkMode ? 'تاریک' : 'روشن'}</p>
                <div className="relative w-14 md:w-full h-6 rounded-full bg-white shadow-[0_0_10px_#aaaaaa_inset] md:mb-2">
                  <span
                    className={`
                        w-5 
                        h-5 
                        absolute 
                        top-0.5 
                        ${darkMode
                            ? 'left-0.5 bg-cyan-500'
                            : 'left-[26px] bg-neutral-700'
                        }
                        duration-200
                        rounded-full
                    `}
                  />
                </div>
              </li>
              <li>
                <Link to="/Login">
                  <p>ورود</p>
                  <FaSignInAlt />
                </Link>
              </li>
              <li>
                <Link to="/About">
                  <p>درباره ما</p>
                  <FaInfoCircle />
                </Link>
              </li>
              <li>
                <Link to="/Menu">
                  <p>منو</p>
                  <FaListUl />
                </Link>
              </li>
              <li>
                <Link to="/Home">
                  <p>خانه</p>
                  <FaHome />
                </Link>
              </li>
            </ul>
          </nav>

          <HeaderCart />
          <HeaderCartSmall />
        </div>
      </div>
    </header>
  );
};

export default Header;
