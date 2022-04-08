import CustomStructureRadio from './CustomStructureRadio';
import { sauce } from '../data/custom/customData';
import { useDispatch } from 'react-redux';
import { customValueAction } from '../redux/slices/customValueSlice';

interface TypeValues {
  id: string;
  name: string;
  icon: string;
  layer: string;
}

const CustomStep2 = () => {
  const dispatch = useDispatch();

  const valueHandler = (e: TypeValues) => {
    dispatch(customValueAction({ type: 'sauce', value: e }));
  };

  return (
    <CustomStructureRadio type="sauce" data={sauce} onValue={valueHandler} />
  );
};

export default CustomStep2;
