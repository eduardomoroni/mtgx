// @flow

import React, { Component } from 'react'
import { View, ListView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { CardImage } from '../components/cardImage'
import { Card } from '../components/card'
import { styles } from './styles/searchResultsScreen.styles'
import { cardType } from '../types/cardType'

export class SearchResultsScreen extends Component {
  static propTypes = {
    dataSource: PropTypes.object.isRequired,
    showAsImage: PropTypes.bool,
    showCardText: PropTypes.bool
  }

  static defaultProps = {
    showAsImage: false,
    showCardText: true
  }

  renderRow = (rowData: cardType, sectionID: number, rowID: number) => {
    const { showCardText, showAsImage } = this.props
    const style = showAsImage ? styles.cardImage : null
    const cardComponent = showAsImage ? this.renderCardImage(rowData, rowID)
                                      : this.renderCard(rowData, rowID, showCardText)

    return (
      <TouchableOpacity onPress={() => this.showDetails(rowData)} style={style} >
        {cardComponent}
      </TouchableOpacity>
    )
  }

  showDetails = (card: cardType) => {
    console.log('===> navigate to card details', card)
  }

  renderCard = (rowData, rowID, showCardText) => {
    return <Card key={rowID} card={{...rowData}} showCardText={showCardText} />
  }

  renderCardImage = (rowData, rowID) => {
    return <CardImage key={rowID} card={{...rowData}} />
  }

  render () {
    const { dataSource, showAsImage } = this.props

    return (
      <ListView
        dataSource={dataSource}
        style={styles.container}
        renderRow={this.renderRow}
        contentContainerStyle={showAsImage ? styles.imageContentStyle : null}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    )
  }
}
