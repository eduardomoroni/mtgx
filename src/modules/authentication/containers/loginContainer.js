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
    const { logUserIn, navigator } = this.props
    return (
      <LoginScreen logUserIn={logUserIn} navigator={navigator} />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    logUserIn: (email, password) => dispatch(signInUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer)
