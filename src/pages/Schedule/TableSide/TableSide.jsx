// /src/pages/Schedule/TableSide/TableSide.jsx
// Thursday, November 30th 2023, 6:53 am

import React, {useState} from 'react';
import {Box, Table, TableContainer, TablePagination} from '@mui/material';
import StyledTableBody from './StyledTableBody';
import StyledTableHead from './StyledTableHead';
import usePagination from '../../../utils/usePagination';
import useSort from '../../../utils/useSort';

const rows = [
  {id: 1, date: '12 December, 2021', time: '10:15 PM', location: 'Affice Meeting'},
  {id: 2, date: '14 December, 2021', time: '10:17 AM', location: 'Bome'},
  {id: 3, date: '13 January, 2003', time: '10:16 AM', location: 'Criends Zone'},
  {id: 4, date: '15 December, 2021', time: '10:15 AM', location: 'Affice Meeting'},
  {id: 5, date: '16 December, 2021', time: '10:17 AM', location: 'Bome'},
  {id: 6, date: '17 November, 2021', time: '10:16 AM', location: 'Criends Zone'},
  {id: 7, date: '18 December, 2021', time: '10:15 AM', location: 'Affice Meeting'},
  {id: 8, date: '19 December, 2021', time: '10:17 AM', location: 'Bome'},
  {id: 9, date: '23 November, 2021', time: '10:16 AM', location: 'Criends Zone'},
  {id: 10, date: '22 December, 2021', time: '10:15 AM', location: 'Affice Meeting'},
  {id: 11, date: '24 December, 2021', time: '10:17 AM', location: 'Bome'},
  {id: 12, date: '25 November, 2021', time: '10:16 AM', location: 'Criends Zone'},
  {id: 13, date: '26 December, 2021', time: '10:15 AM', location: 'Affice Meeting'},
  {id: 14, date: '27 December, 2021', time: '10:17 AM', location: 'Bome'},
  {id: 15, date: '28 November, 2021', time: '10:16 AM', location: 'Criends Zone'},
  {id: 16, date: '13 January, 2021', time: '10:16 AM', location: 'Criends Zone'},
];

const TableSide = () => {
  const [selected, setSelected] = useState([]);
  const {page, rowsPerPage, handleChangePage} = usePagination({_rowsPerPage: 10});
  const {order, orderBy, sortedRows, handleRequestSort} = useSort({
    _orderBy: 'date',
    page,
    data: rows,
    rowsPerPage,
  });

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = id => selected.indexOf(id) !== -1;
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{width: {xs: '100%', xl: '70%', flex: 1}}}>
      <TableContainer>
        <Table
          sx={{
            minWidth: 800,
            borderCollapse: 'separate',
            borderSpacing: '0 14px',
          }}
          size='small'
        >
          <StyledTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <StyledTableBody
            handleClick={handleClick}
            sortedRows={sortedRows}
            isSelected={isSelected}
            emptyRows={emptyRows}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default TableSide;
