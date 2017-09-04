import { setCards } from '../../../../../src/redux/actions/cardsActions'
import { SET_CARDS } from '../../../../../src/redux/types'

describe('Card search Actions', () => {
  it('should create action to set cards', () => {
    const cards = 'TODO: This should be a Map of cards'
    const action = setCards(cards)
    const expectedAction = { type: SET_CARDS, cards }
    expect(action).toEqual(expectedAction)
  })
})
