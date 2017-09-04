import Immutable from 'immutable'
import { SET_CARDS } from '../types'

export const initialState = Immutable.fromJS('')

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return action.cards
    default:
      return state
  }
}
