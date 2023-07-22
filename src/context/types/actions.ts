export enum ReducerActionType {
  TOGGLE_THEME,
  SETUP_SELLER,
  LOGOUT_SELLER,
}

export type ReducerAction = {
  type: ReducerActionType
  payload?: any
}
