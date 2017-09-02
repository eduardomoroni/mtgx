import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../../../constants/theme'

export const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: metrics.smallMargin,
    height: metrics.inputHeight,
    borderColor: colors.windowTint,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
