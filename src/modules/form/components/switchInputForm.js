// @flow

import React, { PureComponent } from 'react'
import { Switch, View } from 'react-native'
import { sharedStyles } from './styles/shared.styles'
import { InputLabel } from './'

// TODO: TEST THIS
export class SwitchInputForm extends PureComponent {
  render () {
    const { onChange, name, value } = this.props.input

    return (
      <View style={sharedStyles.container}>
        <InputLabel label={name} onPress={() => { this.refs.TextInput.focus() }} />
        <Switch value={value} onValueChange={onChange} />
      </View>
    )
  }
}
