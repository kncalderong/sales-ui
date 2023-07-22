import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { seller } = useAppContext()

  if (!seller) {
    return <Navigate to='/landing' />
  }

  return children
}

export default ProtectedRoute
