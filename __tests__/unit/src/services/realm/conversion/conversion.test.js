import { rulingsTextAsArray } from '../../../../../../src/services/realm/conversion'

describe('Realm conversions', () => {
  it('should get all card rulings as array of String', () => {
    const rulings = RealmResult[0].rulings
    const expectedRulings = [rulings[0].text, rulings[1].text]
    expect(rulingsTextAsArray(rulings)).toEqual(expectedRulings)
  })

  // Due https://github.com/realm/realm-js/issues/860 - realm doesnt have list of primitives
  it('Should convert inheritance realm representation to string array', () => {
    const inheritanceRepresentation = {
      '0': {'type': 'TypeTest'},
      '1': {'subtypes': 'SubTypeTest'},
      '2': {'colors': 'ColorTest'},
      '3': {'colorIdentity': 'ColorIdTest'},
      '4': {'printings': 'PRT'}
    }
    const arrayRepresentation = ['TypeTest', 'SubTypeTest', 'ColorTest', 'ColorIdTest', 'PRT']
    expect(inheritanceToArray(inheritanceRepresentation)).toEqual(arrayRepresentation)
  })

  it('Should string array to convert inheritance realm representation', () => {
    const objWithStringArray = {
      printings: ['AER', 'EDM']
    }

    const realmRepresentation = {'printings': [{'printing': 'AER'}, {'printing': 'EDM'}]}
    expect(jsonToRealmCard(objWithStringArray)).toEqual(realmRepresentation)
  })
})
