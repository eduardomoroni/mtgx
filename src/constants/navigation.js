// @flow

import { screens } from '../configuration/navigation/screens'

export const inAppNotification = {
  screen: screens.notification.id,
  autoDismissTimerSec: 1
}

export const menuDrawer = { side: 'left' }

export const navigatorStyle = {
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
  tabBarHidden: true
}
