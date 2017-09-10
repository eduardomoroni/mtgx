import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    marginHorizontal: metrics.smallMargin,
    width: metrics.screenWidth - metrics.smallMargin * 2,
    height: (metrics.screenWidth - metrics.smallMargin * 2) * 1.4
  },
  rowContainer: {
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  rowName: {
    color: colors.black
  },
  rowText: {
    fontFamily: fonts.type.mtg,
    fontSize: fonts.size.regular
  }
})
