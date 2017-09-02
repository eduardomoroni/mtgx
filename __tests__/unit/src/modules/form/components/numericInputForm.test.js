// @flow

import { TextInput } from 'react-native'
import React from 'react'
import { InputPicker } from '../../../../../../src/modules/form/components'
// $FlowFixMe
import { NumericInputForm } from '../../../../../../src/modules/form/components/numericInputForm.android'
import { NumericInputForm as iOS } from '../../../../../../src/modules/form/components/numericInputForm.ios'

import { shallow } from 'enzyme'

const props = {
  input: {
    onChange: jest.fn(),
    name: 'label',
    value: {number: 1, operator: '>'}
  }
}

// TODO: This whole component should be revisited
describe('<NumericInputForm />', () => {
  // TODO: To de defined
  describe('iOS component', () => {
    const wrapper = shallow(<iOS {...props} />)

    it('should have a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('android component', () => {
    const wrapper = shallow(<NumericInputForm {...props} />)

    it('should have a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render properly', () => {
      const { onChange } = props.input
      const textInputProps = wrapper.find(TextInput).props()
      const inputPickerProps = wrapper.find(InputPicker).props()
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
})
