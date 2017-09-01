// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { Notification } from '../../../../../../src/modules/shared/components/notification'

describe('<Notification />', () => {
  it('should have a snapshot', () => {
    const props = { message: 'Test message' }
    expect(shallow(<Notification {...props} />)).toMatchSnapshot()
  })
})
