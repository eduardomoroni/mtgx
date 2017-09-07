// @flow

import React, { Component } from 'react'
import { View, ListView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { CardImage } from '../components/cardImage'
import { Card } from '../components/card'
import { styles } from './styles/searchResultsScreen.styles'

export class SearchResultsScreen extends Component {
  static propTypes = {
    dataSource: PropTypes.object.isRequired,
    showAsImage: PropTypes.bool,
    showCardText: PropTypes.bool
  }

  static defaultProps = {
    showAsImage: true,
    showCardText: true
  }

  renderRow = (card: Object, sectionID: number, rowID: number) => {
    const { showAsImage } = this.props
    const style = showAsImage ? styles.cardImage : null
    const cardComponent = showAsImage ? this.renderCardImage(card.multiverseid)
                                      : this.renderCard(card)

    return (
      <TouchableOpacity onPress={() => this.showDetails(card)} style={style} key={rowID + sectionID} >
        {cardComponent}
      </TouchableOpacity>
    )
  }

  showDetails = (card: Object) => {
    console.log('===> navigate to card details', card)
  }

  renderCard = (card: Object) => {
    const { showCardText } = this.props
    return <Card card={{...card}} showCardText={showCardText} />
  }

  renderCardImage = (multiverseId: number) => {
    return <CardImage multiverseId={multiverseId} />
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
