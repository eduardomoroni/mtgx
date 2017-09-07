import React from 'react'
import { shallow } from 'enzyme'
import { Card, getLastPrinting } from '../../../../../../src/modules/cardSearch/components/card'
import * as Conversion from '../../../../../../src/services/realm/conversion/placeholder'

const props = {
  showCardText: true,
  card: {
    name: 'CardName',
    text: 'CardText',
    manaCost: '{1}{W}{B}',
    type: 'CardType',
    power: 2,
    artist: 'EduardoMoroni',
    id: 'id',
    number: 123,
    rarity: 'Common',
    multiverseid: 12903,
    toughness: 4,
    printings: { '0': { printing: 'AER' }, '1': { printing: 'AST' } }
  }
}

const hasKey = key => {
  return n => n.key() === key
}

const findRenderedTextFromKey = (wrapper, key) => {
  return wrapper.findWhere(hasKey(key)).childAt(0).text()
}

describe('<Card />', () => {
  const {
    name,
    manaCost,
    type,
    text,
    power,
    toughness,
    printings
  } = props.card
  Conversion.placeholdersToSymbols = jest.fn(text => `placeholdersToSymbols(${text})`)
  const wrapper = shallow(<Card {...props} />)

  it('should render a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Card component', () => {
    expect(findRenderedTextFromKey(wrapper, 'cardName')).toEqual(name)
    expect(findRenderedTextFromKey(wrapper, 'cardManaCost')).toEqual(Conversion.placeholdersToSymbols(manaCost))
    expect(findRenderedTextFromKey(wrapper, 'cardType')).toEqual(type)
    expect(findRenderedTextFromKey(wrapper, 'cardEdition')).toEqual(getLastPrinting(printings))
    expect(findRenderedTextFromKey(wrapper, 'cardText')).toEqual(text)
    expect(findRenderedTextFromKey(wrapper, 'cardPowerAndToughness')).toEqual(`${power}/${toughness}`)
    expect(Conversion.placeholdersToSymbols).toHaveBeenCalledWith(props.card.manaCost)
  })

  it('should hide card text', () => {
    const wrapper = shallow(<Card {...props} showCardText={false} />)
    expect(findRenderedTextFromKey(wrapper, 'cardText')).toEqual('')

    wrapper.setProps({...props, showCardText: true})
    expect(findRenderedTextFromKey(wrapper, 'cardText')).toEqual(props.card.text)
  })

  it('should show only the lastest printing as cardEdition', () => {
    const printExamples = { '0': { printing: 'STH' }, '1': { printing: 'TPR' }, '2': { printing: 'EXP' } }
    const wrapper = shallow(<Card card={{...props.card, printings: printExamples}} />)
    expect(findRenderedTextFromKey(wrapper, 'cardEdition')).toEqual('EXP')
  })
  it('should extract last printing from realm representation', () => {
    const realmRepresentation = { '0': { printing: 'STH' }, '1': { printing: 'TPR' }, '2': { printing: 'AER' } }
    expect(getLastPrinting(realmRepresentation)).toEqual('AER')
  })
})
