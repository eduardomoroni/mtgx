// @flow

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/notification.style'

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>In-App Notification</Text>
        <Text style={styles.content}>{this.props.message}</Text>
      </View>
    )
  }
}
