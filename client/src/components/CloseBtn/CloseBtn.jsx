// /src/components/CloseBtn/CloseBtn.jsx
// Tuesday, December 5th 2023, 8:52 pm

import React from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const CloseBtn = ({top = 2, right = 2, toggleSideBar, sx} = {}) => {
  return (
    <Button
      onClick={toggleSideBar}
      variant='paper'
      sx={{
        ...sx,
        position: 'absolute',
        height: 65,
        width: 60,
        borderRadius: '100%',
        top,
        right,
        color: theme => theme.palette.primary.main,
      }}
    >
      <CloseIcon />
    </Button>
  );
};

export default CloseBtn;
