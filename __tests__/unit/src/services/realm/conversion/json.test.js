import { toRealmCard } from '../../../../../../src/services/realm/conversion/json'
import { realmCardFixture } from '../../../../../assets/fixtures/realmCardsFixture'
import cardJSON from '../../../../../assets/fixtures/cardFixture.json'

describe('Realm json conversion', () => {
  it('should convert a Json Object to a realm Valid Object', () => {
    expect(toRealmCard(cardJSON)).toEqual(realmCardFixture)
  })
})
