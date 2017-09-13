// @flow

export const foreignNameSchema = {
  name: 'ForeignName',
  primaryKey: 'multiverseid',
  properties: {
    'language': 'string',
    'name': 'string',
    'multiverseid': {type: 'int', optional: true}
  }
}
