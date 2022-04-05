import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MenuCartItems from './MenuCartItems';
import { showMenuCart } from '../../redux/slices/showCartSlice';
import {useCartTotal} from '../../utils/useCartTotal';
import { FaShoppingBag, FaTimes } from 'react-icons/fa';

const MenuCart = () => {
  const showMenuStatus = useSelector(
    (state: RootState) => state.showCartStore.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const openHandler = () => {
      dispatch(showMenuCart('open'));
    };

    document
      .getElementById('cartComponent')
      ?.addEventListener('click', openHandler);
    document
      .getElementById('smallCartComponent')
      ?.addEventListener('click', openHandler);

    const closeHandler = () => {
      dispatch(showMenuCart('close'));
    };

    document.getElementById('menuCart')?.addEventListener('click', (x: any) => {
      x.target.id === 'menuCart' && closeHandler();
    });
    document
      .getElementById('menuCloseButtom')
      ?.addEventListener('click', closeHandler);
  });

  const items = useSelector((state: RootState) => state.cartStore);

  const {totalPrice} = useCartTotal();

  const navigate = useNavigate();

  return (
    <div
      id="menuCart"
      className={`menu_cart ${!showMenuStatus && '-translate-x-full'}`}
    >
      <div
        className={`menu_cart ${
          showMenuStatus && 'shadow-[0_10px_20px_#555555]'
        }`}
      >
        <section className="menu_cart_header">
          <FaTimes id="menuCloseButtom" className="cursor-pointer" />
          <h2>
            سبد خرید شما
            <FaShoppingBag />
          </h2>
        </section>

        {items.length === 0 && (
          <p className="text-center mt-4 text-xl">سبد خرید شما خالی می باشد</p>
        )}

        {items.length > 0 && (
          <Fragment>
            <section>
              <MenuCartItems items={items} />
            </section>

            <section className="menu_cart_order">
              <div>
                <p>
                  <span className="mr-1">تومان</span>
                  <span>{totalPrice}</span>
                </p>
                <p>مبلغ قابل پرداخت</p>
              </div>

              <button onClick={() => navigate('/Cart')}>ثبت سفارش</button>
            </section>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default MenuCart;
