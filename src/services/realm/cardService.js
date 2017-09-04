// @flow

import _ from 'lodash'
import { cardType } from './representation/card'
import * as RealmService from './'
import {
  toRealmCard,
  convertCardFormToRealmQueries
} from './conversion'

const cardCollection = 'Card'

const queryByForm = (form) => {
  const realmQueries = convertCardFormToRealmQueries(form)
  let results = findAllCards()

  _.each(realmQueries, query => {
    if (query) {
      results = results.filtered(query)
    }
  })

  return results
}

const saveCard = (card, update = true) => {
  RealmService.create(cardCollection, card, update)
}

const findCardByID = (multiverseid: number) : cardType => {
  return RealmService.objectForPrimaryKey(cardCollection, multiverseid)
}

const findAllCards = () => {
  return RealmService.findAll(cardCollection)
}

const sortCards = (cards, sorting) => {
  const { field, reversed } = sorting.sortBy
  return cards.sorted(field, reversed)
}

const importFromJSON = (mtgJSON) => {
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
  sortCards,
  queryByForm,
  importFromJSON,
  saveCard,
  findAllCards
}
