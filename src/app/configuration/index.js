// @flow

import { initLocales } from './i18n'
import { registerScreens } from './screens'
import { startApp } from './navigation'
import { initializeFirebase } from './firebase'

export default {
  initLocales,
  registerScreens,
  startApp,
  initializeFirebase
}
