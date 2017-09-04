// @flow

import Immutable from 'immutable'
import type { Map } from 'immutable'
import { SET_CARDS } from '../types'

export const initialState = Immutable.fromJS('')

export default function (state: Map = initialState, action: { [string]: Map }) {
  switch (action.type) {
    case SET_CARDS:
      return action.cards
    default:
      return state
  }
}
