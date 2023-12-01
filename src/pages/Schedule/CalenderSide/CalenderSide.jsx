// /src/pages/Schedule/CalenderSide.jsx
// Wednesday, November 29th 2023, 9:59 pm

import {Button, Stack} from '@mui/material';
import React from 'react';
import AddBtn from '../AddBtn';
import SearchPeople from './SearchPeople';
import Calender from './Calender';

const CalenderSide = () => {
  return (
    <>
      <Stack
        sx={{
          width: '500px',
          display: {xs: 'none', xl: 'flex'},
          justifyContent: 'space-between',
          bgcolor: 'neutral.main',
          padding: '30px 35px',
        }}
      >
        <Stack gap={4}>
          <AddBtn name='Create Schedule' width='100%' height='60px' />
          <Calender />
          <SearchPeople />
        </Stack>
        <Button
          variant='outlined'
          sx={{height: '60px', borderColor: theme => theme.palette.background.custom}}
        >
          My Schedule
        </Button>
      </Stack>
    </>
  );
};

export default CalenderSide;
