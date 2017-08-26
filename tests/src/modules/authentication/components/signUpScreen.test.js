// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { SignUpScreen } from '../../../../../src/modules/authentication/components/signUpScreen'
import { EmailPasswordForm } from '../../../../../src/modules/authentication/components/emailPasswordForm'

const props = {
  signUpUser: jest.fn()
}

describe('<SignUpScreen />', () => {
  const wrapper = shallow(<SignUpScreen {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should pass signUp function as callback to EmailPasswordForm', () => {
    let email = 'email'
    let password = 'password'
    const form = wrapper.find(EmailPasswordForm)
    const onSignUpPressed = wrapper.instance().onSignUpPressed

    onSignUpPressed(email, password)
    expect(props.signUpUser).toHaveBeenCalledWith(email, password)
    expect(onSignUpPressed).toEqual(form.prop('buttonCallback'))
  })
})
