// @flow

let auth

type User = {
  email: string,
  emailVerified: boolean,
  uid: string,
  providerData: Array<string>
}

function mapFirebaseUser (firebaseUser): User {
  const { email, emailVerified, uid, providerData } = firebaseUser
  return { email, emailVerified, uid, providerData }
}

// TODO: react-native-firebase, has types declaration. Figure out how to import it.
export function initializeAuth (authInstance: Object) {
  auth = authInstance
}

export async function createUserWithEmailAndPassword (email: string, password: string) {
  try {
    const firebaseUser = await auth.createUserWithEmailAndPassword(email, password)
    return mapFirebaseUser(firebaseUser)
  } catch (error) {
    console.error('An error occurred', error)
  }
}

export async function signInWithEmailAndPassword (email: string, password: string) {
  try {
    const firebaseUser = await auth.signInWithEmailAndPassword(email, password)
    return mapFirebaseUser(firebaseUser)
  } catch (error) {
    console.error('signin error', error)
  }
}

export function sendPasswordResetEmail (email: string) {
  return auth.sendPasswordResetEmail(email)
    .then(() => {
      console.log('Password reset email sent')
    })
    .catch((error) => {
      console.error('Unable send password reset email', error)
    })
}

export function signOut () {
  return auth.signOut()
    .then(() => {
      console.log('mapFirebaseUser signed out successfully')
    })
    .catch((error) => {
      console.error('Error during sign out', error)
    })
}
