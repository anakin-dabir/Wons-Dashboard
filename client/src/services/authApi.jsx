/*eslint-disable */
// /src/services/authApi.jsx
// Thursday, December 21st 2023, 7:28 pm

import {createApi} from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import toast from 'react-hot-toast';
import {setUser} from '../store/slice/authSlice';
import Cookies from 'js-cookie';

const onRequest = async (arg, {dispatch, queryFulfilled}) => {
  try {
    const response = await queryFulfilled;
    dispatch(setUser(response.data.user));
    Cookies.set('jwt_token', response.data.token, {path: '/'});
    toast.success(response.data.message);
  } catch (err) {
    toast.error(err.error.data.message);
  }
};

const authApi = createApi({
  baseQuery,
  reducerPath: 'authApi',
  endpoints: build => ({
    register: build.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: onRequest,
    }),
    login: build.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: onRequest,
    }),
  }),
});

export const {useRegisterMutation, useLoginMutation} = authApi;

export default authApi;
