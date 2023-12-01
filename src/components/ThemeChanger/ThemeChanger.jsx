// /src/components/ThemeChanger.jsx
// Thursday, November 23rd 2023, 5:52 pm

import React, {useContext} from 'react';
import DarkMode from '../../assets/dark.png';
import LightMode from '../../assets/light.png';
import Button from '@mui/material/Button';
import {ThemeSelectorProvider} from '../CustomThemeProvider/CustomThemeProvider';

const ThemeChanger = () => {
  const {mode, setMode} = useContext(ThemeSelectorProvider);
  const changeMode = () => {
    const themeMode = {light: 'light', dark: 'dark'};
    const themeItem = 'theme';
    if (mode === themeMode.light) {
      setMode(themeMode.dark);
      localStorage.setItem(themeItem, themeMode.dark);
    } else {
      setMode(themeMode.light);
      localStorage.setItem(themeItem, themeMode.light);
    }
  };
  return (
    <>
      <Button onClick={changeMode} variant='text' sx={{position: 'absolute', top: 8, right: 12}}>
        <img src={mode === 'light' ? DarkMode : LightMode} alt='themeBtn' />
      </Button>
    </>
  );
};

export default ThemeChanger;
