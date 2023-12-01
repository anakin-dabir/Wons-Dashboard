// /src/pages/Schedule/Schedule.jsx
// Wednesday, November 29th 2023, 9:40 pm

import React from 'react';
import Header from '../../components/Header';
import AddBtn from './AddBtn';
import CalenderSide from './CalenderSide';
import TableSide from './TableSide';
import {Stack} from '@mui/material';

const Schedule = () => {
  return (
    <Header name='Schedule List' rightComponent={<AddBtn name='Add New' />}>
      <Stack direction='row' gap={4} sx={{width: '100%'}}>
        <CalenderSide />
        <TableSide />
      </Stack>
    </Header>
  );
};

export default Schedule;
