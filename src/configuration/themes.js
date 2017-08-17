import { themeManager } from 'nachos-ui'

const buttonTheme = themeManager.getStyle('Button')

const newButtonTheme = {
  ...buttonTheme,
  BUTTON_ROUNDED_RADIUS: 10,
  BUTTON_ROUNDED_HEIGHT: 30
}

export function setNachosThemes () {
  themeManager.setSource('Button', () => (newButtonTheme))
}
