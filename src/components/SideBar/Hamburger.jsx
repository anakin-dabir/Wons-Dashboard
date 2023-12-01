// /src/components/SideBar/Hamburger.jsx
// Thursday, November 23rd 2023, 5:52 pm

import {Box, Button} from '@mui/material';
import React from 'react';

const Hamburger = ({sideBarOpened, toggleSideBar}) => {
  return (
    <Button
      variant='text'
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '8px',
        zIndex: 100,
        display: {xs: 'flex', sm: 'none'},
        position: 'sticky',
        marginY: sideBarOpened ? '20px' : '5px',
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
          transition: theme =>
            theme.transitions.create(['transform'], {
              duration: theme.transitions.duration.shortest,
            }),
          transform: sideBarOpened && 'translateY(6px) rotate(45deg)',
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: 'text.dim',
          height: '0.25rem',
          width: sideBarOpened ? '1.75rem' : '1rem',
          borderRadius: '8px',
          transition: theme =>
            theme.transitions.create(['transform'], {
              duration: theme.transitions.duration.shortest,
            }),
          transform: sideBarOpened && 'translateY(-6px) rotate(-45deg)',
        }}
      ></Box>
    </Button>
  );
};

export default Hamburger;
