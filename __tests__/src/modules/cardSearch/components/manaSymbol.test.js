import React from 'react'
import { shallow } from 'enzyme'
import { ManaSymbol } from '../../../../../src/modules/cardSearch/components/manaSymbol'

const props = {
  styles: [],
  color: 'blue'
}

describe('<ManaSymbol />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<ManaSymbol {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
