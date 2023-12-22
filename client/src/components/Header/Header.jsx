// /src/components/Header.jsx
// Sunday, November 12th 2023, 10:43 pm

import React from 'react';
import {Stack, Typography, Box} from '@mui/material';
import MenuButton from '../MenuButton/MenuButton';

const Header = ({name, rightComponent, children}) => {
  return (
    <>
      <Stack
        direction='row'
        className='box-center'
        sx={{justifyContent: 'space-between', padding: {xs: '20px 20px 0px', sm: '30px 30px 0px'}}}
      >
        <Typography variant='h5' fontWeight='bold'>
          {name}
        </Typography>
        <MenuButton type='vertical' sx={{display: {md: 'none'}}} />
        <Stack direction='row' gap={2} sx={{display: {xs: 'none', md: 'flex'}}}>
          {rightComponent}
        </Stack>
      </Stack>
      <Box
        className='w-full'
        gap={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: {xs: '20px', sm: '30px'},
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Header;
