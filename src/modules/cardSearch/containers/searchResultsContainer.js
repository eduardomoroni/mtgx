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
  const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})
                                 .cloneWithRows(state.get('cards'))
  return { dataSource }
}

const mapDispatchToProps = (dispatch: Function) => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)
