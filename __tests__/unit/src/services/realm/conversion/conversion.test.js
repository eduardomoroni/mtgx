import { rulingsTextAsArray } from '../../../../../../src/services/realm/conversion'

describe('Realm conversions', () => {
  it('should get all card rulings as array of String', () => {
    const rulings = RealmResult[0].rulings
    const expectedRulings = [rulings[0].text, rulings[1].text]
    expect(rulingsTextAsArray(rulings)).toEqual(expectedRulings)
  })
})
