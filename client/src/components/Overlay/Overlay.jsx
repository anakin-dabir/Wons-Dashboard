// /src/components/Overlay/Overlay.jsx
// Monday, November 27th 2023, 10:55 pm

import React from 'react';
import {Box} from '@mui/material';

const Overlay = ({toggleSideBar, zIndex = 10} = {}) => {
  return (
    <Box sx={{position: 'fixed', inset: 0, zIndex}} onClick={toggleSideBar}>
      <Box sx={{position: 'fixed', inset: 0, backgroundColor: 'black', opacity: 0.6}}></Box>
    </Box>
  );
};

export default Overlay;
