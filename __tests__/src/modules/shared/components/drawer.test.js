// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'nachos-ui'
import { Drawer } from '../../../../../src/modules/shared/components/drawer'

const props = { navigateTo: jest.fn() }

describe('<Drawer />', () => {
  const wrapper = shallow(<Drawer {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should navigate to signin on press', () => {
    wrapper.find(Button).at(0).simulate('press')
    expect(props.navigateTo).toHaveBeenCalledWith('authentication.login')
  })
})
