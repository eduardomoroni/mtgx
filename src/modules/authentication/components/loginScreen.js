// @flow

import React, { Component } from 'react'
import Config from 'react-native-config'
import I18n from 'react-native-i18n'
import { StyleSheet, Text, View } from 'react-native'
import { H4, Button } from 'nachos-ui'

export class LoginScreen extends Component {
  renderButton () {
    const btnStyle = { margin: 15 }
    return (
      <View>
        <H4>Example:</H4>
        <Button kind='squared' type='success' style={btnStyle}>
          Success
        </Button>
        <Button kind='squared' type='danger' style={btnStyle}>
          Danger
        </Button>
        <Button
          kind='squared'
          iconName='md-cloud-download'
          style={btnStyle}
        >
          Primary
        </Button>
        <H4 align='center'>Disabled style</H4>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.instructions}>
          {Config.TEST_ENV}
        </Text>
        <Text style={styles.instructions}>
          {I18n.t('test')}
        </Text>
        {this.renderButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
