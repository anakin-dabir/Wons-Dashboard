/*eslint-disable */
// /src/store/themeSlice.jsx
// Thursday, December 21st 2023, 6:25 pm

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      if (state.mode === 'light') {
        state.mode = 'dark';
      } else {
        state.mode = 'light';
      }
    },
  },
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;
