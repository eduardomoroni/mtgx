// @flow

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Image, ActivityIndicator } from 'react-native'
import { styles } from './styles/cardImage.styles'

export class CardImage extends PureComponent {
  static propTypes = {
    multiverseid: PropTypes.number
  }

  state = { loading: true }

  renderSpinner = () => {
    return this.state.loading ? <ActivityIndicator style={styles.spinner} size='large' /> : <View />
  }

  render () {
    const { multiverseId, style } = this.props
    const IMG_URL = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseId}&type=card`

    return (
      <View style={style || styles.container}>
        <Image
          resizeMode='contain'
          resizeMethod='scale'
          style={styles.image}
          source={{uri: IMG_URL}}
          onLoad={() => this.setState({loading: false})}
          onError={() => console.error('Error while loading card image')} />
        {this.renderSpinner()}
      </View>
    )
  }
}
