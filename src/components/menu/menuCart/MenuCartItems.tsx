import { Fragment } from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

interface TypeInputs {
  items: {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

const MenuCartItems = ({ items }: TypeInputs) => {
  return (
    <Fragment>
      {items.map((x) => (
        <div className="menu_cart_structure" key={x.id}>
          <p>
            <span>ت</span>
            <span>{x.price}</span>
          </p>

          <div>
            <button>
              {x.quantity === 1 ? (
                <FaTrash className="fill-[#ff0000]" />
              ) : (
                <FaMinus />
              )}
            </button>

            <p>{x.quantity}</p>

            <button>
              <FaPlus />
            </button>
          </div>

          <h2>{x.name}</h2>
        </div>
      ))}
    </Fragment>
  );
};

export default MenuCartItems;
