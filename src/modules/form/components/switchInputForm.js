// @flow

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Switch, View } from 'react-native'
import { sharedStyles } from './styles/shared.styles'
import { InputLabel } from './'

export class SwitchInputForm extends PureComponent {
  static propTypes = {
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      value: PropTypes.bool
    })
  }

  render () {
    const { onChange, name, value } = this.props.input

    return (
      <View style={sharedStyles.container}>
        <InputLabel label={name} onPress={() => { this.refs.Switch.focus() }} />
        <Switch value={value} onValueChange={onChange} />
      </View>
    )
  }
}
