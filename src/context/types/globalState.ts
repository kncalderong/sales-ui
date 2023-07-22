import { SellerType } from './../../types/dataBaseTypes'
export interface GlobalStateType {
  //type of globalState
  darkTheme: boolean
  isLoading: boolean
  seller: SellerType | null
}
