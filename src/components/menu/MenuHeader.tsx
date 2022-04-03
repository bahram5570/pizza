import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuHeaderStructure from './MenuHeaderStructure';
import drink from '../data/images/drink.svg';
import salad from '../data/images/salad.svg';
import hotDog from '../data/images/hotDog.svg';
import aPizza from '../data/images/aPizza.svg';
import iPizza from '../data/images/iPizza.svg';
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
            ? 'absolute lg:static flex bg-neutral-300 lg:bg-transparent top-0 left-0 right-0 py-4 lg:p-0 z-20'
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

        <MenuHeaderStructure
          selectedHeader={selectedHeader}
          id="#salad"
          title="سالاد و پیش غذا"
          image={salad}
        />

        <MenuHeaderStructure
          selectedHeader={selectedHeader}
          id="#drink"
          title="نوشیدنی"
          image={drink}
        />

        <MenuHeaderStructure
          selectedHeader={selectedHeader}
          id="#hotDog"
          title="هات داگ"
          image={hotDog}
        />

        <MenuHeaderStructure
          selectedHeader={selectedHeader}
          id="#iPizza"
          title="پیتزا ایتالیایی"
          image={iPizza}
        />
        
        <MenuHeaderStructure
          selectedHeader={selectedHeader}
          id="#aPizza"
          title="پیتزا آمریکایی"
          image={aPizza}
        />
      </ul>
    </nav>
  );
};

export default MenuHeader;
