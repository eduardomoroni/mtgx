import { showMessage, clearMessage } from '../../../../../src/redux/actions/alertActions'
import { SHOW_MESSAGE, CLEAR_MESSAGE } from '../../../../../src/redux/types'

describe('Alert Actions', () => {
  it('should create action for show a message', () => {
    const message = '42 is the response of the universe'
    const action = showMessage(message)
    const expectedAction = { type: SHOW_MESSAGE, message }
    expect(action).toEqual(expectedAction)
  })

  it('should create action to clear message', () => {
    const action = clearMessage()
    const expectedAction = { type: CLEAR_MESSAGE }
    expect(action).toEqual(expectedAction)
  })
})
