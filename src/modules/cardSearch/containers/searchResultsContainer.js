// @flow

import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SearchResultsScreen } from '../components/searchResultsScreen'

class SearchResultsContainer extends Component {
  static propTypes = {
    dataSource: PropTypes.any.isRequired
  }

  render () {
    return (
      <SearchResultsScreen dataSource={this.props.dataSource} />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('===> state.cards is: ', state.cards)
  if (state.cards) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
    const dataSource = ds.cloneWithRows(state.cards)
    return { dataSource }
  } else {
    return { dataSource: {} }
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)
