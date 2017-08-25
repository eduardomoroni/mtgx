import { initialState } from '../../../../src/redux/reducers'

describe('Root reducer initial state', () => {
  it('should have a snapshot', async () => {
    expect(initialState).toMatchSnapshot()
  })
})
