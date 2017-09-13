// @flow

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from '../components/drawer'

class DrawerContainer extends PureComponent {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render () {
    return (
      <Drawer navigator={this.props.navigator} />
    )
  }
}

export default DrawerContainer
