// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import type { Dispatch } from 'redux'
import { LoginScreen } from '../components/loginScreen'

export class LoginScreenContainer extends Component {
  static propTypes = {
    foo: PropTypes.any
  }

  static defaultProps = {
    foo: ''
  }

  render () {
    return (
      <LoginScreen />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer)
