// /src/pages/Schedule/TableSide/StyledTableCell.jsx
// Saturday, December 2nd 2023, 12:26 am

import styled from '@emotion/styled';
import {TableCell} from '@mui/material';

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

export default StyledTableCell;
