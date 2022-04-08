import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FaAngleLeft, FaAngleRight, FaSignOutAlt } from 'react-icons/fa';

interface TypeInputs {
  order: number;
  onExit: () => void;
  onOrder: (e: string) => void;
  onQuery: () => void
}

const CustomLayersBtn = ({ order, onExit, onOrder, onQuery }: TypeInputs) => {
  const customValues = useSelector(
    (state: RootState) => state.customValueStore
  );

  let isDisabled: any = true;

  if (order < 4) {
    isDisabled = !Object['values'](customValues)[order - 1];
  } else {
    if (order === 4) {
      isDisabled = customValues.beef.length === 0;
    } else if (order === 5) {
      isDisabled = customValues.vegetable.length === 0;
    }
  }

  return (
    <div className="custom_btn">
      <button
        className="custom_btn_btn"
        disabled={isDisabled}
        onClick={() => onOrder('increment')}
      >
        <FaAngleLeft />
        مرحله بعد
      </button>

      <button className="custom_btn_query" onClick={onQuery}>؟</button>

      {order === 1 && (
        <button className="custom_btn_btn" onClick={onExit}>
          خروج
          <FaSignOutAlt />
        </button>
      )}

      {order !== 1 && (
        <button className="custom_btn_btn" onClick={() => onOrder('decrement')}>
          مرحله قبل
          <FaAngleRight />
        </button>
      )}
    </div>
  );
};

export default CustomLayersBtn;
