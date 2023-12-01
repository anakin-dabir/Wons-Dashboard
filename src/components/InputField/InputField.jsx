// /src/components/InputField.jsx
// Thursday, November 23rd 2023, 5:52 pm

import React from 'react';
import {Input, InputAdornment} from '@mui/material';

const InputField = ({
  backgroundColor,
  width,
  height,
  borderRadius,
  padding,
  margin = 0,
  customBgColor,
  startIcon = null,
  sx,
  ...props
}) => {
  const [palette, property] = (backgroundColor || 'background.main').split('.');
  return (
    <Input
      {...props}
      startAdornment={
        startIcon && (
          <InputAdornment sx={{paddingRight: '4px'}} position='start'>
            {startIcon}
          </InputAdornment>
        )
      }
      sx={theme => ({
        backgroundColor: customBgColor || theme.palette[palette][property],
        height: height || 50,
        width: width || '100%',
        flexShrink: 0,
        borderRadius: borderRadius || '8px',
        padding: padding || '10px 15px',
        margin: margin,
        '&.Mui-error': {
          borderBottom: '0.5px solid red',
        },
        ...sx,
      })}
    />
  );
};

export default InputField;
