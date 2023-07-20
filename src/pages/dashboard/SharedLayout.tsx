import React from 'react'
import { Outlet } from 'react-router-dom'
const SharedLayout = () => {
  return (
    <main>
      SharedLayout
      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default SharedLayout
