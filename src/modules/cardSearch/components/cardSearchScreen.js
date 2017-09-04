// @flow

import React, { Component } from 'react'
import { string, arrayOf, func } from 'prop-types'
import { View, Keyboard } from 'react-native'
import { ManaSymbolBar } from './manaSymbolBar'
import { Field } from 'redux-form/immutable'
import { Button } from 'nachos-ui'
import Modal from 'react-native-modal'
import I18n from 'react-native-i18n'
import { Map } from 'immutable'

import {
  TextInputForm,
  ModalToggle,
  // $FlowFixMe
  DropdownInputForm,
  // $FlowFixMe
  NumericInputForm,
  // $FlowFixMe
  MultiSelect
} from '../../form/components'

import { styles } from './styles/cardSearch.styles'

export const cardSearchModals = {
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
    colors: arrayOf(string),
    colorsIdentity: arrayOf(string),
    sets: arrayOf(string).isRequired,
    types: arrayOf(string).isRequired,
    formats: arrayOf(string).isRequired,
    rarities: arrayOf(string).isRequired,
    subTypes: arrayOf(string).isRequired,
    handleSubmit: func.isRequired,
    submitCardSearchForm: func.isRequired
  }

  state = { visibleModal: '' }
  showModal = (modalId: string) => () => this.setState({ visibleModal: cardSearchModals[modalId] })
  hideModal = () => this.setState({ visibleModal: '' })

  openModal = (fieldName: string, items: Array<string>) => {
    // TODO: wix/react-native-navigation has built-in Modal, Why are we using an external one?
    const { hideModal } = this
    return (
      <Modal onModalHide={hideModal} onBackdropPress={hideModal} onBackButtonPress={hideModal} isVisible >
        <Field name={fieldName} component={MultiSelect} items={items} />
        <Button kind='squared' type='success' onPress={hideModal} >
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

    return null
  }

  renderThreeColumnsLine = (leftColumn, middleColumn, rightColumn) => {
    return (
      <View style={styles.multipleFieldsPerLine}>
        <View style={styles.leftField}>{ leftColumn }</View>
        <View style={styles.middleField}>{ middleColumn }</View>
        <View style={styles.rightField}>{ rightColumn }</View>
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

  onSubmit = (formFields: Map) => {
    Keyboard.dismiss()
    this.props.submitCardSearchForm(formFields)
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
      colorsIdentity,
      handleSubmit
    } = this.props

    const {
      showModal,
      renderTwoColumnsLine,
      renderThreeColumnsLine,
      onSubmit
    } = this

    return (
      <View style={styles.container}>
        {this.renderModal()}
        <View style={styles.formContainer}>
          <Field name='CARD_NAME' component={TextInputForm} />
          <Field name='CARD_TEXT' component={TextInputForm} />
          {renderTwoColumnsLine(
            <Field name='TYPE' component={DropdownInputForm} dropdownItems={types} selectedValue={type} />,
            <Field name='SUB_TYPE' component={DropdownInputForm} dropdownItems={subTypes} selectedValue={subType} />
          )}
          {renderThreeColumnsLine(
            <Field name='POWER' component={NumericInputForm} />,
            <Field name='TOUGHNESS' component={NumericInputForm} />,
            <Field name='CMC' component={NumericInputForm} />
          )}
          <Field name='COLORS' component={ManaSymbolBar} selectedColor={colors} />
          {/* TODO: render an horizontal divider */}
          <Field name='FLAVOR_TEXT' component={TextInputForm} />
          {renderTwoColumnsLine(
            <Field name='ARTIST' component={TextInputForm} />,
            <Field name='COLLECTION_NUMBER' component={TextInputForm} keyboardType={'numeric'} maxLength={3} />
          )}
          {renderThreeColumnsLine(
            <ModalToggle label='RARITY' onPress={showModal('RARITY')} selected={rarity} />,
            <ModalToggle label='SET' onPress={showModal('SET')} selected={set} />,
            <ModalToggle label='FORMAT' onPress={showModal('FORMAT')} selected={format} />
          )}
          <Field name='COLOR_IDENTITY' component={ManaSymbolBar} selectedColor={colorsIdentity} />
        </View>
        <View style={styles.containerFooter}>
          <Button kind='squared' iconName='ios-search' onPress={handleSubmit(onSubmit)} >
            {I18n.t('SEARCH')}
          </Button>
        </View>
      </View>
    )
  }
}
