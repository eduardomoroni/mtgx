// @flow

import Realm from 'realm'
import { toArray } from './conversion'
import { defaultConfig } from '../../configuration/realm'

let realm

// TODO: Improve this
type RealmResults = { [string]: any }
type RealmObject = Object
type RealmList = Object // TBD
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
  realm = new Realm(realmConfig)
}

function write (callback: Function): void {
  realm.write(callback)
}

function findAll (collection: string): RealmResults {
  return realm.objects(collection)
}

function closeRealm (): void {
  realm.close()
}

function objectForPrimaryKey (collection: string, key: keyType): ?RealmObject {
  return realm.objectForPrimaryKey(collection, key)
}

function remove (realmObject: RealmObject | Array<RealmObject> | RealmList | RealmResults) {
  write(() => { realm.delete(realmObject) })
}

function findBy (collection: string, query: string, ...args?: Array<string | number>) {
  return findAll(collection).filtered(query, ...args)
}

function create (type: string, properties: Object, update?: boolean = true): ?RealmObject {
  let inserted = null

  // TODO: This function shouldn't return null
  write(() => {
    inserted = realm.create(type, properties, update)
  })

  return inserted
}

function distinctValues (collection: string) {
  return toArray(findAll(collection).snapshot())
}

function removeFromCollection (collection: string, key: keyType) {
  const objectToRemove = objectForPrimaryKey(collection, key)
  if (objectToRemove) {
    remove(objectToRemove)
  }
}

function deleteAll () {
  // WARNING: This will delete all objects in the Realm!
  write(() => { realm.deleteAll() })
}
