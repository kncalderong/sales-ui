import { BranchOfficeType, ClientType } from '../../types/dataTypes'

export enum ModalActions {
  FIND_CLIENT,
  CREATE_CLIENT,
  FIND_BRANCHOFFICE,
  FIND_PRODUCT,
}

export type ModalStateType = {
  isOpen: boolean
  modalType: ModalActions | string
}

export type ProductToAddStateType = {
  product: {
    id: number
    name: string
    price: number
    stock: number
    branchOfficeId: number
  }
  quantity: number
  subtotal: number
}

export type DocumentInfoType = {
  sellerRUT: string
  client: ClientType
  branchOffice: BranchOfficeType
}
