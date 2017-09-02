// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { InputLabel } from '../../../../../../src/modules/form/components'

const props = {
  label: 'label',
  onPress: jest.fn()
}

describe('<InputLabel />', () => {
  const wrapper = shallow(<InputLabel {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should activate callback on press', () => {
    wrapper.simulate('press')
    expect(props.onPress).toHaveBeenCalled()
  })
})
