// @flow

import _ from 'lodash'
import * as schemas from './schemas'

const path = 'MTG-BD.realm'
const schema = _.flatMap(schemas)

export const defaultConfig = { schema, path }
