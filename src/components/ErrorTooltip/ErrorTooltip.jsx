// /src/components/ErrorTooltip/ErrorTooltip.jsx
// Thursday, December 21st 2023, 10:49 am

import React from 'react';
import {Tooltip} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorTooltip = ({message}) => {
  return (
    <Tooltip
      sx={{cursor: 'pointer'}}
      title={message}
      arrow
      disableInteractive
      placement='top'
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: theme => theme.palette.background.main,
            color: theme => theme.palette.text.dim,
            boxShadow: theme => `0px 0px 5px 0px ${theme.palette.text.tag}`,
          },
        },
      }}
    >
      <ErrorOutlineIcon fontSize='small' color='danger' />
    </Tooltip>
  );
};

export default ErrorTooltip;
