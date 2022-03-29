import { useState } from 'react';
import Signin from './Signin';
import Signup from './Signup';
import loginImage from '../data/images/loginImage.jpg';

const Login = () => {
  const [showSignin, setShowSignin] = useState(true);

  return (
    <div className="flex justify-center items-center flex-col md:flex-row md:mt-10">
      <img
        src={loginImage}
        alt="loginImage"
        className="absolute top-0 min-w-[800px] w-screen h-screen -z-10 dark:grayscale dark:brightness-[0.4]"
      />

      <Signin
        showSignin={showSignin}
        onShowHandler={() => setShowSignin(!showSignin)}
      />

      <Signup
        showSignin={showSignin}
        onShowHandler={() => setShowSignin(!showSignin)}
      />
    </div>
  );
};

export default Login;
