import { StyleSheet } from 'react-native'

import { metrics, fonts, colors } from '../../../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    padding: metrics.baseMargin,
    flex: 1
  },
  text: {
    // fontFamily: fonts.type.mtg,
    // fontsize: fonts.size.regular,
    // color: colors.black
  },
  cardPowerToughness: {
    // fontFamily: fonts.type.mtg,
    // fontsize: fonts.size.regular,
    color: colors.black
  },
  cardNameText: {
    // fontFamily: fonts.type.beleren,
    // fontsize: fonts.size.regular,
    color: colors.black
  },
  cardTypeText: {
    // fontFamily: fonts.type.mtg,
    // fontsize: fonts.size.medium,
    color: colors.black
  },
  mana: {
    // fontFamily: fonts.type.mtg,
    color: colors.black
    // fontsize: fonts.size.small
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftWord: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightWord: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cardTextContainer: {
    flexDirection: 'row'
  },
  cardText: {
    flex: 1,
    paddingTop: 6,
    flexDirection: 'row'
  },
  cardPower: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-end'
  }
})
