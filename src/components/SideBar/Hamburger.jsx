// /src/components/SideBar/Hamburger.jsx
// Thursday, November 23rd 2023, 5:52 pm

import {Box, Button} from '@mui/material';
import React from 'react';

const Hamburger = ({toggleSideBar}) => {
  return (
    <Button
      variant='text'
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '8px',
        display: {xs: 'flex', sm: 'none'},
        position: 'sticky',
        marginY: '5px',
        marginLeft: '18px',
      }}
      onClick={toggleSideBar}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          height: '0.25rem',
          width: '1.75rem',
          borderRadius: '8px',
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: 'text.dim',
          height: '0.25rem',
          width: '1rem',
          borderRadius: '8px',
        }}
      ></Box>
    </Button>
  );
};

export default Hamburger;
