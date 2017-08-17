import { createStore, applyMiddleware } from 'redux'
import reducers from '../../redux/reducers'

export function createMtgxStore () {
  const middlewares = []

  const store = createStore(reducers, {}, applyMiddleware(...middlewares))

  return store
}
