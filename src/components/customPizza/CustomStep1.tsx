import CustomStructureRadio from './CustomStructureRadio';
import {dough} from '../data/custom/customData'
import {useDispatch} from 'react-redux';
import {customValueAction} from '../redux/slices/customValueSlice'

const CustomStep1 = () => {
    const dispatch = useDispatch();

    const valueHandler = (e: string) => {
        dispatch(customValueAction({type: 'dough', value: e}))
    }

    return (
        <div>
            <CustomStructureRadio data={dough} onValue={valueHandler} />
        </div>
    )
}

export default CustomStep1;