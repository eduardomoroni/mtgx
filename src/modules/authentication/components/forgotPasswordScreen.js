// @flow

import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { H1, Button, Input } from 'nachos-ui'
import { styles } from './styles/forgotPassword.style'

export class ForgotPasswordScreen extends Component {
  state = {
    email: ''
  }

  static propTypes = {
    resetPassword: PropTypes.func.isRequired
  }

  onForgotPasswordPressed = async () => {
    this.props.resetPassword(this.state.email)
  }

  render () {
    return (
      <View style={styles.container}>
        <H1>{I18n.t('RESET_PASSWORD')}</H1>
        <Input
          icon='ios-mail-outline'
          style={[styles.input]}
          placeholder={I18n.t('EMAIL')}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <Button
          kind='squared'
          type='success'
          style={[styles.button]}
          onPress={this.onForgotPasswordPressed}
        >
          {I18n.t('RESET_PASSWORD')}
        </Button>
      </View>
    )
  }
}
