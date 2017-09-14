// @flow

import i18n from 'react-native-i18n'
import { screens } from './screens'

type eventType = {
  type: string,
  link: string
}

export function onNavigatorEvent ({type, link}: eventType) {
  if (type === 'DeepLink') {
    let title

    switch (link) {
      case screens.login.id:
        title = i18n.t('LOGIN')
        break
      case screens.cardSearch.id:
        title = i18n.t('CARD_SEARCH')
        break
    }

    this.props.navigator.resetTo({title, screen: link})
  }
}
