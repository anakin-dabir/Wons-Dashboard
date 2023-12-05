// /src/utils/useSidebar.jsx
// Tuesday, December 5th 2023, 8:39 pm

import {useEffect, useState} from 'react';

const useSidebar = ({width_to_close_sidebar = 600} = {}) => {
  const [sideBarOpened, setSideBarOpened] = useState(false);
  const [which_element_to_show, set_which_emelent_to_show] = useState('');

  const toggleSideBar = () => {
    setSideBarOpened(prev => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      sideBarOpened && window.innerWidth >= width_to_close_sidebar && setSideBarOpened(false);
      window.innerWidth >= width_to_close_sidebar && set_which_emelent_to_show('');
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sideBarOpened]);
  return {sideBarOpened, toggleSideBar, which_element_to_show, set_which_emelent_to_show};
};

export default useSidebar;
