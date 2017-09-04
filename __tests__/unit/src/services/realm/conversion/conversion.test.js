import { toArray, toRealmArray, realmKeyValueObjectArray } from '../../../../../../src/services/realm/conversion'

describe('Realm conversions', () => {
  it('should convert inheritance realm representation to string array', () => {
    const inheritanceRepresentation = {
      '0': {'type': 'TypeTest'},
      '1': {'subtypes': 'SubTypeTest'},
      '2': {'colors': 'ColorTest'},
      '3': {'colorIdentity': 'ColorIdTest'},
      '4': {'printings': 'PRT'}
    }
    const arrayRepresentation = ['TypeTest', 'SubTypeTest', 'ColorTest', 'ColorIdTest', 'PRT']
    expect(toArray(inheritanceRepresentation)).toEqual(arrayRepresentation)
  })

  it('should convert an object containing string array to realm key value representation', () => {
    const objWithStringArray = { printings: ['AER', 'EDM'] }
    const realmRepresentation = {'printings': [{'printing': 'AER'}, {'printing': 'EDM'}]}

    expect(toRealmArray(objWithStringArray)).toEqual(realmRepresentation)
  })

  it('should realmKeyValueObjectArray', () => {
    const array = ['AER', 'EDM']
    const key = 'printings'
    const expectedArray = [{'printing': 'AER'}, {'printing': 'EDM'}]

    const keyValueArray = realmKeyValueObjectArray(key, array)

    expect(keyValueArray).toEqual(expectedArray)
  })
})
