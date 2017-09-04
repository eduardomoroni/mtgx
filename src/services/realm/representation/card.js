// @flow

import PropTypes from 'prop-types'

const legalitiesType = PropTypes.shape({
  format: PropTypes.string.isRequired,
  legality: PropTypes.string.isRequired
})

const superTypesType = PropTypes.shape({
  superType: PropTypes.string.isRequired
})

export const rulingsType = PropTypes.objectOf(
  PropTypes.shape({
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
)

const foreignNameType = PropTypes.shape({
  language: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  multiverseid: PropTypes.number.isRequired
})

export const printingsType = PropTypes.shape({
  printing: PropTypes.string.isRequired
})

const colorIdentityType = PropTypes.shape({
  colorIdentity: PropTypes.string.isRequired
})

const colorsType = PropTypes.shape({
  color: PropTypes.string.isRequired
})

const subtypesType = PropTypes.shape({
  subType: PropTypes.string.isRequired
})

const typesType = PropTypes.shape({
  type: PropTypes.string.isRequired
})

export const cardType = PropTypes.shape({
  multiverseid: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cmc: PropTypes.number,
  power: PropTypes.number,
  toughness: PropTypes.number,
  imageName: PropTypes.string,
  layout: PropTypes.string,
  manaCost: PropTypes.string,
  originalText: PropTypes.string,
  originalType: PropTypes.string,
  flavor: PropTypes.string,
  text: PropTypes.string,
  types: PropTypes.objectOf(typesType),
  subtypes: PropTypes.objectOf(subtypesType),
  colors: PropTypes.objectOf(colorsType),
  colorIdentity: PropTypes.objectOf(colorIdentityType),
  printings: PropTypes.objectOf(printingsType),
  foreignNames: PropTypes.objectOf(foreignNameType),
  rulings: rulingsType,
  superTypes: PropTypes.objectOf(superTypesType),
  legalities: PropTypes.objectOf(legalitiesType)
})
