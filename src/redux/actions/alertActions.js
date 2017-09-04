// @flow

import { SHOW_MESSAGE, CLEAR_MESSAGE } from '../types'

export const showMessage = (message: string) => ({ type: SHOW_MESSAGE, message })
export const clearMessage = () => ({ type: CLEAR_MESSAGE })
