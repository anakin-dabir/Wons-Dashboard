// /src/components/SideBar/SideBar.jsx
// Monday, November 27th 2023, 9:50 pm

import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Stack} from '@mui/material';
import Light from './Light';
import UserData from './UserData';
import LogoImg from './LogoImg';
import Hamburger from './Hamburger';
import Link from './Link';
import Overlay from './Overlay';

const SideBar = () => {
  const [sideBarOpened, setSideBarOpened] = useState(false);
  const {pathname} = useLocation();
  const toggleSideBar = () => {
    setSideBarOpened(prev => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      sideBarOpened && window.innerWidth >= 600 && setSideBarOpened(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sideBarOpened]);
  useEffect(() => {
    sideBarOpened && setSideBarOpened(false);
  }, [pathname]);

  return (
    <>
      <Hamburger sideBarOpened={sideBarOpened} toggleSideBar={toggleSideBar} />
      <Stack
        className='h-screen'
        bgcolor='neutral.main'
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 50,
          justifyContent: 'space-around',
          width: {xs: '300px', sm: '84.5px', lg: '281px'},
          transform: sideBarOpened
            ? 'translateX(0)'
            : {xs: 'translateX(-100%)', sm: 'translateX(0)'},
          transition: theme => theme.transitions.create(['transform']),
        }}
      >
        <LogoImg />
        <Link />
        <Stack sx={{gap: '30px'}}>
          <Light />
          <UserData />
        </Stack>
      </Stack>
      {sideBarOpened && <Overlay setSideBarOpened={setSideBarOpened} />}
    </>
  );
};

export default SideBar;
