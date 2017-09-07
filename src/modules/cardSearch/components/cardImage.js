// @flow

import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native'
import { cardType } from '../types/cardType'

type CardImageProps = {
  card: cardType
}

type CardImageState = {
  loading: boolean
}

export class CardImage extends PureComponent {
  props: CardImageProps
  state: CardImageState

  constructor () {
    super()
    this.state = { loading: true }
  }

  renderSpinner (isLoading: boolean) {
    return isLoading ? <ActivityIndicator style={styles.spinner} size='large' /> : <View />
  }

  render () {
    const { multiverseid } = this.props.card
    const IMG_URL = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseid}&type=card`

    return (
      <View style={styles.container}>
        {this.renderSpinner(this.state.loading)}
        <Image
          resizeMode='contain'
          resizeMethod='scale'
          style={styles.image}
          source={{uri: IMG_URL}}
          onLoad={() => this.setState({loading: false})}
          onError={() => console.error('Error while loading card image')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  spinner: {
    flex: 1,
    justifyContent: 'center'
  }
})
