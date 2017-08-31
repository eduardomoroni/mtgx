import React, { Component } from 'react'
import { View } from 'react-native'
import { ManaSymbolBar } from './manaSymbolBar'

import { styles } from './styles/cardSearch.styles'

export class CardSearchScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ManaSymbolBar input={{onChange: (value) => console.log(value), value: 'TESTE'}} />
      </View>
    )
  }
}
