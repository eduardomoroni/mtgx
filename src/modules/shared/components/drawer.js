// @flow

import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button } from 'nachos-ui'
import { styles } from './styles/drawer.style'

export class Drawer extends Component {
  static propTypes = {
    navigateTo: PropTypes.func.isRequired
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
          onPress={() => this.props.navigateTo('cardImage.search')}
        >
          {I18n.t('SEARCH')}
        </Button>
      </View>
    )
  }
}
