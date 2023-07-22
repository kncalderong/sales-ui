export interface SellerType {
  RUT: string
  name: string
  lastName: string
  address: AddressType
  phone: string
  birthDate: string
  email: string
  hashedPassword?: string
}

export interface ClientType {
  RUT: string
  name: string
  lastName: string
  email: string
  address: AddressType
  phone: string
}

export interface AddressType {
  street: string
  number: string
  neighborhood: string
  city: string
}

export interface ProductType {
  id: number
  name: string
  price: number
  stock: number
  branchOfficeId: number
}

export interface BranchOfficeType {
  id: number
  country:
    | 'Chile'
    | 'Argentina'
    | 'Colombia'
    | 'Ecuador'
    | 'Paraguay'
    | 'Brazil'
    | 'Peru'
    | 'Panama'
    | 'Mexico'
    | 'Uruguay'
  currency: string
}

export interface SaleType {
  client: {
    clientRUT: string
    clientName: string
  }
  branchOffice: BranchOfficeType
  details: {
    quantity: number
    productId: number
    productName: string
    unitPrice: number
    subTotal: number
  }[]
  total: number
}
