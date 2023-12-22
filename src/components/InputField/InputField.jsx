// /src/components/InputField.jsx
// Thursday, November 23rd 2023, 5:52 pm

import React from 'react';
import {InputAdornment} from '@mui/material';
import {StyledInputField} from '../../theme/theme';

const InputField = ({
  backgroundColor,
  width,
  height,
  borderRadius,
  padding,
  margin = 0,
  startIcon = null,
  endIcon = null,
  error = false,
  ...rest
}) => {
  return (
    <StyledInputField
      {...rest}
      error={error}
      props={{backgroundColor, width, height, borderRadius, padding, margin}}
      endAdornment={
        endIcon && (
          <InputAdornment sx={{paddingX: '4px'}} position='end'>
            {endIcon}
          </InputAdornment>
        )
      }
      startAdornment={
        startIcon && (
          <InputAdornment sx={{paddingRight: '4px'}} position='start'>
            {startIcon}
          </InputAdornment>
        )
      }
    />
  );
};

export default InputField;
