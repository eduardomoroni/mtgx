import React from 'react'
import { shallow } from 'enzyme'
import { CardDetailsScreen } from '../../../../../../src/modules/cardSearch/components/cardDetailsScreen'
import { realmObjectFixture } from '../../../../../assets/fixtures/realmObjectFixture'

const props = {
  card: realmObjectFixture,
  navigator: {}
}

describe('<CardDetailsScreen />', () => {
  const wrapper = shallow(<CardDetailsScreen {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
