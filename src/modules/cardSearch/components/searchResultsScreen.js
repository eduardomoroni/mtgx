import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/cardSearch.styles'

export class SearchResultsScreen extends Component {
  static propTypes = {
    dataSource: PropTypes.object.isRequired
  }

  render () {
    return (
      <View
        style={styles.container}
        dataSource={this.props.dataSource}
      />
    )
  }
}
