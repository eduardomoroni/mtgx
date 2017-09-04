// @flow

import { StyleSheet } from 'react-native'
import { metrics } from '../../../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    marginHorizontal: metrics.marginHorizontal,
    paddingTop: metrics.navBarHeight + metrics.smallMargin
  },
  containerFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  multipleFieldsPerLine: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftField: {
    flex: 1,
    justifyContent: 'flex-start',
    marginRight: metrics.smallMargin / 3
  },
  rightField: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: metrics.smallMargin / 3
  },
  middleField: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: metrics.smallMargin / 3
  }
})
