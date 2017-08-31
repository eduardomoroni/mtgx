import React from 'react'
import { TouchableOpacity } from 'react-native'
import { shallow } from 'enzyme'
import { ManaSymbolBar } from '../../../../../src/modules/cardSearch/components/manaSymbolBar'

const props = {
  input: {
    value: [''],
    onChange: jest.fn()
  }
}

describe('<ManaSymbolBar />', () => {
  const wrapper = shallow(<ManaSymbolBar {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call callback on press', () => {
    const button = wrapper.find(TouchableOpacity).at(0)
    button.simulate('pressOut')
    expect(props.input.onChange).toHaveBeenCalled()
  })
})
