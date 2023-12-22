/*eslint-disable */
// /src/store/authSlice.jsx
// Thursday, December 21st 2023, 12:06 pm

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    clearUser: state => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const {setUser, clearUser} = authSlice.actions;

export default authSlice.reducer;
