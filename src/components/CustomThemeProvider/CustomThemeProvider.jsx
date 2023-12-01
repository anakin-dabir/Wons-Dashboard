// /src/components/CustomThemeProvider.jsx
// Thursday, November 23rd 2023, 5:52 pm

import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import React, {useState, useMemo, createContext} from 'react';

const lightMode = {
  palette: {
    background: {
      default: '#F1F4FA',
      main: '#F1F4FA',
      custom: 'rgba(153, 178, 198, 0.2)',
    },
    neutral: {
      main: '#FFFFFF',
    },
    primary: {
      main: '#3A36DB',
    },
    secondary: {
      main: '#FF69B4',
      medium: 'rgba(255, 105, 180, 0.7)',
      dim: 'rgba(255, 105, 180, 0.1)',
      lid: '#FF69B4',
      bg: 'rgba(255, 105, 180, 0.1)',
    },
    tertiary: {
      main: '#03A89E',
    },
    pink: {
      main: '#FF69B4',
    },
    danger: {
      main: '#C41C1C',
    },
    text: {
      primary: '#06152B',
      secondary: '#06152B',
      custom: '#3A36DB',
      dim: '#000',
    },
  },
};

const darkMode = {
  palette: {
    background: {
      default: '#1A202C',
      main: '#1A202C',
      custom: 'rgba(255, 255, 255, 0.2)',
    },
    neutral: {
      main: '#364153',
    },
    primary: {
      main: '#605CFF',
    },
    secondary: {
      main: '#605CFF',
      medium: 'rgba(95, 92, 255, 0.6)',
      dim: 'rgba(95, 92, 255, 0.1)',
      lid: '#bbb0b0',
      bg: 'rgba(26, 32, 44, 0.1)',
    },
    tertiary: {
      main: '#2FE5A7',
    },
    pink: {
      main: '#FF69B4',
    },
    danger: {
      main: '#C41C1C',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      custom: '#605CFF',
      dim: '#fff',
    },
  },
};

const customProps = mode => ({
  mode,
  typography: {
    fontFamily: 'DM Sans',
  },
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          flexShrink: 0,
          height: 50,
          borderRadius: 8,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
  ...(mode === 'light' ? lightMode : darkMode),
});

export const ThemeSelectorProvider = createContext();
const CustomThemeProvider = ({children}) => {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');
  const theme = useMemo(() => createTheme(customProps(mode)), [mode]);
  return (
    <ThemeSelectorProvider.Provider value={{mode, setMode}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeSelectorProvider.Provider>
  );
};

export default CustomThemeProvider;
