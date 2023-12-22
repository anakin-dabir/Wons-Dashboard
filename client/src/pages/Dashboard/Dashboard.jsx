// /src/pages/Dashboard/Dashboard.jsx
// Monday, November 27th 2023, 9:16 pm

import React from 'react';
import DatePicker from '../../components/DatePicker';
import Header from '../../components/Header';
import Stats from './Stats';
import ChartHeader from './ChartHeader';
import ServiceHeader from './ServiceHeader';

const DashBoard = () => {
  return (
    <>
      <Header
        name='Dashboard'
        rightComponent={
          <>
            <DatePicker />
            <DatePicker />
          </>
        }
      >
        <Stats />
        <ChartHeader />
        <ServiceHeader />
      </Header>
    </>
  );
};

export default DashBoard;
