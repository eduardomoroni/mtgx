import { toRealmCard } from '../../../../../../src/services/realm/conversion/json'
import { realmCardStub } from '../../../../../assets/stubs/realmCardStub'
import cardJSON from '../../../../../assets/stubs/cardStub.json'

describe('Realm json conversion', () => {
  it('should convert a Json Object to a realm Valid Object', () => {
    expect(toRealmCard(cardJSON)).toEqual(realmCardStub)
  })
})
