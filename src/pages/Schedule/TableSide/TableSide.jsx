// /src/pages/Schedule/TableSide/TableSide.jsx
// Thursday, November 30th 2023, 6:53 am

import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import styled from '@emotion/styled';
import CalenderIcon from './CalenderIcon';
import {Button, Stack, TableSortLabel, alpha} from '@mui/material';
import TimeIcon from './TimeIcon';
import LocationIcon from './LocationIcon';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';

const createData = (id, date, time, location) => {
  return {
    id,
    date,
    time,
    location,
  };
};

const StyledTableCell = styled(TableCell)(() => ({
  border: 'none',
  paddingX: '120px',
  '&:last-child': {
    borderRadius: '0px 10px 10px 0px',
    paddingRight: '40px',
  },
  '&:first-of-type': {
    borderRadius: '10px 0px 0px 10px',
    paddingLeft: '40px',
  },
}));
const StyledTableRow = styled(TableRow)(({theme}) => ({
  backgroundColor: theme.palette.neutral.main,
  height: '80px',
}));

const rows = [
  createData(1, '12 December, 2021', '10:15 AM', 'Office Meeting'),
  createData(2, '13 December, 2021', '10:17 AM', 'Home'),
  createData(3, '14 December, 2021', '10:16 AM', 'Friends Zone'),
];

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

const headCells = [
  {
    id: 'name',
    label: 'Date',
  },
  {
    id: 'calories',
    label: 'Time',
  },
  {
    id: 'fat',
    label: 'Location',
  },
  {
    id: 'carbs',
    label: '',
  },
];

const EnhancedTableHead = props => {
  const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </StyledTableCell>
        {headCells.map(headCell => (
          <StyledTableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

// const EnhancedTableToolbar = props => {
//   const {numSelected} = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: {sm: 2},
//         pr: {xs: 1, sm: 1},
//         ...(numSelected > 0 && {
//           bgcolor: theme =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography sx={{flex: '1 1 100%'}} color='inherit' variant='subtitle1' component='div'>
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography sx={{flex: '1 1 100%'}} variant='h6' id='tableTitle' component='div'>
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title='Delete'>
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title='Filter list'>
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

const EnhancedTable = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = id => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{width: '100%'}}>
      {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
      <TableContainer>
        <Table
          sx={{
            minWidth: 750,
            borderCollapse: 'separate',
            borderSpacing: '0 14px',
          }}
          aria-labelledby='tableTitle'
          size='small'
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
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
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <StyledTableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default EnhancedTable;
