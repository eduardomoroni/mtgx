import Immutable from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../../redux/reducers'

export function createMtgxStore () {
  const initialState = Immutable.Map()
  const middlewares = []

  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

  return store
}
