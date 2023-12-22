// /src/pages/SignUp/SignUp.jsx
// Wednesday, December 20th 2023, 9:57 pm

import React from 'react';
import ThemeChanger from '../../components/ThemeChanger';
import Wrapper from './Wrapper';
import Banner from './Banner';
import SignupSide from './SignupSide';

const SignUp = () => {
  return (
    <>
      <Wrapper>
        <ThemeChanger />
        <SignupSide />
        <Banner />
      </Wrapper>
    </>
  );
};

export default SignUp;
