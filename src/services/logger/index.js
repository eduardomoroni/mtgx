const hasToShowLog = __DEV__ && process.env.NODE_ENV !== 'test'

export const warn = (message, ...rest) => {
  if (hasToShowLog) {
    console.warn(message, ...rest)
  }
}
