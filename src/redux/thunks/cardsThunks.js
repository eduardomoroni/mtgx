// @flow

import { warn } from '../../services/logger'
import { queryByForm } from '../../services/realm/cardService'
import { setCards } from '../actions/cardsActions'
import type { Map } from 'immutable'

export async function queryCardByForm (form: Map) {
  return async (dispatch: Function) => {
    try {
      const cards = await queryByForm(form)
      dispatch(setCards(cards))
    } catch (error) {
      warn('Error occured during search a card: ', error)
    }
  }
}
