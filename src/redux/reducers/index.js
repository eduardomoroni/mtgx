import { Record } from 'immutable'
import FooReducer from './foo'
import { combineReducers } from 'redux-immutable'

const reducers = {
  foo: FooReducer
}

const records = {
  foo: undefined
}

export const rootReducer = combineReducers(reducers, Record(records))
