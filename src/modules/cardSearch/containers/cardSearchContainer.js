// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import { CardSearchScreen } from '../components/cardSearchScreen'

class CardSearchScreenContainer extends Component {
  render () {
    return (
      <CardSearchScreen />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSearchScreenContainer)
