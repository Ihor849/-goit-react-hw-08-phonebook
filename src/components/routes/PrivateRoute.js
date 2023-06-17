
import { useSelector } from 'react-redux';
import { Outlet, Navigate} from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';


const PrivateRoute = ({redirectTo}) => {
  console.log(redirectTo);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
  
};

export default PrivateRoute;

