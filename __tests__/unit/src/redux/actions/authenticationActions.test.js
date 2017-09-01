import { setUser } from '../../../../../src/redux/actions/authenticationActions'
import { SET_USER } from '../../../../../src/redux/types'
import { User } from '../../../../../src/services/firebase/user'
import { firebaseUser } from '../../../../fixtures/firebaseUserFixture'

describe('Authentication Actions', () => {
  it('should create action for setting user on state', () => {
    const user = new User(firebaseUser)
    const action = setUser(user)
    const expectedAction = { type: SET_USER, user }
    expect(action).toEqual(expectedAction)
  })
})
