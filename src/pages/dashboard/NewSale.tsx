import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppContext } from '../../context/appContext'
import sellers from '../../data/sellers'
import { faClose, faPlus } from '@fortawesome/free-solid-svg-icons'

const NewSale = () => {
  const { seller } = useAppContext()
  console.log('seller OnDashboard', seller)
  console.log('sellers: ', sellers)

  return (
    <section className='w-full bg-slate-100 flex justify-center items-start pt-[20%]'>
      <div className='w-full max-w-[80%]'>
        {/* Title */}
        <div className='w-full flex items-center gap-6 mb-6'>
          <div className='flex justify-center items-center w-[3rem]'>
            <img
              src='/boxCarried.png'
              alt='boxCarriedIcon'
              className='block w-full object-cover'
            />
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <p className='text-gray-800 text-3xl font-extrabold'>New Sale</p>
            <div className='w-full h-[3px] rounded-full bg-slate-300'></div>
          </div>
        </div>

        {/* Document Section */}
        <div className='flex flex-col w-full mb-6'>
          <h2 className='text-xl text-gray-800 border-b-[1px] border-gray-800 font-bold mb-4 py-2'>
            Document
          </h2>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg text-gray-600 font-semibold'>Client</h3>
              <div className='flex gap-4 '>
                <div className='flex grow bg-white h-8'></div>
                <div className='w-8 p-2 aspect-square bg-primaryBlue flex justify-center items-center'>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className='text-white text-[1rem]'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg text-gray-600 font-semibold'>
                Branch Office
              </h3>
              <div className='flex grow bg-white h-8'></div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg text-gray-600 font-semibold'>Currency</h3>
              <div className='flex grow bg-white h-8'></div>
            </div>
          </div>
        </div>

        {/* Details section */}
        <div className='flex flex-col w-full  border-b-[1px] border-gray-800 mb-4 py-4'>
          <h2 className='text-xl text-gray-800 border-b-[1px] border-gray-800 font-bold mb-4 py-2'>
            Details
          </h2>
          <div className='flex flex-col w-full'>
            <div className='hidden sm:flex'>
              <h3 className='text-lg text-gray-600 font-semibold'>Name</h3>
              <h3 className='text-lg text-gray-600 font-semibold'>Quantity</h3>
              <h3 className='text-lg text-gray-600 font-semibold'>Price</h3>
              <h3 className='text-lg text-gray-600 font-semibold'>Subtotal</h3>
            </div>
            {/* this would be a field */}
            <div className='flex flex-col w-full mb-6 p-4 bg-slate-200 rounded-md'>
              <div className='flex justify-end items-center'>
                <div className='w-8 p-2 aspect-square bg-primaryBlue flex justify-center items-center'>
                  <FontAwesomeIcon
                    icon={faClose}
                    className='text-white text-[1rem]'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg text-gray-600 font-semibold'>Name</h3>
                <div className='flex grow bg-white h-8'></div>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg text-gray-600 font-semibold'>
                  Quantity
                </h3>
                <div className='flex grow bg-white h-8'></div>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg text-gray-600 font-semibold'>Price</h3>
                <div className='flex grow bg-white h-8'></div>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg text-gray-600 font-semibold'>
                  Subtotal
                </h3>
                <div className='flex grow bg-white h-8'></div>
              </div>
            </div>
            {/*  */}

            <div className='flex w-full justify-end'>
              <div className='py-4 px-8 bg-primaryBlue w-[40%] flex justify-center items-center text-white mb-4 '>
                Add
              </div>
            </div>

            <div className='flex gap-4 mb-4 w-full justify-end'>
              <h3 className='text-lg text-gray-600 font-semibold'>Total</h3>
              <div className='flex w-[40%] bg-white h-8'></div>
            </div>
          </div>
        </div>
        <div className='py-4 px-8 bg-primaryBlue w-[40%] flex justify-center items-center text-white'>
          Save
        </div>
      </div>
    </section>
  )
}

export default NewSale
