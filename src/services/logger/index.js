// @flow

const hasToShowLog = __DEV__ && process.env.NODE_ENV !== 'test'

export const warn = (message: string, ...rest: any) => {
  if (hasToShowLog) {
    console.warn(message, ...rest)
  }
}
