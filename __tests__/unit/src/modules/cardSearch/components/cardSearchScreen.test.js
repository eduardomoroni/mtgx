import React from 'react'
import { shallow } from 'enzyme'
import { CardSearchScreen } from '../../../../../../src/modules/cardSearch/components/cardSearchScreen'

describe('<CardSearchScreen />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<CardSearchScreen />)
    expect(wrapper).toMatchSnapshot()
  })
})
