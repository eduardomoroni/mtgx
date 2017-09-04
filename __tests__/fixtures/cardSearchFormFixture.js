import { Map } from 'immutable'

export const formFields = Map({
  COLLECTION_NUMBER: '1',
})

const test = Map({
  POWER: {number: 0, operator: '='},
  ARTIST: 'ARTIST',
  COLLECTION_NUMBER: '12',
  FLAVOR_TEXT: 'FLAVOR',
  COLORS: ['blue', 'red'],
  TOUGHNESS: {number: 1, operator: '>'},
  CMC: {number: 5, operator: '<'},
  SUB_TYPE: 'SUBTYPE',
  COLOR_IDENTITY: ['green', 'black', 'white'],
  CARD_NAME: 'NAME',
  TYPE: 'TYPE',
  CARD_TEXT: 'TEXT',
  RARITY: ['Uncommon', 'Mythic Rare'],
  SET: ['Khans of Tarkir'],
  FORMAT: ['Legacy', 'Modern']
})
