/*eslint-disable */
// /src/components/Toast/Toast.jsx
// Friday, December 22nd 2023, 12:38 am

import React from 'react';
import {Toaster} from 'react-hot-toast';

const Toast = () => {
  return (
    <>
      <Toaster
        position='top-right'
        toastOptions={{
          duration: 2000,
          style: {
            padding: '8px 18px',
            gap: '5px',
          },
        }}
      />
    </>
  );
};

export default Toast;
