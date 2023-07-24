import { useNavigate, useParams } from 'react-router-dom'
import { getSaleById } from '../../utils/handleSales'
import { useEffect, useState } from 'react'
import { SaleType } from '../../types/dataTypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Sale = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [saleData, setSaleData] = useState<SaleType>()
  useEffect(() => {
    const data = getSaleById(id || '')
    if (data) {
      setSaleData(data)
    }
  }, [id])

  return (
    <section className='w-full bg-slate-100 flex justify-center items-start pt-[20%] lg:py-[5.5rem]'>
      <div className='w-full max-w-[80%] lg:max-w-[880px] 2xl:max-w-[1024px]'>
        <div className='w-full flex justify-end mb-4'>
          <div
            className='bg-primaryBlue px-4 py-2 rounded-md cursor-pointer'
            onClick={() => {
              navigate('/all-sales')
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className='text-white text-[1rem]'
            />
          </div>
        </div>
        <div className='mb-4 flex w-full flex-col border-b-2 border-slate-400 pb-4'>
          <h3 className='text-lg text-primaryBlue font-extrabold mb-2'>
            Sale details
          </h3>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-4'>
              <span className='text-gray-600 font-bold '>Id: </span>
              <span className='overflow-x-auto lg:overflow-hidden'>
                {saleData?.saleId}
              </span>
            </div>
            <div className='flex gap-4'>
              <span className='text-gray-600 font-bold '>Date: </span>
              <span>{saleData?.date}</span>
            </div>
            <div className='flex gap-4'>
              <span className='text-gray-600 font-bold '>Total: </span>
              <span>${saleData?.total}</span>
            </div>
            <div className='flex gap-4'>
              <span className='text-gray-600 font-bold '>Branch Office: </span>
              <span>{saleData?.branchOffice.country}</span>
            </div>
            <div className='flex gap-4'>
              <span className='text-gray-600 font-bold '>Seller: </span>
              <span>{saleData?.seller.email}</span>
            </div>
          </div>
        </div>
        <div className='mb-4 flex w-full flex-col border-b-2 border-slate-400 pb-4'>
          <h3 className='text-lg text-primaryBlue font-extrabold mb-4'>
            Client details
          </h3>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-4'>
              <span className='text-gray-600 font-bold '>Name: </span>
              <span>
                {saleData?.client.name} {saleData?.client.lastName}
              </span>
            </div>
            <div className='flex gap-4'>
              <span className='text-gray-600 font-bold '>Email: </span>
              <span>{saleData?.client.email}</span>
            </div>
            <div className='flex gap-4'>
              <span className='text-gray-600 font-bold '>Phone: </span>
              <span>{saleData?.client.phone}</span>
            </div>
          </div>
        </div>
        <div className='mb-4 flex w-full flex-col border-b-2 border-slate-400 pb-4'>
          <h3 className='text-lg text-primaryBlue font-extrabold mb-4'>
            Products
          </h3>
          <div className=' flex flex-col gap-4'>
            {saleData?.details.map((product) => (
              <div
                className='bg-white rounded-lg p-4 w-[80%]'
                key={product.product.id}
              >
                <h2 className='text-primaryBlue font-bold'>
                  {product.product.name}
                </h2>
                <div className='flex gap-2'>
                  <span className='text-gray-500 font-bold'>Quantity: </span>
                  {product.quantity}
                </div>
                <div className='flex gap-2'>
                  <span className='text-gray-500 font-bold'>Subtotal: </span>$
                  {product.subtotal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sale
