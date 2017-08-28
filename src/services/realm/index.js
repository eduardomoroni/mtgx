
import { defaultConfig } from '../../configuration/realm'
import Realm from 'realm'

// eslint-disable-next-line no-unused-vars
let realm

export function changeRealm (realmConfig = defaultConfig) {
  realm = new Realm(realmConfig)
}
