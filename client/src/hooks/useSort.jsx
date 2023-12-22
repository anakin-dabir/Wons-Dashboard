// /src/utils/useSort.jsx
// Saturday, December 2nd 2023, 12:56 am

import {useMemo, useState} from 'react';

const useSort = ({_order = 'asc', _orderBy, data, page, rowsPerPage}) => {
  const [order, setOrder] = useState(_order);
  const [orderBy, setOrderBy] = useState(_orderBy);

  const descendingComparator = (a, b, __orderBy) => {
    const getDateValue = dateString => {
      const dateParts = dateString.split(' ');
      const month = new Date(Date.parse(`${dateParts[1]} 1, 2000`)).getMonth();
      const day = parseInt(dateParts[0], 10);
      const year = parseInt(dateParts[2], 10);

      return new Date(year, month, day).getTime();
    };

    const getTimeValue = timeString => {
      const [time, period] = timeString.split(' ');
      const [hours, minutes] = time.split(':');
      const isPM = period === 'PM';

      let parsedHours = parseInt(hours, 10);
      parsedHours = isPM ? parsedHours + 12 : parsedHours;

      return parsedHours * 60 + parseInt(minutes, 10);
    };

    const getLocationValue = location => {
      // Convert location string to a sortable value
      // Assuming location is a simple string
      return location.toLowerCase();
    };

    if (__orderBy === 'date') {
      return getDateValue(b[__orderBy]) - getDateValue(a[__orderBy]);
    }

    if (__orderBy === 'time') {
      return getTimeValue(b[__orderBy]) - getTimeValue(a[__orderBy]);
    }

    if (__orderBy === 'location') {
      return getLocationValue(b[__orderBy]).localeCompare(getLocationValue(a[__orderBy]));
    }

    return 0;
  };

  const getComparator = (__order, __orderBy) => {
    return __order === 'desc'
      ? (a, b) => descendingComparator(a, b, __orderBy)
      : (a, b) => -descendingComparator(a, b, __orderBy);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const __order = comparator(a[0], b[0]);
      if (__order !== 0) {
        return __order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  const sortedRows = useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    // eslint-disable-next-line
    [order, orderBy, page, rowsPerPage]
  );

  const handleRequestSort = property => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return {order, orderBy, sortedRows, handleRequestSort};
};

export default useSort;
