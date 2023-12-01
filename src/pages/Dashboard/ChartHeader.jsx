// /src/pages/Dashboard/ChartHeader.jsx
// Monday, November 27th 2023, 11:02 pm

import React from 'react';
import {Stack} from '@mui/material';
import Visitors from './Visitors';
import OrderStatus from './OrderStatus';

const ChartHeader = () => {
  return (
    <Stack
      gap={2}
      className='w-full'
      sx={{
        flexDirection: {xs: 'column', xl: 'row'},
        height: {xs: '54rem', xl: '540px'},
      }}
    >
      <Visitors />
      <OrderStatus />
    </Stack>
  );
};

export default ChartHeader;
