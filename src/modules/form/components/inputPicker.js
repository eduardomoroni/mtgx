// @flow

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { styles } from './styles/inputPicker.styles'
import { Picker } from 'react-native'

export class InputPicker extends PureComponent {
  static propTypes = {
    selectedValue: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
    dropdownItems: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  static defaultProps = {
    selectedValue: ''
  }

  renderPickerItem = (value: number, key: string) => {
    return <Picker.Item label={value} value={value} key={key} />
  }

  render () {
    const { selectedValue, onValueChange, dropdownItems } = this.props

    return (
      <Picker
        style={styles.inputPicker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        { dropdownItems.map(this.renderPickerItem) }
      </Picker>
    )
  }
}
