// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import type { Dispatch } from 'redux'
import { Notification } from '../components/notification'
import { clearMessage } from '../../../redux/actions/alertActions'

export class NotificationContainer extends PureComponent {
  static propTypes = {
    message: PropTypes.string.isRequired,
    resetMessage: PropTypes.func.isRequired
  }

  componentWillUnmount () {
    this.props.resetMessage()
  }

  render () {
    return (
      <Notification message={this.props.message} />
    )
  }
}

const mapStateToProps = (state) => ({ message: state.get('message') })
const mapDispatchToProps = (dispatch: Dispatch<*>) => ({resetMessage: () => dispatch(clearMessage())})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)
