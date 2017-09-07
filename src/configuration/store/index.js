// @flow

import { Map } from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from './logger'
import { rootReducer } from '../../redux/reducers'

export function createMtgxStore () {
  const initialState = Map()
  const middlewares = [thunk]

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger)
  }

  return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}
