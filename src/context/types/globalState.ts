import { SellerType } from '../../types/dataTypes'
export interface GlobalStateType {
  //type of globalState
  darkTheme: boolean
  isGlobalLoading: boolean
  seller: SellerType | null
}
