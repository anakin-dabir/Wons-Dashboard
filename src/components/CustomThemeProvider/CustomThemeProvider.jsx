// /src/components/CustomThemeProvider.jsx
// Thursday, November 23rd 2023, 5:52 pm

import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import React, {useMemo} from 'react';
import {lightMode, darkMode} from '../../theme/theme';
import {useSelector} from 'react-redux';

const ButtonProps = {
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
    MuiButton: ButtonProps,
    MuiLoadingButton: ButtonProps,
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

const CustomThemeProvider = ({children}) => {
  const mode = useSelector(state => state.theme.mode);
  const theme = useMemo(() => createTheme(customProps(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
