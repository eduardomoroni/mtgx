// @flow

export const placeholdersToSymbols = (cardText) => {
  const curlyBracesRegex = /[{}]+/
  return (cardText || '').split(curlyBracesRegex)
    .map(a => convertionMap[a] || a)
    .join('')
}

function unicodeChar (value) {
  return String.fromCharCode(parseInt(value, 16))
}

// https://andrewgioia.github.io/Mana/cheatsheet.html
const convertionMap = {
  'W': 'e600',
  'U': 'e601',
  'B': 'e602',
  'R': 'e603',
  'G': 'e604',
  'C': 'e904',
  '0': 'e605',
  '1': 'e606',
  '2': 'e607',
  '3': 'e608',
  '4': 'e609',
  '5': 'e60a',
  '6': 'e60b',
  '7': 'e60c',
  '8': 'e60d',
  '9': 'e60e',
  '10': 'e60F',
  '11': 'e610',
  '12': 'e611',
  '13': 'e612',
  '14': 'e613',
  '15': 'e614',
  '16': 'e62a',
  '17': 'e62b',
  '18': 'e62c',
  '19': 'e62d',
  '20': 'e62e',
  'X': 'e615',
  'Y': 'e616',
  'Z': 'e617',
  'P': 'e618',
  'S': 'e619',
  'E': 'e907'
}

// Converting convertionMap to encoded char
Object.keys(convertionMap).forEach(key => {
  convertionMap[key] = unicodeChar(convertionMap[key])
})
