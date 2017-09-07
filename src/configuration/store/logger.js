import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable'

const filterReduxFormActions = (getState, action) => !action.type.startsWith('@@redux-form')

const transformImmutableState = (state) => {
  let newState = {}

  for (const obj of Object.keys(state)) {
    if (Iterable.isIterable(state[obj])) {
      newState[obj] = state[obj].toJS()
    } else {
      newState[obj] = state[obj]
    }
  }

  return newState
}

export const logger = createLogger({
  predicate: filterReduxFormActions,
  stateTransformer: transformImmutableState
})
