// /src/pages/Schedule/TableSide/StyledTableBody.jsx
// Saturday, December 2nd 2023, 12:47 am

import React from 'react';
import {TableBody, TableRow, Checkbox, Button, Stack, alpha} from '@mui/material';
import StyledTableCell from './StyledTableCell';
import StyledTableRow from './StyledTableRow';
import CalenderIcon from './constants/CalenderIcon';
import TimeIcon from './constants/TimeIcon';
import LocationIcon from './constants/LocationIcon';
import EditIcon from './constants/EditIcon';
import DeleteIcon from './constants/DeleteIcon';

const StyledTableBody = ({handleClick, sortedRows, emptyRows, isSelected}) => {
  return (
    <TableBody>
      {sortedRows.map((row, index) => {
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <StyledTableRow key={row.id} selected={isItemSelected}>
            <StyledTableCell padding='checkbox'>
              <Checkbox
                color='primary'
                onClick={event => handleClick(event, row.id)}
                checked={isItemSelected}
                inputProps={{
                  'aria-labelledby': labelId,
                }}
              />
            </StyledTableCell>
            <StyledTableCell id={labelId}>
              <Stack direction='row' gap={1} sx={{alignItems: 'center'}}>
                <CalenderIcon />
                {row.date}
              </Stack>
            </StyledTableCell>
            <StyledTableCell>
              <Stack direction='row' gap={1} sx={{alignItems: 'center'}}>
                <TimeIcon />
                {row.time}
              </Stack>
            </StyledTableCell>
            <StyledTableCell>
              <Stack
                direction='row'
                gap={1}
                sx={{
                  alignItems: 'center',
                  borderRadius: '55px',
                  bgcolor: theme => alpha(theme.palette.primary.main, 0.1),
                  padding: '13px 0px 13px 13px',
                  color: 'primary.main',
                }}
              >
                <LocationIcon />
                {row.location}
              </Stack>
            </StyledTableCell>
            <StyledTableCell align='right'>
              <Stack
                direction='row'
                gap={2}
                sx={{justifyContent: 'flex-end', alignItems: 'center'}}
              >
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
            </StyledTableCell>
          </StyledTableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 53 * emptyRows,
          }}
        >
          <StyledTableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default StyledTableBody;
