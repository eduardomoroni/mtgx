import { Map } from 'immutable'

export const aerialModificationForm = Map({
  COLLECTION_NUMBER: '1',
  ARTIST: 'Jung Park',
  COLORS: ['White'],
  CMC: {number: 5, operator: '<='},
  SUB_TYPE: 'Aura',
  COLOR_IDENTITY: ['W'],
  CARD_NAME: 'Aerial Modification',
  TYPE: 'Enchantment',
  CARD_TEXT: 'Enchant',
  RARITY: ['Uncommon'],
  SET: ['AER']
})

export const formFields = Map({
  COLLECTION_NUMBER: '1',
  POWER: {number: 0, operator: '='},
  ARTIST: 'ARTIST',
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

export const formFieldsQuery = [
  'number = "1"',
  'power = 0',
  'artist CONTAINS[c] "ARTIST"',
  'flavor CONTAINS[c] "FLAVOR"',
  'colors.color = "blue" OR colors.color = "red"',
  'toughness > 1',
  'cmc < 5',
  'subtypes.subType = "SUBTYPE"',
  'colorIdentity.colorIdentity = "green" OR colorIdentity.colorIdentity = "black" OR colorIdentity.colorIdentity = "white"',
  'name CONTAINS[c] "NAME"',
  'types.type = "TYPE"',
  'text CONTAINS[c] "TEXT"',
  'rarity = "Uncommon" OR rarity = "Mythic Rare"',
  'printings.printing = "Khans of Tarkir"',
  'legalities.format = "Legacy" OR legalities.format = "Modern"'
]
