// @flow

import { Navigation } from 'react-native-navigation'
import i18n from 'react-native-i18n'

const navigatorStyle = {
  statusBarColor: 'blue',
  statusBarTextColorScheme: 'light',
  navigationBarColor: 'blue',
  navBarBackgroundColor: '#2b96bd',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'white',
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true
}

export function startApp () {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'card.search',
      title: i18n.t('CARD_SEARCH'),
      navigatorStyle
    },
    drawer: {
      left: { screen: 'app.drawer' }
    }
  })
}
