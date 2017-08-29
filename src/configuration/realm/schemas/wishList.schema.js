// @flow

export const wishListSchema = {
  name: 'WishList',
  primaryKey: 'id',
  properties: {
    id: 'string',
    lastUpdate: 'date',
    lastSync: 'date',
    want: {type: 'list', objectType: 'CardList'},
    have: {type: 'list', objectType: 'CardList'}
  }
}
