import RNFirebase from 'react-native-firebase'

export function initializeFirebase () {
  RNFirebase.initializeApp({ debug: true })
}
