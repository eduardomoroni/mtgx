// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import type { Dispatch } from 'redux'
import { LoginScreen } from '../components/loginScreen'
import { createUser } from '../../../redux/thunks/authenticationThunks'

export class LoginScreenContainer extends Component {
  static propTypes = {
    signUpUser: PropTypes.func
  }

  componentDidMount () {
    this.props.signUpUser('emaiasd@blsla.com', '12312321')
  }

  render () {
    return (
      <LoginScreen />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('===> state', state.toJS())
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    signUpUser: (email, password) => dispatch(createUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer)
