// @flow

import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import { View, TouchableOpacity } from 'react-native'
import { H1, Strong } from 'nachos-ui'
import { styles } from './styles/loginScreenStyle'
import { EmailPasswordForm } from './emailPasswordForm'

export class LoginScreen extends Component {
  onSignInPressed = async (email: string, password: string) => {
    this.props.logUserIn(email, password)
  }

  onSignUpPressed = async () => {
  }

  onForgotPasswordPressed = async () => {
  }

  render () {
    return (
      <View style={styles.container}>
        <H1>{I18n.t('LOGIN')}</H1>
        <EmailPasswordForm
          buttonText={I18n.t('LOGIN')}
          buttonCallback={this.onSignInPressed}
        />
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.onForgotPasswordPressed}>
            <Strong style={[styles.strong]}>
              {I18n.t('FORGOT_YOUR_PASSWORD?')}
            </Strong>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onSignUpPressed}>
            <Strong style={[styles.strong]}>
              {I18n.t('DONT_HAVE_ACCOUNT?')}
            </Strong>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
