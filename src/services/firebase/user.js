// @flow

export class User {
  uid: string
  email: string
  emailVerified: boolean
  providerData: Array<string>

  constructor (firebaseUser: Object) {
    const { email, emailVerified, uid, providerData } = firebaseUser
    Object.assign(this, { email, emailVerified, uid, providerData })
  }
}
