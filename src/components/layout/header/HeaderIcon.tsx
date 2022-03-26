import { Fragment } from 'react';
import brandIcon from '../../data/images/brandIcon.png';

import { BsSunFill, BsMoonFill } from 'react-icons/bs';

interface darkModeType {
  onDarkMode: () => void;
  darkMode: boolean;
}

const HeaderIcon: React.FC<darkModeType> = ({ onDarkMode, darkMode }) => {
  return (
    <Fragment>
      <img src={brandIcon} alt="brandIcon" className="w-auto h-24 mb-1" />

      <div
        onClick={onDarkMode}
        className="header_darkMode"
      >
        <BsSunFill className="absolute top-1 right-0.5 w-auto h-5" />
        <BsMoonFill className="absolute top-1 left-0.5 w-auto h-5" />

        <span
          className={`
            absolute 
            top-0.5 
            ${darkMode ? 'left-[31px]' : 'left-[2px]'}
            duration-200
            w-6 
            h-6 
            rounded-full 
            bg-black
          `}
        />
      </div>
    </Fragment>
  );
};

export default HeaderIcon;
