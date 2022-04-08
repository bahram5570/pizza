import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { customResetAction } from '../redux/slices/customValueSlice';
import CustomCrust from './CustomCrust';
import CustomLayersBtn from './CustomLayersBtn';
import CustomQuery from './CustomQuery';
import CustomStep1 from './CustomStep1';
import CustomStep2 from './CustomStep2';
import CustomStep3 from './CustomStep3';
import CustomStep4 from './CustomStep4';
import CustomStep5 from './CustomStep5';

const CustomLayers = () => {
  const [order, setOrder] = useState<number>(1);

  useEffect(() => {
    const initialOrder = localStorage.getItem('customOrder')
      ? JSON.parse(localStorage.getItem('customOrder') || '')
      : 1;
    setOrder(initialOrder);
  }, [order]);

  const orderHandler = (e: string) => {
    if (e === 'increment') {
      setOrder(order + 1);
      localStorage.setItem('customOrder', JSON.stringify(order + 1));
    } else if (e === 'decrement') {
      setOrder(order - 1);
      localStorage.setItem('customOrder', JSON.stringify(order - 1));
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exitHandler = () => {
    dispatch(customResetAction());
    localStorage.removeItem('customOrder');
    navigate('/Home');
  };

  const [showQuery, setShowQuery] = useState(false);

  const queryHandler = () => {
    setShowQuery(true);
  };

  useEffect(() => {
    const closeHandler = () => setShowQuery(false);
    const page = document.getElementById('customQuery');
    page?.addEventListener('click', closeHandler);
    return () => page?.removeEventListener('click', closeHandler);
  });

  return (
    <Fragment>
      {showQuery && <CustomQuery order={order} />}
      <div className="custom_layers">
        <CustomCrust />

        <div>
          {order === 1 && <CustomStep1 />}
          {order === 2 && <CustomStep2 />}
          {order === 3 && <CustomStep3 />}
          {order === 4 && <CustomStep4 />}
          {order === 5 && <CustomStep5 />}

          <CustomLayersBtn
            order={order}
            onExit={exitHandler}
            onOrder={orderHandler}
            onQuery={queryHandler}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CustomLayers;
