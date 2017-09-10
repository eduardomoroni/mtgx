import React from 'react'
import { shallow } from 'enzyme'
import { SearchResultsScreen } from '../../../../../../src/modules/cardSearch/components/searchResultsScreen'

const props = {
  dataSource: {},
  navigator: {},
  showAsImage: false,
  showCardText: true
}

// TODO: complete this test suite
describe('<SearchResultsScreen />', () => {
  const wrapper = shallow(<SearchResultsScreen {...props} />)

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
