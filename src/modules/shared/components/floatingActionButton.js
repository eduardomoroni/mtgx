// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

import { styles } from './styles/floatingActionButton.styles'

type ItemType = {
  name: string,
  buttonColor: string,
  title: string,
  onPress: Function
}

export class FloatingActionButton extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        buttonColor: PropTypes.string,
        title: PropTypes.string,
        onPress: PropTypes.func
      })
    ).isRequired
  }

  renderItem (item: ItemType, key: number) {
    const { name, ...itemProps } = item

    return (
      <ActionButton.Item {...itemProps} key={key}>
        <Icon name={name} style={styles.actionButtonIcon} />
      </ActionButton.Item>
    )
  }

  render () {
    return (
      <ActionButton buttonColor='rgba(231,76,60,1)'>
        {this.props.items.map(this.renderItem)}
      </ActionButton>
    )
  }
}
