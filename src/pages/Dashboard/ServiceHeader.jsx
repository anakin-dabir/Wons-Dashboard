// /src/pages/Dashboard/ServiceHeader.jsx
// Monday, November 27th 2023, 11:02 pm

import React from 'react';
import {Stack, Box} from '@mui/material';
import ServicesTable from './ServiceTable';
import TopSellers from './TopSellers';

const ServiceHeader = () => {
  return (
    <Stack
      className='w-full'
      sx={{flexDirection: {xs: 'column', xl: 'row'}, height: {xl: '440px'}}}
      gap={2}
    >
      <Box sx={{width: {xl: '70%'}, height: '100%'}}>
        <ServicesTable />
      </Box>
      <Box sx={{width: {xl: '30%'}, height: '100%'}}>
        <TopSellers />
      </Box>
    </Stack>
  );
};

export default ServiceHeader;
