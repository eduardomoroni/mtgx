// @flow

import React from 'react'
import { shallow } from 'enzyme'
import ActionButton from 'react-native-action-button'
import { FloatingActionButton } from '../../../../../../src/modules/shared/components/floatingActionButton'

const props = {
  items: [
    { name: 'md-share',
      buttonColor: '#9b59b6',
      title: 'Share',
      onPress: jest.fn()
    }, {
      name: 'md-folder-open',
      buttonColor: '#3498db',
      title: 'Add to Deck',
      onPress: jest.fn()
    }, {
      name: 'md-swap',
      buttonColor: '#1abc9c',
      title: 'Add to TradeList',
      onPress: jest.fn()
    }
  ]
}

describe('<FloatingActionButton />', () => {
  const wrapper = shallow(<FloatingActionButton {...props} />)

  it('Should render InputLabel Component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should trigger callback on pressing button', () => {
    const button = wrapper.find(ActionButton.Item).at(0)
    button.simulate('press')
    expect(props.items[0].onPress).toHaveBeenCalled()
  })
})
