// /src/components/ThemeChanger.jsx
// Thursday, November 23rd 2023, 5:52 pm

import React from 'react';
import DarkMode from '../../assets/dark.png';
import LightMode from '../../assets/light.png';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../store/slice/themeSlice';

const ThemeChanger = () => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.theme.mode);

  return (
    <>
      <Button
        onClick={() => dispatch(toggleTheme())}
        variant='text'
        sx={{position: 'absolute', top: 8, right: 12}}
      >
        <img src={mode === 'light' ? DarkMode : LightMode} alt='themeBtn' />
      </Button>
    </>
  );
};

export default ThemeChanger;
