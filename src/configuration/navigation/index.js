// @flow

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import { createMtgxStore } from '../store'
import { navigatorStyle } from '../../constants/navigation'
import { screens } from './screens'

const INITIAL_SCREEN = { screen: 'card.search', navigatorStyle }

function registerScreens () {
  const store = createMtgxStore()

  for (const screen in screens) {
    const { id, component } = screens[screen]
    Navigation.registerComponent(id, () => component, store, Provider)
  }
}

export function startApp () {
  registerScreens()

  Navigation.startSingleScreenApp({
    screen: INITIAL_SCREEN,
    drawer: {
      left: { screen: 'app.drawer' }
    }
  })
}
