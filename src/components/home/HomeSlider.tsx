import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { sliderData } from './sliderData';

const HomeSlider = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div id="sliderItem" className="flex animate-homeSlider w-full">
        {sliderData.map((x) => (
          <div
            onClick={() => navigate('/Menu')}
            key={x.alt}
            className="mx-10 min-w-[300px] cursor-pointer"
          >
            <img
              src={x.image}
              alt={x.alt}
              className="rounded-lg shadow-[0_10px_10px_#aaaaaa] dark:shadow-none"
            />
            <h3 className="md:text-right text-xl mt-2 mx-4">{x.txt}</h3>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default HomeSlider;
