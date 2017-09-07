import React from 'react'
import { shallow } from 'enzyme'
import { CardImage } from '../../../../../../src/modules/cardSearch/components/cardImage'

const props = {
  multiverseId: 123456
}

describe('<CardImage />', () => {
  const wrapper = shallow(<CardImage {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
