import { setCards } from '../../../../../src/redux/actions/cardsActions'
import CardSearchReducer, { initialState } from '../../../../../src/redux/reducers/cardsReducer'

describe('CardSearch reducer', () => {
  it('should have a snapshot', async () => {
    expect(initialState).toMatchSnapshot()
  })

  it('SHOW_MESSAGE action type should set message on state', async () => {
    const cards = 'TODO: This should be a Map of cards'
    const action = setCards(cards)
    const state = CardSearchReducer(initialState, action)

    expect(state).toEqual(cards)
  })
})
