import { importAllSets } from '../../../../../src/services/mtgJSON'
import * as CardService from '../../../../../src/services/realm/cardService'
import { sets } from '../../../../../src/assets/cards'

describe('MTG JSON Service', () => {
  it('should import all sets to realm database', () => {
    CardService.importFromJSON = jest.fn()
    importAllSets()

    for (const set in sets) {
      expect(CardService.importFromJSON).toHaveBeenCalledWith(sets[set])
    }
  })
})
