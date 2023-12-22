// /src/pages/Schedule/CalenderSide/Calender.jsx
// Thursday, November 30th 2023, 5:42 am

import React from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const Calender = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={dayjs('2021-04-02')}
        showDaysOutsideCurrentMonth
        sx={{
          borderRadius: '10px',
          border: '1px solid',
          padding: '0px',
          width: '100%',
          maxWidth: '310px',
          maxHeight: '310px',
          borderColor: theme => theme.palette.background.custom,
        }}
      />
    </LocalizationProvider>
  );
};

export default Calender;
