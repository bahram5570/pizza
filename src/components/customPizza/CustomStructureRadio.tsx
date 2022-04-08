import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { GiCheckMark } from 'react-icons/gi';

interface TypeValues {
  id: string;
  name: string;
  icon: string;
  layer: string;
}

interface TypeInputs {
  onValue: (e: TypeValues) => void;
  type: string;
  data: {
    id: string;
    name: string;
    icon: string;
    layer: string;
  }[];
}

const CustomStructureRadio = ({ type, data, onValue }: TypeInputs) => {
  const initialState = useSelector(
    (state: RootState) => state.customValueStore
  );

  const [selected, setSelected] = useState<null | TypeValues>(null);

  useEffect(() => {
    setSelected(initialState[type]);
  }, [initialState, type]);

  const changeHandler = (e: TypeValues) => {
    setSelected(e);
    onValue(e);
  };

  return (
    <section className="w-[450px] flex flex-col text-lg">
      {data.map((x) => (
        <div key={x.id} className="flex justify-between items-center mb-4">
          <label className="flex items-center relative cursor-pointer">
            انتخاب
            <input
              type="radio"
              name="pizzaRadio"
              value={x.name}
              onChange={() => changeHandler(x)}
              className="
                appearance-none 
                w-5 
                h-5 
                border-2 
                border-neutral-600 
                dark:border-neutral-200 
                rounded 
                ml-2 
                cursor-pointer"
            />
            {selected?.name === x.name && (
              <GiCheckMark className="absolute w-6 h-auto -top-1 -right-1.5" />
            )}
          </label>

          <div className="flex items-center">
            <p>{x.name}</p>
            <img src={x.icon} alt={x.name} className="w-16 h-auto ml-4 rounded-full" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CustomStructureRadio;
