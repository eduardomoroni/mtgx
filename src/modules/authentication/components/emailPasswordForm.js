// @flow

import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import I18n from 'react-native-i18n'
import { View } from 'react-native'
import { Input, Button } from 'nachos-ui'
import { styles } from './styles/emailPasswordForm.style'

export class EmailPasswordForm extends Component {
  state = {
    email: '',
    password: ''
  }

  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonCallback: PropTypes.func.isRequired
  }

  render () {
    const { buttonCallback, buttonText } = this.props
    const { email, password } = this.state

    return (
      <View>
        <Input
          icon='ios-mail-outline'
          style={[styles.input]}
          placeholder={I18n.t('EMAIL')}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <Input
          icon='ios-lock-outline'
          style={[styles.input]}
          placeholder={I18n.t('PASSWORD')}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <Button
          kind='squared'
          type='success'
          style={[styles.button]}
          onPress={() => buttonCallback(email, password)}
        >
          {buttonText}
        </Button>
      </View>
    )
  }
}
