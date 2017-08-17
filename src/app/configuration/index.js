// @flow

import { initLocales } from './i18n'
import { registerScreens } from './screens'
import { startApp } from './navigation'
import { initializeFirebase } from './firebase'
import { setNachosThemes } from './themes'

export default {
  initLocales,
  registerScreens,
  startApp,
  initializeFirebase,
  setNachosThemes
}
