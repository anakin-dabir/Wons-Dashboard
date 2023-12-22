// /src/utils/usePagination.jsx
// Saturday, December 2nd 2023, 1:04 am

import {useState} from 'react';

const usePagination = ({_rowsPerPage}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(_rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {page, rowsPerPage, handleChangePage, handleChangeRowsPerPage};
};

export default usePagination;
