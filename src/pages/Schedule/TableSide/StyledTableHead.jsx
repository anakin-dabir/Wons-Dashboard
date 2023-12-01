// /src/pages/Schedule/TableSide/StyledTableHead.jsx
// Saturday, December 2nd 2023, 12:30 am

import React from 'react';
import StyledTableCell from './StyledTableCell';
import {TableRow, TableSortLabel, TableHead, Checkbox} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const headCells = [
  {
    id: 'date',
    label: 'Date',
  },
  {
    id: 'time',
    label: 'Time',
  },
  {
    id: 'location',
    label: 'Location',
  },
];

const StyledTableHead = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}) => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding='checkbox'>
          <Checkbox
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </StyledTableCell>
        {headCells.map(headCell => (
          <StyledTableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              sx={{
                '& .MuiTableSortLabel-icon': {
                  height: '33px',
                  width: '30px',
                },
              }}
              IconComponent={ArrowDropDownIcon}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onRequestSort(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default StyledTableHead;
