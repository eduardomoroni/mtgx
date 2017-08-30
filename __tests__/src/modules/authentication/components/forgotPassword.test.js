// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'nachos-ui'
import { ForgotPasswordScreen } from '../../../../../src/modules/authentication/components/forgotPasswordScreen'

const props = {
  resetPassword: jest.fn()
}

describe('<ForgotPasswordScreen />', () => {
  const wrapper = shallow(<ForgotPasswordScreen {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('on button press should invoke resetPassword passing email', () => {
    const email = 'email@yahoo.com'
    wrapper.setState({ email })
    const button = wrapper.find(Button)
    button.simulate('press')
    expect(props.resetPassword).toHaveBeenCalledWith(email)
  })
})
