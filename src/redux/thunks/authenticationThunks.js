// @flow

import I18n from 'react-native-i18n'
import { setUser } from '../actions/authenticationActions'
import { showMessage } from '../actions/alertActions'
import { warn } from '../../services/logger'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from '../../services/firebase/authentication'
import type { Dispatch } from 'redux'

export async function createUser (email: string, password: string) {
  return async (dispatch: Dispatch<*>) => {
    try {
      const user = await createUserWithEmailAndPassword(email, password)
      dispatch(setUser(user))
    } catch (error) {
      warn('Error occured during user sign up: ', error)
      dispatch(showMessage(error.message))
    }
  }
}

export async function signInUser (email: string, password: string) {
  return async (dispatch: Dispatch<*>) => {
    try {
      const user = await signInWithEmailAndPassword(email, password)
      dispatch(setUser(user))
    } catch (error) {
      warn('Error occured during user sign in: ', error)
      dispatch(showMessage(error.message))
    }
  }
}

export async function resetUserPassword (email: string) {
  return async (dispatch: Dispatch<*>) => {
    try {
      await sendPasswordResetEmail(email)
      dispatch(showMessage(I18n.t('EMAIL_RESETED_SUCCESSFULLY')))
    } catch (error) {
      warn('Error occured during reset password: ', error)
      dispatch(showMessage(error.message))
    }
  }
}

export async function signOutUser () {
  return async (dispatch: Dispatch<*>) => {
    await signOut()
    dispatch(showMessage(I18n.t('USER_SIGNED_OUT')))
  }
}
