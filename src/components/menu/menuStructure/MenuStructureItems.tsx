import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';
import MenuAnimation from '../menuAnimation/MenuAnimation';
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

const MenuStructureItems = ({ item }: TypeInputs) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [position, setPisition] = useState({
    cartBottom: 0,
    cartRight: 0,
    itemBottom: 0,
    itemRight: 0,
  });

  const cartItem = useSelector((state: RootState) => state.cartStore);
  const itemIndex = cartItem.findIndex((x) => x.id === item.id);
  const quantity = cartItem[itemIndex]?.quantity;

  const dispatch = useDispatch();

  const addHandler = (e: {}, element: any) => {
    dispatch(addToCart(e));
    setShowAnimation(true);
    setPisition({
      cartBottom: 56,
      cartRight: 8,
      itemBottom: window.innerHeight - element.clientY,
      itemRight: window.innerWidth - element.clientX,
    });
  };

  return (
    <div className="menu_structure">
      {showAnimation &&
        createPortal(
          <MenuAnimation
            position={position}
            onClose={() => setShowAnimation(false)}
          />,
          document.getElementById('cartAnimation')!
        )}

      <img src={item.image} alt={item.id} />

      <div>
        <div>
          <h2>
            {item.name}
            <span className={`${quantity && quantity > 0 ? 'flex' : 'hidden'}`}>
              {quantity}
            </span>
          </h2>

          <h3>{item.description}</h3>

          <p>
            <span className="mr-1">تومان</span>
            <span>{item.price}</span>
          </p>
        </div>

        <button onClick={(element) => addHandler(item, element)}>
          <p>افزودن به سبد خرید</p>
          <FaShoppingBag />
        </button>
      </div>
    </div>
  );
};

export default MenuStructureItems;
