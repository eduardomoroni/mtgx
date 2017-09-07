// @flow

import React, { PureComponent } from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import { cardType } from '../types/cardType'
import { styles } from './styles/cardImage.styles'

export class CardImage extends PureComponent {
  static propTypes = {
    card: cardType
  }

  state = { loading: true }

  renderSpinner = () => {
    return this.state.loading ? <ActivityIndicator style={styles.spinner} size='large' /> : <View />
  }

  render () {
    const { multiverseid } = this.props.cardImage
    const IMG_URL = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseid}&type=card`

    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          resizeMethod='scale'
          style={styles.image}
          source={{uri: IMG_URL}}
          onLoad={() => this.setState({loading: false})}
          onError={(error) => console.error('Error while loading card image', error)} />
        {this.renderSpinner()}
      </View>
    )
  }
}
