// /src/components/SideBar/Light.jsx
// Thursday, November 23rd 2023, 5:52 pm

import {Box, Button} from '@mui/material';
import React from 'react';

const Light = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: {xs: 'none', lg: 'flex'},
        marginX: 'auto',
        height: '250px',
        bgColor: 'green',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '210px',
          width: '210px',
          bgcolor: 'secondary.bg',
          borderRadius: '20px',
          top: 40,
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* line */}
        <Box
          sx={{
            height: '40px',
            width: '4px',
            borderLeft: '3px solid',
            position: 'absolute',
            borderColor: 'secondary.lid',
            top: 0,
          }}
        ></Box>
        {/* TopHandler */}
        <Box
          sx={{
            position: 'absolute',
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
            bgcolor: 'secondary.lid',
            height: '20px',
            width: '13px',
            top: 40,
          }}
        ></Box>
        {/* Background */}

        {/* Lid */}
        <Box
          sx={{
            height: '95px',
            position: 'absolute',
            width: '135px',
            bgcolor: 'secondary.lid',
            clipPath: 'polygon(50% 0%, 100% 100%, 59% 95%, 41% 95%, 0 100%);',
            top: 50,
            overflow: 'hidden',
          }}
        ></Box>
        {/* CircularBottom */}
        <Box
          sx={{
            bgcolor: 'secondary.main',
            opacity: 0.7,
            border: '2px solid rgba(24, 12, 18, 0.47)',
            width: '135px',
            height: '18px',
            borderRadius: '50%',
            position: 'absolute',
            top: 138,
          }}
        ></Box>
        {/* Light */}
        <Box
          sx={{
            position: 'absolute',
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
            background: theme =>
              `linear-gradient(180deg,transparent 20%
				 , ${theme.palette.secondary.medium} 50%, ${theme.palette.secondary.dim} 100%);`,
            width: '145px',
            height: '90px',
            top: 120,
          }}
        ></Box>
        {/* Button */}
        <Button
          color='secondary'
          sx={{
            position: 'absoulte',
            top: 185,
            width: '160px',
            borderRadius: '10px',
            color: 'white',
          }}
        >
          Upgrade Now
        </Button>
      </Box>
    </Box>
  );
};

export default Light;
