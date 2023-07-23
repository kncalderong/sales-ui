import { SellerType } from '../data/types/dataBaseTypes'
import sellers from '../data/sellers'

/* For LOGIN */
const getSeller = (targetEmail: string, targetPassword: string) => {
  const seller = sellers.find((seller) => seller.email === targetEmail)
  if (!seller) {
    return {
      status: 500,
      msg: 'User not found',
    }
  }
  if (seller.hashedPassword !== targetPassword) {
    return {
      status: 500,
      msg: 'Invalid Credentials',
    }
  }
  //to exlude hashed password
  const { hashedPassword, ...sellerResponse } = seller // eslint-disable-line @typescript-eslint/no-unused-vars
  return {
    status: 200,
    seller: sellerResponse,
  }
}

/* For REGISTER */
const setSeller = (objectToSubmit: SellerType) => {
  sellers.push(objectToSubmit)
  //to exlude hashed password
  const { hashedPassword, ...sellerResponse } = objectToSubmit // eslint-disable-line @typescript-eslint/no-unused-vars
  return { seller: sellerResponse }
}

export { getSeller, setSeller }
