import React, { Component } from 'react'
import { string, arrayOf } from 'prop-types'
import { View } from 'react-native'
import { ManaSymbolBar } from './manaSymbolBar'
import { Field } from 'redux-form/immutable'
import { Button } from 'nachos-ui'
import Modal from 'react-native-modal'
import I18n from 'react-native-i18n'

import {
  TextInputForm,
  NumericInputForm,
  DropdownInputForm,
  ModalToggle,
  MultiSelect
} from '../../form/components'

import { styles } from './styles/cardSearch.styles'

const cardSearchModals = {
  RARITY: 0,
  SET: 1,
  FORMAT: 2
}

export class CardSearchScreen extends Component {
  static propTypes = {
    type: string,
    rarity: string,
    format: string,
    subType: string,
    sets: arrayOf(string),
    types: arrayOf(string),
    colors: arrayOf(string),
    formats: arrayOf(string),
    rarities: arrayOf(string),
    subtypes: arrayOf(string),
    colorsIdentity: arrayOf(string)
  }

  state = { visibleModal: '' }
  showModal = (modalId: string) => () => this.setState({ visibleModal: cardSearchModals[modalId] })
  hideModal = () => this.setState({ visibleModal: '' })

  openModal = (fieldName, items) => {
    // TODO: wix/react-native-navigation has built-in Modal, Why are we using an external one?
    const { hideModal } = this
    return (
      <Modal onModalHide={hideModal} onBackdropPress={hideModal} onBackButtonPress={hideModal} isVisible >
        <Field name={fieldName} component={MultiSelect} items={items} />
        <Button
          kind='squared'
          type='success'
          onPress={hideModal}
        >
          {I18n.t('CLOSE')}
        </Button>
      </Modal>
    )
  }

  renderModal = () => {
    const { formats, sets, rarities } = this.props
    const { visibleModal } = this.state

    switch (visibleModal) {
      case cardSearchModals['RARITY']:
        return this.openModal('RARITY', rarities)
      case cardSearchModals['SET']:
        return this.openModal('SET', sets)
      case cardSearchModals['FORMAT']:
        return this.openModal('FORMAT', formats)
    }

    return <View />
  }

  renderThreeColumnsLine = (fieldOne, fieldTwo, fieldThree) => {
    return (
      <View style={styles.multipleFieldsPerLine}>
        <View style={styles.leftField}>{ fieldOne }</View>
        <View style={styles.middleField}>{ fieldTwo }</View>
        <View style={styles.rightField}>{ fieldThree }</View>
      </View>
    )
  }

  renderTwoColumnsLine = (firstColumn, secondColumn) => {
    return (
      <View style={styles.multipleFieldsPerLine}>
        <View style={styles.leftField}>{ firstColumn }</View>
        <View style={styles.rightField}>{ secondColumn }</View>
      </View>
    )
  }

  render () {
    const {
      set,
      type,
      types,
      rarity,
      format,
      colors,
      subType,
      subTypes,
      colorsIdentity
    } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {/* TODO: Add selectedColor funcionality */}
          <Field name='COLORS' component={ManaSymbolBar} selectedColor={colors} />
          <Field name='COLOR_IDENTITY' component={ManaSymbolBar} selectedColor={colorsIdentity} />
          <Field name='CARD_NAME' component={TextInputForm} />
          <Field name='CARD_TEXT' component={TextInputForm} />
          <Field name='FLAVOR_TEXT' component={TextInputForm} />
          {this.renderTwoColumnsLine(
            <Field name='TYPE' component={DropdownInputForm} dropdownItems={types} selectedValue={type} />,
            <Field name='SUB_TYPE' component={DropdownInputForm} dropdownItems={subTypes} selectedValue={subType} />
          )}
          {this.renderTwoColumnsLine(
            <Field name='ARTIST' component={TextInputForm} />,
            <Field name='COLLECTION_NUMBER' component={TextInputForm} keyboardType={'numeric'} maxLength={3} />
          )}
          {this.renderThreeColumnsLine(
            <Field name='POWER' component={NumericInputForm} />,
            <Field name='TOUGHNESS' component={NumericInputForm} />,
            <Field name='CMC' component={NumericInputForm} />
          )}
          {/* TODO: Implement Modal */}
          {this.renderThreeColumnsLine(
            <ModalToggle label='RARITY' onPress={this.showModal('RARITY')} selected={rarity} />,
            <ModalToggle label='SET' onPress={this.showModal('SET')} selected={set} />,
            <ModalToggle label='FORMAT' onPress={this.showModal('FORMAT')} selected={format} />
          )}
        </View>
        <View style={styles.containerFooter} />
        {this.renderModal()}
      </View>
    )
  }
}
