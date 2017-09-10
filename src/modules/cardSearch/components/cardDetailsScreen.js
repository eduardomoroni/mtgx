// @flow

import I18n from 'react-native-i18n'
import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { styles } from './styles/cardDetailsScreen.styles'
import { CardImage } from './cardImage'
import { cardType } from '../types/cardType'

export class CardDetailsScreen extends Component {
  static propTypes = {
    card: cardType
  }

  renderRow = (rowName: string, rowText: string) => {
    if (rowText === null) {
      return null
    }

    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rowText}>
          <Text style={styles.rowName}>{`${I18n.t(rowName)}: `}</Text>
          {rowText}
        </Text>
      </View>
    )
  }

  render () {
    const { card } = this.props

    return (
      <ScrollView style={styles.container}>
        <CardImage style={styles.card} multiverseId={card.multiverseid} />
        {this.renderRow('CARD_NAME', card.name)}
        {this.renderRow('TYPE', card.type)}
        {this.renderRow('POWER_TOUGHNESS', `${card.power}/${card.toughness}`)}
        {this.renderRow('MANA_COST', `${card.manaCost} (${card.cmc})`)}
        {this.renderRow('RARITY', card.rarity)}
        {this.renderRow('CARD_TEXT', card.text)}
        {this.renderRow('FLAVOR_TEXT', card.flavor)}
      </ScrollView>
    )
  }
}
