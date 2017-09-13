// @flow

import LoginScreen from '../../modules/authentication/containers/loginContainer'
import SignUpScreen from '../../modules/authentication/containers/signUpContainer'
import ForgotPasswordScreen from '../../modules/authentication/containers/forgotPasswordContainer'
import CardSearchScreen from '../../modules/cardSearch/containers/cardSearchContainer'
import SearchResultsScreen from '../../modules/cardSearch/containers/searchResultsContainer'
import NotificationScreen from '../../modules/shared/containers/notificationContainer'
import DrawerContainer from '../../modules/shared/containers/drawerContainer'
import CardDetailsScreen from '../../modules/cardSearch/containers/cardDetailsContainer'

export const screens = {
  login: {
    id: 'authentication.login',
    component: LoginScreen
  },
  signup: {
    id: 'authentication.signup',
    component: SignUpScreen
  },
  forgotPassword: {
    id: 'authentication.forgotpassword',
    component: ForgotPasswordScreen
  },
  notification: {
    id: 'notification',
    component: NotificationScreen
  },
  menuDrawer: {
    id: 'app.drawer',
    component: DrawerContainer
  },
  cardSearch: {
    id: 'card.search',
    component: CardSearchScreen
  },
  cardResults: {
    id: 'card.results',
    component: SearchResultsScreen
  },
  cardDetails: {
    id: 'card.details',
    component: CardDetailsScreen
  }
}
