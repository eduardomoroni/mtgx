// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { placeholdersToSymbols } from '../../../services/realm/conversion/placeholder' // TODO: REVISIT
import { cardType, printingsType } from '../types/cardType'
import { styles } from './styles/card.styles'

// TODO: REVISIT
export const getLastPrinting = (printings: printingsType) => {
  const keys = Object.keys(printings)
  const lastPrinting = printings[keys[keys.length - 1]]
  return lastPrinting.printing
}

export class Card extends Component {
  static propTypes = {
    showCardText: PropTypes.bool,
    card: cardType
  }

  renderCardNameAndMana = () => {
    const { name, manaCost } = this.props.card

    return (
      <View style={styles.lineContainer}>
        <View style={styles.leftWord}>
          <Text key='cardName' style={styles.cardNameText}>
            {name}
          </Text>
        </View>
        <View style={styles.rightWord}>
          <Text key='cardManaCost' style={styles.mana}>
            {placeholdersToSymbols(manaCost)}
          </Text>
        </View>
      </View>
    )
  }

  renderCardTypeAndEdition = () => {
    const { type, printings } = this.props.card

    return (
      <View style={styles.lineContainer}>
        <View style={styles.leftWord}>
          <Text key='cardType' style={styles.cardTypeText}>
            {type}
          </Text>
        </View>
        <View style={styles.rightWord}>
          <Text key='cardEdition'>
            {getLastPrinting(printings)}
          </Text>
        </View>
      </View>
    )
  }

  renderTextAndPower = () => {
    const { card, showCardText } = this.props
    const { text, power, toughness } = card

    return (
      <View style={styles.cardTextContainer}>
        <View style={styles.cardText}>
          <Text key='cardText' style={styles.text}>
            {showCardText ? text : ''}
          </Text>
        </View>
        <View style={styles.cardPower}>
          <Text key='cardPowerAndToughness' style={styles.cardPowerToughness}>
            {power || toughness ? `${power}/${toughness}` : ''}
          </Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderCardNameAndMana()}
        {this.renderCardTypeAndEdition()}
        {this.renderTextAndPower()}
      </View>
    )
  }
}
