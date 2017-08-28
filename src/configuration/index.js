// @flow

import { initLocales } from './i18n'
import { registerScreens } from './screens'
import { startApp } from './navigation'
import { initializeFirebase } from './firebase'
import { setNachosThemes } from './themes'
import { changeRealm } from '../services/realm'

export function initializeApp () {
  initLocales()
  setNachosThemes()
  registerScreens()
  initializeFirebase()
  startApp()
  changeRealm()
}
