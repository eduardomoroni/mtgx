// @flow

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

const shouldBeAndInt = (key) => {
  const intProperties = ['cmc', 'multiverseid', 'power', 'toughness']
  return intProperties.includes(key)
}

const isArrayOfString = (key) => {
  return convertionMap[key]
}


export const inheritanceToArray = (realmRepresentation: Object) => {
  const detectKeyValue = (obj) => {
    const objKeys = _.keys(obj)
    return obj[objKeys[0]]
  }

  const withoutFieldName = _.mapValues(realmRepresentation, detectKeyValue)
  return _.toArray(withoutFieldName)
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
