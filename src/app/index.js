// @flow

import { startApp, registerScreens, initLocales, initializeFirebase } from './configuration'

initLocales()
registerScreens()
initializeFirebase()
startApp()
