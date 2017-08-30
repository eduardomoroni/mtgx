// @flow

export const cardListSchema = {
  name: 'CardList',
  properties: {
    multiverseid: {type: 'int', indexed: true},
    amount: {type: 'int', default: 1},
    card: 'Card'
  }
}
