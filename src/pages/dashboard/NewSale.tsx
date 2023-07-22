import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { useAppContext } from '../../context/appContext'
import {
  faClose,
  faPlus,
  faSearch,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { useState, useMemo, useEffect } from 'react'
import { clientsFilter } from '../../utils/clientsFilter'
import { ClientType } from '../../types/dataBaseTypes'

const modalInitialState = {
  isOpen: false,
  modalType: '',
}

const documentInfoInitialState = {
  sellerRUT: '',
  client: {
    RUT: '',
    name: '',
    lastName: '',
    email: '',
    address: {
      street: '',
      number: '',
      neighborhood: '',
      city: '',
    },
    phone: '',
  },
  branchOffice: {
    id: '',
    country: '',
    currency: '',
  },
}

const NewSale = () => {
  //const { seller } = useAppContext()
  const [modalInfo, setModalInfo] = useState(modalInitialState)
  const [documentInfo, setDocumentInfo] = useState(documentInfoInitialState)

  const [localSearchClient, setLocalSearchClient] = useState('')
  const [searchClient, setSearchClient] = useState('')
  const [availableClients, setAvailableClients] = useState<ClientType[]>([])

  const debounce = () => {
    let timeoutID: ReturnType<typeof setTimeout>
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearchClient(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        setSearchClient(e.target.value)
      }, 500)
    }
  }

  useEffect(() => {
    setAvailableClients(clientsFilter(searchClient))
  }, [searchClient])

  const optimizedDebounce = useMemo(() => debounce(), [])

  const handleSubmit = () => {
    console.log('objectToSubmit', documentInfo)
  }
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
              <div
                className='flex gap-4 '
                onClick={() => {
                  setModalInfo({ isOpen: true, modalType: 'addClient' })
                }}
              >
                <div className='flex grow bg-white h-8 gap-2 justify-start items-center px-4'>
                  <span>{documentInfo.client.name}</span>
                  <span>{documentInfo.client.lastName}</span>
                </div>
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
        <div
          className='py-4 px-8 bg-primaryBlue w-[40%] flex justify-center items-center text-white'
          onClick={handleSubmit}
        >
          Save
        </div>
      </div>
      {modalInfo.isOpen && (
        <aside
          className={`w-full fixed h-screen z-40 left-0 top-0 bg-gray-800 bg-opacity-25 flex justify-center items-center`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setModalInfo(modalInitialState)
            }
          }}
        >
          <div
            className={`bg-white p-6 opacity-100 z-50 min-w-[50%] min-h-[25%] justify-start items-center overflow-auto max-h-[80%] flex flex-col rounded-md shadow-xl lg:p-12`}
          >
            <div className='flex justify-end w-full mb-4'>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => {
                  setModalInfo(modalInitialState)
                }}
                className='text-primaryBlue text-[2rem] cursor-pointer'
              />
            </div>
            {modalInfo.modalType === 'addClient' && (
              <div>
                <div className='flex w-full gap-2'>
                  <input
                    type='search'
                    className='p-4'
                    placeholder='Search by client name'
                    onChange={optimizedDebounce}
                    value={localSearchClient}
                  />
                  <div className='flex justify-center items-center'>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className='text-gray-600 text-[1rem] cursor-pointer'
                    />
                  </div>
                </div>
                <div className='w-full'>
                  {availableClients.map((client) => {
                    return (
                      <div
                        key={client.RUT}
                        className='flex justify-between items-center p-2 gap-3'
                        onClick={() => {
                          setDocumentInfo({
                            ...documentInfo,
                            client,
                          })
                          setModalInfo(modalInitialState)
                        }}
                      >
                        <p className='flex gap-2'>
                          <span> {client.name}</span>
                          <span> {client.lastName}</span>
                        </p>
                        <div className='w-[1.5rem] aspect-square border-[1px] rounded-md border-gray-500'></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </aside>
      )}
    </section>
  )
}

export default NewSale
