import { setCards } from '../../../../../src/redux/actions/cardsActions'
import { cardFixture } from '../../../../fixtures/realmCardsFixture'
import { queryCardByForm } from '../../../../../src/redux/thunks/cardsThunks'
import { formFields } from '../../../../fixtures/cardSearchFormFixture'

import * as CardService from '../../../../../src/services/realm/cardService'
jest.mock('../../../../../src/services/realm/cardService')

describe('Cards thunks', () => {
  const mockDispatch = jest.fn()

  it('should query card by form', async () => {
    CardService.queryByForm = jest.fn(() => Promise.resolve(cardFixture))
    const expectedAction = setCards(cardFixture)

    const thunk = queryCardByForm(formFields)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })
})
