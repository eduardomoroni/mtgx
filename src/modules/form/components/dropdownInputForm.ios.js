// @flow

import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { InputLabel } from './index'
import { sharedStyles } from './styles/shared.styles'

// TODO: This dropdown needs to be implemented
export class DropdownInputForm extends Component {
  render () {
    const { onChange, name } = this.props.input

    return (
      <View style={sharedStyles.container}>
        <InputLabel label={name} />
        <TextInput
          style={sharedStyles.input}
          onChangeText={onChange}
          autoCorrect={false}
          autoCapitalize='characters'
        />
      </View>
    )
  }
}

export default DropdownInputForm
