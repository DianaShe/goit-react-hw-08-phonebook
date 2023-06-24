import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

function PublicRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/contacts" />;
}

export default PublicRoute;
