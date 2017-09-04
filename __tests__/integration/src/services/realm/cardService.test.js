import { initializeDatabase, cleanDatabase } from '../../configuration/realm'
import CardsJSON from '../../../../assets/AER-X.json'
import { cardFixture } from '../../../../fixtures/realmCardsFixture'
import { aerialModificationForm } from '../../../../fixtures/cardSearchFormFixture'
import {
  queryByForm,
  findCardByID,
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

  it('should import cards from JSON file', async () => {
    importFromJSON(CardsJSON)
    expect(await findAllCards()).toHaveLength(194)
  })

  it('should save a card', () => {
    const id = cardFixture.id
    saveCard(cardFixture)
    expect(findCardByID(id).id).toEqual(id)
  })

  it('should find a card for its ID', () => {
    const id = cardFixture.id
    saveCard(cardFixture)
    expect(findCardByID(id).id).toEqual(id)
  })

  it('should query cards filtering by card search form', async () => {
    importFromJSON(CardsJSON)
    const cardId = 'd6901a23503f4953dc3f643b193a7bdb31478fc2'
    const result = await queryByForm(aerialModificationForm)
    expect(result[0]).toEqual(findCardByID(cardId))
    expect(result.length).toEqual(1)
  })
})
