// /src/pages/Schedule/CalenderSide.jsx
// Wednesday, November 29th 2023, 9:59 pm

import {Button, Stack} from '@mui/material';
import React from 'react';
import AddBtn from '../AddBtn';
import SearchPeople from './SearchPeople';
import CloseBtn from '../../../components/CloseBtn';
import Calender from './Calender';
import Overlay from '../../../components/Overlay';

const CalenderSide = ({sideBarOpened, toggleSideBar, which_element_to_show}) => {
  return (
    <>
      <Stack
        sx={{
          width: {xs: '100%', xl: '30%'},
          maxWidth: '385px',
          height: {xs: '100vh', xl: 1000},
          display: {xs: 'flex', xl: 'flex'},
          justifyContent: 'space-between',
          bgcolor: 'neutral.main',
          padding: '30px 35px',
          position: {xs: 'fixed', xl: 'static'},
          top: 0,
          right: 0,
          zIndex: 60,
          transform: sideBarOpened
            ? 'translateX(0)'
            : {xs: 'translateX(100%)', xl: 'translateX(0)'},
          transition: theme => theme.transitions.create(['transform']),
        }}
      >
        {sideBarOpened && <CloseBtn toggleSideBar={toggleSideBar} />}
        <Stack gap={4} sx={{paddingTop: sideBarOpened && 5}}>
          {which_element_to_show !== 'Calender' && (
            <AddBtn name='Create Schedule' width='100%' height='60px' />
          )}
          {which_element_to_show !== 'Add Schedule' && <Calender />}
          {which_element_to_show !== 'Calender' && <SearchPeople />}
        </Stack>
        {which_element_to_show !== 'Calender' && (
          <Button
            variant='outlined'
            sx={{height: '60px', borderColor: theme => theme.palette.background.custom}}
          >
            My Schedule
          </Button>
        )}
      </Stack>
      {sideBarOpened && <Overlay toggleSideBar={toggleSideBar} zIndex={50} />}
    </>
  );
};

export default CalenderSide;
