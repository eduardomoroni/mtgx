// @flow

import React, { PureComponent } from 'react'
import { Drawer } from '../components/drawer'
import { menuDrawer } from '../../../constants/navigation'

export class DrawerContainer extends PureComponent {
  navigateTo = (link: string) => {
    this.props.navigator.toggleDrawer(menuDrawer)
    this.props.navigator.handleDeepLink({ link })
  }

  render () {
    return (
      <Drawer navigateTo={this.navigateTo} navigator={this.props.navigator} />
    )
  }
}

export default DrawerContainer
