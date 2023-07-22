import { GlobalStateType } from './types/globalState'
import { ReducerActionType, ReducerAction } from './types/actions'

const reducer = (state: GlobalStateType, action: ReducerAction) => {
  if (action.type === ReducerActionType.TOGGLE_THEME) {
    return {
      ...state,
      darkTheme: action.payload.darkTheme,
    }
  }
  if (action.type === ReducerActionType.TOGGLE_GLOBAL_LOADING) {
    return {
      ...state,
      isGlobalLoading: !state.isGlobalLoading,
    }
  }
  if (action.type === ReducerActionType.SETUP_SELLER) {
    return {
      ...state,
      seller: action.payload.seller,
    }
  }
  if (action.type === ReducerActionType.LOGOUT_SELLER) {
    return {
      ...state,
      seller: null,
    }
  }
  return state
}

export default reducer
