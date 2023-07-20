import reducer from './reducer'
import { createContext, useReducer, useContext } from 'react'
import { ActionKind } from './types/actions'
import { GlobalStateType } from './types/globalState'
import { ContextValueType } from './types/contextValues'

const initialState: GlobalStateType = {
  darkTheme: false,
}

const AppContext = createContext<ContextValueType | undefined>(undefined)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleTheme = () => {
    const { darkTheme } = state
    dispatch({
      type: ActionKind.TOGGLE_THEME,
      payload: {
        darkTheme: !darkTheme,
      },
    })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleTheme,
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
