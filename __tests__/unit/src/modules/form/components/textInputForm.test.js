// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { TextInputForm } from '../../../../../../src/modules/form/components'

const props = {
  keyboardType: 'default',
  maxLength: 5,
  input: {
    name: 'label',
    onChange: jest.fn()
  }
}

describe('<TextInputForm />', () => {
  it('should have a snapshot', () => {
    const wrapper = shallow(<TextInputForm {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
