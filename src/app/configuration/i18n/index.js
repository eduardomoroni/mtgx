// @flow

import I18n from 'react-native-i18n'
import English from './languages/english.json'
import Portugues from './languages/portugues.json'
import Espanol from './languages/espanol.json'

export function initLocales() {
  I18n.fallbacks = true

  I18n.translations = {
    en: English,
    pt: Portugues,
    es: Espanol
  }

  I18n.defaultLocale = 'en'
}
