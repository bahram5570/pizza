import React, { useEffect, useState } from 'react';
import FormStructure from './FormStructure';
import useForm from './useForm';
import { useDispatch, useSelector } from 'react-redux';
import { signupAction } from '../redux/slices/signupSlice';
import { RootState } from '../redux/store';

interface ShowTypes {
  onShowHandler: () => void;
  showSignin: boolean;
}

const Signup = ({ onShowHandler, showSignin }: ShowTypes) => {
  const { inputHandler, reset, data, isValid } = useForm('signup');
  const { phoneMessage, passMessage, passConfirmMessage } = data;
  const [userMessage, setUserMessage] = useState('');

  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.signupStore).status;

  useEffect(() => {
    if (status === 'success') {
      dispatch(signupAction('finish'));
      reset();
      setUserMessage('');
      onShowHandler();
    } else if (status === 'fail') {
      setUserMessage('این شماره ثبت شده است');
    }
  }, [dispatch, onShowHandler, reset, userMessage, status]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signupAction({ phone: data.phone, pass: data.pass }));
  };

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
        ${showSignin ? '-top-[800px]' : 'top-[30px] md:top-[80px]'}
      `}
    >
      <span className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 -z-10" />

      <span className="flex justify-between items-end pb-1 border-b-2 border-white">
        <p className="text-yellow-400">{userMessage}</p>
        <h2 className="text-3xl">ثبت نام</h2>
      </span>

      <FormStructure
        label="همراه"
        type="tel"
        name="phone"
        value={data.phone}
        placeholder="09*********"
        message={phoneMessage}
        id="signupPhone"
        inputHandler={inputHandler}
      />

      <FormStructure
        label="رمز عبور"
        type="password"
        name="pass"
        value={data.pass}
        placeholder="****"
        message={passMessage}
        id="signupPass"
        inputHandler={inputHandler}
      />

      <FormStructure
        label="تکرار رمز عبور"
        type="password"
        name="passConfirm"
        value={data.passConfirm}
        placeholder="****"
        message={passConfirmMessage}
        id="signupPassConfirm"
        inputHandler={inputHandler}
      />

      <button
        type="submit"
        disabled={!isValid}
        className="
          bg-[#ff0000] 
          disabled:bg-neutral-500 
          disabled:cursor-not-allowed 
          p-1.5 
          w-full 
          mt-8 
          rounded-lg"
      >
        ثبت نام
      </button>

      <div className="flex">
        <button
          type="button"
          onClick={onShowHandler}
          className="border-b-2 border-white mt-4"
        >
          حساب کاربری دارید؟
        </button>
      </div>
    </form>
  );
};

export default Signup;
