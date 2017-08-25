import I18n from 'react-native-i18n'
import { setUser } from '../actions/authenticationActions'
import { showMessage } from '../actions/alertActions'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from '../../services/firebase/authentication'

export function createUser (email, password) {
  return async (dispatch) => {
    const user = await createUserWithEmailAndPassword(email, password)
    dispatch(setUser(user))
  }
}

export function signInUser (email, password) {
  return async (dispatch) => {
    const user = await signInWithEmailAndPassword(email, password)
    dispatch(setUser(user))
  }
}

export function resetUserPassword (email) {
  return async (dispatch) => {
    await sendPasswordResetEmail(email)
    dispatch(showMessage(I18n.t('EMAIL_RESETED_SUCCESSFULLY')))
  }
}

export function signOutUser () {
  return async (dispatch) => {
    await signOut()
    dispatch(showMessage(I18n.t('USER_SIGNED_OUT')))
  }
}
