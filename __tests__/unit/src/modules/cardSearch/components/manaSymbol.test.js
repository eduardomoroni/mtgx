import React from 'react'
import { shallow } from 'enzyme'
import { ManaSymbol } from '../../../../../../src/modules/cardSearch/components/manaSymbol'

const props = {
  isSelected: true,
  color: 'blue'
}

describe('<ManaSymbol />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<ManaSymbol {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should reduce opacity if is not selected', () => {
    const wrapper = shallow(<ManaSymbol color='red' isSelected={false} />)
    expect(wrapper.prop('style')).toContainEqual({ opacity: 0.25 })
  })
})
