import { Record } from 'immutable'
import { combineReducers } from 'redux-immutable'

import AuthenticationReducer, { initialState as authInitialState } from './authenticationReducer'
import MessageReducer, { initialState as messageInitialState } from './messageReducer'
import { reducer as ReduxForm } from 'redux-form/immutable'

const reducers = {
  authentication: AuthenticationReducer,
  message: MessageReducer,
  form: ReduxForm
}

export const initialState = {
  authentication: authInitialState,
  message: messageInitialState
}

export const rootReducer = combineReducers(reducers, Record(initialState))
