import I18n from 'react-native-i18n'
import { showMessage } from '../../../../src/redux/actions/alertActions'
import { setUser } from '../../../../src/redux/actions/authenticationActions'
import { firebaseUser } from '../../../fixtures/firebaseUserFixture'
import { User } from '../../../../src/services/firebase/user'
import {
  signOutUser,
  resetUserPassword,
  createUser,
  signInUser
} from '../../../../src/redux/thunks/authenticationThunks'

import * as Authentication from '../../../../src/services/firebase/authentication'
jest.mock('../../../../src/services/firebase/authentication')

describe('Authentication thunks', () => {
  const mockDispatch = jest.fn()

  beforeEach(() => {
    mockDispatch.mockClear()
  })

  it('should send a message during user signout', async () => {
    Authentication.signOut = jest.fn(() => Promise.resolve())
    const expectedAction = showMessage(I18n.t('USER_SIGNED_OUT'))

    const thunk = signOutUser()
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  it('should send a message during user password reset', async () => {
    Authentication.sendPasswordResetEmail = jest.fn(() => Promise.resolve())
    const expectedAction = showMessage(I18n.t('EMAIL_RESETED_SUCCESSFULLY'))

    const thunk = resetUserPassword()
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  it('should create a new user', async () => {
    Authentication.createUserWithEmailAndPassword = jest.fn(() => Promise.resolve(firebaseUser))
    const expectedAction = setUser(new User(firebaseUser))

    const thunk = createUser('email@fake.com', 'P@$$W*RD')
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  it('should sign in an existing user', async () => {
    Authentication.signInWithEmailAndPassword = jest.fn(() => Promise.resolve(firebaseUser))
    const expectedAction = setUser(new User(firebaseUser))

    const thunk = signInUser('email@fake.com', 'P@$$W*RD')
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })
})
