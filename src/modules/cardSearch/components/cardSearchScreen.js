import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { ManaSymbolBar } from './manaSymbolBar'
import { Field } from 'redux-form/immutable'

import {
  TextInputForm,
  NumericInputForm,
  DropdownInputForm
} from '../../form/components'

import { styles } from './styles/cardSearch.styles'

export class CardSearchScreen extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.arrayOf(PropTypes.string),
    subtypes: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    subType: PropTypes.string
  }

  render () {
    const numericOperators = ['', '<', '<=', '=', '>=', '=']
    const {
      type,
      types,
      subType,
      subTypes,
      colors
    } = this.props

    return (
      <View style={styles.container}>
        {/* TODO: Add selectedColor funcionality */}
        <Field name='COLORS' component={ManaSymbolBar} selectedColor={colors} />
        <Field name='COLOR_IDENTITY' component={ManaSymbolBar} />
        <Field name='TYPE' component={DropdownInputForm} dropdownItems={types} selectedValue={type} />
        <Field name='SUB_TYPE' component={DropdownInputForm} dropdownItems={subTypes} selectedValue={subType} />
        <Field name='POWER' component={NumericInputForm} dropdownItems={numericOperators} />
        <Field name='TOUGHNESS' component={NumericInputForm} dropdownItems={numericOperators} />
        <Field name='CMC' component={NumericInputForm} dropdownItems={numericOperators} />
        <Field name='CARD_NAME' component={TextInputForm} />
        <Field name='CARD_TEXT' component={TextInputForm} />
        <Field name='FLAVOR_TEXT' component={TextInputForm} />
        <Field name='ARTIST' component={TextInputForm} />
        <Field name='COLLECTION_NUMBER' component={TextInputForm} keyboardType={'numeric'} maxLength={3} />
      </View>
    )
  }
}
