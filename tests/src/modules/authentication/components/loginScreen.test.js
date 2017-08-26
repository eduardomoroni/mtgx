import React from 'react'
import { shallow } from 'enzyme'
import { LoginScreen } from '../../../../../src/modules/authentication/components/loginScreen'

const props = {
  logUserIn: jest.fn()
}

describe('<LoginScreen />', () => {
  const wrapper = shallow(<LoginScreen {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
