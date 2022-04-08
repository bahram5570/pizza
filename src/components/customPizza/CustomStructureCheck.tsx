import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { GiCheckMark } from 'react-icons/gi';

interface TypeValues {
  id: string;
  name: string;
  icon: string;
  layer: string;
  extra: boolean;
}

interface TypeInputs {
  onValue: (e: TypeValues[]) => void;
  type: string;
  data: {
    id: string;
    name: string;
    icon: string;
    layer: string;
    extra: boolean;
  }[];
}

const CustomStructureCheck = ({ type, data, onValue }: TypeInputs) => {
  const initialState = useSelector(
    (state: RootState) => state.customValueStore
  );

  const [selected, setSelected] = useState<TypeValues[]>([]);

  useEffect(() => {
    setSelected(initialState[type]);
  }, [initialState, type]);

  const itemHandler = (e: TypeValues) => {
    const list: TypeValues[] = [...selected];
    const isAvailable = list?.some((x: TypeValues) => x.id === e.id);

    if (isAvailable) {
      const newList = list.filter((x) => x.id !== e.id);
      setSelected(newList);
      onValue(newList);
    } else {
      const newList = [...list, e];
      setSelected(newList);
      onValue(newList);
    }
  };

  const extraHandler = (e: TypeValues) => {
    const list: TypeValues[] = [...selected];
    const isAvailable = list?.some((x: TypeValues) => x.id === e.id);

    if (isAvailable) {
      const index = list.findIndex((x) => x.id === e.id);
      const item = { ...list[index] };
      item.extra = !item.extra;
      list[index] = item;
      setSelected(list);
      onValue(list);
    }
  };

  return (
    <section className="custom_check">
      {data.map((x) => (
        <div key={x.id}>
          <div className="custom_check_checkBox">
            <label>
              اضافی
              <input
                type="checkbox"
                name={x.name}
                value={x.name}
                onChange={() => extraHandler(x)}
              />
              {selected.some((e) => e.name === x.name && e.extra === true) && (
                <GiCheckMark />
              )}
            </label>

            <label className="ml-10">
              انتخاب
              <input
                type="checkbox"
                name={x.name}
                value={x.name}
                onChange={() => itemHandler(x)}
              />
              {selected.some((e) => e.name === x.name) && <GiCheckMark />}
            </label>
          </div>

          <div className="custom_check_icon">
            <p>{x.name}</p>
            <img src={x.icon} alt={x.name} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CustomStructureCheck;
