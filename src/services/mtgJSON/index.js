// @flow

import { importFromJSON } from '../realm/cardService'
import { log } from '../logger'
// $FlowFixMe
import { sets } from '../../assets/cards'

export const importAllSets = () => {
  for (const set in sets) {
    if (sets.hasOwnProperty(set)) {
      log(`importing ${set} set...`)
      importFromJSON(sets[set])
    }
  }
}
