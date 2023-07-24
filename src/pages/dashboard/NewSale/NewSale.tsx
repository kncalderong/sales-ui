import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppContext } from '../../../context/appContext'
import { faPlus, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useMemo, useCallback, useEffect } from 'react'
import { clientsFilter } from '../../../utils/handleClients'
import { v4 as uuidv4 } from 'uuid'
import { ClientType, ProductType, SaleType } from '../../../types/dataTypes'
import CreateClientForm from '../../../components/Forms/CreateClientForm'
import branchOffices from '../../../data/branchOffices'
import DetailsItem from '../../../components/newSale/DetailsItem'
import { productsFilter } from '../../../utils/handleProducts'
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

const NewSale = () => {
  const navigate = useNavigate()
  const { seller } = useAppContext()
  const [modalInfo, setModalInfo] = useState<ModalStateType>(modalInitialState)
  const [documentInfo, setDocumentInfo] = useState(documentInfoInitialState)
  const [detailsInfo, setDetailsInfo] = useState<ProductToAddStateType[]>([])
  const [productToAdd, setProductToAdd] = useState(productToAddInitialState)
  const [validationAlert, setValidationAlert] = useState(alertInitialState)
  const [saleTotal, setSaleTotal] = useState(0)

  const [localSearchClient, setLocalSearchClient] = useState('')
  const [availableClients, setAvailableClients] = useState<ClientType[]>([])

  const [localSearchProduct, setLocalSearchProduct] = useState('')
  const [availableProducts, setAvailableProducts] = useState<ProductType[]>([])

  const debounce = useCallback(
    (option: ModalActions) => {
      let timeoutID: ReturnType<typeof setTimeout>
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        if (option === ModalActions.FIND_CLIENT) {
          setLocalSearchClient(e.target.value)
        }
        if (option === ModalActions.FIND_PRODUCT) {
          setLocalSearchProduct(e.target.value)
        }
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
          if (option === ModalActions.FIND_CLIENT) {
            setAvailableClients(clientsFilter(e.target.value))
          }
          if (option === ModalActions.FIND_PRODUCT) {
            setAvailableProducts(
              productsFilter(
                e.target.value,
                documentInfo.branchOffice.id,
                detailsInfo
              )
            )
          }
        }, 80)
      }
    },
    [documentInfo.branchOffice.id, detailsInfo]
  )

  const optimizedDebounceClients = useMemo(
    () => debounce(ModalActions.FIND_CLIENT),
    [debounce]
  )
  const optimizedDebounceProducts = useMemo(
    () => debounce(ModalActions.FIND_PRODUCT),
    [debounce]
  )

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

  const restartProductSearch = () => {
    setLocalSearchProduct('')
  }

  useEffect(() => {
    const calcTotal = detailsInfo.reduce((acc, cur) => {
      return cur.subtotal + acc
    }, 0)
    setSaleTotal(calcTotal)
  }, [detailsInfo])

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
                  restartProductSearch={restartProductSearch}
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
              restartProductSearch={restartProductSearch}
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
              <div className='w-full'>
                <div className='flex w-full gap-2'>
                  <input
                    type='search'
                    className='p-4 grow'
                    placeholder='Search by client name'
                    onChange={optimizedDebounceClients}
                    value={localSearchClient}
                  />
                  <div className='flex justify-center items-center'>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className='text-gray-400 text-[1rem] cursor-pointer'
                    />
                  </div>
                </div>
                <div className='w-full'>
                  {localSearchClient.length > 0 &&
                    availableClients.length > 0 &&
                    availableClients.map((client) => {
                      return (
                        <div
                          key={client.RUT}
                          className='flex justify-between items-center p-2 gap-3 cursor-pointer'
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
                          <div className='w-[1.5rem] aspect-square border-[1px] rounded-md border-gray-500 p-1'>
                            {documentInfo.client.RUT === client.RUT && (
                              <div className='w-full bg-primaryBlue h-full rounded-sm'></div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  {localSearchClient.length > 0 &&
                    availableClients.length < 1 && (
                      <div className='my-4 text-gray-400'>
                        There are no clients with that name
                      </div>
                    )}
                </div>
              </div>
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
                <div className='w-full'>
                  <div className='flex w-full gap-2 justify-between'>
                    <input
                      type='search'
                      className='p-4 grow'
                      placeholder='Search product by name'
                      onChange={optimizedDebounceProducts}
                      value={localSearchProduct}
                    />
                    <div className='flex justify-center items-center'>
                      <FontAwesomeIcon
                        icon={faSearch}
                        className='text-gray-400 text-[1rem] cursor-pointer'
                      />
                    </div>
                  </div>
                  <div className='w-full'>
                    {localSearchProduct.length > 0 &&
                      availableProducts.length > 0 &&
                      availableProducts.map((product) => {
                        return (
                          <div
                            key={product.id}
                            className='flex justify-between items-center p-2 gap-3 cursor-pointer'
                            onClick={() => {
                              if (product.stock > 0) {
                                setProductToAdd((prevState) => {
                                  return {
                                    ...prevState,
                                    product,
                                    quantity: 1,
                                    subtotal: product.price * 1,
                                  }
                                })
                                setModalInfo(modalInitialState)
                              }
                            }}
                          >
                            <p className='flex gap-2'>
                              <span> {product.name}</span>
                              <span> stock: {product.stock}</span>
                            </p>
                            <div className='w-[1.5rem] aspect-square border-[1px] rounded-md border-gray-500 p-1'>
                              {productToAdd.product.id === product.id && (
                                <div className='w-full bg-primaryBlue h-full rounded-sm'></div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    {localSearchProduct.length > 0 &&
                      availableProducts.length < 1 && (
                        <div className='my-4 text-gray-400'>
                          There are no products with that name
                        </div>
                      )}
                  </div>
                </div>
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
