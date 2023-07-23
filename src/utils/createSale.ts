import { sales } from '../data/sales'
import { SaleType } from '../data/types/dataBaseTypes'

const createSale = (client: SaleType) => {
  if (client) {
    sales.push(client)
  }
}

export { createSale }
