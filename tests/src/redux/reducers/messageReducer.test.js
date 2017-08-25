import { showMessage } from '../../../../src/redux/actions/alertActions'
import MessageReducer, { initialState } from '../../../../src/redux/reducers/messageReducer'

describe('Message reducer', () => {
  it('should have a snapshot', async () => {
    expect(initialState).toMatchSnapshot()
  })

  it('SHOW_MESSAGE action type should set message on state', async () => {
    const message = 'i love you, yeah you!'
    const action = showMessage(message)
    const state = MessageReducer(initialState, action)

    expect(state).toEqual(message)
  })
})
