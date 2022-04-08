import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CustomCrustStructure from './CustomCrustStructure';

const CustomCrust = () => {
  const layers = useSelector((state: RootState) => state.customValueStore);

  return (
    <div
      className="
        relative
        w-80 
        h-80 
        lg:w-96
        lg:h-96
        rounded-full 
        shadow-[0_0_8px_#333333] 
        dark:shadow-[0_0_8px_#dddddd] 
        flex 
        justify-center 
        items-center"
    >
      <p className="text-[250px] text-neutral-600 dark:text-neutral-200">؟</p>

      <CustomCrustStructure data={layers} />
    </div>
  );
};

export default CustomCrust;
