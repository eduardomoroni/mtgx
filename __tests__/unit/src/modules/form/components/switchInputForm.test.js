// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { SwitchInputForm } from '../../../../../../src/modules/form/components'

const props = {
  input: {
    name: 'label',
    onChange: jest.fn(),
    value: true
  }
}

describe('<SwitchInputForm />', () => {
  const wrapper = shallow(<SwitchInputForm {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
