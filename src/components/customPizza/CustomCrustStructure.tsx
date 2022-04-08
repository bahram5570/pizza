import { Fragment } from 'react';

interface TypeInputs {
  data: {
    beef: {};
    cheese: {};
    dough: {};
    sauce: {};
    vegetable: {};
  };
}

const CustomCrustStructure = ({ data }: TypeInputs) => {
  const list: {}[] = [];

  Object.entries(data).forEach((x) => x[1] && list.push(x[1]));

  const newList = Array.prototype.concat.apply([], list);

  const output = newList.map((x: any) => (
    <img
      key={x.name}
      src={x.layer}
      alt={x.name}
      className="absolute top-0 left-0 right-0 bottom-0"
    />
  ));

  return <Fragment>{output}</Fragment>;
};

export default CustomCrustStructure;
