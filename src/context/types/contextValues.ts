import { SellerType } from '../../types/dataBaseTypes'
import { GlobalStateType } from './globalState'

export interface ContextValueType extends GlobalStateType {
  //type for values passed by context
  toggleTheme: () => void
  setupUser: (seller: SellerType) => void
  logoutUser: () => void
}
