import { setCards } from '../../../../../src/redux/actions/cardsActions'
import { cardsFixture } from '../../../../fixtures/realmCardsFixture'
import { queryCardByForm } from '../../../../../src/redux/thunks/cardsThunks'

import * as CardService from '../../../../../src/services/realm/cards'
jest.mock('../../../../../src/services/realm/cards')

describe('Cards thunks', () => {
  const mockDispatch = jest.fn()

  it('should query card by form', async () => {
    CardService.queryByForm = jest.fn(() => Promise.resolve(cardsFixture))
    const expectedAction = setCards(cardsFixture)

    const thunk = queryCardByForm()
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })
})
