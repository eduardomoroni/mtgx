// @flow

import { schema } from '../../../../../src/configuration/realm'
import { changeRealm, deleteAll, closeRealm } from '../../../../../src/services/realm/core'

let processUsingRealm

// TODO: THIS TEST IS FLAKY, SOLVE THIS
export const connectDatabase = () => {
  // eslint-disable-next-line no-unmodified-loop-condition
  while (processUsingRealm) { /* I'm waiting until realm gets free */ }
  processUsingRealm = true
  changeRealm({ schema, path: `database/INTEGRATION_TEST.realm` })
}

export const closeDatabase = () => {
  processUsingRealm = false
  deleteAll()
  closeRealm()
}
