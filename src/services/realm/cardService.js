// @flow

import _ from 'lodash'
import { cardType } from './representation/card'
import * as RealmService from './'
import {
  jsonToRealmCard,
  placeholdersToSymbols,
  convertCardFormToRealmQueries
} from './conversion'

const queryByForm = (form) => {
  const realmQueries = convertCardFormToRealmQueries(form)
  let results = RealmService.findAll('Card')

  _.each(realmQueries, (query) => {
    if (query !== undefined && query.length > 0) {
      results = results.filtered(query)
    }
  })

  return results
}

const saveCard = (card, update = true) => {
  RealmService.create('Card', card, update)
}

const findCardByID = (multiverseid: number) : cardType => {
  return RealmService.objectForPrimaryKey('Card', multiverseid)
}

const findAllCards = () => {
  return RealmService.findAll('Card')
}

const sortCards = (cards, sorting) => {
  const { field, reversed } = sorting.sortBy
  return cards.sorted(field, reversed)
}

const importFromJSON = (mtgJson) => {
  mtgJson.cards.forEach((card) => {
    card.text = placeholdersToSymbols(card.text)
    const cardAsRealmObject = jsonToRealmCard(card)
    try {
      saveCard(cardAsRealmObject, true)
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
