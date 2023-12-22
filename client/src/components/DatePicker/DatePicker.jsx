// /src/components/DatePicker.jsx
// Sunday, November 12th 2023, 10:33 pm

import React from 'react';
import dayjs from 'dayjs';
import {alpha} from '@mui/system';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SimpleDatePicker = ({date = '2022-04-17'}) => {
  const [value, setValue] = React.useState(dayjs(date));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format='DD-MM-YYYY'
        value={value}
        onChange={newValue => setValue(newValue)}
        slots={{
          openPickerIcon: KeyboardArrowDownIcon,
        }}
        slotProps={{
          textField: {
            variant: 'standard',
            sx: {
              bgcolor: 'neutral.main',
              padding: '10px',
              borderRadius: '8px',
              width: '190px',
            },
            inputProps: {
              style: {
                opacity: 0.8,
              },
            },
          },
          desktopPaper: {
            sx: {bgcolor: 'neutral.main'},
          },
          mobilePaper: {
            sx: {bgcolor: 'neutral.main'},
          },
          openPickerIcon: {
            sx: {fill: theme => alpha(theme.palette.text.dim, 0.5)},
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default SimpleDatePicker;
