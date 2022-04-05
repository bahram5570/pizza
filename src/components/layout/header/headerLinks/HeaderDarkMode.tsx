import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { darkMode as toggle } from '../../../redux/slices/darkModeSlice';
import brandIcon from '../../../data/images/brandIcon.png';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const HeaderDarkMode = () => {
  const darkMode = useSelector((state: RootState) => state.darkModeStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Fragment>
      <img src={brandIcon} alt="brandIcon" className="w-auto h-24 mb-1" />

      <div onClick={() => dispatch(toggle())} className="header_darkMode">
        <BsSunFill className="absolute top-1 right-0.5 w-auto h-5" />
        <BsMoonFill className="absolute top-1 left-0.5 w-auto h-5" />

        <span
          className="
            absolute 
            top-0.5 
            left-[2px]
            dark:left-[31px]
            duration-200
            w-6 
            h-6 
            rounded-full 
            bg-black"
        />
      </div>
    </Fragment>
  );
};

export default HeaderDarkMode;
