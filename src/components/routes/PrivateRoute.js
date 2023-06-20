import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';


const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  console.log(redirectTo);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = !isLoggedIn && !authSelectors.isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  
};

export default PrivateRoute;

