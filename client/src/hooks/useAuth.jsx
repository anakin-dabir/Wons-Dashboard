// /src/hooks/useAuth.jsx
// Friday, December 22nd 2023, 5:49 am

import Cookies from 'js-cookie';
import {useSelector} from 'react-redux';

const useAuth = () => {
  const token = Cookies.get('jwt_token');
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return token && isLoggedIn;
};

export default useAuth;
