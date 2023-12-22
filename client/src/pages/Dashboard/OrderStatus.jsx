// /src/components/dashboard/OrderStatus.jsx
// Sunday, November 12th 2023, 11:06 pm

import {Stack, Typography} from '@mui/material';
import React from 'react';
import MenuButton from '../../components/MenuButton';
import PieChart from '../../components/PieChart';

const data = {
  active: 20,
  completed: 40,
  cancelled: 20,
  remaining: 20,
  total: 100,
};

const OrderStatus = () => {
  return (
    <Stack
      bgcolor='neutral.main'
      sx={{
        height: {xs: '80%', sm: '100%'},
        width: {xl: '30%'},
        borderRadius: '10px',
        padding: '20px',
        position: 'relative',
      }}
    >
      <Stack
        sx={{
          justifyContent: 'space-between',
          marginY: '10px',
          flexDirection: 'row',
        }}
      >
        <Typography variant='h5' fontWeight='medium'>
          Order Status
        </Typography>
        <MenuButton type='horizontal' />
      </Stack>
      <Stack className='box-center' gap={2}>
        <PieChart data={data} />
      </Stack>
    </Stack>
  );
};

export default OrderStatus;
