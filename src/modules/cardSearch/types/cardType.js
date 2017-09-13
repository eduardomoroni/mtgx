// @flow

import { string, shape, number, objectOf } from 'prop-types'

const legalitiesType = shape({
  format: string.isRequired,
  legality: string.isRequired
})

const superTypesType = shape({
  superType: string.isRequired
})

export const rulingsType = objectOf(
  shape({
    date: string.isRequired,
    text: string.isRequired
  })
)

const foreignNameType = shape({
  language: string.isRequired,
  name: string.isRequired,
  multiverseid: number.isRequired
})

export const printingsType = shape({
  printing: string.isRequired
})

const colorIdentityType = shape({
  colorIdentity: string.isRequired
})

const colorsType = shape({
  color: string.isRequired
})

const subtypesType = shape({
  subType: string.isRequired
})

const typesType = shape({
  type: string.isRequired
})

export const cardType = shape({
  multiverseid: number.isRequired,
  artist: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  number: string.isRequired,
  rarity: string.isRequired,
  type: string.isRequired,
  cmc: number,
  power: string,
  toughness: string,
  imageName: string,
  layout: string,
  manaCost: string,
  originalText: string,
  originalType: string,
  flavor: string,
  text: string,
  types: objectOf(typesType),
  subtypes: objectOf(subtypesType),
  colors: objectOf(colorsType),
  colorIdentity: objectOf(colorIdentityType),
  printings: objectOf(printingsType),
  foreignNames: objectOf(foreignNameType),
  rulings: rulingsType,
  superTypes: objectOf(superTypesType),
  legalities: objectOf(legalitiesType)
})
