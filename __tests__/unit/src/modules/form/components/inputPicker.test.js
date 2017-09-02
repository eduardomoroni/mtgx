// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { InputPicker } from '../../../../../../src/modules/form/components'
import { Picker } from 'react-native'

const props = {
  selectedValue: 'b',
  onValueChange: jest.fn(),
  dropdownItems: ['a', 'b', 'c']
}

describe('<InputPicker />', () => {
  const wrapper = shallow(<InputPicker {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render properly', () => {
    const items = wrapper.find(Picker.Item)
    const selectedValue = wrapper.find(Picker).prop('selectedValue')

    expect(selectedValue).toEqual(props.selectedValue)
    expect(items).toHaveLength(props.dropdownItems.length)
  })
})
