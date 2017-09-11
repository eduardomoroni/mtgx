// @flow

import React, { PureComponent } from 'react'
import I18n from 'react-native-i18n'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button } from 'nachos-ui'
import { styles } from './styles/drawer.style'

export class Drawer extends PureComponent {
  static propTypes = {
    navigateTo: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <Button
          kind='squared'
          type='success'
          style={{ width: 300 }}
          onPress={() => this.props.navigateTo('authentication.login')}
        >
          {I18n.t('LOGIN')}
        </Button>
        <Button
          kind='squared'
          type='success'
          style={{ width: 300 }}
          onPress={() => this.props.navigateTo('card.search')}
        >
          {I18n.t('SEARCH')}
        </Button>
      </View>
    )
  }
}
