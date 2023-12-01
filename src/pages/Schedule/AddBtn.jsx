// /src/pages/Schedule/AddBtn.jsx
// Wednesday, November 29th 2023, 9:51 pm

import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import {Box} from '@mui/material';

const AddBtn = ({name, width, height}) => {
  return (
    <Button
      className='box-center'
      color='primary'
      sx={{width: width, height: height, gap: 1, paddingX: '30px'}}
    >
      <AddIcon fontSize='small' />
      <Box>{name}</Box>
    </Button>
  );
};

export default AddBtn;
