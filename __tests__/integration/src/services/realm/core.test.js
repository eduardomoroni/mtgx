import { subTypeFixture, printingFixture } from '../../fixture/realm'
import { connectDatabase, closeDatabase } from '../../configuration/realm'
import {
  create,
  findAll,
  findBy,
  objectForPrimaryKey,
  distinctValues,
  removeFromCollection
} from '../../../../../src/services/realm/core'

describe('Realm Service', () => {
  beforeAll(() => {
    connectDatabase()
  })

  afterAll(() => {
    closeDatabase()
  })

  it('should create a new realm object', () => {
    const subType = create('SubType', subTypeFixture)
    expect(subType.subType).toEqual(subTypeFixture.subType)
  })

  it('should find all object from a collection', () => {
    const anotherRuleFixture = Object.assign({}, printingFixture)
    anotherRuleFixture.text = 'another text'

    const firstRule = create('Ruling', printingFixture, false)
    const secondRule = create('Ruling', anotherRuleFixture, false)
    const result = findAll('Ruling')

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual(firstRule)
    expect(result[1]).toEqual(secondRule)
  })

  it('should find an object based on a filter', () => {
    const collection = 'SuperType'
    const expectedSuperType = 'Land'

    create(collection, { superType: 'Instant' })
    create(collection, { superType: 'Sorcery' })
    create(collection, { superType: expectedSuperType })
    const result = findBy(collection, 'superType == $0', expectedSuperType)

    expect(result).toHaveLength(1)
    expect(result[0].superType).toEqual(expectedSuperType)
  })

  it('should searches for a Realm object by its primary key', () => {
    const collection = 'Color'
    const expectedColor = 'blue'

    create(collection, { color: 'red' })
    create(collection, { color: 'black' })
    create(collection, { color: expectedColor })
    const blue = objectForPrimaryKey(collection, expectedColor)

    expect(blue.color).toEqual(expectedColor)
  })

  it('should return and array of all distinct values from a collection', () => {
    const collection = 'SuperType'
    const superTypes = [ 'Instant', 'Sorcery', 'Land' ]

    create(collection, { superType: superTypes[0] })
    create(collection, { superType: superTypes[1] })
    create(collection, { superType: superTypes[2] })

    const values = distinctValues(collection)

    expect(values).toEqual(superTypes)
  })

  it('should remove an object collection from a collection', () => {
    const collection = 'Color'
    const colorToRemove = 'blue'

    create(collection, { color: 'red' })
    create(collection, { color: 'black' })
    create(collection, { color: colorToRemove })
    removeFromCollection(collection, colorToRemove)

    const result = findAll(collection)
    const blue = result.filtered('color == $0', colorToRemove)

    expect(result).toHaveLength(2)
    expect(blue).toHaveLength(0)
  })
})
