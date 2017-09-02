// @flow

import { TextInput } from 'react-native'
import React from 'react'
import { NumericInputForm, InputPicker } from '../../../../../../src/modules/form/components'
import { shallow } from 'enzyme'

const props = {
  dropdownItems: ['a', 'b', 'c'],
  input: {
    onChange: jest.fn(),
    name: 'label',
    value: {number: 1, operator: '>'}
  }
}

describe('<NumericInputForm />', () => {
  const wrapper = shallow(<NumericInputForm {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render properly', () => {
    const { onChange } = props.input
    const textInputProps = wrapper.find(TextInput).props()
    const inputPickerProps = wrapper.find(InputPicker).props()
    expect(inputPickerProps.dropdownItems).toEqual(props.dropdownItems)
    expect(inputPickerProps.selectedValue).toEqual(props.input.value.operator)

    inputPickerProps.onValueChange('b')
    expect(onChange).toBeCalledWith({number: 1, operator: 'b'})

    textInputProps.onChangeText('10')
    expect(onChange).lastCalledWith({number: 10, operator: '>'})
  })

  it('should initialize picker case input.value is undefined', () => {
    const wrapper = shallow(<NumericInputForm {...props} input={{value: undefined}} />)
    expect(wrapper.find(InputPicker).prop('selectedValue')).toEqual('')
  })
})
