import CustomStructureRadio from './CustomStructureRadio';
import { dough } from '../data/custom/customData';
import { useDispatch } from 'react-redux';
import { customValueAction } from '../redux/slices/customValueSlice';

interface TypeValues {
  id: string;
  name: string;
  icon: string;
  layer: string;
}

const CustomStep1 = () => {
  const dispatch = useDispatch();

  const valueHandler = (e: TypeValues) => {
    dispatch(customValueAction({ type: 'dough', value: e }));
  };

  return (
    <CustomStructureRadio type="dough" data={dough} onValue={valueHandler} />
  );
};

export default CustomStep1;
