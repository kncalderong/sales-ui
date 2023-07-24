import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { productToAddInitialState } from '../../pages/dashboard/NewSale/initialStates'
import React from 'react'
import {
  ModalStateType,
  ModalActions,
  ProductToAddStateType,
} from '../../pages/types/newSalePage'

type DetailsItem = {
  isAdding: boolean
  modalHandle: React.Dispatch<React.SetStateAction<ModalStateType>>
  productToAdd: ProductToAddStateType
  setProductToAdd: React.Dispatch<React.SetStateAction<ProductToAddStateType>>
  setDetailsInfo: React.Dispatch<React.SetStateAction<ProductToAddStateType[]>>
  restartProductSearch: () => void
}

const DetailsItem = ({
  isAdding,
  modalHandle,
  productToAdd,
  setProductToAdd,
  setDetailsInfo,
  restartProductSearch,
}: DetailsItem) => {
  return (
    <div className='flex flex-col w-full mb-6 p-4 bg-slate-200 rounded-md gap-4 lg:bg-slate-100 lg:px-0'>
      <div className='relative flex flex-col lg:flex-row lg:gap-4 lg:p-0 '>
        {!isAdding && (
          <div className='flex justify-end items-center lg:hidden'>
            <div
              className='w-8 p-2 aspect-square bg-primaryBlue flex justify-center items-center'
              onClick={() => {
                setDetailsInfo((prevState) => {
                  const itemToErase = prevState.findIndex(
                    (item) => item.product.id === productToAdd.product.id
                  )
                  return prevState.splice(itemToErase, 1)
                })
              }}
            >
              <FontAwesomeIcon
                icon={faClose}
                className='text-white text-[1rem]'
              />
            </div>
          </div>
        )}
        <div
          className='flex flex-col gap-2 lg:basis-[50%]'
          onClick={() => {
            if (isAdding) {
              modalHandle({
                isOpen: true,
                modalType: ModalActions.FIND_PRODUCT,
              })
            }
          }}
        >
          <h3 className='text-lg text-gray-400 font-semibold block lg:hidden'>
            Name
          </h3>
          <div className='flex grow bg-white h-8 cursor-pointer items-center px-4 lg:h-12'>
            {productToAdd.product.name}
          </div>
        </div>
        <div className='flex flex-col gap-2 lg:basis-[15%]'>
          <h3 className='text-lg text-gray-400 font-semibold block lg:hidden'>
            Quantity
          </h3>
          <input
            className='newSaleProductToAddQuantity flex grow bg-white h-8 cursor-pointer items-center px-4 lg:h-12'
            type='number'
            min={Number.isNaN(productToAdd.quantity) ? 0 : 1}
            max={productToAdd.product.stock || 0}
            value={
              Number.isNaN(productToAdd.quantity) ? '' : productToAdd.quantity
            }
            onChange={(e) => {
              if (isAdding && productToAdd.product.name.length > 0) {
                setProductToAdd((prevState) => {
                  return {
                    ...prevState,
                    subtotal:
                      +e.target!.value > productToAdd.product.stock
                        ? productToAdd.product.stock *
                          productToAdd.product.price
                        : +e.target!.value * productToAdd.product.price,
                    quantity:
                      +e.target!.value > productToAdd.product.stock
                        ? productToAdd.product.stock
                        : +e.target!.value,
                  }
                })
              }
            }}
          />
        </div>
        <div className='flex flex-col gap-2 lg:basis-[15%]'>
          <h3 className='text-lg text-gray-400 font-semibold block lg:hidden'>
            Price
          </h3>
          <div className='flex grow bg-white h-8 items-center px-4 lg:h-12'>
            {productToAdd.product.price || null}
          </div>
        </div>
        <div className='flex flex-col gap-2 lg:basis-[15%]'>
          <h3 className='text-lg text-gray-400 font-semibold block lg:hidden'>
            Subtotal
          </h3>
          <div className='flex grow bg-white h-8 items-center px-4 lg:h-12'>
            {productToAdd.subtotal || null}
          </div>
        </div>
        {!isAdding && (
          <div className='justify-end items-center hidden lg:flex lg:absolute right-[-3rem] cursor-pointer lg:right-[-4rem]'>
            <div
              className='w-8 p-2 aspect-square bg-primaryBlue flex justify-center items-center lg:w-12'
              onClick={() => {
                setDetailsInfo((prevState) => {
                  const itemToErase = prevState.findIndex(
                    (item) => item.product.id === productToAdd.product.id
                  )
                  return prevState.splice(itemToErase, 1)
                })
              }}
            >
              <FontAwesomeIcon
                icon={faClose}
                className='text-white text-[1rem]'
              />
            </div>
          </div>
        )}
      </div>

      {isAdding && (
        <div className='flex w-full justify-end lg:justify-start'>
          <div
            className='py-2 px-4 bg-primaryBlue w-[40%] flex justify-center items-center text-white mt-4  cursor-pointer lg:w-[120px] lg:py-3'
            onClick={() => {
              if (productToAdd.product.name.length > 0) {
                setDetailsInfo((prevState: ProductToAddStateType[]) => {
                  return [...prevState, productToAdd]
                })
                setProductToAdd(productToAddInitialState)
                restartProductSearch()
              }
            }}
          >
            Add
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailsItem
