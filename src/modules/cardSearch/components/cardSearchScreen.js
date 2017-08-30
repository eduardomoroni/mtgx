import React, { Component } from 'react'
import { View } from 'react-native'
import { ManaSymbol } from './manaSymbol'

import { styles } from './styles/cardSearch.styles'

export class CardSearchScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ManaSymbol color='blue' />
      </View>
    )
  }
}
