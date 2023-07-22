export enum ReducerActionType {
  TOGGLE_THEME,
  SETUP_SELLER,
  LOGOUT_SELLER,
  TOGGLE_GLOBAL_LOADING,
}

export type ReducerAction = {
  type: ReducerActionType
  payload?: any
}
