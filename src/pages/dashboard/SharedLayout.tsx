import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'

const SharedLayout = () => {
  return (
    <main className='w-full h-screen flex flex-col lg:flex-row'>
      <Sidebar />
      <div className='flex grow'>
        <Outlet />
      </div>
    </main>
  )
}

export default SharedLayout
