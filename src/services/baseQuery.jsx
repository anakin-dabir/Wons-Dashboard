// /src/services/baseQuery.jsx
// Thursday, December 21st 2023, 7:31 pm

import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import Cookies from 'js-cookie';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://wons-dashboard-server.cyclic.app',
  credentials: 'include',
  // prepareHeaders: headers => {
  //   const token = Cookies.get('jwt_token');
  //   if (token) {
  //     headers.set('Authorization', `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export default baseQuery;
