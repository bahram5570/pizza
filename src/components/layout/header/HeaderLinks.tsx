import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signinAction } from '../../redux/slices/signinSlice';
import { Link } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';
import HeaderLogout from './HeaderLogout';
import { FaHome, FaListUl, FaInfoCircle } from 'react-icons/fa';

const HeaderLinks: React.FC<{ showMenu: boolean }> = ({ showMenu }) => {
  const [showLogout, setShowLogout] = useState(false);

  const dispatch = useDispatch();

  const yesHandler = () => {
    dispatch(signinAction('logout'));
    setShowLogout(false);
  };

  return (
    <nav>
      {showLogout && (
        <HeaderLogout onYes={yesHandler} onNo={() => setShowLogout(false)} />
      )}

      <ul
        className={`header_ul ${
          showMenu
            ? 'max-h-80 md:max-h-fit'
            : 'max-h-0 md:max-h-fit overflow-hidden'
        }`}
      >
        <li>
          <HeaderLogin onLogout={() => setShowLogout(true)} />
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
  );
};

export default HeaderLinks;
