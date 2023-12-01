// /src/App.jsx
// Thursday, November 23rd 2023, 5:52 pm

import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import CustomThemeProvider from './components/CustomThemeProvider';
import Login from './pages/Login';
import ResetPassword from './pages/Reset_password';
import DashBoard from './pages/Dashboard';
import Layout from './components/Layout';
import Schedule from './pages/Schedule';

const App = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {path: '/', element: <Navigate to='/dashboard' />},
        {path: '/dashboard', element: <DashBoard />},
        {path: '/analytics', element: <>Analytics</>},
        {path: '/invoice', element: <>Invoice</>},
        {path: '/schedule', element: <Schedule />},
        {path: '/calender', element: <>Calender</>},
        {path: '/messages', element: <>Messages</>},
        {path: '/notification', element: <>Notification</>},
        {path: '/settings', element: <>Settings</>},
      ],
    },
    {path: '/login', element: <Login />},
    {path: '/reset', element: <ResetPassword />},
  ]);
  return <CustomThemeProvider>{element}</CustomThemeProvider>;
};

export default App;
