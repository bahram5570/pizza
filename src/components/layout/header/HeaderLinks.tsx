import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaListUl,
  FaInfoCircle,
  FaSignInAlt,
  FaSignOutAlt,
} from 'react-icons/fa';

const HeaderLinks: React.FC<{ showMenu: boolean }> = ({ showMenu }) => {
  const currentUser = useSelector((state: RootState) => state.signinStore).user;

  return (
    <nav>
      <ul
        className={`header_ul ${
          showMenu
            ? 'max-h-80 md:max-h-fit'
            : 'max-h-0 md:max-h-fit overflow-hidden'
        }`}
      >
        <li>
          <Link to="/Login">
            <p className={`${currentUser && 'text-xs pt-2'}`}>
              {currentUser || 'ورود'}
            </p>
            {currentUser ? <FaSignOutAlt /> : <FaSignInAlt />}
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
  );
};

export default HeaderLinks;
