// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import type { Dispatch } from 'redux'
import { LoginScreen } from '../components/loginScreen'
import { signInUser } from '../../../redux/thunks/authenticationThunks'

export class LoginScreenContainer extends Component {
  static propTypes = {
    signUpUser: PropTypes.func
  }

  render () {
    return (
      <LoginScreen logUserIn={this.props.logUserIn} />
    )
  }
}

const mapStateToProps = (state) => {
  console.log('===> state', state.toJS())
  return {
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    logUserIn: (email, password) => dispatch(signInUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer)
