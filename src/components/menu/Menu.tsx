import MenuHeader from './menuHeader/MenuHeader';
import MenuStructure from './menuStructure/MenuStructure';
import MenuCart from './menuCart/MenuCart';
import MenuCartSmall from './menuCart/MenuCartSmall';
import { useMenuTags } from './menuStructure/useMenuTags';
import {
  iPizza,
  aPizza,
  hotDog,
  drink,
  salad,
} from '../data/products/products';

const Menu = () => {
  const { scrolled, selectedHeader } = useMenuTags();

  return (
    <div className={`${scrolled && 'pt-[80px] lg:pt-[130px]'}`}>
      <MenuHeader scrolled={scrolled} selectedHeader={selectedHeader} />
      <MenuCart />
      <MenuCartSmall />

      <MenuStructure id="aPizza" data={aPizza} title="پیتزا آمریکایی" />
      <MenuStructure id="iPizza" data={iPizza} title="پیتزا ایتالیایی" />
      <MenuStructure id="hotDog" data={hotDog} title="هات داگ" />
      <MenuStructure id="drink" data={drink} title="نوشیدنی" />
      <MenuStructure id="salad" data={salad} title="سالاد و پیش غذا" />
    </div>
  );
};

export default Menu;
