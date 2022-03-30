import React, { useState } from 'react';

const initialValues = {
    phone: '',
    phoneMessage: '',
    pass: '',
    passMessage: '',
    passConfirm: '',
    passConfirmMessage: '',
}

const useForm = (type: string) => {
  const [data, setData] = useState(initialValues);

  let isValid = false;

  const phoneConditions = (name: string, value: string) => {
    if (name === 'phone') {
      const isNumber = () => {
        let valid = false;
        for (let i = 0; i < value.length; i++) {
          if (isNaN(parseInt(value[i]))) {
            valid = true;
          }
        }
        return valid;
      };

      if (isNumber()) {
        setData({ ...data, phoneMessage: 'شماره نامعتبر', phone: value });
      } else if (value.length < 11 || value.length > 11) {
        setData({ ...data, phoneMessage: 'باید 11 عدد باشد', phone: value });
      } else {
        setData({ ...data, phoneMessage: '', phone: value });
      }
    }
  };

  const passConditions = (name: string, value: string) => {
    if (name === 'pass') {
      if (value.length < 4) {
        setData({ ...data, passMessage: 'حداقل 4 کارکتر', pass: value });
      } else {
        setData({ ...data, passMessage: '', pass: value });
      }
    }
  };

  const passConfirmConditions = (name: string, value: string) => {
    if (name === 'passConfirm') {
      if (value.length < 4) {
        setData({
          ...data,
          passConfirmMessage: 'حداقل 4 کارکتر',
          passConfirm: value,
        });
      } else if (value !== data.pass) {
        setData({
          ...data,
          passConfirmMessage: 'رمزها یکسان نیستند',
          passConfirm: '',
        });
      } else {
        setData({ ...data, passConfirmMessage: '', passConfirm: value });
      }
    }
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'signup') {
      phoneConditions(event.target.name, event.target.value);
      passConditions(event.target.name, event.target.value);
      passConfirmConditions(event.target.name, event.target.value);
    } else if (type === 'signin') {
      phoneConditions(event.target.name, event.target.value);
      passConditions(event.target.name, event.target.value);
    }
  };

  if (type === 'signup') {
    if (
      data.phone !== '' &&
      data.pass !== '' &&
      data.passConfirm !== '' &&
      data.passMessage === '' &&
      data.phoneMessage === '' &&
      data.passConfirmMessage === ''
    ) {
      isValid = true;
    }
  } else if (type === 'signin') {
    if (
      data.phone !== '' &&
      data.pass !== '' &&
      data.passMessage === '' &&
      data.phoneMessage === ''
    ) {
      isValid = true;
    }
  }

  const reset = () => {
    setData(initialValues)
  };


  return { inputHandler, reset, data, isValid };
};

export default useForm;
