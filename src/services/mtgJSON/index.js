// @flow

// $FlowFixMe
import { importFromJSON } from '../realm/cardService'
import { sets } from '../../assets/cards'
import { log } from '../logger'

export const importAllSets = () => {
  for (const set in sets) {
    if (sets.hasOwnProperty(set)) {
      log(`importing ${set} set...`)
      importFromJSON(sets[set])
    }
  }
}
