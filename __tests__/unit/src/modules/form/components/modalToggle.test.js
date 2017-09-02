// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { ModalToggle } from '../../../../../../src/modules/form/components'

const props = {
  label: 'Label',
  onPress: jest.fn(),
  selected: []
}

describe('<ModalToggle />', () => {
  it('should have a snapshot', () => {
    const wrapper = shallow(<ModalToggle {...props} />)
    expect(wrapper.props().style[1]).toEqual({})
    expect(wrapper).toMatchSnapshot()
  })

  it('should change background color in case of some selected value', () => {
    const wrapper = shallow(<ModalToggle {...props} selected={['blue']} />)
    expect(wrapper.props().style[1]).toEqual({ backgroundColor: 'cornsilk' })
  })

  it('onPress should call onPress prop function passing label as param', () => {
    const wrapper = shallow(<ModalToggle {...props} />)

    wrapper.props().onPress()
    wrapper.props().children.props.onPress()

    expect(props.onPress).toBeCalledWith(props.label)
    expect(props.onPress.mock.instances).toHaveLength(2)
    expect(props.onPress.mock.calls).toHaveLength(2)
  })
})
