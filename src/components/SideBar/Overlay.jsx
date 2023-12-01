// /src/components/SideBar/Overlay.jsx
// Thursday, November 23rd 2023, 5:52 pm

import React from 'react';
import {Box} from '@mui/material';

const Overlay = ({setSideBarOpened}) => {
  return (
    <Box
      sx={{position: 'fixed', inset: 0, zIndex: 10}}
      onClick={() => setSideBarOpened(pre => !pre)}
    >
      <Box sx={{position: 'fixed', inset: 0, backgroundColor: 'black', opacity: 0.6}}></Box>
    </Box>
  );
};

export default Overlay;
