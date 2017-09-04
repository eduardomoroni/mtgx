import { initializeDatabase, cleanDatabase } from '../../configuration/realm'
import CardsJSON from '../../../../assets/AER-X.json'
import { cardFixture } from '../../../../fixtures/realmCardsFixture'
import { formFields } from '../../../../fixtures/cardSearchFormFixture'
import {
  queryByForm,
  findCardByID,
  sortCards,
  saveCard,
  findAllCards,
  importFromJSON
} from '../../../../../src/services/realm/cardService'

describe('Realm Card Service', () => {
  beforeAll(() => {
    initializeDatabase()
  })

  afterAll(() => {
    cleanDatabase()
  })

  it('should query cards filtering by card search form', () => {
    console.log('===> formFields is: ', formFields)
    const result = queryByForm(formFields)
    expect(result).toHaveLength(1)
  })

  xit('should sort query results', () => {
    expect(sortCards(formFields)).toEqual(null)
  })

  it('should import cards from JSON file', async () => {
    try {
      importFromJSON(CardsJSON)
      expect(findAllCards()).toHaveLength(194)
    } catch (error) {
      fail(error)
    }
  })

  it('should find a card for its ID', () => {
    const id = 'bee70fe0f74f97a9cbb549775ce2fb4a55a8bae6'
    expect(findCardByID(id).id).toEqual(id)
  })

  it('should save a card', () => {
    const id = cardFixture.id
    saveCard(cardFixture)
    expect(findCardByID(id).id).toEqual(id)
  })
})
