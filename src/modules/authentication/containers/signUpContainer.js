// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SignUpScreen } from '../components/signUpScreen'
import { createUser } from '../../../redux/thunks/authenticationThunks'
import { inAppNotification } from '../../../constants/navigation'

class SignUpScreenContainer extends PureComponent {
  static propTypes = {
    signUpUser: PropTypes.func.isRequired,
    message: PropTypes.string,
    navigator: PropTypes.object.isRequired
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.message !== nextProps.message) {
      this.props.navigator.showInAppNotification(inAppNotification)
    }
  }

  render () {
    return (
      <SignUpScreen signUpUser={this.props.signUpUser} />
    )
  }
}

const mapStateToProps = (state) => ({ message: state.get('message') })
const mapDispatchToProps = (dispatch: Function) => ({
  signUpUser: (email, password) => dispatch(createUser(email, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreenContainer)
