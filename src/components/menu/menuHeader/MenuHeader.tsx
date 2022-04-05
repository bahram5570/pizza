import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuHeaderLinks from '../menuHeader/MenuHeaderLinks';
import { FaAngleDown } from 'react-icons/fa';

interface TypeInputs {
  scrolled: boolean;
  selectedHeader: string[] | null;
}

const MenuHeader: React.FC<TypeInputs> = ({ scrolled, selectedHeader }) => {
  const [showMenu, setShowMenu] = useState(false);

  const onClose = (x: any) => {
    if (x.target.id !== 'closeButton') {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', onClose);
    return () => document.body.removeEventListener('click', onClose);
  });

  return (
    <nav className={`menu_header ${scrolled ? 'fixed top-0 z-10' : 'mb-6'}`}>
      <button id="closeButton" onClick={() => setShowMenu(true)}>
        <FaAngleDown />
        {selectedHeader ? selectedHeader[1] : 'پیتزا آمریکایی'}
      </button>

      <ul
        className={`${
          showMenu
            ? 'absolute lg:static flex px-4 bg-neutral-300 lg:bg-transparent top-0 left-0 right-0 py-4 lg:p-0 z-20'
            : 'hidden lg:flex'
        }`}
      >
        <li>
          <Link
            className="border-2 border-black lg:border-white rounded-full px-8 py-2"
            to="/CustomPizza"
          >
            پیتزای خودتو بساز
          </Link>
        </li>

        <MenuHeaderLinks selectedHeader={selectedHeader} />
      </ul>
    </nav>
  );
};

export default MenuHeader;
