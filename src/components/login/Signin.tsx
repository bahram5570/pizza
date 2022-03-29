import React from 'react';
import FormStructure from './FormStructure';
import useForm from './useForm';

interface showTypes {
  onShowHandler: () => void;
  showSignin: boolean;
}

const Signin = ({ onShowHandler, showSignin }: showTypes) => {
  const { inputHandler, data, isValid } = useForm('signin');
  const { phoneMessage, passMessage } = data;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(data);
    // --> 'data' is ready
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
            ${showSignin ? 'top-[120px] md:top-[150px]' : '-top-[800px]'}
            
            `}
    >
      <span className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 -z-10" />
      <h2 className="text-3xl pb-1 border-b-2 border-white">ورود</h2>

      <FormStructure
        label="همراه"
        type="tel"
        name="phone"
        placeholder="09*********"
        message={phoneMessage}
        id='signinPhone'
        inputHandler={inputHandler}
      />
      <FormStructure
        label="رمز عبور"
        type="password"
        name="pass"
        placeholder="****"
        message={passMessage}
        id='signinPass'
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
