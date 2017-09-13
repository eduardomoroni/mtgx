// @flow

import { Navigation } from 'react-native-navigation'
import i18n from 'react-native-i18n'

export function startApp () {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'card.search',
      title: i18n.t('CARD_SEARCH')
    },
    drawer: {
      left: { screen: 'app.drawer' }
    }
  })
}
