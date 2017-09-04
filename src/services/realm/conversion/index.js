// @flow

import _ from 'lodash'

export { toRealmCard } from './json'
export { convertCardFormToRealmQueries } from './form'

type keyArrayValue = { [string]: Array<string> }

const singularize = (pluralWord: string) => {
  const convert = {
    types: 'type',
    subtypes: 'subType',
    colors: 'color',
    colorIdentity: 'colorIdentity',
    printings: 'printing',
    supertypes: 'superType'
  }

  return convert[pluralWord]
}

const realmKeyValueObjectArray = (key: string, array: Array<string>) => {
  return array.map(value => {
    return { [singularize(key)]: value }
  })
}

// https://github.com/realm/realm-js/issues/860 - realm does not have list of primitives
export const toArray = (realmRepresentation: Object) => {
  const detectKeyValue = (obj) => {
    const objKeys = _.keys(obj)
    return obj[objKeys[0]]
  }

  const withoutFieldName = _.mapValues(realmRepresentation, detectKeyValue)
  return _.toArray(withoutFieldName)
}

export const toRealmArray = (obj: keyArrayValue) => {
  let realmRepresentation = {}

  Object.entries(obj)
        .forEach(([key, val]) => {
          realmRepresentation[key] = realmKeyValueObjectArray(key, val)
        })

  return realmRepresentation
}
