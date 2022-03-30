import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const HeaderLogin: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const currentUser = useSelector((state: RootState) => state.signinStore).user;

  if (currentUser) {
    return (
      <span onClick={onLogout} className="header_login">
        <p>{currentUser}</p>
        <FaSignOutAlt />
      </span>
    );
  } else {
    return (
      <Link to="/Login">
        <p>ورود</p>
        <FaSignInAlt />
      </Link>
    );
  }
};

export default HeaderLogin;
