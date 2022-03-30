import React, { useEffect, useState } from 'react';
import FormStructure from './FormStructure';
import useForm from './useForm';
import { useDispatch, useSelector } from 'react-redux';
import { signinAction } from '../redux/slices/signinSlice';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';

interface showTypes {
  onShowHandler: () => void;
  showSignin: boolean;
}

const Signin = ({ onShowHandler, showSignin }: showTypes) => {
  const { inputHandler, data, isValid } = useForm('signin');
  const { phoneMessage, passMessage } = data;
  const [userMessage, setUserMessage] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.signinStore).user;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signinAction({ phone: data.phone, pass: data.pass }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user === 'fail') {
      setUserMessage('این شماره موجود نمی باشد');
    } else if (user === 'wrong') {
      setUserMessage('رمز عبور اشتباه است');
    } else if (user === 'success') {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(signinAction('finish'));
      navigate('/Menu');
    }
  }, [user, data, dispatch, navigate]);

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className={`
        w-4/5 
        md:w-[400px] 
        p-4 
        text-right 
        rounded-lg 
        overflow-hidden 
        text-white 
        backdrop-blur-[3px]
        duration-500
        absolute
        ${showSignin ? 'top-[120px] md:top-[150px]' : '-top-[800px]'}
      `}
    >
      <span className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 -z-10" />

      <span className="flex justify-between items-end pb-1 border-b-2 border-white">
        <p className="text-yellow-400">{userMessage}</p>
        <h2 className="text-3xl">ورود</h2>
      </span>

      <FormStructure
        label="همراه"
        type="tel"
        name="phone"
        value={data.phone}
        placeholder="09*********"
        message={phoneMessage}
        id="signinPhone"
        inputHandler={inputHandler}
      />

      <FormStructure
        label="رمز عبور"
        type="password"
        name="pass"
        value={data.pass}
        placeholder="****"
        message={passMessage}
        id="signinPass"
        inputHandler={inputHandler}
      />

      <button
        type="submit"
        disabled={!isValid}
        className="bg-[#ff0000] disabled:bg-neutral-500 disabled:cursor-not-allowed p-1.5 w-full mt-8 rounded-lg"
      >
        ورود
      </button>

      <div className="flex">
        <button
          type="button"
          onClick={() => onShowHandler()}
          className="border-b-2 border-white mt-4"
        >
          ایجاد حساب جدید
        </button>
      </div>
    </form>
  );
};

export default Signin;
