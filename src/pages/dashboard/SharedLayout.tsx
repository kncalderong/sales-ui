import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'

const SharedLayout = () => {
  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row'>
      <Sidebar />
      <div className='flex grow'>
        <Outlet />
      </div>
    </main>
  )
}

export default SharedLayout
