import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { ManaSymbolBar } from './manaSymbolBar'
import { Field } from 'redux-form/immutable'

import { styles } from './styles/cardSearch.styles'

export class CardSearchScreen extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string)
  }

  render () {
    return (
      <View style={styles.container}>
        <Field name='cardColors' component={ManaSymbolBar} />
      </View>
    )
  }
}
