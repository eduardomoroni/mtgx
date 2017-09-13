// @flow

type eventType = {
  type: string,
  id?: string,
  link?: string
}

export const inAppNotification = {
  screen: 'notification',
  autoDismissTimerSec: 1
}

export const menuDrawer = { side: 'left' }

export function onNavigatorEvent (event: eventType) {
  if (event.type === 'DeepLink') {
    if (event.link === 'authentication.login') {
      this.props.navigator.resetTo({ screen: event.link })
    } else if (event.link === 'card.search') {
      this.props.navigator.resetTo({ screen: event.link })
    }
  }
}
