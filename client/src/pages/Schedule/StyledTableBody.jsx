// /src/pages/Schedule/TableSide/StyledTableBody.jsx
// Saturday, December 2nd 2023, 12:47 am

import React from 'react';
import {TableBody, TableRow, Checkbox} from '@mui/material';
import {
  CellButton,
  CellButtonsContainer,
  CellDataContainer,
  LocationTag,
  StyledTableCell,
  StyledTableRow,
  SvgIcon,
} from '../../theme/theme';
import {Calendericon, Clockicon, Locationicon, Editicon, Deleteicon} from '../../assets/Icons';

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
              <CellDataContainer>
                <SvgIcon color='primary.main'>
                  <Calendericon />
                </SvgIcon>

                {row.date}
              </CellDataContainer>
            </StyledTableCell>
            <StyledTableCell>
              <CellDataContainer>
                <SvgIcon color='text.dim'>
                  <Clockicon />
                </SvgIcon>
                {row.time}
              </CellDataContainer>
            </StyledTableCell>
            <StyledTableCell>
              <LocationTag>
                <SvgIcon color='primary.main'>
                  <Locationicon />
                </SvgIcon>
                {row.location}
              </LocationTag>
            </StyledTableCell>
            <StyledTableCell align='right'>
              <CellButtonsContainer>
                <CellButton variant='paper' bgcolor='tertiary'>
                  <SvgIcon color='tertiary.main'>
                    <Editicon />
                  </SvgIcon>
                </CellButton>
                <CellButton variant='paper' bgcolor='secondary'>
                  <SvgIcon color='pink.main'>
                    <Deleteicon />
                  </SvgIcon>
                </CellButton>
              </CellButtonsContainer>
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
