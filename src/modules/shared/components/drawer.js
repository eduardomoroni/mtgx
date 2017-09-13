// @flow

import React, { PureComponent } from 'react'
import I18n from 'react-native-i18n'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button } from 'nachos-ui'
import { menuDrawer } from '../../../constants/navigation'

import { styles } from './styles/drawer.style'

export class Drawer extends PureComponent {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  navigateTo = (link: string) => () => {
    this.props.navigator.handleDeepLink({ link })
    this.props.navigator.toggleDrawer(menuDrawer)
  }

  render () {
    return (
      <View style={styles.container}>
        <Button
          kind='squared'
          type='success'
          style={{ width: 300 }}
          onPress={this.navigateTo('authentication.login')}
        >
          {I18n.t('LOGIN')}
        </Button>
        <Button
          kind='squared'
          type='success'
          style={{ width: 300 }}
          onPress={this.navigateTo('card.search')}
        >
          {I18n.t('SEARCH')}
        </Button>
      </View>
    )
  }
}
