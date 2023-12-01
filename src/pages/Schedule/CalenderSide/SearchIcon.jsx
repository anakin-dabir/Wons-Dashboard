// /src/pages/Schedule/SearchIcon.jsx
// Thursday, November 30th 2023, 4:19 am

import {useTheme} from '@mui/material';
import React from 'react';

const SearchIcon = () => {
  const theme = useTheme();
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 12 12'>
      <g opacity='0.3'>
        <path
          d='M0 5.20196C0 2.32899 2.3042 0 5.14658 0C6.51154 0 7.8206 0.548062 8.78577
                    1.52362C9.75094 2.49917 10.2932 3.82231 10.2932 5.20196C10.2932 8.07492 7.98896
                    10.4039 5.14658 10.4039C2.3042 10.4039 0 8.07492 0 5.20196ZM10.208
                    9.39207L11.7408 10.6293H11.7674C12.0775 10.9428 12.0775 11.451 11.7674
                    11.7644C11.4573 12.0779 10.9545 12.0779 10.6444 11.7644L9.37242 10.3066C9.25216
                    10.1855 9.18457 10.0209 9.18457 9.84932C9.18457 9.67772 9.25216 9.51319 9.37242
                    9.39207C9.60433 9.16172 9.97609 9.16172 10.208 9.39207Z'
          fillRule='evenodd'
          clipRule='evenodd'
          fill={theme.palette.text.dim}
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
