// /src/components/SideBar/UserData.jsx
// Thursday, November 23rd 2023, 5:52 pm

import UserAvatar from '../../assets/user.png';
import {Stack, Typography, CardMedia, Button} from '@mui/material';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clearUser} from '../../store/slice/authSlice';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

const UserData = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(clearUser());
    Cookies.remove('jwt_token');
    toast.success('User logged out successfully');
  };
  return (
    <Stack
      sx={{
        alignItems: 'center',
        flexDirection: {xs: 'row', sm: 'column', lg: 'row'},
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <CardMedia
        component='img'
        src={UserAvatar}
        sx={{
          backgroundColor: 'background.custom',
          borderRadius: '12px',
          height: '45px',
          width: '45px',
        }}
      />
      <Stack
        sx={{
          display: {sm: 'none', lg: 'flex'},
        }}
      >
        <Typography variant='caption'>{user?.fullName}</Typography>
        <Typography sx={{opacity: 0.5, fontSize: '0.65rem'}}>Free Account</Typography>
      </Stack>
      <Button variant='text' onClick={logout}>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 20 20'>
          <g opacity='0.4'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.24547 8.35866C6.88089 8.35866 6.59261 8.64199 6.59261 9.00033C6.59261
						   9.35033 6.88089 9.64199 7.24547 9.64199H12.3327V13.6253C12.3327 15.667
						    10.6454 17.3337 8.55967 17.3337H4.43055C2.35327 17.3337 0.666016
							 15.6753 0.666016 13.6337V4.37533C0.666016
			   2.32533 2.36175 0.666992 4.43903 0.666992H8.57663C10.6454 0.666992 12.3327
			    2.32533 12.3327 4.36699V8.35866H7.24547ZM15.3579 6.11716L17.7912 8.54216C17.9162
				 8.66716 17.9829 8.8255 17.9829 9.0005C17.9829 9.16716 17.9162 9.33383 17.7912
				  9.4505L15.3579 11.8755C15.2329 12.0005 15.0662 12.0672 14.9079 12.0672C14.7412
				   12.0672 14.5745 12.0005 14.4495 11.8755C14.1995 11.6255 14.1995 11.2172 14.4495
				    10.9672L15.7829 9.64216H12.3329V8.35883H15.7829L14.4495 7.03383C14.1995 6.78383
					 14.1995 6.3755 14.4495 6.1255C14.6995 5.86716 15.1079 5.86716 15.3579 6.11716Z'
            />
          </g>
        </svg>
      </Button>
    </Stack>
  );
};

export default UserData;
