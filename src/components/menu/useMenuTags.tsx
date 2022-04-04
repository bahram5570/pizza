import { useState, useEffect } from 'react';

export const useMenuTags = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState<null | string[]>(null);

  const iPizzaPosition = document.getElementById('iPizza')?.offsetTop;
  const aPizzaPosition = document.getElementById('aPizza')?.offsetTop;
  const hotDogPosition = document.getElementById('hotDog')?.offsetTop;
  const drinkPosition = document.getElementById('drink')?.offsetTop;
  const saladPosition = document.getElementById('salad')?.offsetTop;

  const isScrolled = () => {
    const menuId = {
      salad: ['#salad', 'سالاد و پیش غذا'],
      drink: ['#drink', 'نوشیدنی'],
      hotDog: ['#hotDog', 'هات داگ'],
      iPizza: ['#iPizza', 'پیتزا ایتالیایی'],
      aPizza: ['#aPizza', 'پیتزا آمریکایی'],
    };

    const currentHeight = window.scrollY;
    if (currentHeight >= (saladPosition || 0) - 260) {
      setSelectedHeader(menuId.salad);
    } else if (currentHeight >= (drinkPosition || 0) - 200) {
      setSelectedHeader(menuId.drink);
    } else if (currentHeight >= (hotDogPosition || 0) - 200) {
      setSelectedHeader(menuId.hotDog);
    } else if (currentHeight >= (iPizzaPosition || 0) - 200) {
      setSelectedHeader(menuId.iPizza);
    } else if (currentHeight >= (aPizzaPosition || 0) - 200) {
      setSelectedHeader(menuId.aPizza);
    } else {
      setSelectedHeader(null);
    }

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

  return { scrolled, selectedHeader };
};
