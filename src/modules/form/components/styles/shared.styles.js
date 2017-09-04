// @flow

import { StyleSheet } from 'react-native'
import { metrics, fonts } from '../../../../constants/theme'
import colors from '../../../../constants/theme/colors'

export const sharedStyles = StyleSheet.create({
  container: {
    marginBottom: 5,
    height: 40,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    flex: -1,
    justifyContent: 'flex-start',
    marginLeft: metrics.smallMargin,
    ...fonts.typography
  },
  input: {
    flex: 1,
    justifyContent: 'flex-end',
    color: colors.grey,
    ...fonts.typography
  }
})
