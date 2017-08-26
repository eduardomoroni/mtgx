// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import type { Dispatch } from 'redux'
import { ForgotPasswordScreen } from '../components/forgotPasswordScreen'
import { resetUserPassword } from '../../../redux/thunks/authenticationThunks'

class ForgotPasswordContainer extends Component {
  static propTypes = {
    resetPassword: PropTypes.func.isRequired
  }

  render () {
    return (
      <ForgotPasswordScreen resetPassword={this.props.resetPassword} />
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  resetPassword: email => dispatch(resetUserPassword(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer)
