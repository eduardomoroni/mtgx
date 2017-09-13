// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { LoginScreen } from '../components/loginScreen'
import { signInUser } from '../../../redux/thunks/authenticationThunks'
import { inAppNotification, navigatorStyle } from '../../../constants/navigation'
import { onNavigatorEvent } from '../../../configuration/navigation/deeplinks'

class LoginScreenContainer extends PureComponent {
  static propTypes = {
    logUserIn: PropTypes.func.isRequired,
    message: PropTypes.string
  }

  static navigatorStyle = navigatorStyle

  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(this))
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
