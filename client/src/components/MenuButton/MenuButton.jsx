// /src/components/MenuButton.jsx
// Sunday, November 12th 2023, 7:07 pm

import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Button} from '@mui/material';

const MenuButton = ({type, onClick, sx, ...props}) => {
  return (
    <Button
      onClick={onClick}
      variant='paper'
      {...props}
      sx={{justifyContent: 'flex-end', paddingRight: 0, ...sx}}
    >
      {type === 'horizontal' ? <MoreHorizIcon /> : <MoreVertIcon />}
    </Button>
  );
};

export default MenuButton;
