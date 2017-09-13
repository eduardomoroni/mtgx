// @flow

import _ from 'lodash'
import { placeholdersToSymbols } from './placeholder'
import { realmKeyValueObjectArray } from './'

function isNumeric (num) {
  return !isNaN(num)
}

function isArrayOfStrings (array) {
  return Array.isArray(array) && typeof array[0] === 'string'
}

export const toRealmCard = (jsonCard: Object) => {
  let realmObject = _.cloneDeep(jsonCard)

  if (jsonCard.text) { realmObject.text = placeholdersToSymbols(jsonCard.text) }

  Object.entries(realmObject)
    .forEach(([key, value]) => {
      if (isNumeric(value) && !['power', 'toughness', 'number'].includes(key)) {
        realmObject[key] = parseInt(value)
      } else if (isArrayOfStrings(value)) {
        realmObject[key] = realmKeyValueObjectArray(key, value)
      }
    })

  delete realmObject.foreignNames
  delete realmObject.rulings

  return realmObject
}
