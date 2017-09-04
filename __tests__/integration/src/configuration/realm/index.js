// @flow

// FIXME: Jest roda os testes de integração em paralelo, o que faz com que diferentes
//        processos usem o realm ao mesmo tempo.
// TODO: Procurar uma maneira melhor de lidar com isto

import { schema } from '../../../../../src/configuration/realm'
import { changeRealm, deleteAll, closeRealm } from '../../../../../src/services/realm'

let processUsingRealm: number = 0
const nobodyIsUsingRealm = () => processUsingRealm === 0

export const initializeDatabase = () => {
  if (nobodyIsUsingRealm()) {
    changeRealm({ schema, path: 'database/INTEGRATION_TEST.realm' })
  }

  processUsingRealm++
}

export const cleanDatabase = () => {
  processUsingRealm--
  deleteAll()

  if (nobodyIsUsingRealm()) {
    closeRealm()
  }
}
