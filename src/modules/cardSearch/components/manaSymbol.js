// @flow

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import mana from '../../../assets/manas'
import { Image } from 'react-native'

export const validColors = ['black', 'blue', 'green', 'red', 'white']

export class ManaSymbol extends PureComponent {
  static propTypes = {
    style: PropTypes.any,
    color: PropTypes.oneOf(validColors).isRequired
  }

  render () {
    return <Image style={this.props.style} source={mana[this.props.color]} />
  }
}
