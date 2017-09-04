// @flow

import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    marginBottom: metrics.smallMargin,
    height: metrics.inputHeight,
    borderColor: colors.windowTint,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
