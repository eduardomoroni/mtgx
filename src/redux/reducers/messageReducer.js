import Immutable from 'immutable'
import { SHOW_MESSAGE } from '../types'

export const initialState = Immutable.fromJS('')

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return Immutable.fromJS(action.message)
    default:
      return state
  }
}
