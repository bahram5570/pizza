import CustomStructureCheck from './CustomStructureCheck';
import { beef } from '../data/custom/customData';
import { useDispatch } from 'react-redux';
import { customValueAction } from '../redux/slices/customValueSlice';

interface TypeValues {
  id: string;
  name: string;
  icon: string;
  layer: string;
  extra: boolean;
}

const CustomStep4 = () => {
  const dispatch = useDispatch();

  const valueHandler = (e: TypeValues[]) => {
    dispatch(customValueAction({ type: 'beef', value: e }));
  };

  return (
    <CustomStructureCheck type="beef" data={beef} onValue={valueHandler} />
  );
};

export default CustomStep4;
