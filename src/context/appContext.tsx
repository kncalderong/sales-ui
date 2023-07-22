import reducer from './reducer'
import { createContext, useReducer, useContext } from 'react'
import { ReducerActionType } from './types/actions'
import { GlobalStateType } from './types/globalState'
import { ContextValueType } from './types/contextValues'

import { SellerType } from '../types/dataBaseTypes'

const initialState: GlobalStateType = {
  darkTheme: false,
  isGlobalLoading: false,
  seller: null,
}

const AppContext = createContext<ContextValueType | undefined>(undefined)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleTheme = () => {
    const { darkTheme } = state
    dispatch({
      type: ReducerActionType.TOGGLE_THEME,
      payload: {
        darkTheme: !darkTheme,
      },
    })
  }

  const setupUser = (seller: SellerType) => {
    dispatch({
      type: ReducerActionType.SETUP_SELLER,
      payload: {
        seller,
      },
    })
    localStorage.setItem('sellerRUT', JSON.stringify(seller.RUT))
  }

  const logoutUser = () => {
    dispatch({
      type: ReducerActionType.LOGOUT_SELLER,
    })
    localStorage.removeItem('sellerRUT')
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleTheme,
        setupUser,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as ContextValueType
}

export { AppProvider, initialState, useAppContext }
