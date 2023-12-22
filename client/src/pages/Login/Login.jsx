// /src/pages/Login/Login.jsx
// Monday, November 27th 2023, 9:16 pm

import React from 'react';
import ThemeChanger from '../../components/ThemeChanger';
import Wrapper from './Wrapper';
import Banner from './Banner';
import LoginPane from './LoginPane';

const Login = () => {
  return (
    <>
      <Wrapper>
        <ThemeChanger />
        <LoginPane />
        <Banner />
      </Wrapper>
    </>
  );
};

export default Login;
