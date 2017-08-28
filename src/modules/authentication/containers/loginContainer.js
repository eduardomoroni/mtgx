// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import type { Dispatch } from 'redux'
import { LoginScreen } from '../components/loginScreen'
import { signInUser } from '../../../redux/thunks/authenticationThunks'
import { inAppNotification } from '../../../constants/navigation'

class LoginScreenContainer extends Component {
  static propTypes = {
    logUserIn: PropTypes.func.isRequired,
    message: PropTypes.string
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.message !== nextProps.message) {
      this.props.navigator.showInAppNotification(inAppNotification)
    }
  }

  render () {
    return (
      <LoginScreen logUserIn={this.props.logUserIn} navigator={this.props.navigator} />
    )
  }
}

const mapStateToProps = (state) => ({ message: state.get('message') })
const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  logUserIn: (email, password) => dispatch(signInUser(email, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer)
