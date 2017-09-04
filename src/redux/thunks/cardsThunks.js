// @flow

import { warn } from '../../services/logger'
import { queryByForm } from '../../services/realm/cardService'
import { setCards } from '../actions/cardsActions'

export function queryCardByForm (form) {
  return async (dispatch) => {
    try {
      const cards = await queryByForm(form)
      console.log('===> cards is: ', cards)
      dispatch(setCards(cards))
    } catch (error) {
      warn('Error occured during search a card: ', error)
    }
  }
}
