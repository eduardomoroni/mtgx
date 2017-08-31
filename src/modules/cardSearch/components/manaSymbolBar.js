import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'
import _ from 'lodash'
import PropTypes from 'prop-types'

import { ManaSymbol, validColors } from './manaSymbol'
import { styles } from './styles/manaSymbolBar.test'

export class ManaSymbolBar extends PureComponent {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.oneOfType(PropTypes.arrayOf(PropTypes.string), PropTypes.string).isRequired
    })
  }

  renderManaSymbol = (color: string) => {
    const { onChange, value } = this.props.input
    const selectedColors = value
    const isSelected = selectedColors.includes(color)
    const toggleColor = (color) => { onChange(_.xor(selectedColors, [color])) }

    return (
      <TouchableOpacity key={color} onPressOut={() => toggleColor(color)} >
        <ManaSymbol color={color}
          style={[styles.manaIcon, {opacity: isSelected ? 1 : 0.25}]}
        />
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        { validColors.map(this.renderManaSymbol) }
      </View>
    )
  }
}
