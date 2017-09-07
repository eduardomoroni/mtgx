import React, { Component } from 'react'
import { View, ListView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { CardImage } from '../components/cardImage'
import { Card } from '../components/card'
import { styles } from './styles/searchResultsScreen.styles'
import { cardType } from '../types/cardType'

const showDetails = (card: cardType, cards) => {
}

export class SearchResultsScreen extends Component {
  static propTypes = {
    dataSource: PropTypes.object.isRequired,
    showCardsAs: PropTypes.string,
    showCardText: PropTypes.bool
  }

  static defaultProps = {
    showCardsAs: 'list',
    showCardText: true
  }

  isDisplayingAsImage () {
    return this.props.showCardsAs === 'image'
  }

  renderRow = (rowData: cardType, sectionID: number, rowID: number) => {
    const { showCardText, cards } = this.props

    return (
      <TouchableOpacity
        onPress={() => showDetails(rowData, cards)}
        style={this.isDisplayingAsImage() ? styles.card : {}} >
        {this.isDisplayingAsImage() ? <CardImage card={{...rowData}} key={rowID} /> : <Card card={{...rowData}} key={rowID} showCardText={showCardText} />}
      </TouchableOpacity>
    )
  }

  render () {
    const {
      showCardsAs,
      showCardText,
      dataSource
    } = this.props

    return (
      <ListView
        key={showCardsAs + showCardText}
        style={styles.container}
        contentContainerStyle={this.isDisplayingAsImage() ? styles.contentContainer : {}}
        renderRow={this.renderRow}
        dataSource={dataSource}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    )
  }
}
