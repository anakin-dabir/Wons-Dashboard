// /src/pages/Schedule/RightTable.jsx
// Wednesday, November 29th 2023, 10:24 pm

import {Box, Button, Stack, Typography, alpha, Checkbox} from '@mui/material';
import React from 'react';
import CalenderIcon from './CalenderIcon';
import TimeIcon from './TimeIcon';
import LocationIcon from './LocationIcon';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const data = [
  {name: 'myTask', date: '12 December, 2021', time: '10:15 AM', location: 'Office Meeting'},
  {name: 'myTask', date: '12 December, 2021', time: '10:15 AM', location: 'Office Meeting'},
  {name: 'myTask', date: '12 December, 2021', time: '10:15 AM', location: 'Office Meeting'},
  {name: 'myTask', date: '12 December, 2021', time: '10:15 AM', location: 'Office Meeting'},
  {name: 'myTask', date: '12 December, 2021', time: '10:15 AM', location: 'Office Meeting'},
  {name: 'myTask', date: '12 December, 2021', time: '10:15 AM', location: 'Office Meeting'},
  {name: 'myTask', date: '12 December, 2021', time: '10:15 AM', location: 'Office Meeting'},
  {name: 'myTask', date: '12 December, 2021', time: '10:15 AM', location: 'Office Meeting'},
];

const RightTable = () => {
  return (
    <Box sx={{width: {xs: '100%', xl: '75%'}, overflowX: 'auto'}}>
      <Stack sx={{minWidth: '1000px'}}>
        <Stack
          direction='row'
          sx={{paddingX: '35px', alignItems: 'center', justifyContent: 'space-between'}}
        >
          <Stack direction='row' gap={3}>
            <Checkbox sx={{color: theme => alpha(theme.palette.text.dim, 0.5)}} />
            <Stack direction='row' sx={{alignItems: 'center'}}>
              <Typography>Date</Typography>
              <ArrowDropDownIcon />
            </Stack>
          </Stack>
          <Stack direction='row' sx={{alignItems: 'center'}}>
            <Typography>Time</Typography>
            <ArrowDropDownIcon />
          </Stack>
          <Stack direction='row' gap={2} sx={{alignItems: 'center'}}>
            <Typography>Location</Typography>
            <ArrowDropDownIcon />
          </Stack>
          <Stack></Stack>
        </Stack>
        <Stack gap={2} sx={{paddingY: '20px'}}>
          {data.map((item, index) => {
            return (
              <Stack
                key={index}
                sx={{
                  height: '95px',
                  bgcolor: 'neutral.main',
                  borderRadius: '10px',
                  justifyContent: 'center',
                }}
              >
                <Stack direction='row' sx={{justifyContent: 'space-between', paddingX: '35px'}}>
                  <Stack direction='row' gap={3}>
                    <Checkbox sx={{color: theme => alpha(theme.palette.text.dim, 0.5)}} />
                    <Stack direction='row' gap={2} sx={{alignItems: 'center'}}>
                      <CalenderIcon />
                      <Typography>{item.date}</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction='row' gap={2} sx={{alignItems: 'center'}}>
                    <TimeIcon />
                    <Typography>{item.time}</Typography>
                  </Stack>
                  <Stack
                    direction='row'
                    gap={2}
                    sx={{
                      alignItems: 'center',
                      borderRadius: '55px',
                      bgcolor: theme => alpha(theme.palette.primary.main, 0.1),
                      padding: '13px 25px',
                    }}
                  >
                    <LocationIcon />
                    <Typography color='primary'>{item.location}</Typography>
                  </Stack>
                  <Stack direction='row' gap={2} sx={{alignItems: 'center'}}>
                    <Button
                      variant='paper'
                      sx={{
                        height: '50px',
                        width: '50px',
                        bgcolor: theme => alpha(theme.palette.tertiary.main, 0.1),
                        borderRadius: '100%',
                        padding: '14px',
                        minWidth: 'auto',
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant='paper'
                      sx={{
                        height: '50px',
                        width: '50px',
                        bgcolor: theme => alpha(theme.palette.secondary.main, 0.1),
                        borderRadius: '100%',
                        padding: '14px',
                        minWidth: 'auto',
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default RightTable;
