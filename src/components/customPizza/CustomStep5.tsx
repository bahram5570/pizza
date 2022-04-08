import CustomStructureCheck from './CustomStructureCheck';
import { vegetable } from '../data/custom/customData';
import { useDispatch } from 'react-redux';
import { customValueAction } from '../redux/slices/customValueSlice';

interface TypeValues {
  id: string;
  name: string;
  icon: string;
  layer: string;
  extra: boolean;
}

const CustomStep5 = () => {
  const dispatch = useDispatch();

  const valueHandler = (e: TypeValues[]) => {
    dispatch(customValueAction({ type: 'vegetable', value: e }));
  };

  return (
    <CustomStructureCheck type="vegetable" data={vegetable} onValue={valueHandler} />
  );
};

export default CustomStep5;
