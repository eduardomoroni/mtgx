// @flow

import * as RealmService from './core'
import {
  toRealmCard,
  convertCardFormToRealmQueries
} from './conversion'
import type { Map } from 'immutable'

const cardCollection = 'Card'

const saveCard = (card: Object, update?: boolean = true) => {
  RealmService.create(cardCollection, card, update)
}

const findCardByID = (multiverseid: number) => {
  return RealmService.objectForPrimaryKey(cardCollection, multiverseid)
}

const findAllCards = () => {
  return RealmService.findAll(cardCollection)
}

const queryByForm = async (formFields: Map) => {
  const realmQueries = convertCardFormToRealmQueries(formFields)
  return findAllCards().filtered(realmQueries.join(' AND '))
}

const importFromJSON = (mtgJSON: Object) => {
  mtgJSON.cards.forEach(card => {
    try {
      saveCard(toRealmCard(card), true)
    } catch (e) {
      console.error(`Failed to insert ${card.name}:`, e)
      throw (e)
    }
  })
}

export {
  findCardByID,
  queryByForm,
  importFromJSON,
  saveCard,
  findAllCards
}
