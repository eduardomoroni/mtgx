// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { cardType } from '../types/cardType'
import { CardDetailsScreen } from '../components/cardDetailsScreen'

// TODO: Realm objects are composed by JS Proxies, wix/react-native-navigation doesn't support passing proxies as
// props through navigator.push, this container is a workaround to avoid passing Card object through push.
class CardSearchScreenContainer extends PureComponent {
  static propTypes = {
    multiverseId: PropTypes.number.isRequired,
    card: cardType
  }

  render () {
    return (
      <CardDetailsScreen card={this.props.card} />
    )
  }
}

const mapStateToProps = (state, { multiverseId }) => {
  return {
    card: state.get('cards').filtered(`multiverseid = ${multiverseId}`)[0]
  }
}

export default connect(mapStateToProps)(CardSearchScreenContainer)
