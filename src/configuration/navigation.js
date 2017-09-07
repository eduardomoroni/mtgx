// @flow

import { Navigation } from 'react-native-navigation'

const theme = {
  tabBarBackgroundColor: 'white',
  navBarButtonColor: 'white',
  tabBarButtonColor: 'white',
  navBarTextColor: 'white',
  tabBarSelectedButtonColor: 'red',
  navigationBarColor: 'black',
  navBarBackgroundColor: 'white',
  statusBarColor: 'orange',
  tabFontFamily: 14
}

const tabs = [
  {
    label: 'Card Search Screen',
    screen: 'cardImage.search',
    // $FlowFixMe -> Figure out how to stub this
    icon: require('../assets/icons/swap.png'),
    navigatorStyle: {
      navBarHidden: true
    }
  }
]

export const tabBasedAppParams = {
  tabs,
  animationType: 'fade',
  tabsStyle: theme,
  appStyle: theme,
  drawer: {
    left: { screen: 'app.drawer' }
  }
}

export function startApp () {
  Navigation.startTabBasedApp(tabBasedAppParams)
}
