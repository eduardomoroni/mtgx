// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { LoginScreen } from '../components/loginScreen'
import { signInUser } from '../../../redux/thunks/authenticationThunks'
import { inAppNotification } from '../../../constants/navigation'

class LoginScreenContainer extends Component {
  static propTypes = {
    logUserIn: PropTypes.func.isRequired,
    message: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.handleDeepLink)
  }

  // TODO: It'd be better having all deeplinks in one file
  handleDeepLink = (event) => {
    if (event.type === 'DeepLink') {
      if (event.link === 'authentication.login') {
        this.props.navigator.resetTo({ screen: event.link })
      }
    }
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
const mapDispatchToProps = (dispatch: Function) => ({
  logUserIn: (email, password) => dispatch(signInUser(email, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer)
