import CustomStructureRadio from './CustomStructureRadio';
import { cheese } from '../data/custom/customData';
import { useDispatch } from 'react-redux';
import { customValueAction } from '../redux/slices/customValueSlice';

interface TypeValues {
  id: string;
  name: string;
  icon: string;
  layer: string;
}

const CustomStep3 = () => {
  const dispatch = useDispatch();

  const valueHandler = (e: TypeValues) => {
    dispatch(customValueAction({ type: 'cheese', value: e }));
  };

  return (
    <CustomStructureRadio type="cheese" data={cheese} onValue={valueHandler} />
  );
};

export default CustomStep3;
