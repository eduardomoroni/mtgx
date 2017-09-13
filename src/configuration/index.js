// @flow

import { initLocales } from './i18n'
import { startApp } from './navigation'
import { initializeFirebase } from './firebase'
import { setNachosThemes } from './themes'
import { initRealm } from './realm'

export function initializeApp () {
  initRealm()
  initLocales()
  setNachosThemes()
  initializeFirebase()
  startApp()
}
