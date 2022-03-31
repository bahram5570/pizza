import { useState, useEffect } from 'react';
import MenuHeader from './MenuHeader';
import MenuStructure from './MenuStructure';
import {
  iPizza,
  aPizza,
  hotDog,
  drink,
  salad,
} from '../data/products/products';

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  const isScrolled = () => {
    const currentHeight = window.scrollY;

    if (106 < currentHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', isScrolled);
    return () => {
      window.removeEventListener('scroll', isScrolled);
    };
  });

  return (
    <div className={`${scrolled && 'pt-[130px]'}`}>
      <MenuHeader scrolled={scrolled} />

      <MenuStructure id="iPizza" data={iPizza} />
      <MenuStructure id="aPizza" data={aPizza} />
      <MenuStructure id="hotDog" data={hotDog} />
      <MenuStructure id="drink" data={drink} />
      <MenuStructure id="salad" data={salad} />
    </div>
  );
};

export default Menu;
