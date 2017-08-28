// @flow

import { User } from './user'

let auth

// TODO: react-native-firebase, has types declaration. Figure out how to import it. https://flow.org/en/docs/types/modules/
export function initializeAuth (authInstance: Object) {
  auth = authInstance
}

export async function createUserWithEmailAndPassword (email: string, password: string) {
  const firebaseUser = await auth.createUserWithEmailAndPassword(email, password)
  return new User(firebaseUser)
}

export async function signInWithEmailAndPassword (email: string, password: string) {
  const firebaseUser = await auth.signInWithEmailAndPassword(email, password)
  return new User(firebaseUser)
}

export async function sendPasswordResetEmail (email: string) {
  await auth.sendPasswordResetEmail(email)
}

export async function signOut () {
  await auth.signOut()
}
