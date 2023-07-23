import { ProductToAddStateType } from './../pages/types/newSalePage'
import products from '../data/products'

const productsFilter = (
  targetName: string,
  targetBranchOfficeId: number,
  productsToExlude: ProductToAddStateType[] = []
) => {
  if (targetName.length < 1) return []

  const filterBranchOffice = products.filter(
    (product) => product.branchOfficeId === targetBranchOfficeId
  )

  const filteredProducts = filterBranchOffice.filter((product) => {
    if (product.name.toLowerCase().includes(targetName.toLowerCase())) {
      let toExclude = false
      productsToExlude.forEach((productToExclude) => {
        if (productToExclude.product.id === product.id) {
          toExclude = true
        }
      })
      if (!toExclude) {
        return product
      }
    }
  })
  return filteredProducts
}

export { productsFilter }
