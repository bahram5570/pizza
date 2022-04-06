import { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';

interface TypeInputs {
  onValue: (e: string) => void;
  data: {
    id: string;
    name: string;
    icon: string;
    layer: string;
  }[];
}

const CustomStructureRadio = ({ data, onValue }: TypeInputs) => {
  const [selected, setSelected] = useState<null | string>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    onValue(e.target.value);
  };

  return (
    <section className="bg-red-300 w-80 flex flex-col">
      {data.map((x) => (
        <div key={x.id} className="flex justify-between items-center mb-4">
          <label className="flex items-center relative cursor-pointer">
            انتخاب
            <input
              type="radio"
              name="pizzaRadio"
              value={x.name}
              onChange={changeHandler}
              className="appearance-none w-5 h-5 border-2 border-neutral-600 rounded ml-2 cursor-pointer"
            />
            {selected === x.name && (
              <GiCheckMark className="absolute w-6 h-auto -top-1 -right-1.5" />
            )}
          </label>

          <div className="flex items-center">
            <p>{x.name}</p>
            <img src={x.icon} alt={x.name} className="w-16 h-auto ml-4" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CustomStructureRadio;
