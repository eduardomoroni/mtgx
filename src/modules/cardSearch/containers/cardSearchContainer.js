// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import { reduxForm, formValueSelector } from 'redux-form/immutable'

import { CardSearchScreen } from '../components/cardSearchScreen'

class CardSearchScreenContainer extends Component {
  render () {
    return (
      <CardSearchScreen
        color={this.props.colors}
      />
    )
  }
}

const form = 'CardSearch'

const mapStateToProps = (state) => {
  const selector = formValueSelector(form)

  return {
    colors: selector(state, 'colors')
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {}
}

const cardSearchContainerDecorated = reduxForm({ form })(CardSearchScreenContainer)
export default connect(mapStateToProps, mapDispatchToProps)(cardSearchContainerDecorated)
