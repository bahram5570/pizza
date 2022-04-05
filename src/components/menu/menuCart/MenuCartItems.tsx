import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { plusCart, minusCart, removeCart } from '../../redux/slices/cartSlice';
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
  const dispatch = useDispatch();

  return (
    <Fragment>
      {items.map((x) => (
        <div className="menu_cart_structure" key={x.id}>
          <p>
            <span>ت</span>
            <span>{x.price}</span>
          </p>

          <div>
            {x.quantity === 1 ? (
              <FaTrash
                onClick={() => dispatch(removeCart(x.id))}
                className="fill-[#ff0000]"
              />
            ) : (
              <FaMinus onClick={() => dispatch(minusCart(x.id))} />
            )}

            <p>{x.quantity}</p>

            <FaPlus onClick={() => dispatch(plusCart(x.id))} />
          </div>

          <h2>{x.name}</h2>
        </div>
      ))}
    </Fragment>
  );
};

export default MenuCartItems;
