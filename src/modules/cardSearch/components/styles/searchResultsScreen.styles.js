import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: metrics.navBarHeight
  },
  imageContentStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardImage: {
    marginHorizontal: metrics.smallMargin,
    width: metrics.screenWidth / 2 - metrics.smallMargin * 2,
    // TODO: Try to get dynamically Height proportion
    height: (metrics.screenWidth / 2 - metrics.smallMargin * 2) * 1.4
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.silver
  }
})
