import React from 'react'
import { shallow } from 'enzyme'
import Modal from 'react-native-modal'
import { Field } from 'redux-form/immutable'
import { Button } from 'nachos-ui'
import { CardSearchScreen, cardSearchModals } from '../../../../../../src/modules/cardSearch/components/cardSearchScreen'

const mockedForm = {}
const props = {
  sets: ['set'],
  types: ['type'],
  formats: ['format'],
  rarities: ['rarity'],
  subTypes: ['subType'],
  submitCardSearchForm: jest.fn(() => Promise.resolve()),
  handleSubmit: jest.fn(callback => callback(mockedForm)),
  navigator: {
    push: jest.fn()
  }
}

describe('<CardSearchScreen />', () => {
  const wrapper = shallow(<CardSearchScreen {...props} />)
  const modalId = 'RARITY'

  beforeEach(() => {
    jest.clearAllMocks()
  })

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

  it('should search for cards and navigate to cards.results screen', async () => {
    const button = wrapper.find(Button)
    await button.simulate('press')

    expect(props.submitCardSearchForm).toHaveBeenCalledWith(mockedForm)
    expect(props.navigator.push).toHaveBeenCalledWith({screen: 'card.results'})
  })

  it('should not navigate in case of exception during card search', async () => {
    const mockError = jest.fn(() => Promise.reject(new Error('TEST ERROR - JUST IGNORE')))
    const wrapper = shallow(<CardSearchScreen {...props} submitCardSearchForm={mockError} />)

    await wrapper.find(Button).simulate('press')
    expect(props.navigator.push).toHaveBeenCalledTimes(0)
  })
})
