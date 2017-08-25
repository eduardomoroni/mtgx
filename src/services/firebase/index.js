// @flow

import RNFirebase from 'react-native-firebase'
import { initializeAuth } from './authentication'

export function initialize (options: Object, name: string) {
  const firebase = RNFirebase.initializeApp(options, name)
  initializeAuth(firebase.auth())
}
