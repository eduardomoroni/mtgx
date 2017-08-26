// @flow

import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { H1 } from 'nachos-ui'
import { styles } from './styles/loginScreen.style'
import { EmailPasswordForm } from './emailPasswordForm'

export class SignUpScreen extends Component {
  static propTypes = {
    signUpUser: PropTypes.func.isRequired
  }

  onSignUpPressed = async (email: string, password: string) => {
    this.props.signUpUser(email, password)
  }

  render () {
    return (
      <View style={styles.container}>
        <H1>{I18n.t('SIGNUP')}</H1>
        <EmailPasswordForm
          buttonText={I18n.t('SIGNUP')}
          buttonCallback={this.onSignUpPressed}
        />
      </View>
    )
  }
}
