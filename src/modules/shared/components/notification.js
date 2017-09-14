// @flow

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/notification.style'

export class Notification extends PureComponent {
  static propTypes = {
    message: PropTypes.string.isRequired
  }

  render () {
    if (!this.props.message) { return null }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>In-App Notification</Text>
        <Text style={styles.content}>{this.props.message}</Text>
      </View>
    )
  }
}
