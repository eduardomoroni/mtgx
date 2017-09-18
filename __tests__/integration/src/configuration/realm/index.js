// @flow

import { schema } from '../../../../../src/configuration/realm'
import { changeRealm, deleteAll, closeRealm } from '../../../../../src/services/realm/core'

let processUsingRealm = false

// Jest runs tests in parallel, this cause more than one Realm tests using realm at same time,
// this is a workaround to make sure that only one realm test uses realm db at same time.
export const connectDatabase = async () => {
  await setRandomTimeout(() => {
    // eslint-disable-next-line no-unmodified-loop-condition
    while (processUsingRealm) { /* wait until realm gets free */ }
    processUsingRealm = true
    changeRealm({ schema, path: `database/INTEGRATION_TEST.realm` })
  })
}

export const closeDatabase = () => {
  processUsingRealm = false
  deleteAll()
  closeRealm()
}

const randomNumberFromOneToHundred = () => Math.floor((Math.random() * 100) + 1)

const setRandomTimeout = callback => new Promise(resolve => {
  setTimeout(resolve(callback()), randomNumberFromOneToHundred())
})
