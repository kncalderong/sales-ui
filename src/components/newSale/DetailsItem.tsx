import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { productToAddInitialState } from '../../pages/dashboard/NewSale'
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
    <div className='flex flex-col w-full mb-6 p-4 bg-slate-200 rounded-md gap-4'>
      {!isAdding && (
        <div className='flex justify-end items-center'>
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
        className='flex flex-col gap-2'
        onClick={() => {
          if (isAdding) {
            modalHandle({
              isOpen: true,
              modalType: ModalActions.FIND_PRODUCT,
            })
          }
        }}
      >
        <h3 className='text-lg text-gray-600 font-semibold'>Name</h3>
        <div className='flex grow bg-white h-8'>
          {productToAdd.product.name}
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg text-gray-600 font-semibold'>Quantity</h3>
        <input
          className='newSaleProductToAddQuantity flex grow bg-white h-8'
          type='number'
          min={1}
          max={productToAdd.product.stock || 0}
          value={productToAdd.quantity || 0}
          onChange={(e) => {
            if (isAdding) {
              setProductToAdd((prevState) => {
                return {
                  ...prevState,
                  subtotal:
                    +e.target!.value > productToAdd.product.stock
                      ? productToAdd.product.stock * productToAdd.product.price
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
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg text-gray-600 font-semibold'>Price</h3>
        <div className='flex grow bg-white h-8'>
          {productToAdd.product.price || null}
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg text-gray-600 font-semibold'>Subtotal</h3>
        <div className='flex grow bg-white h-8'>
          {productToAdd.subtotal || null}
        </div>
      </div>
      {isAdding && (
        <div className='flex w-full justify-end'>
          <div
            className='py-2 px-4 bg-primaryBlue w-[40%] flex justify-center items-center text-white mt-4 '
            onClick={() => {
              setDetailsInfo((prevState: ProductToAddStateType[]) => {
                return [...prevState, productToAdd]
              })
              setProductToAdd(productToAddInitialState)
              restartProductSearch()
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
