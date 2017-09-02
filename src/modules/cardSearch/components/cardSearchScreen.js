import React, { Component } from 'react'
import { string, arrayOf, func } from 'prop-types'
import { View } from 'react-native'
import { ManaSymbolBar } from './manaSymbolBar'
import { Field } from 'redux-form/immutable'
import Modal from 'react-native-modal'

import {
  TextInputForm,
  NumericInputForm,
  DropdownInputForm,
  ModalToggle,
  MultiSelect
} from '../../form/components'

import { styles } from './styles/cardSearch.styles'

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
    colorsIdentity: arrayOf(string),
    showModal: func
  }

  openModal = (fieldName, items) => {
    // TODO: wix/react-native-navigation has built-in Modal, Why are we using an external one?
    return (
      <Modal isVisible onModalHide={() => this.props.showModal('')} >
        <Field name={fieldName} component={MultiSelect} items={items} />
      </Modal>
    )
  }

  switchModals = () => {
    const { visibleModal, formats, sets, rarities } = this.props

    switch (visibleModal) {
      case 'cardRarity':
        return this.openModal('cardRarity', rarities)
      case 'cardSet':
        return this.openModal('cardSet', sets)
      case 'cardFormat':
        return this.openModal('cardFormat', formats)
      default:
        return <View />
    }
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
      showModal,
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
            <ModalToggle label='RARITY' onPress={() => showModal} selected={rarity} />,
            <ModalToggle label='SET' onPress={() => showModal} selected={set} />,
            <ModalToggle label='FORMAT' onPress={() => showModal} selected={format} />
          )}
        </View>
        <View style={styles.containerFooter} />
        {this.switchModals()}
      </View>
    )
  }
}
