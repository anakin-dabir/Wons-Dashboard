// /src/components/dashboard/ServiceTable.jsx
// Sunday, November 12th 2023, 10:53 pm

import * as React from 'react';
import {tableCellClasses} from '@mui/material/TableCell';
import styled from '@emotion/styled';
import {
  Box,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from '@mui/material';
import {alpha} from '@mui/system';
import MenuButton from '../../components/MenuButton';

const createData = (name, calories, fat, carbs, protein) => {
  return {name, calories, fat, carbs, protein};
};

const rows = [
  createData('#8763641', 'Ui/Ux Designing', '$178', 242, '$1,46,660'),
  createData('#8763642', 'Ui/Ux Designing', '$178', 37, '$1,46,660'),
  createData('#8763643', 'Ui/Ux Designing', '$178', 24, '$1,46,660'),
  createData('#8763644', 'Ui/Ux Designing', '$178', 67, '$1,46,660'),
];

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.body}`]: {
    border: 'none',
  },
  '&:last-child': {
    textAlign: 'right',
  },
  '&:nth-of-type(4)': {
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  paddingX: '1rem',
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.background.main,
    borderRadius: '5px',
  },
}));

const ServicesTable = () => {
  return (
    <Box
      sx={{
        bgcolor: 'neutral.main',
        flex: 1,
        padding: '0px 24px 24px',
        borderRadius: '10px',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <Stack
        direction='row'
        sx={{
          bgcolor: 'neutral.main',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          paddingTop: '24px',
        }}
      >
        <Typography variant='h5' fontWeight='medium'>
          Recent Services
        </Typography>
        <MenuButton type='horizontal' />
      </Stack>
      <TableContainer sx={{overflowY: 'hidden'}}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell>Service Name</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Total Order</StyledTableCell>
              <StyledTableCell>Total Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat}</StyledTableCell>
                <StyledTableCell align='center'>
                  <Box
                    className='box-center'
                    sx={{
                      height: '1.875rem',
                      width: '3.7rem',
                      bgcolor: theme => alpha(theme.palette.primary.main, 0.2),
                      color: 'primary.main',
                      borderRadius: '8px',
                      marginX: 'auto',
                    }}
                  >
                    {row.carbs}
                  </Box>
                </StyledTableCell>
                <StyledTableCell align='right'>{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ServicesTable;
