import _ from 'lodash'
import { placeholdersToSymbols } from './placeholder'

const convertionMap = {
  types: 'type',
  subtypes: 'subType',
  colors: 'color',
  colorIdentity: 'colorIdentity',
  printings: 'printing',
  supertypes: 'superType'
}

const shouldBeAndInt = (key) => {
  const intProperties = ['cmc', 'multiverseid', 'power', 'toughness']
  return intProperties.includes(key)
}

const isArrayOfString = (key) => {
  return convertionMap[key]
}

export const toRealmCard = (jsonCard: Object) => {
  let realmObject = _.cloneDeep(jsonCard)
  realmObject.text = placeholdersToSymbols(jsonCard.text)

  _.forEach(realmObject, (value, key) => {
    if (isArrayOfString(key)) {
      realmObject[key] = _.map(jsonCard[key], fieldValue => {
        return {[convertionMap[key]]: fieldValue}
      })
    } else if (shouldBeAndInt(key)) {
      realmObject[key] = parseInt(value) // TODO: Test this
    }
  })

  return realmObject
}
