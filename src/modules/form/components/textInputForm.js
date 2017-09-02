// @flow

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TextInput, View } from 'react-native'
import { sharedStyles } from './styles/shared.styles'
import { InputLabel } from './index'

export class TextInputForm extends PureComponent {
  static propTypes = {
    keyboardType: TextInput.propTypes.keyboardType,
    maxLength: TextInput.propTypes.maxLength,
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
    })
  }

  render () {
    const { onChange, name } = this.props.input
    const { keyboardType, maxLength } = this.props

    return (
      <View style={sharedStyles.container}>
        <InputLabel label={name} onPress={() => { this.refs.TextInput.focus() }} />
        <TextInput
          ref='TextInput'
          style={sharedStyles.input}
          onChangeText={onChange}
          autoCorrect={false}
          autoCapitalize='characters'
          underlineColorAndroid='transparent'
          returnKeyType='next'
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
      </View>
    )
  }
}
