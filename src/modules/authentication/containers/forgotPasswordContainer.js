// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ForgotPasswordScreen } from '../components/forgotPasswordScreen'
import { resetUserPassword } from '../../../redux/thunks/authenticationThunks'
import { inAppNotification } from '../../../constants/navigation'

class ForgotPasswordContainer extends PureComponent {
  static propTypes = {
    resetPassword: PropTypes.func.isRequired,
    message: PropTypes.string
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.message !== nextProps.message) {
      this.props.navigator.showInAppNotification(inAppNotification)
    }
  }

  render () {
    return (
      <ForgotPasswordScreen resetPassword={this.props.resetPassword} />
    )
  }
}

const mapStateToProps = (state) => ({ message: state.get('message') })
const mapDispatchToProps = (dispatch: Function) => ({
  resetPassword: email => dispatch(resetUserPassword(email))
})
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer)
