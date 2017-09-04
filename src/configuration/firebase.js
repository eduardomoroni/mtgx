// @flow

import { initialize } from '../services/firebase'

export function initializeFirebase () {
  const config = {
    debug: __DEV__ ? '*' : false,
    errorOnMissingPlayServices: false,
    persistence: true
  }

  initialize(config)
}
