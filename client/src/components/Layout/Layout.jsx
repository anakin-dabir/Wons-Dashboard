// /src/components/Layout.jsx
// Thursday, November 23rd 2023, 5:52 pm

import React from 'react';
import {Outlet} from 'react-router-dom';
import SideBar from '../SideBar';
import {Box} from '@mui/material';

const Layout = ({sidebar = false} = {}) => {
  return !sidebar ? (
    <Outlet />
  ) : (
    <>
      <SideBar />
      <Box
        sx={{
          width: {sm: 'calc(100% - 84.5px)', lg: 'calc(100% - 281px)'},
          height: '100%',
          marginLeft: {sm: '84.5px', lg: '281px'},
          overflowX: 'hidden',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
