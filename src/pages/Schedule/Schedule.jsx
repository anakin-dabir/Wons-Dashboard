// /src/pages/Schedule/Schedule.jsx
// Wednesday, November 29th 2023, 9:40 pm

import React from 'react';
import Header from '../../components/Header';
import AddBtn from './AddBtn';
import CalenderSide from './CalenderSide';
import TableSide from './TableSide';
import {Stack, Button} from '@mui/material';
import useSidebar from '../../utils/useSidebar';

const Schedule = () => {
  const {sideBarOpened, toggleSideBar, which_element_to_show, set_which_emelent_to_show} =
    useSidebar({
      width_to_close_sidebar: 1535,
    });
  const openSideBar = option => {
    set_which_emelent_to_show(option);
    toggleSideBar();
  };

  return (
    <Header name='Schedule List' rightComponent={<AddBtn name='Add New' />}>
      <Stack gap={2} direction='row' sx={{display: {xl: 'none'}}}>
        <AddBtn onClick={() => openSideBar('Add Schedule')} name='Add Schedule' />
        <Button onClick={() => openSideBar('Calender')}>Select Date</Button>
      </Stack>
      <Stack
        direction={{xs: 'column', xl: 'row'}}
        gap={4}
        sx={{width: '100%', position: 'relative', height: '100%'}}
      >
        <CalenderSide
          sideBarOpened={sideBarOpened}
          toggleSideBar={toggleSideBar}
          which_element_to_show={which_element_to_show}
        />
        <TableSide />
      </Stack>
    </Header>
  );
};

export default Schedule;
