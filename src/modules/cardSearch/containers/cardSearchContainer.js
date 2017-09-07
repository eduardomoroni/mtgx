// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form/immutable'

// TODO: What about isolare realm/core access?
import { distinctValues } from '../../../services/realm/core'
import { CardSearchScreen } from '../components/cardSearchScreen'
import { queryCardByForm } from '../../../redux/thunks/cardsThunks'

class CardSearchScreenContainer extends Component {
  render () {
    const {
      set,
      sets,
      type,
      types,
      rarity,
      colors,
      format,
      formats,
      subType,
      subTypes,
      rarities,
      navigator,
      handleSubmit,
      colorsIdentity,
      submitCardSearchForm
    } = this.props

    const cardSearchProps = {
      set,
      sets,
      type,
      types,
      rarity,
      colors,
      format,
      formats,
      subType,
      subTypes,
      rarities,
      navigator,
      handleSubmit,
      colorsIdentity,
      submitCardSearchForm
    }

    return (
      <CardSearchScreen {...cardSearchProps} />
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
    sets: distinctValues('Printing')
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return { submitCardSearchForm: (form) => dispatch(queryCardByForm(form)) }
}

const cardSearchContainerDecorated = reduxForm({ form })(CardSearchScreenContainer)
export default connect(mapStateToProps, mapDispatchToProps)(cardSearchContainerDecorated)
