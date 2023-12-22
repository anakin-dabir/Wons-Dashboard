// /src/pages/Schedule/CalenderSide.jsx
// Wednesday, November 29th 2023, 9:59 pm

import {Button, Stack} from '@mui/material';
import React from 'react';
import SearchPeople from './SearchPeople';
import CloseBtn from '../../components/CloseBtn';
import Calender from './Calender';
import Overlay from '../../components/Overlay';
import AddIcon from '@mui/icons-material/Add';
import {CalenderContainer, PlusIconBtn} from '../../theme/theme';

const CalenderSide = ({sideBarOpened, toggleSideBar, which_element_to_show}) => {
  return (
    <>
      <CalenderContainer props={{sideBarOpened}}>
        {sideBarOpened && <CloseBtn toggleSideBar={toggleSideBar} />}
        <Stack gap={4} sx={{paddingTop: sideBarOpened && 5}}>
          {which_element_to_show !== 'Calender' && (
            <PlusIconBtn width='100%' height='60px'>
              <AddIcon />
              Create Schedule
            </PlusIconBtn>
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
      </CalenderContainer>
      {sideBarOpened && <Overlay toggleSideBar={toggleSideBar} zIndex={50} />}
    </>
  );
};

export default CalenderSide;
