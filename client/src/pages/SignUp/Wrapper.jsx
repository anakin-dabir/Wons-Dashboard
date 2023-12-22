// /src/pages/SignUp/Wrapper.jsx
// Wednesday, December 20th 2023, 9:58 pm

import React from 'react';
import {Grid} from '@mui/material';

const Wrapper = ({children}) => {
  return (
    <Grid container columns={4} sx={{top: 0, left: 0}} className='h-screen relative'>
      {children}
    </Grid>
  );
};

export default Wrapper;
