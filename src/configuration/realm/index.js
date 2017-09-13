// @flow

import { changeRealm, isEmpty } from '../../services/realm/core'
import { importAllSets } from '../../services/mtgJSON'
import _ from 'lodash'
import * as schemas from './schemas'

const path = 'MTG-BD-TEST-NEW.realm'
export const schema = _.flatMap(schemas)

export const defaultConfig = { schema, path }

export const initRealm = () => {
  changeRealm()

  if (isEmpty()) {
    // TODO: show a spinner during import
    importAllSets()
  }
}
