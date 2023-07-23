import { useState, useEffect } from 'react'
import { getSales } from '../../utils/handleSales'
import { SaleType } from '../../data/types/dataBaseTypes'
import { useNavigate } from 'react-router-dom'

const AllSales = () => {
  const navigate = useNavigate()

  const [salesData, setSalesData] = useState<SaleType[]>([])
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
    const data = getSales(selectedCountry)
    setSalesData(data)
  }, [selectedCountry])

  return (
    <section className='w-full bg-slate-100 flex justify-center items-start pt-[20%] lg:py-[5.5rem]'>
      <div className='w-full max-w-[80%] lg:max-w-[880px] 2xl:max-w-[1024px]'>
        {/* Title */}
        <div className='w-full flex items-center gap-6 mb-6 lg:mb-12'>
          <div className='flex justify-center items-center w-[3rem] lg:w-[5rem]'>
            <img
              src='/boxCarried.png'
              alt='boxCarriedIcon'
              className='block w-full object-cover'
            />
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <p className='text-gray-800 text-3xl font-extrabold lg:text-5xl'>
              All Sales
            </p>
            <div className='w-full h-[3px] rounded-full bg-slate-300'></div>
          </div>
        </div>

        {/* Filter */}
        <div className='w-full flex items-center gap-6 mb-6 justify-start lg:mb-12'>
          <div className='flex flex-col gap-4'>
            <label
              htmlFor='filter-branchoffice '
              className='text-lg text-gray-600 font-semibold'
            >
              Filter by BranchOffice
            </label>
            <select
              name='branchoffices'
              id='filter-branchoffice'
              className=' text-gray-600 px-4 py-2'
              onChange={(e) => {
                setSelectedCountry(e.target.value)
              }}
            >
              <option value='' className='text-sm'>
                -- Choose a branchOffice --
              </option>
              <option value='Chile' className='text-sm'>
                Chile
              </option>
              <option value='Argentina' className='text-sm'>
                Argentina
              </option>
              <option value='Colombia' className='text-sm'>
                Colombia
              </option>
              <option value='Ecuador' className='text-sm'>
                Ecuador
              </option>
              <option value='Paraguay' className='text-sm'>
                Paraguay
              </option>
              <option value='Brazil' className='text-sm'>
                Brazil
              </option>
              <option value='Peru' className='text-sm'>
                Peru
              </option>
              <option value='Panama' className='text-sm'>
                Panama
              </option>
              <option value='Mexico' className='text-sm'>
                Mexico
              </option>
              <option value='Uruguay' className='text-sm'>
                Uruguay
              </option>
            </select>
          </div>
        </div>
        {/* data */}
        <div className='w-full flex flex-col items-start gap-6 mb-6 justify-center lg:mb-12'>
          {salesData.length > 0 ? (
            salesData.map((sale) => (
              <div className='flex justify-between w-full'>
                <div className='text-gray-700'>
                  <div>
                    <span>{sale.client.name}</span>
                    <span>{sale.client.lastName}</span>
                  </div>
                  <div>
                    <span>$ {sale.total}</span>
                    <span> {sale.branchOffice.currency}</span>
                  </div>
                </div>
                <div
                  className='bg-primaryBlue text-white font-extrabold px-4 py-2 flex justify-center items-center cursor-pointer'
                  onClick={() => {
                    navigate(`/sales/${sale.saleId}`)
                  }}
                >
                  Ver Detalle
                </div>
              </div>
            ))
          ) : (
            <div className='text-lg text-gray-600 font-semibold'>
              No sales registered for this branchOffice
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AllSales
