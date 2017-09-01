import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'
import _ from 'lodash'
import PropTypes, { string } from 'prop-types'

import { ManaSymbol, validColors } from './manaSymbol'
import { styles } from './styles/manaSymbolBar.styles'

export class ManaSymbolBar extends PureComponent {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.oneOfType([PropTypes.arrayOf(string), string]).isRequired
    })
  }

  toggleColor = (color) => {
    const { onChange, value } = this.props.input
    return onChange(_.xor(value, [color]))
  }

  renderManaSymbol = (color: string) => {
    const { value } = this.props.input
    const isSelected = value.includes(color)

    return (
      <TouchableOpacity key={color} onPressOut={() => this.toggleColor(color)} >
        <ManaSymbol color={color} isSelected={isSelected} />
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
