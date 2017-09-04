import { Map } from 'immutable'

const mapFormToRealm = {
  CARD_NAME: 'name CONTAINS[c]',
  SUB_TYPE: 'subtypes.subType =',
  TYPE: 'types.type =',
  CARD_TEXT: 'text CONTAINS[c]',
  COLORS: 'colors.color =',
  SET: 'printings.printing =',
  ARTIST: 'artist CONTAINS[c]',
  FLAVOR_TEXT: 'flavor CONTAINS[c]',
  COLLECTION_NUMBER: 'number =',
  RARITY: 'rarity =',
  COLOR_IDENTITY: 'colorIdentity.colorIdentity =',
  TOUGHNESS: 'toughness',
  POWER: 'power',
  CMC: 'cmc',
  FORMAT: 'legalities.format ='
}

function arrayToQuery (array, selector, operator = 'OR') {
  return array.reduce((acc, current) => {
    return acc ? `${acc} ${operator} ${selector} "${current}"` : `${selector} "${current}"`
  }, '')
}

export const convertCardFormToRealmQueries = (cardForm: Map): Array<String> => {
  return Object.entries(cardForm.toJS())
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return arrayToQuery(value, mapFormToRealm[key])
        } else if (typeof value === 'object') {
          return `${mapFormToRealm[key]} ${value.operator} ${value.number}`
        } else {
          return `${mapFormToRealm[key]} "${value}"`
        }
      })
}
