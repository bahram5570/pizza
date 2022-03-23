import React from 'react';

interface OnShowType {
  onShowMenu: () => void;
  showMenu: boolean;
}

const HeaderMenuIcon: React.FC<OnShowType> = ({ onShowMenu, showMenu }) => {
  return (
    <div onClick={onShowMenu} className="md:hidden flex items-center">
      <p className='mr-3 text-lg'>{showMenu ? 'بستن منو' : 'نمایش منو'}</p>
      <section>
        <span
          className={`block h-1 w-8 rounded-full bg-white duration-200 ${
            showMenu && 'rotate-45 translate-y-3'
          }`}
        />
        <span
          className={`block h-1 w-8 rounded-full my-2 bg-white duration-200 ${
            showMenu && 'opacity-0'
          }`}
        />
        <span
          className={`block h-1 w-8 rounded-full bg-white duration-200 ${
            showMenu && '-rotate-45 -translate-y-3'
          }`}
        />
      </section>
    </div>
  );
};

export default HeaderMenuIcon;
