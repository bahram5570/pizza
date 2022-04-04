import MenuHeader from './MenuHeader';
import MenuStructure from './MenuStructure';
import { useMenuTags } from './useMenuTags';
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

      <MenuStructure id="aPizza" data={aPizza} title="پیتزا آمریکایی" />
      <MenuStructure id="iPizza" data={iPizza} title="پیتزا ایتالیایی" />
      <MenuStructure id="hotDog" data={hotDog} title="هات داگ" />
      <MenuStructure id="drink" data={drink} title="نوشیدنی" />
      <MenuStructure id="salad" data={salad} title="سالاد و پیش غذا" />
    </div>
  );
};

export default Menu;