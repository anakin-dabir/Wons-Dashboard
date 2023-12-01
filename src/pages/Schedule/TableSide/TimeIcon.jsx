// /src/pages/Schedule/TableSide/TimeIcon.jsx
// Thursday, November 30th 2023, 6:28 am

import React from 'react';
import {useTheme} from '@mui/material';

const TimeIcon = () => {
  const theme = useTheme();
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 14 14' fill='none'>
      <g opacity='0.6'>
        <path
          d='M7 14C3.136 14 0 10.871 0 7C0 3.136 3.136 0 7 0C10.871 0 14 3.136 14 7C14 10.871 10.871
        14 7 14ZM9.23302 9.59695C9.31702 9.64595 9.40802 9.67395 9.50602 9.67395C9.68102 9.67395
        9.85602 9.58295 9.95402 9.41495C10.101 9.16995 10.024 8.84795 9.77202 8.69395L7.28002
        7.20995V3.97595C7.28002 3.68195 7.04202 3.45095 6.75502 3.45095C6.46802 3.45095 6.23002
        3.68195 6.23002 3.97595V7.51095C6.23002 7.69295 6.32802 7.86095 6.48902 7.95895L9.23302
        9.59695Z'
          fillRule='evenodd'
          clipRule='evenodd'
          fill={theme.palette.text.dim}
        />
      </g>
    </svg>
  );
};

export default TimeIcon;
