//import { useAppContext } from '../context/appContext';
//import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  //const { user, userLoading } = useAppContext();

  //if (userLoading) return <Loading />;

  /* if (!user) {
    return <Navigate to='/landing' />;
  } */
  return children
}

export default ProtectedRoute
