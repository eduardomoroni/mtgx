import { setUser } from '../../../../src/redux/actions/authenticationActions'
import { firebaseUser } from '../../../fixtures/firebaseUserFixture'
import { User } from '../../../../src/services/firebase/user'
import AuthenticationReducer, { initialState } from '../../../../src/redux/reducers/authenticationReducer'

describe('Authentication reducer', () => {
  it('should have a snapshot', async () => {
    expect(initialState).toMatchSnapshot()
  })

  it('should set a user to state', async () => {
    const user = new User(firebaseUser)
    const action = setUser(user)
    const state = AuthenticationReducer(initialState, action)

    expect(state).toEqual(user)
  })
})
