// /src/components/dashboard/Visitors.jsx
// Sunday, November 12th 2023, 11:05 pm

import {Box, Stack, Typography} from '@mui/material';
import React from 'react';
import MenuButton from '../../components/MenuButton';
import LineChart from '../../components/LineChart';

const data = [
  {time: 1, value: 58},
  {time: 1.5, value: 44},
  {time: 2, value: 36},
  {time: 2.5, value: 43},
  {time: 3, value: 61},
  {time: 3.5, value: 46},
  {time: 4, value: 50},
  {time: 4.5, value: 30},
  {time: 5, value: 50},
  {time: 5.5, value: 35},
  {time: 6, value: 26},
  {time: 6.5, value: 37},
  {time: 7, value: 35},
  {time: 7.5, value: 49},
  {time: 8, value: 45},
  {time: 8.5, value: 64},
];

const Visitors = () => {
  return (
    <Box
      bgcolor='neutral.main'
      gap={1}
      sx={{
        height: {xs: '80%', sm: '100%'},
        display: 'flex',
        flexDirection: 'column',
        width: {xl: '70%'},
        padding: '20px',
        borderRadius: '10px',
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
          Visitors
        </Typography>
        <MenuButton type='horizontal' />
      </Stack>
      <LineChart data={data} />
    </Box>
  );
};

export default Visitors;
