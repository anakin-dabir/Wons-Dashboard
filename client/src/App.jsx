// /src/App.jsx
// Thursday, November 23rd 2023, 5:52 pm

import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import CustomThemeProvider from './components/CustomThemeProvider';
import Login from './pages/Login';
import ResetPassword from './pages/Reset_password';
import DashBoard from './pages/Dashboard';
import Layout from './components/Layout';
import Settings from './pages/Settings';
import Schedule from './pages/Schedule';
import SignUp from './pages/SignUp/SignUp';
import Toast from './components/Toast/Toast';
import useAuth from './hooks/useAuth';

const App = () => {
  const token = useAuth();
  const element = useRoutes([
    {
      path: '/',
      element: !token ? <Navigate to='/login' /> : <Layout sidebar />,
      children: [
        {path: '/', element: <Navigate to='/dashboard' />},
        {path: '/dashboard', element: <DashBoard />},
        {path: '/analytics', element: <>Analytics</>},
        {path: '/invoice', element: <>Invoice</>},
        {path: '/schedule', element: <Schedule />},
        {path: '/calender', element: <>Calender</>},
        {path: '/messages', element: <>Messages</>},
        {path: '/notification', element: <>Notification</>},
        {path: '/settings', element: <Settings />},
      ],
    },
    {
      path: '/',
      element: token ? <Navigate to='/dashboard' /> : <Layout />,
      children: [
        {path: '/', element: <Navigate to='/login' />},
        {path: '/login', element: <Login />},
        {path: '/reset', element: <ResetPassword />},
        {path: '/register', element: <SignUp />},
      ],
    },
  ]);

  return (
    <CustomThemeProvider>
      <Toast />
      {element}
    </CustomThemeProvider>
  );
};

export default App;
