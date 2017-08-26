// @flow

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { createMtgxStore } from './store'

import LoginScreen from '../modules/authentication/containers/loginContainer'
import SignUpScreen from '../modules/authentication/containers/signUpContainer'
import ForgotPasswordScreen from '../modules/authentication/containers/forgotPasswordContainer'

export function registerScreens () {
  const store = createMtgxStore()
  Navigation.registerComponent('authentication.login', () => LoginScreen, store, Provider)
  Navigation.registerComponent('authentication.signup', () => SignUpScreen, store, Provider)
  Navigation.registerComponent('authentication.forgotpassword', () => ForgotPasswordScreen, store, Provider)
}
