// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Drawer } from '../components/drawer'
import { menuDrawer } from '../../../constants/navigation'

export class DrawerContainer extends Component {
  navigateTo = (link: string) => {
    this.props.navigator.toggleDrawer(menuDrawer)
    this.props.navigator.handleDeepLink({ link })
  }

  render () {
    return (
      <Drawer navigateTo={this.navigateTo} />
    )
  }
}

export default connect()(DrawerContainer)
