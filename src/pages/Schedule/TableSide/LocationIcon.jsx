// /src/pages/Schedule/TableSide/LocationIcon.jsx
// Thursday, November 30th 2023, 6:36 am

import {useTheme} from '@mui/material';
import React from 'react';

const LocationIcon = () => {
  const theme = useTheme();
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 14 16' fill='none'>
      <path
        d='M0 6.65421C0 2.97431 3.0751 0 6.79476 0C10.5249 0 13.6 2.97431 13.6 6.65421C13.6 8.50855
      12.9256 10.2301 11.8156 11.6893C10.591 13.2988 9.08173 14.7012 7.38283 15.8019C6.99401 16.0563
      6.6431 16.0755 6.21636 15.8019C4.50779 14.7012 2.99847 13.2988 1.7844 11.6893C0.673587 10.2301
      0 8.50855 0 6.65421ZM4.55536 6.86142C4.55536 8.09418 5.5613 9.06376 6.79473 9.06376C8.02897
      9.06376 9.04459 8.09418 9.04459 6.86142C9.04459 5.63825 8.02897 4.62148 6.79473 4.62148C5.5613
      4.62148 4.55536 5.63825 4.55536 6.86142Z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill={theme.palette.primary.main}
      />
    </svg>
  );
};

export default LocationIcon;
