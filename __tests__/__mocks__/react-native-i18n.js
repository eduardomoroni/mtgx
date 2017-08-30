let I18n = jest.genMockFromModule('react-native-i18n')

I18n.t = jest.fn(text => `I18n.t(${text})`)
I18n.currentLocale = jest.fn(() => 'en')

module.exports = I18n
