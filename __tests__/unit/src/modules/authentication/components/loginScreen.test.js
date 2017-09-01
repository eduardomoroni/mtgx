import React from 'react'
import { shallow } from 'enzyme'
import { LoginScreen } from '../../../../../../src/modules/authentication/components/loginScreen'
import { EmailPasswordForm } from '../../../../../../src/modules/authentication/components/emailPasswordForm'

const props = {
  logUserIn: jest.fn()
}

describe('<LoginScreen />', () => {
  const wrapper = shallow(<LoginScreen {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should pass signIn function as callback to EmailPasswordForm', () => {
    let email = 'email'
    let password = 'password'
    const form = wrapper.find(EmailPasswordForm)
    const onLogUserInPressed = wrapper.instance().onSignInPressed

    onLogUserInPressed(email, password)
    expect(props.logUserIn).toHaveBeenCalledWith(email, password)
    expect(onLogUserInPressed).toEqual(form.prop('buttonCallback'))
  })
})
