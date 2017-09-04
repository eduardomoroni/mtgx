import React from 'react'
import { shallow } from 'enzyme'
import { CardSearchScreen, cardSearchModals } from '../../../../../../src/modules/cardSearch/components/cardSearchScreen'
import Modal from 'react-native-modal'
import { Field } from 'redux-form/immutable'

const props = {
  sets: ['set'],
  types: ['type'],
  formats: ['format'],
  rarities: ['rarity'],
  subTypes: ['subType'],
  handleSubmit: jest.fn(),
  submitCardSearchForm: jest.fn()
}

describe('<CardSearchScreen />', () => {
  const wrapper = shallow(<CardSearchScreen {...props} />)
  const modalId = 'RARITY'

  it('should have a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should show search modal', () => {
    wrapper.setState({ visibleModal: cardSearchModals[modalId] })
    const modal = wrapper.find(Modal)

    expect(modal.exists()).toBe(true)
    expect(modal.find(Field).prop('name')).toEqual(modalId)
  })

  it('should toggle visible modal', () => {
    const { showModal, hideModal } = wrapper.instance()

    showModal(modalId)()
    expect(wrapper.state('visibleModal')).toEqual(cardSearchModals[modalId])

    hideModal()
    expect(wrapper.state('visibleModal')).toEqual('')
  })

  it('should search for cards on button press', () => {
    // TBD
  })
})
