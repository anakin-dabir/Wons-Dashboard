// /src/pages/Schedule/Schedule.jsx
// Wednesday, November 29th 2023, 9:40 pm

import React from 'react';
import Header from '../../components/Header';
import CalenderSide from './CalenderSide';
import TableSide from './TableSide';
import AddIcon from '@mui/icons-material/Add';
import useSidebar from '../../hooks/useSidebar';
import {
  PlusIconBtn,
  ResponsiveSideBarButtonsContainer,
  SheduleInsideContainer,
} from '../../theme/theme';

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
    <Header
      name='Schedule List'
      rightComponent={
        <PlusIconBtn>
          <AddIcon fontSize='small' />
          Add New
        </PlusIconBtn>
      }
    >
      <ResponsiveSideBarButtonsContainer>
        <PlusIconBtn onClick={() => openSideBar('Add Schedule')}>
          <AddIcon fontSize='small' />
          Add Schedule
        </PlusIconBtn>
        <PlusIconBtn onClick={() => openSideBar('Calender')}>Select Date</PlusIconBtn>
      </ResponsiveSideBarButtonsContainer>
      <SheduleInsideContainer>
        <CalenderSide
          sideBarOpened={sideBarOpened}
          toggleSideBar={toggleSideBar}
          which_element_to_show={which_element_to_show}
        />
        <TableSide />
      </SheduleInsideContainer>
    </Header>
  );
};

export default Schedule;
