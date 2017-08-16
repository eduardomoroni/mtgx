// @flow

import { Navigation } from 'react-native-navigation'
import InitScreen from '../../modules/shared/components/initScreen'

export function registerScreens () {
  Navigation.registerComponent('mtgx.init', () => InitScreen)
}
