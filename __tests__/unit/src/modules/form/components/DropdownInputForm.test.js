// @flow

import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
// $FlowFixMe
import AndroidDropDown from '../../../../../../src/modules/form/components/DropdownInputForm.android'
import iOSDropDown from '../../../../../../src/modules/form/components/DropdownInputForm.ios'
import { InputLabel, InputPicker } from '../../../../../../src/modules/form/components'

const props = {
  dropdownItems: ['a', 'b', 'c'],
  selectedValue: 'b',
  input: {
    name: 'label',
    onChange: () => null
  }
}

describe('<DropdownInputForm />', () => {
  describe('android component', () => {
    const wrapper = shallow(<AndroidDropDown {...props} />)

    it('should have a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Should render properly', () => {
      const pickerProps = wrapper.find(InputPicker).props()

      expect(wrapper.find(InputLabel).prop('label')).toEqual(props.input.name)
      expect(pickerProps.selectedValue).toEqual(props.selectedValue)
      expect(pickerProps.dropdownItems).toEqual(props.dropdownItems)
    })
  })

  describe('iOS component', () => {
    const props = { name: 'label', onChange: () => null }
    const wrapper = shallow(<iOSDropDown {...props} />)

    it('should have a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render properly', () => {
      expect(wrapper.props().onChange).toEqual(props.onChange)
    })
  })
})
