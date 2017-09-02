// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput, Text, View } from 'react-native'
import I18n from 'react-native-i18n'
import { sharedStyles } from './styles/shared.styles'

// TODO: Need to refactor hard this component
export class NumericInputForm extends Component {
  static propTypes = {
    dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  changeNumber = (newValue: string) => {
    const { onChange, value } = this.props.input

    const newInput = {
      number: parseInt(newValue),
      operator: value.operator
    }

    onChange(newInput)
  }

  changeOperator = (newValue: string, index: string) => {
    const { onChange, value } = this.props.input

    const newInput = {
      number: value.number,
      operator: newValue
    }

    onChange(newInput)
  }

  render () {
    const { name } = this.props.input
    let { value } = this.props.input
    value = value || {number: 0, operator: ''}

    return (
      <View style={sharedStyles.container}>
        <Text style={sharedStyles.text} >
          {`${I18n.t(name)} ${value.operator}`}
        </Text>
        <TextInput
          ref='TextInput'
          style={sharedStyles.input}
          onChangeText={this.changeOperator}
          underlineColorAndroid='transparent'
          keyboardType={'numeric'}
          maxLength={2}
          returnKeyType='next'
        />
        <TextInput
          ref='TextInput'
          style={sharedStyles.input}
          onChangeText={this.changeNumber}
          underlineColorAndroid='transparent'
          keyboardType={'numeric'}
          maxLength={2}
          returnKeyType='next'
        />
      </View>
    )
  }
}
