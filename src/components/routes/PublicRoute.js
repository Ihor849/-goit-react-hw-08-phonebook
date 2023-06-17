

import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';


const PublickRoute = ({restricted = false, redirectTo}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const redirect = isLoggedIn && restricted;

 
  return redirect ?  <Navigate to={redirectTo} /> : <Outlet />
  
};

export default PublickRoute;