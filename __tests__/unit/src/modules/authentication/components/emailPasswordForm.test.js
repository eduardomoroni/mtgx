// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'nachos-ui'
import { EmailPasswordForm } from '../../../../../../src/modules/authentication/components/emailPasswordForm'

const props = {
  buttonText: 'TEST LABEL',
  buttonCallback: jest.fn()
}

describe('<EmailPasswordForm />', () => {
  const wrapper = shallow(<EmailPasswordForm {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('on button press should invoke callback passing email and password', () => {
    const email = 'email@yahoo.com'
    const password = 'ABC123'
    wrapper.setState({ email, password })
    const button = wrapper.find(Button)
    button.simulate('press')
    expect(props.buttonCallback).toHaveBeenCalledWith(email, password)
  })
})
