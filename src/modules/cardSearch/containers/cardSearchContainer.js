// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import { reduxForm, formValueSelector } from 'redux-form/immutable'
import { distinctValues } from '../../../services/realm'

import { CardSearchScreen } from '../components/cardSearchScreen'

class CardSearchScreenContainer extends Component {
  render () {
    return (
      <CardSearchScreen {...this.props} />
    )
  }
}

const form = 'CardSearch'

const mapStateToProps = (state) => {
  const selector = formValueSelector(form)

  const rarities = ['Common', 'Uncommon', 'Rare', 'Mythic Rare']
  const types = distinctValues('Type')
  const subTypes = distinctValues('SubType')

  types.unshift('')
  subTypes.unshift('')

  return {
    types,
    subTypes,
    rarities,
    set: selector(state, 'set'),
    type: selector(state, 'type'),
    rarity: selector(state, 'rarity'),
    format: selector(state, 'format'),
    colors: selector(state, 'colors'),
    subType: selector(state, 'subType'),
    formats: distinctValues('Legality'),
    printings: distinctValues('Printing')
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {}
}

const cardSearchContainerDecorated = reduxForm({ form })(CardSearchScreenContainer)
export default connect(mapStateToProps, mapDispatchToProps)(cardSearchContainerDecorated)
