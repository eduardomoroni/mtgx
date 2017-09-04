// @flow

import Immutable from 'immutable'
import type { Map } from 'immutable'
import { SHOW_MESSAGE, CLEAR_MESSAGE } from '../types'

export const initialState = Immutable.fromJS('')

export default function (state: Map = initialState, action: { [string]: Map }) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return Immutable.fromJS(action.message)
    case CLEAR_MESSAGE:
      return initialState
    default:
      return state
  }
}
