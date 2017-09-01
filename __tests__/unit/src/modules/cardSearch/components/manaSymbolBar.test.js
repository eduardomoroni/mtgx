import React from 'react'
import { TouchableOpacity } from 'react-native'
import { shallow } from 'enzyme'
import { ManaSymbolBar } from '../../../../../../src/modules/cardSearch/components/manaSymbolBar'
import { ManaSymbol } from '../../../../../../src/modules/cardSearch/components/manaSymbol'

const props = {
  input: {
    value: ['blue', 'red'],
    onChange: jest.fn()
  }
}

describe('<ManaSymbolBar />', () => {
  const wrapper = shallow(<ManaSymbolBar {...props} />)

  it('Should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call toggle selected values on press', () => {
    const colorToToggle = props.input.value[0]
    const arrayAfterToggleAnElement = props.input.value.filter(color => color !== colorToToggle)
    const symbolColorIs = color => n => n.children(ManaSymbol).prop('color') === color

    wrapper.find(TouchableOpacity)
            .filterWhere(symbolColorIs(colorToToggle))
            .simulate('pressOut')

    expect(props.input.onChange).toHaveBeenCalledWith(arrayAfterToggleAnElement)
  })

  it('should map input.value into selected symbols', () => {
    const selectedSymbols = wrapper.find(ManaSymbol)
                                    .filterWhere(n => n.prop('isSelected'))
                                    .map(n => n.prop('color'))
    expect(props.input.value).toEqual(selectedSymbols)
  })
})
