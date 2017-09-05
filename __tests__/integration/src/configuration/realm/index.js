// @flow

import { schema } from '../../../../../src/configuration/realm'
import { changeRealm, deleteAll, closeRealm } from '../../../../../src/services/realm'

let processUsingRealm

export const initializeDatabase = () => {
  // eslint-disable-next-line no-unmodified-loop-condition
  while (processUsingRealm) { /* I'm waiting until realm gets free */ }
  processUsingRealm = true
  changeRealm({ schema, path: `database/INTEGRATION_TEST.realm` })
}

export const cleanDatabase = () => {
  processUsingRealm = false
  deleteAll()
  closeRealm()
}
