import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import I18n from 'react-native-i18n'
import { Text } from 'react-native'
import { sharedStyles } from './styles/shared.styles'

export class InputLabel extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func
  }

  render () {
    const { label, onPress } = this.props
    return (
      <Text style={sharedStyles.text} onPress={onPress}>
        {I18n.t(label)}
      </Text>
    )
  }
}
