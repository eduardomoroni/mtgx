// @flow

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { InputLabel } from './index'
import { styles } from './styles/modalToggle.styles'

export class ModalToggle extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  haveSomeValueSelected = () => {
    const { selected } = this.props
    return selected !== undefined && selected.length > 0
  }

  render () {
    const { label, onPress } = this.props
    let background = this.haveSomeValueSelected() ? { backgroundColor: 'cornsilk' } : {}

    return (
      <TouchableOpacity style={[styles.modalToggle, background]} onPress={() => onPress(label)} >
        <InputLabel label={label} onPress={() => onPress(label)} />
      </TouchableOpacity>
    )
  }
}
