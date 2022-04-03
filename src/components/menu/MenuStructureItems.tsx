import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/slices/cartSlice';
import {RootState} from '../redux/store'
import { FaShoppingBag } from 'react-icons/fa';


interface TypeInputs {
    item: {
      id: string;
      name: string;
      description: string;
      price: number;
      image: string;
    };
  }


const MenuStructureItems = ({item}: TypeInputs) => {
    const cartItem = useSelector((state: RootState) => state.cartStore);
    const itemIndex = cartItem.findIndex(x => x.id === item.id);
    const quantity = cartItem[itemIndex]?.quantity;

    const dispatch = useDispatch();

    const addHandler = (e: {}) => {
        dispatch(addToCart(e))
      }
  return (
    <div className="menu_structure">
      <img src={item.image} alt={item.id} />

      <div>
        <div>
          <h2>
            {item.name}
            <span className={`${quantity && quantity > 0 ? 'flex' : 'hidden'}`}>{quantity}</span>
          </h2>

          <h3>{item.description}</h3>

          <p>
            <span className="mr-1">تومان</span>
            <span>{item.price}</span>
          </p>
        </div>

        <button onClick={() => addHandler(item)}>
          <p>افزودن به سبد خرید</p>
          <FaShoppingBag />
        </button>
      </div>
    </div>
  );
};

export default MenuStructureItems;
