// @flow

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { createMtgxStore } from './store'

import InitScreen from '../modules/shared/components/initScreen'

export function registerScreens () {
  const store = createMtgxStore()
  Navigation.registerComponent('mtgx.init', () => InitScreen, store, Provider)
}
