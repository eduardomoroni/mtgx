// @flow

import { User } from './user'

let auth

// TODO: react-native-firebase, has types declaration. Figure out how to import it. https://flow.org/en/docs/types/modules/
export function initializeAuth (authInstance: Object) {
  auth = authInstance
}

export async function createUserWithEmailAndPassword (email: string, password: string) {
  try {
    const firebaseUser = await auth.createUserWithEmailAndPassword(email, password)
    return new User(firebaseUser)
  } catch (error) {
    console.error('An error occurred', error)
  }
}

export async function signInWithEmailAndPassword (email: string, password: string) {
  try {
    const firebaseUser = await auth.signInWithEmailAndPassword(email, password)
    return new User(firebaseUser)
  } catch (error) {
    console.error('signin error', error)
  }
}

export async function sendPasswordResetEmail (email: string) {
  try {
    await auth.sendPasswordResetEmail(email)
  } catch (error) {
    console.error('Unable send password reset email', error)
  }
}

export async function signOut () {
  try {
    await auth.signOut()
  } catch (error) {
    console.error('Error during sign out', error)
  }
}
