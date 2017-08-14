import 'react-native'
import React from 'react'
import App from '../../../../../src/modules/shared/components/initScreen'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(
    <App />
  )
})
