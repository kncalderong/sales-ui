import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useMemo, useCallback } from 'react'
import { ProductType } from '../../../types/dataTypes'
import { productsFilter } from '../../../utils/handleProducts'
import {
  DocumentInfoType,
  ProductToAddStateType,
} from '../../../pages/types/newSalePage'

type SearchProductPropsType = {
  documentInfo: DocumentInfoType
  detailsInfo: ProductToAddStateType[]
  productToAdd: ProductToAddStateType
  setProductToAdd: React.Dispatch<React.SetStateAction<ProductToAddStateType>>
  closeModal: () => void
}

const SearchProduct = ({
  documentInfo,
  detailsInfo,
  closeModal,
  productToAdd,
  setProductToAdd,
}: SearchProductPropsType) => {
  const [localSearchProduct, setLocalSearchProduct] = useState('')
  const [availableProducts, setAvailableProducts] = useState<ProductType[]>([])

  const debounce = useCallback(() => {
    let timeoutID: ReturnType<typeof setTimeout>
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearchProduct(e.target.value)
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        setAvailableProducts(
          productsFilter(
            e.target.value,
            documentInfo.branchOffice.id,
            detailsInfo
          )
        )
      }, 80)
    }
  }, [documentInfo.branchOffice.id, detailsInfo])

  const optimizedDebounceProducts = useMemo(() => debounce(), [debounce])
  return (
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
                    closeModal()
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
        {localSearchProduct.length > 0 && availableProducts.length < 1 && (
          <div className='my-4 text-gray-400'>
            There are no products with that name
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchProduct
