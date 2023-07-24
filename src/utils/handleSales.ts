import { sales } from '../data/sales'
import { SaleType } from '../data/types/dataBaseTypes'

const createSale = (client: SaleType) => {
  if (client) {
    sales.push(client)
  }
}

const getSales = (targetCountry: string = '') => {
  if (targetCountry === '') {
    return sales
  }
  const filteredSalesByCountry = sales.filter(
    (sale) => sale.branchOffice.country === targetCountry
  )
  return filteredSalesByCountry
}

const getSaleById = (targetId: string) => {
  const sale = sales.find((s) => s.saleId === targetId)
  if (!sale) return null
  return sale
}

export { getSales, createSale, getSaleById }
