// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import type { Dispatch } from 'redux'
import { SignUpScreen } from '../components/signUpScreen'
import { createUser } from '../../../redux/thunks/authenticationThunks'

class SignUpScreenContainer extends Component {
  static propTypes = {
    signUpUser: PropTypes.func.isRequired
  }

  render () {
    return (
      <SignUpScreen signUpUser={this.props.signUpUser} />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    signUpUser: (email, password) => dispatch(createUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreenContainer)
