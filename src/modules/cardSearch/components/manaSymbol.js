// @flow

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'
import { styles } from './styles/manaSymbol.styles'

// $FlowFixMe Required module not found
import mana from '../../../assets/manas'

export const validColors = ['black', 'blue', 'green', 'red', 'white']

export class ManaSymbol extends PureComponent {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    color: PropTypes.oneOf(validColors).isRequired
  }

  render () {
    return <Image
      style={[styles.manaIcon, {opacity: this.props.isSelected ? 1 : 0.25}]}
      source={mana[this.props.color]}
          />
  }
}
