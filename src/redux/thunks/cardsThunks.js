// @flow

import { warn } from '../../services/logger'
import { queryByForm } from '../../services/realm/cardService'
import { setCards } from '../actions/cardsActions'
import type { Map } from 'immutable'
import type { Dispatch } from 'redux'

export async function queryCardByForm (form: Map): Promise<any> {
  return async (dispatch: Dispatch<*>) => {
    try {
      const cards = await queryByForm(form)
      console.log('===> cards is: ', cards)
      dispatch(setCards(cards))
    } catch (error) {
      warn('Error occured during search a card: ', error)
    }
  }
}
