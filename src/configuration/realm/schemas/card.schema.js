// @flow

export const cardSchema = {
  name: 'Card',
  primaryKey: 'id',
  properties: {
    'artist': 'string',
    'id': 'string',
    'name': 'string',
    'number': 'int',
    'rarity': 'string',
    'type': 'string',
    'imageName': {type: 'string', optional: true},
    'layout': {type: 'string', optional: true},
    'manaCost': {type: 'string', optional: true},
    'originalText': {type: 'string', optional: true},
    'originalType': {type: 'string', optional: true},
    'flavor': {type: 'string', optional: true},
    'text': {type: 'string', optional: true},
    'cmc': {type: 'int', optional: true},
    'power': {type: 'int', optional: true},
    'toughness': {type: 'int', optional: true},
    'multiverseid': {type: 'int', indexed: true},
    'types': {type: 'list', objectType: 'Type'},
    'subtypes': {type: 'list', objectType: 'SubType'},
    'colors': {type: 'list', objectType: 'Color'},
    'colorIdentity': {type: 'list', objectType: 'ColorIdentity'},
    'printings': {type: 'list', objectType: 'Printing'},
    'foreignNames': {type: 'list', objectType: 'ForeignName'},
    'rulings': {type: 'list', objectType: 'Ruling'},
    'superTypes': {type: 'list', objectType: 'SuperType'},
    'legalities': {type: 'list', objectType: 'Legality'}
  }
}
