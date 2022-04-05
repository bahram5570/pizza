import { Fragment } from 'react';
import MenuHeaderStructure from './MenuHeaderStructure';

import drink from '../../data/images/drink.svg';
import salad from '../../data/images/salad.svg';
import hotDog from '../../data/images/hotDog.svg';
import aPizza from '../../data/images/aPizza.svg';
import iPizza from '../../data/images/iPizza.svg';

interface TypeInputs {
  selectedHeader: string[] | null;
}

const MenuHeaderLinks = ({ selectedHeader }: TypeInputs) => {
  const menuLinks = [
    { id: '#salad', title: 'سالاد و پیش غذا', image: salad },
    { id: '#drink', title: 'نوشیدنی', image: drink },
    { id: '#hotDog', title: 'هات داگ', image: hotDog },
    { id: '#iPizza', title: 'پیتزا ایتالیایی', image: iPizza },
    { id: '#aPizza', title: 'پیتزا آمریکایی', image: aPizza },
  ];

  return (
    <Fragment>
      {menuLinks.map((x) => (
        <MenuHeaderStructure
          key={x.id}
          selectedHeader={selectedHeader}
          id={x.id}
          title={x.title}
          image={x.image}
        />
      ))}
    </Fragment>
  );
};

export default MenuHeaderLinks;
