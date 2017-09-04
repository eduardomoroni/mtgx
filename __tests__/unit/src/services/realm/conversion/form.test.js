import { convertCardFormToRealmQueries } from '../../../../../../src/services/realm/conversion/form'
import { formFields, formFieldsQuery } from '../../../../../fixtures/cardSearchFormFixture'
import { Map } from 'immutable'

describe('Realm form conversion', () => {
  it('should convert a simple field to a realm query', () => {
    const simpleField = Map({ COLLECTION_NUMBER: '1' })
    const query = convertCardFormToRealmQueries(Map(simpleField))
    expect(query).toEqual(['number = "1"'])
  })

  it('should convert an array field to a realm query', () => {
    const arrayField = {COLOR_IDENTITY: ['black', 'white']}
    const query = convertCardFormToRealmQueries(Map(arrayField))
    const expected = ['colorIdentity.colorIdentity = "black" OR colorIdentity.colorIdentity = "white"']
    expect(query).toEqual(expected)
  })

  it('should convert a numeric input field to a realm query', () => {
    const simpleField = Map({ CMC: {number: 5, operator: '<'} })
    const query = convertCardFormToRealmQueries(simpleField)
    const expected = ['cmc < 5']
    expect(query).toEqual(expected)
  })

  it('should convert an entire form to a realm query', () => {
    const query = convertCardFormToRealmQueries(formFields)
    expect(query.sort()).toEqual(formFieldsQuery.sort())
  })
})
