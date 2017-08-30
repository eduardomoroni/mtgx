// @flow

import Realm from 'realm'
import { inheritanceToArray } from './conversion'
import { defaultConfig } from '../../configuration/realm'

let realm

// TODO: Improve this
type RealmResults = { [string]: Object }
type keyType = number | string

export {
  changeRealm,
  closeRealm,
  deleteAll,
  create,
  findAll,
  findBy,
  objectForPrimaryKey,
  distinctValues,
  removeFromCollection
}

function changeRealm (realmConfig: Object = defaultConfig) {
  // TODO: Descobrir a diferença entre new Realm e Realm.open
  realm = new Realm(realmConfig)
}

function write (callback: Function) {
  realm.write(callback)
}

function findAll (collection: string): RealmResults {
  return realm.objects(collection)
}

function closeRealm () {
  realm.close()
}

function objectForPrimaryKey (collection: string, key: keyType) {
  return realm.objectForPrimaryKey(collection, key)
}

function remove (realmObject: Object) {
  write(() => {
    realm.delete(realmObject)
  })
}

function findBy (collection: string, query: string, ...args?: Array<any>) {
  return findAll(collection).filtered(query, ...args)
}

function create (type: string, properties: Object, update?: boolean = true): Object {
  let inserted = null

  write(() => {
    inserted = realm.create(type, properties, update)
  })

  return inserted
}

function distinctValues (collection: string) {
  return inheritanceToArray(findAll(collection).snapshot())
}

function deleteAll () {
  write(() => { realm.deleteAll() })
}

function removeFromCollection (collection: string, key: keyType) {
  remove(objectForPrimaryKey(collection, key))
}
