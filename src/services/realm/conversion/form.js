// @flow

import type { Map } from 'immutable'

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

function arrayQuery (array: Array<any>, selector: string, operator?: string = 'OR'): string {
  return array.reduce((acc, current) => {
    return acc ? `${acc} ${operator} ${selector} "${current}"` : `${selector} "${current}"`
  }, '')
}

function numericQuery (key: string, value: any): string {
  return `${key} ${value.operator} ${value.number}`
}

function normalQuery (key: string, value: any): string {
  return `${key} "${value}"`
}

export const convertCardFormToRealmQueries = (cardForm: Map): Array<string> => {
  return Object.entries(cardForm.toJS())
      .map(([key, value]) => {
        const mappedKey = mapFormToRealm[key]
        if (Array.isArray(value)) {
          return arrayQuery(value, mappedKey)
        } else if (typeof value === 'object') {
          return numericQuery(mappedKey, value)
        } else {
          return normalQuery(mappedKey, value)
        }
      })
}
