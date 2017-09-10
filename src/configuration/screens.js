// @flow

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { createMtgxStore } from './store'

import LoginScreen from '../modules/authentication/containers/loginContainer'
import SignUpScreen from '../modules/authentication/containers/signUpContainer'
import ForgotPasswordScreen from '../modules/authentication/containers/forgotPasswordContainer'
import CardSearchScreen from '../modules/cardSearch/containers/cardSearchContainer'
import SearchResultsScreen from '../modules/cardSearch/containers/searchResultsContainer'
import NotificationScreen from '../modules/shared/containers/notificationContainer'
import DrawerContainer from '../modules/shared/containers/drawerContainer'
import { CardDetailsScreen } from '../modules/cardSearch/components/cardDetailsScreen'

export function registerScreens () {
  const store = createMtgxStore()
  Navigation.registerComponent('authentication.login', () => LoginScreen, store, Provider)
  Navigation.registerComponent('authentication.signup', () => SignUpScreen, store, Provider)
  Navigation.registerComponent('authentication.forgotpassword', () => ForgotPasswordScreen, store, Provider)
  Navigation.registerComponent('notification', () => NotificationScreen, store, Provider)
  Navigation.registerComponent('app.drawer', () => DrawerContainer, store, Provider)
  Navigation.registerComponent('card.search', () => CardSearchScreen, store, Provider)
  Navigation.registerComponent('card.results', () => SearchResultsScreen, store, Provider)
  Navigation.registerComponent('card.details', () => CardDetailsScreen, store, Provider)
}
