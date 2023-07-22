import { SellerType } from './../../types/dataBaseTypes'
export interface GlobalStateType {
  //type of globalState
  darkTheme: boolean
  isGlobalLoading: boolean
  seller: SellerType | null
}
