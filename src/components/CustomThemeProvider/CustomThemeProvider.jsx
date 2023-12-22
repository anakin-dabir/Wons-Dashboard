// /src/components/CustomThemeProvider.jsx
// Thursday, November 23rd 2023, 5:52 pm

import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import React, {useState, useMemo, createContext} from 'react';
import {lightMode, darkMode} from '../../theme/theme';

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
