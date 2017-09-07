// @flow

import Immutable from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from './logger'
import { rootReducer } from '../../redux/reducers'

export function createMtgxStore () {
  const initialState = Immutable.Map()
  const middlewares = [thunk]

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger)
  }

  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

  return store
}
