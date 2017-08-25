// @flow

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { createMtgxStore } from './store'

import LoginScreen from '../modules/authentication/containers/loginContainer'

export function registerScreens () {
  const store = createMtgxStore()
  Navigation.registerComponent('authentication.login', () => LoginScreen, store, Provider)
}
