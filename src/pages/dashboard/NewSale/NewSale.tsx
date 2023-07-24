import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppContext } from '../../../context/appContext'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { SaleType } from '../../../types/dataTypes'
import CreateClientForm from '../../../components/Forms/CreateClientForm'
import branchOffices from '../../../data/branchOffices'
import DetailsItem from '../../../components/newSale/DetailsItem'

import {
  ModalActions,
  ModalStateType,
  ProductToAddStateType,
} from '../../types/newSalePage'
import { createSale } from '../../../utils/handleSales'
import {
  modalInitialState,
  documentInfoInitialState,
  productToAddInitialState,
  alertInitialState,
} from './initialStates'
import { useNavigate } from 'react-router-dom'
import SearchClient from '../../../components/newSale/modal/SearchClient'
import SearchProduct from '../../../components/newSale/modal/SearchProduct'

const NewSale = () => {
  const navigate = useNavigate()
  const { seller } = useAppContext()
  const [modalInfo, setModalInfo] = useState<ModalStateType>(modalInitialState)
  const [documentInfo, setDocumentInfo] = useState(documentInfoInitialState)
  const [detailsInfo, setDetailsInfo] = useState<ProductToAddStateType[]>([])
  const [productToAdd, setProductToAdd] = useState(productToAddInitialState)
  const [validationAlert, setValidationAlert] = useState(alertInitialState)
  const [saleTotal, setSaleTotal] = useState(0)

  const handleSubmit = () => {
    if (documentInfo.client.RUT === '') {
      setValidationAlert({
        isActive: true,
        alertMessage: 'Please include client information first',
      })
      setTimeout(() => {
        setValidationAlert(alertInitialState)
      }, 2500)
      return
    }
    if (saleTotal === 0) {
      setValidationAlert({
        isActive: true,
        alertMessage: 'Please register at least one product',
      })
      setTimeout(() => {
        setValidationAlert(alertInitialState)
      }, 2500)
      return
    }
    if (seller) {
      const objectToSubmit: SaleType = {
        saleId: uuidv4(),
        date: new Date().toLocaleString(),
        client: documentInfo.client,
        branchOffice: documentInfo.branchOffice,
        seller: seller,
        details: detailsInfo,
        total: saleTotal,
      }
      createSale(objectToSubmit)
      navigate('/all-sales')
    }
  }

  useEffect(() => {
    const calcTotal = detailsInfo.reduce((acc, cur) => {
      return cur.subtotal + acc
    }, 0)
    setSaleTotal(calcTotal)
  }, [detailsInfo])

  const closeModal = () => {
    setModalInfo(modalInitialState)
  }

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
              New Sale
            </p>
            <div className='w-full h-[3px] rounded-full bg-slate-300'></div>
          </div>
        </div>

        {/* Document Section */}
        <div className='flex flex-col w-full mb-6 lg:mb-12'>
          <h2 className='text-xl text-gray-800 border-b-[1px] border-gray-400 font-bold mb-4 py-2 lg:text-3xl'>
            Document
          </h2>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='flex flex-col gap-2 lg:basis-[40%]'>
              <h3 className='text-lg text-gray-400 font-semibold'>Client</h3>
              <div
                className='flex gap-4 cursor-pointer '
                onClick={() => {
                  setModalInfo({
                    isOpen: true,
                    modalType: ModalActions.FIND_CLIENT,
                  })
                }}
              >
                <div className='flex grow bg-white h-8 gap-2 justify-start items-center px-4 lg:h-12'>
                  <span>{documentInfo.client.name}</span>
                  <span>{documentInfo.client.lastName}</span>
                </div>
                <div className='w-8 p-2 aspect-square bg-primaryBlue flex justify-center items-center lg:w-12'>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className='text-white text-[1rem]'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2  lg:basis-[40%]'>
              <h3 className='text-lg text-gray-400 font-semibold'>
                Branch Office
              </h3>
              <div
                className='flex grow bg-white h-8 px-3 items-center cursor-pointer lg:h-12'
                onClick={() => {
                  setModalInfo({
                    isOpen: true,
                    modalType: ModalActions.FIND_BRANCHOFFICE,
                  })
                }}
              >
                {documentInfo.branchOffice.country}
              </div>
            </div>
            <div className='flex flex-col gap-2 lg:grow'>
              <h3 className='text-lg text-gray-400 font-semibold'>Currency</h3>
              <div className='flex grow bg-white h-8 px-3 items-center lg:h-12'>
                {documentInfo.branchOffice.currency}
              </div>
            </div>
          </div>
        </div>

        {/* Details section */}
        <div className='flex flex-col w-full  border-b-[1px] border-gray-400 mb-4 py-4 lg:mb-10'>
          <h2 className='text-xl text-gray-800 border-b-[1px] border-gray-400 font-bold mb-4 py-2 lg:text-3xl'>
            Details
          </h2>
          <div className='flex flex-col w-full'>
            <div className='hidden lg:flex lg:gap-4'>
              <h3 className='text-lg text-gray-400 font-semibold basis-[50%]'>
                Name
              </h3>
              <h3 className='text-lg text-gray-400 font-semibold basis-[15%]'>
                Quantity
              </h3>
              <h3 className='text-lg text-gray-400 font-semibold basis-[15%]'>
                Price
              </h3>
              <h3 className='text-lg text-gray-400 font-semibold basis-[15%]'>
                Subtotal
              </h3>
            </div>
            {/* this would be a field */}
            {detailsInfo.map((productAdded) => {
              return (
                <DetailsItem
                  isAdding={false}
                  modalHandle={setModalInfo}
                  productToAdd={productAdded}
                  setProductToAdd={setProductToAdd}
                  setDetailsInfo={setDetailsInfo}
                  key={productAdded.product.id}
                />
              )
            })}
            <DetailsItem
              isAdding={true}
              modalHandle={setModalInfo}
              productToAdd={productToAdd}
              setProductToAdd={setProductToAdd}
              setDetailsInfo={setDetailsInfo}
            />
            {/*  */}

            <div className='flex gap-4 mb-4 w-full justify-end items-center'>
              <h3 className='text-lg text-gray-400 font-semibold'>Total</h3>
              <div className='flex w-[40%] bg-white h-8 items-center px-4 lg:w-[15%] lg:mr-[calc(15%+1rem)] lg:h-12'>
                {saleTotal === 0 ? '' : saleTotal}
              </div>
            </div>
          </div>
        </div>
        {validationAlert.isActive && (
          <div className='my-4 text-red-950 bg-red-200 border-[1px] border-red-800 px-6 py-3 rounded-lg'>
            {validationAlert.alertMessage}
          </div>
        )}
        <div className='w-full flex lg:justify-end'>
          <div
            className='py-4 px-8 bg-primaryBlue w-[40%] flex justify-center items-center text-white cursor-pointer lg:w-[180px]'
            onClick={handleSubmit}
          >
            Save
          </div>
        </div>
      </div>

      {/* Modal section */}
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
            <div className='flex justify-between w-full mb-4'>
              <div>
                {modalInfo.modalType === ModalActions.FIND_CLIENT && (
                  <div
                    className='py-2 px-4 bg-primaryBlue w-[150px] flex justify-center items-center text-white rounded-md cursor-pointer'
                    onClick={() => {
                      setModalInfo({
                        isOpen: true,
                        modalType: ModalActions.CREATE_CLIENT,
                      })
                    }}
                  >
                    Add new Client
                  </div>
                )}
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => {
                  setModalInfo(modalInitialState)
                }}
                className='text-primaryBlue text-[2rem] cursor-pointer'
              />
            </div>

            {/* Search Existing Client */}
            {modalInfo.modalType === ModalActions.FIND_CLIENT && (
              <SearchClient
                closeModal={closeModal}
                setDocumentInfo={setDocumentInfo}
                documentInfo={documentInfo}
              />
            )}

            {/* Create New Client */}
            {modalInfo.modalType === ModalActions.CREATE_CLIENT && (
              <div className='w-full'>
                <h2 className='text-primaryBlue font-extrabold mb-4 text-xl'>
                  Register new client
                </h2>
                <CreateClientForm
                  handleCloseForm={() =>
                    setModalInfo({
                      modalType: ModalActions.FIND_CLIENT,
                      isOpen: true,
                    })
                  }
                />
              </div>
            )}

            {/* Select BranchOffice */}
            {modalInfo.modalType === ModalActions.FIND_BRANCHOFFICE && (
              <div className='w-full lg:w-[80%]'>
                <h2 className='text-primaryBlue font-extrabold mb-4 text-xl lg:mb-6'>
                  Select a branchOffice
                </h2>
                <div className='flex flex-col gap-3'>
                  {branchOffices.map((branchOffice) => (
                    <div
                      key={branchOffice.id}
                      className='flex justify-between cursor-pointer'
                      onClick={() => {
                        setDocumentInfo({
                          ...documentInfo,
                          branchOffice,
                        })
                        setProductToAdd(productToAddInitialState)
                        setDetailsInfo([])
                        setModalInfo(modalInitialState)
                      }}
                    >
                      <p>{branchOffice.country}</p>
                      <div className='w-[1.5rem] aspect-square border-[1px] rounded-md border-gray-500 p-1'>
                        {documentInfo.branchOffice.id === branchOffice.id && (
                          <div className='w-full bg-primaryBlue h-full rounded-sm'></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Select Product */}
            {modalInfo.modalType === ModalActions.FIND_PRODUCT &&
              (documentInfo.branchOffice.country.length > 0 ? (
                <SearchProduct
                  closeModal={closeModal}
                  detailsInfo={detailsInfo}
                  setProductToAdd={setProductToAdd}
                  documentInfo={documentInfo}
                  productToAdd={productToAdd}
                />
              ) : (
                <div>Select a BranchOffice first</div>
              ))}
          </div>
        </aside>
      )}
    </section>
  )
}

export default NewSale
