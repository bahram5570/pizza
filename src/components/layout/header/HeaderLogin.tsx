import { useSelector, useDispatch } from 'react-redux';
import { signinAction } from '../../redux/slices/signinSlice';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const HeaderLogin = () => {
  const currentUser = useSelector((state: RootState) => state.signinStore).user;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(signinAction('logout'));
  };

  if (currentUser) {
    return (
      <span onClick={logoutHandler} className="header_login">
        <p>{currentUser}</p>
        <FaSignOutAlt />
        <span>خروج</span>
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
