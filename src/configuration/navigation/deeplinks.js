// @flow

import i18n from 'react-native-i18n'
import { screens } from './screens'

type eventType = {
  type: string,
  link: string
}

export function onNavigatorEvent ({type, link}: eventType) {
  if (type === 'DeepLink') {
    switch (link) {
      case screens.login.id:
        this.props.navigator.resetTo(
          {title: i18n.t('LOGIN'), screen: link}
        )
        break
      case screens.cardSearch.id:
        this.props.navigator.resetTo(
          {title: i18n.t('CARD_SEARCH'), screen: link}
        )
        break
    }
  }
}
