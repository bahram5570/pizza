import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useCartTotal = () => {
  const cartData = useSelector((state: RootState) => state.cartStore);

  const items = { qt: 0, price: 0 };

  cartData.forEach((x) => {
    items.qt = items.qt + x.quantity;
    items.price = items.price + x.quantity * x.price;
  });

  return { totalQt: items.qt, totalPrice: items.price };
};
