import React, { useState } from 'react';
import HeaderIcon from './HeaderIcon';
import HeaderLinks from './HeaderLinks';
import HeaderCart from './HeaderCart';
import HeaderCartSmall from './HeaderCartSmall';
import HeaderMenuIcon from './HeaderMenuIcon';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="px-4 lg:px-16  bg-headerRed dark:bg-[#333333] text-white">
      <div className="flex justify-between md:items-center border-b-2 border-red-600 dark:border-neutral-500">
        <section className="flex items-center h-fit">
          <HeaderIcon />
        </section>

        <section className="flex flex-col md:flex-row items-end md:items-center lg:mr-8">
          <HeaderMenuIcon
            showMenu={showMenu}
            onShowMenu={() => setShowMenu(!showMenu)}
          />
          <HeaderLinks showMenu={showMenu} />
          <HeaderCart />
          <HeaderCartSmall />
        </section>
      </div>
    </header>
  );
};

export default Header;
