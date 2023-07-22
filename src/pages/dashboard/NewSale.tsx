import React from 'react'
import { useAppContext } from '../../context/appContext'
import sellers from '../../data/sellers'

const NewSale = () => {
  const { seller } = useAppContext()
  console.log('seller OnDashboard', seller)
  console.log('sellers: ', sellers)

  return <div className='w-full'>NewSale</div>
}

export default NewSale
