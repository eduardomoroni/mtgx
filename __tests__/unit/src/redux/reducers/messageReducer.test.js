import { showMessage, clearMessage } from '../../../../../src/redux/actions/alertActions'
import MessageReducer, { initialState } from '../../../../../src/redux/reducers/messageReducer'

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

  it('CLEAR_MESSAGE action type should return to initial state', () => {
    const state = MessageReducer(initialState, showMessage('Anything'))
    const clearedState = MessageReducer(state, clearMessage())

    expect(clearedState).toEqual(initialState)
  })
})
