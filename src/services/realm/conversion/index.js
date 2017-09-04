// @flow

import _ from 'lodash'

export { toRealmCard } from './json'

const mapFormToRealm = {
  cardName: 'name CONTAINS[c]',
  cardSubType: 'subtypes.subType =',
  cardType: 'types.type =',
  cardText: 'text CONTAINS[c]',
  cardColors: 'colors.color =',
  cardSet: 'printings.printing =',
  cardArtist: 'artist CONTAINS[c]',
  cardFlavorText: 'flavor CONTAINS[c]',
  cardCollectionNumber: 'number =',
  cardRarity: 'rarity =',
  cardColorsIdentity: 'colorIdentity.colorIdentity =',
  cardToughness: 'toughness',
  cardPower: 'power',
  cardCMC: 'cmc',
  cardFormat: 'legalities.format ='
}

function arrayToQuery (array, selector, operator) {
  return array.reduce((acc, current) => {
    return acc ? `${acc} ${operator} ${selector} "${current}"` : `${selector} "${current}"`
  }, '')
}

export const inheritanceToArray = (realmRepresentation: Object) => {
  const detectKeyValue = (obj) => {
    const objKeys = _.keys(obj)
    return obj[objKeys[0]]
  }

  const withoutFieldName = _.mapValues(realmRepresentation, detectKeyValue)
  return _.toArray(withoutFieldName)
}

export const convertCardFormToRealmQueries = (cardForm) => {
  return _.mapValues(cardForm, (value, key) => {
    if (value === undefined || mapFormToRealm[key] === undefined) {
      return undefined
    } else if (Array.isArray(value)) {
      return arrayToQuery(value, mapFormToRealm[key], 'OR')
    } else if (typeof value === 'object') {
      return `${mapFormToRealm[key]} ${value.operator} ${value.number}`
    } else {
      return `${mapFormToRealm[key]} "${value}"`
    }
  })
}
