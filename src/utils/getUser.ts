import sellers from '../data/sellers'

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

export { getSeller }
